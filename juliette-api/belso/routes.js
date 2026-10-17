import argon2 from 'argon2'
import { randomUUID } from 'node:crypto'
import { Router } from 'express'
import {
  belsoFelhasznaloKotelezo,
  csrfEllenorzes,
  csrfTokenBiztosit,
  loginRateLimit,
  CSRF_HEADER,
} from './middleware.js'
import {
  jelszoErvenyes,
  loginBodyElokeszites,
  loginSchema,
  profilePatchSchema,
} from './validation.js'

const GENERIC_LOGIN_ERROR =
  'Hibás e-mail-cím vagy jelszó. Ellenőrizze az adatokat, majd próbálja újra.'

function mostIso() {
  return new Date().toISOString()
}

function felhasznaloLekerdezese(db, userId) {
  return db
    .prepare(
      `SELECT id, email, role, is_active, created_at, updated_at FROM users WHERE id = ?`,
    )
    .get(userId)
}

function profilLekerdezese(db, userId) {
  return db
    .prepare(`SELECT * FROM user_profiles WHERE user_id = ?`)
    .get(userId)
}

function profilVagyUres(db, userId, email) {
  const meglévő = profilLekerdezese(db, userId)
  if (meglévő) {
    return meglévő
  }
  const id = randomUUID()
  const now = mostIso()
  db.prepare(
    `INSERT INTO user_profiles (
      id, user_id, first_name, last_name, phone, birth_date,
      country, postal_code, city, street_address, created_at, updated_at
    ) VALUES (?, ?, '', '', '', NULL, '', '', '', '', ?, ?)`,
  ).run(id, userId, now, now)
  return profilLekerdezese(db, userId)
}

function profilValasz(user, profil) {
  return {
    email: user.email,
    role: user.role,
    profile: {
      firstName: profil.first_name,
      lastName: profil.last_name,
      phone: profil.phone,
      birthDate: profil.birth_date || null,
      country: profil.country,
      postalCode: profil.postal_code,
      city: profil.city,
      streetAddress: profil.street_address,
      updatedAt: profil.updated_at,
    },
  }
}

/**
 * Belső felhasználói auth és profil route-ok.
 */
export function belsoRouterLetrehozasa(db, { naplozas }) {
  const router = Router()

  router.get('/auth/csrf', (req, res) => {
    const token = csrfTokenBiztosit(req, res)
    res.json({ csrfToken: token, headerName: CSRF_HEADER })
  })

  router.get('/auth/me', (req, res) => {
    const userId = req.session?.belsoUserId
    if (!userId) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const user = felhasznaloLekerdezese(db, userId)
    if (!user || !user.is_active) {
      req.session.destroy(() => {})
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const profil = profilVagyUres(db, user.id, user.email)
    res.json(profilValasz(user, profil))
  })

  router.post('/auth/login', loginRateLimit, csrfEllenorzes, async (req, res) => {
    const parsed = loginSchema.safeParse(loginBodyElokeszites(req.body))
    if (!parsed.success) {
      res.status(400).json({ hiba: GENERIC_LOGIN_ERROR })
      return
    }
    const { email, password } = parsed.data
    const user = db
      .prepare(`SELECT * FROM users WHERE email = ? COLLATE NOCASE`)
      .get(email)

    let jelszoJo = false
    if (user?.is_active && user.password_hash) {
      try {
        jelszoJo = await argon2.verify(user.password_hash, password)
      } catch {
        jelszoJo = false
      }
    }

    if (!jelszoJo) {
      if (naplozas) {
        naplozas(req, {
          kategoria: 'belso_auth',
          esemeny: 'bejelentkezes_sikertelen',
          uzenet: 'Sikertelen belső bejelentkezés.',
          adat: {},
        })
      }
      res.status(401).json({ hiba: GENERIC_LOGIN_ERROR })
      return
    }

    const regen = () =>
      new Promise((resolve, reject) => {
        req.session.regenerate((err) => (err ? reject(err) : resolve()))
      })

    try {
      await regen()
      req.session.belsoUserId = user.id
      csrfTokenBiztosit(req, res)
      if (naplozas) {
        naplozas(req, {
          kategoria: 'belso_auth',
          esemeny: 'bejelentkezes_siker',
          uzenet: 'Sikeres belső bejelentkezés.',
          felhasznalo: user.id,
          adat: { role: user.role },
        })
      }
      const profil = profilVagyUres(db, user.id, user.email)
      res.json(profilValasz(user, profil))
    } catch {
      res.status(500).json({ hiba: 'A bejelentkezés sikertelen. Próbálja újra.' })
    }
  })

  router.post('/auth/logout', csrfEllenorzes, (req, res) => {
    const userId = req.session?.belsoUserId
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ hiba: 'Kijelentkezés sikertelen.' })
        return
      }
      res.clearCookie('jl.sid', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
      if (naplozas && userId) {
        naplozas(req, {
          kategoria: 'belso_auth',
          esemeny: 'kijelentkezes',
          uzenet: 'Belső kijelentkezés.',
          felhasznalo: userId,
          adat: {},
        })
      }
      res.json({ ok: true })
    })
  })

  router.get('/profile/me', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const profil = profilVagyUres(db, user.id, user.email)
    res.json(profilValasz(user, profil))
  })

  router.patch('/profile/me', belsoFelhasznaloKotelezo, csrfEllenorzes, (req, res) => {
    const parsed = profilePatchSchema.safeParse(req.body)
    if (!parsed.success) {
      res.status(400).json({
        hiba: 'Érvénytelen adatok.',
        mezok: parsed.error.flatten().fieldErrors,
      })
      return
    }
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const profil = profilVagyUres(db, user.id, user.email)
    const patch = parsed.data
    const next = {
      first_name:
        patch.firstName !== undefined ? patch.firstName : profil.first_name,
      last_name: patch.lastName !== undefined ? patch.lastName : profil.last_name,
      phone: patch.phone !== undefined ? patch.phone : profil.phone,
      birth_date:
        patch.birthDate === ''
          ? null
          : patch.birthDate !== undefined
            ? patch.birthDate
            : profil.birth_date,
      country: patch.country !== undefined ? patch.country : profil.country,
      postal_code:
        patch.postalCode !== undefined ? patch.postalCode : profil.postal_code,
      city: patch.city !== undefined ? patch.city : profil.city,
      street_address:
        patch.streetAddress !== undefined
          ? patch.streetAddress
          : profil.street_address,
      updated_at: mostIso(),
    }

    db.prepare(
      `UPDATE user_profiles SET
        first_name = ?, last_name = ?, phone = ?, birth_date = ?,
        country = ?, postal_code = ?, city = ?, street_address = ?, updated_at = ?
      WHERE user_id = ?`,
    ).run(
      next.first_name,
      next.last_name,
      next.phone,
      next.birth_date,
      next.country,
      next.postal_code,
      next.city,
      next.street_address,
      next.updated_at,
      user.id,
    )

    const friss = profilLekerdezese(db, user.id)
    res.json(profilValasz(user, friss))
  })

  return router
}

export { jelszoErvenyes }
