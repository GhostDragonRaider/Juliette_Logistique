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
  elvegzettMunkaSchema,
  chatUzenetSchema,
  chatSzobaSchema,
  chatSzobaTagokSchema,
  chatPrivatNyitasSchema,
  aktualisKikuldesSchema,
  aktualisAllapotSchema,
} from './validation.js'
import { elvegzettMunkaPdfBuffer } from './elvegzettPdf.js'
import { demoAktualisMunka } from './demoMunka.js'
import { ertesitesHangBufferElkeszit } from './ertesitesHang.js'

const CHAT_ONLINE_MASODPERC = 45

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
    id: user.id,
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

  function elvegzettSorValasz(sor) {
    let payload = {}
    try {
      payload = JSON.parse(sor.payload)
    } catch {
      payload = {}
    }
    return {
      id: sor.id,
      munkaAzonosito: sor.munka_azonosito,
      kliensUserId: sor.kliens_user_id,
      cimzettEmail: sor.cimzett_email,
      cimzettNev: sor.cimzett_nev,
      completedAt: sor.completed_at,
      createdAt: sor.created_at,
      payload,
    }
  }

  router.post(
    '/munkak/elvegzett',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      if (user.role !== 'KLIENS') {
        res.status(403).json({ hiba: 'Csak kliens zárhat le munkát.' })
        return
      }
      const parsed = elvegzettMunkaSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({
          hiba: 'Érvénytelen munkaadat.',
          mezok: parsed.error.flatten().fieldErrors,
        })
        return
      }
      const profil = profilVagyUres(db, user.id, user.email)
      const nev = [profil.first_name, profil.last_name]
        .filter(Boolean)
        .join(' ')
        .trim()
      const id = randomUUID()
      const now = mostIso()
      const munkaAzonosito = parsed.data.munka.azonosito
      db.prepare(
        `INSERT INTO elvegzett_munkak (
          id, munka_azonosito, kliens_user_id, cimzett_email, cimzett_nev,
          payload, completed_at, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        munkaAzonosito,
        user.id,
        user.email,
        nev,
        JSON.stringify(parsed.data),
        now,
        now,
      )
      db.prepare(
        `UPDATE aktualis_munkak SET allapot = 'kiszallitva'
         WHERE kliens_user_id = ? AND munka_azonosito = ?`,
      ).run(user.id, munkaAzonosito)
      db.prepare(
        `DELETE FROM aktualis_munkak
         WHERE kliens_user_id = ? AND munka_azonosito = ?`,
      ).run(user.id, munkaAzonosito)
      if (naplozas) {
        naplozas(req, {
          kategoria: 'belso_munka',
          esemeny: 'munka_elvegzett',
          uzenet: 'Átvezetés lezárva leadással.',
          felhasznalo: user.id,
          adat: { munkaAzonosito, rekordId: id },
        })
      }
      const sor = db
        .prepare(`SELECT * FROM elvegzett_munkak WHERE id = ?`)
        .get(id)
      res.status(201).json(elvegzettSorValasz(sor))
    },
  )

  router.get('/munkak/elvegzett', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const sorok =
      user.role === 'ADMIN'
        ? db
            .prepare(
              `SELECT * FROM elvegzett_munkak ORDER BY completed_at DESC`,
            )
            .all()
        : db
            .prepare(
              `SELECT * FROM elvegzett_munkak
               WHERE kliens_user_id = ?
               ORDER BY completed_at DESC`,
            )
            .all(user.id)
    res.json({ munkak: sorok.map(elvegzettSorValasz) })
  })

  router.get(
    '/munkak/elvegzett/:id/pdf',
    belsoFelhasznaloKotelezo,
    async (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const sor = db
        .prepare(`SELECT * FROM elvegzett_munkak WHERE id = ?`)
        .get(req.params.id)
      if (!sor) {
        res.status(404).json({ hiba: 'A munka nem található.' })
        return
      }
      if (user.role !== 'ADMIN' && sor.kliens_user_id !== user.id) {
        res.status(403).json({ hiba: 'Nincs jogosultság.' })
        return
      }
      try {
        const buffer = await elvegzettMunkaPdfBuffer(sor)
        const fajlnev = `jelentes-${sor.munka_azonosito || sor.id}.pdf`
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader(
          'Content-Disposition',
          `attachment; filename="${fajlnev}"`,
        )
        res.send(buffer)
      } catch {
        res.status(500).json({ hiba: 'A PDF generálása sikertelen.' })
      }
    },
  )

  function chatMegjelenitoNev(user, profil) {
    const teljes = [profil?.first_name, profil?.last_name]
      .map((resz) => String(resz || '').trim())
      .filter(Boolean)
      .join(' ')
    if (teljes) {
      return teljes
    }
    const email = String(user.email || '').toLowerCase()
    if (email === 'teszt@teszt.local') {
      return 'teszt'
    }
    if (email === 'admin@juliette.local') {
      return 'admin'
    }
    return user.email
  }

  function chatUzenetValasz(sor) {
    return {
      id: sor.id,
      userId: sor.user_id,
      nev: sor.display_name,
      email: sor.email,
      role: sor.role,
      szoveg: sor.szoveg,
      createdAt: sor.created_at,
      szobaId: sor.szoba_id || null,
    }
  }

  function chatFelhasznaloLista(kiveveUserId) {
    return db
      .prepare(
        `SELECT u.id, u.email, u.role,
                COALESCE(p.first_name, '') AS first_name,
                COALESCE(p.last_name, '') AS last_name
         FROM users u
         LEFT JOIN user_profiles p ON p.user_id = u.id
         WHERE u.is_active = 1
         ORDER BY p.last_name COLLATE NOCASE, p.first_name COLLATE NOCASE, u.email COLLATE NOCASE`,
      )
      .all()
      .filter((sor) => sor.id !== kiveveUserId)
      .map((sor) => ({
        id: sor.id,
        email: sor.email,
        role: sor.role,
        firstName: sor.first_name,
        lastName: sor.last_name,
        nev: chatMegjelenitoNev(
          { email: sor.email, role: sor.role },
          { first_name: sor.first_name, last_name: sor.last_name },
        ),
      }))
  }

  function chatSzobaTagja(szobaId, userId) {
    return Boolean(
      db
        .prepare(
          `SELECT 1 FROM chat_szoba_tagok WHERE szoba_id = ? AND user_id = ?`,
        )
        .get(szobaId, userId),
    )
  }

  function chatSzobaValasz(szoba, userId) {
    const tagok = db
      .prepare(
        `SELECT u.id, u.email, u.role,
                COALESCE(p.first_name, '') AS first_name,
                COALESCE(p.last_name, '') AS last_name
         FROM chat_szoba_tagok t
         JOIN users u ON u.id = t.user_id
         LEFT JOIN user_profiles p ON p.user_id = u.id
         WHERE t.szoba_id = ?
         ORDER BY p.last_name COLLATE NOCASE, u.email COLLATE NOCASE`,
      )
      .all(szoba.id)
      .map((sor) => ({
        id: sor.id,
        email: sor.email,
        role: sor.role,
        nev: chatMegjelenitoNev(
          { email: sor.email, role: sor.role },
          { first_name: sor.first_name, last_name: sor.last_name },
        ),
      }))
    return {
      id: szoba.id,
      nev: szoba.nev,
      createdBy: szoba.created_by,
      createdAt: szoba.created_at,
      tagok,
      enTagVagyok: tagok.some((t) => t.id === userId),
    }
  }

  function chatPrivatPar(userId, masikId) {
    return userId < masikId ? [userId, masikId] : [masikId, userId]
  }

  function chatPrivatResztvevo(privat, userId) {
    return privat.user_a === userId || privat.user_b === userId
  }

  function chatPrivatMasikId(privat, userId) {
    return privat.user_a === userId ? privat.user_b : privat.user_a
  }

  function chatPrivatValasz(privat, userId) {
    const masikId = chatPrivatMasikId(privat, userId)
    const masik = felhasznaloLekerdezese(db, masikId)
    const profil = masik ? profilVagyUres(db, masik.id, masik.email) : null
    const utolso = db
      .prepare(
        `SELECT id, user_id, szoveg, created_at FROM chat_privat_uzenetek
         WHERE privat_id = ?
         ORDER BY created_at DESC, id DESC LIMIT 1`,
      )
      .get(privat.id)
    const olvasva = db
      .prepare(
        `SELECT last_read_at FROM chat_privat_olvasva
         WHERE privat_id = ? AND user_id = ?`,
      )
      .get(privat.id, userId)
    let olvasatlan = 0
    if (utolso) {
      const hatar = olvasva?.last_read_at || ''
      olvasatlan = db
        .prepare(
          `SELECT COUNT(*) AS db FROM chat_privat_uzenetek
           WHERE privat_id = ? AND user_id != ? AND created_at > ?`,
        )
        .get(privat.id, userId, hatar).db
    }
    return {
      id: privat.id,
      createdAt: privat.created_at,
      partner: masik
        ? {
            id: masik.id,
            email: masik.email,
            role: masik.role,
            nev: chatMegjelenitoNev(masik, profil),
          }
        : { id: masikId, email: '', role: '', nev: 'Ismeretlen' },
      utolsoUzenet: utolso
        ? {
            id: utolso.id,
            userId: utolso.user_id,
            szoveg: utolso.szoveg,
            createdAt: utolso.created_at,
          }
        : null,
      olvasatlan,
    }
  }

  function chatJelenletFrissit(user) {
    const profil = profilVagyUres(db, user.id, user.email)
    const nev = chatMegjelenitoNev(user, profil)
    const now = mostIso()
    db.prepare(
      `INSERT INTO chat_jelenlet (user_id, display_name, last_seen)
       VALUES (?, ?, ?)
       ON CONFLICT(user_id) DO UPDATE SET
         display_name = excluded.display_name,
         last_seen = excluded.last_seen`,
    ).run(user.id, nev, now)
    return { userId: user.id, nev, email: user.email, role: user.role }
  }

  function chatOnlineLista() {
    const hatar = new Date(
      Date.now() - CHAT_ONLINE_MASODPERC * 1000,
    ).toISOString()
    return db
      .prepare(
        `SELECT j.user_id AS user_id, j.display_name AS display_name,
                u.email AS email, u.role AS role
         FROM chat_jelenlet j
         JOIN users u ON u.id = j.user_id
         WHERE j.last_seen >= ? AND u.is_active = 1
         ORDER BY j.display_name COLLATE NOCASE, u.email COLLATE NOCASE`,
      )
      .all(hatar)
      .map((sor) => ({
        userId: sor.user_id,
        nev: sor.display_name,
        email: sor.email,
        role: sor.role,
      }))
  }

  router.post(
    '/chat/jelenlet',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      chatJelenletFrissit(user)
      res.json({ online: chatOnlineLista() })
    },
  )

  router.get('/chat/online', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    chatJelenletFrissit(user)
    res.json({ online: chatOnlineLista() })
  })

  router.get('/chat/uzenetek', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    chatJelenletFrissit(user)
    const szobaId = String(req.query.szobaId || '').trim() || null
    if (szobaId && !chatSzobaTagja(szobaId, user.id)) {
      res.status(403).json({ hiba: 'Nincs hozzáférés ehhez a szobához.' })
      return
    }
    const after = String(req.query.after || '').trim()
    const afterId = String(req.query.afterId || '').trim()
    const limit = Math.min(
      200,
      Math.max(1, Number(req.query.limit) || 100),
    )
    const szobaFeltetel = szobaId ? 'u.szoba_id = ?' : 'u.szoba_id IS NULL'
    const selectSql = `SELECT u.id, u.user_id, u.szoveg, u.created_at, u.szoba_id,
              us.email, us.role,
              COALESCE(j.display_name, us.email) AS display_name
       FROM chat_uzenetek u
       JOIN users us ON us.id = u.user_id
       LEFT JOIN chat_jelenlet j ON j.user_id = u.user_id
       WHERE ${szobaFeltetel}`
    const params = szobaId ? [szobaId] : []
    let sorok
    if (after && afterId) {
      sorok = db
        .prepare(
          `${selectSql}
           AND (u.created_at > ?
              OR (u.created_at = ? AND u.id > ?))
           ORDER BY u.created_at ASC, u.id ASC
           LIMIT ?`,
        )
        .all(...params, after, after, afterId, limit)
    } else if (after) {
      sorok = db
        .prepare(
          `${selectSql}
           AND u.created_at > ?
           ORDER BY u.created_at ASC, u.id ASC
           LIMIT ?`,
        )
        .all(...params, after, limit)
    } else {
      sorok = db
        .prepare(
          `${selectSql}
           ORDER BY u.created_at DESC, u.id DESC
           LIMIT ?`,
        )
        .all(...params, limit)
        .reverse()
    }
    res.json({
      uzenetek: sorok.map(chatUzenetValasz),
      online: chatOnlineLista(),
    })
  })

  router.post(
    '/chat/uzenetek',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const parsed = chatUzenetSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen üzenet.' })
        return
      }
      const szobaId = parsed.data.szobaId || null
      if (szobaId && !chatSzobaTagja(szobaId, user.id)) {
        res.status(403).json({ hiba: 'Nincs hozzáférés ehhez a szobához.' })
        return
      }
      const profil = profilVagyUres(db, user.id, user.email)
      const nev = chatMegjelenitoNev(user, profil)
      chatJelenletFrissit(user)
      const id = randomUUID()
      const now = mostIso()
      db.prepare(
        `INSERT INTO chat_uzenetek (id, user_id, szoveg, created_at, szoba_id)
         VALUES (?, ?, ?, ?, ?)`,
      ).run(id, user.id, parsed.data.szoveg, now, szobaId)
      res.status(201).json({
        uzenet: {
          id,
          userId: user.id,
          nev,
          email: user.email,
          role: user.role,
          szoveg: parsed.data.szoveg,
          createdAt: now,
          szobaId,
        },
        online: chatOnlineLista(),
      })
    },
  )

  router.get('/chat/felhasznalok', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    res.json({ felhasznalok: chatFelhasznaloLista(user.id) })
  })

  router.get('/chat/szobak', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const sorok = db
      .prepare(
        `SELECT s.id, s.nev, s.created_by, s.created_at
         FROM chat_szobak s
         JOIN chat_szoba_tagok t ON t.szoba_id = s.id
         WHERE t.user_id = ?
         ORDER BY s.nev COLLATE NOCASE`,
      )
      .all(user.id)
    res.json({
      szobak: sorok.map((s) => chatSzobaValasz(s, user.id)),
    })
  })

  router.post(
    '/chat/szobak',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const parsed = chatSzobaSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen szobaadat.' })
        return
      }
      const id = randomUUID()
      const now = mostIso()
      const tagok = new Set(parsed.data.tagUserIds)
      tagok.add(user.id)
      const insertTag = db.prepare(
        `INSERT OR IGNORE INTO chat_szoba_tagok (szoba_id, user_id) VALUES (?, ?)`,
      )
      const txn = db.transaction(() => {
        db.prepare(
          `INSERT INTO chat_szobak (id, nev, created_by, created_at)
           VALUES (?, ?, ?, ?)`,
        ).run(id, parsed.data.nev, user.id, now)
        for (const tagId of tagok) {
          const u = felhasznaloLekerdezese(db, tagId)
          if (u && u.is_active) insertTag.run(id, tagId)
        }
      })
      txn()
      const szoba = db
        .prepare(
          `SELECT id, nev, created_by, created_at FROM chat_szobak WHERE id = ?`,
        )
        .get(id)
      res.status(201).json({ szoba: chatSzobaValasz(szoba, user.id) })
    },
  )

  router.put(
    '/chat/szobak/:id/tagok',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const szoba = db
        .prepare(
          `SELECT id, nev, created_by, created_at FROM chat_szobak WHERE id = ?`,
        )
        .get(req.params.id)
      if (!szoba) {
        res.status(404).json({ hiba: 'A szoba nem található.' })
        return
      }
      if (szoba.created_by !== user.id && user.role !== 'ADMIN') {
        res.status(403).json({ hiba: 'Csak a létrehozó vagy admin állíthat tagokat.' })
        return
      }
      const parsed = chatSzobaTagokSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen taglista.' })
        return
      }
      const tagok = new Set(parsed.data.tagUserIds)
      tagok.add(szoba.created_by)
      const txn = db.transaction(() => {
        db.prepare(`DELETE FROM chat_szoba_tagok WHERE szoba_id = ?`).run(
          szoba.id,
        )
        const insertTag = db.prepare(
          `INSERT INTO chat_szoba_tagok (szoba_id, user_id) VALUES (?, ?)`,
        )
        for (const tagId of tagok) {
          const u = felhasznaloLekerdezese(db, tagId)
          if (u && u.is_active) insertTag.run(szoba.id, tagId)
        }
      })
      txn()
      res.json({ szoba: chatSzobaValasz(szoba, user.id) })
    },
  )

  router.get('/chat/privat', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const sorok = db
      .prepare(
        `SELECT p.id, p.user_a, p.user_b, p.created_at
         FROM chat_privat p
         LEFT JOIN chat_privat_rejtve r
           ON r.privat_id = p.id AND r.user_id = ?
         WHERE (p.user_a = ? OR p.user_b = ?) AND r.user_id IS NULL
         ORDER BY p.created_at DESC`,
      )
      .all(user.id, user.id, user.id)
    res.json({
      beszelgetesek: sorok.map((p) => chatPrivatValasz(p, user.id)),
    })
  })

  router.get('/chat/privat/ertesitesek', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const lista = db
      .prepare(
        `SELECT p.id, p.user_a, p.user_b, p.created_at
         FROM chat_privat p
         LEFT JOIN chat_privat_rejtve r
           ON r.privat_id = p.id AND r.user_id = ?
         WHERE (p.user_a = ? OR p.user_b = ?) AND r.user_id IS NULL`,
      )
      .all(user.id, user.id, user.id)
      .map((p) => chatPrivatValasz(p, user.id))
      .filter((b) => b.olvasatlan > 0)
    res.json({
      osszesOlvasatlan: lista.reduce((a, b) => a + b.olvasatlan, 0),
      uj: lista,
    })
  })

  router.post(
    '/chat/privat',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const parsed = chatPrivatNyitasSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen címzett.' })
        return
      }
      if (parsed.data.cimzettUserId === user.id) {
        res.status(400).json({ hiba: 'Saját magának nem nyitható privát chat.' })
        return
      }
      const cimzett = felhasznaloLekerdezese(db, parsed.data.cimzettUserId)
      if (!cimzett || !cimzett.is_active) {
        res.status(404).json({ hiba: 'A felhasználó nem található.' })
        return
      }
      const [a, b] = chatPrivatPar(user.id, cimzett.id)
      let privat = db
        .prepare(
          `SELECT id, user_a, user_b, created_at FROM chat_privat
           WHERE user_a = ? AND user_b = ?`,
        )
        .get(a, b)
      if (!privat) {
        const id = randomUUID()
        const now = mostIso()
        db.prepare(
          `INSERT INTO chat_privat (id, user_a, user_b, created_at)
           VALUES (?, ?, ?, ?)`,
        ).run(id, a, b, now)
        privat = { id, user_a: a, user_b: b, created_at: now }
      }
      db.prepare(
        `DELETE FROM chat_privat_rejtve WHERE privat_id = ? AND user_id = ?`,
      ).run(privat.id, user.id)
      res.json({ beszelgetes: chatPrivatValasz(privat, user.id) })
    },
  )

  router.get(
    '/chat/privat/:id/uzenetek',
    belsoFelhasznaloKotelezo,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const privat = db
        .prepare(
          `SELECT id, user_a, user_b, created_at FROM chat_privat WHERE id = ?`,
        )
        .get(req.params.id)
      if (!privat || !chatPrivatResztvevo(privat, user.id)) {
        res.status(404).json({ hiba: 'A beszélgetés nem található.' })
        return
      }
      const after = String(req.query.after || '').trim()
      const afterId = String(req.query.afterId || '').trim()
      const limit = Math.min(
        200,
        Math.max(1, Number(req.query.limit) || 100),
      )
      const selectSql = `SELECT u.id, u.user_id, u.szoveg, u.created_at,
                us.email, us.role,
                COALESCE(j.display_name, us.email) AS display_name
         FROM chat_privat_uzenetek u
         JOIN users us ON us.id = u.user_id
         LEFT JOIN chat_jelenlet j ON j.user_id = u.user_id
         WHERE u.privat_id = ?`
      let sorok
      if (after && afterId) {
        sorok = db
          .prepare(
            `${selectSql}
             AND (u.created_at > ? OR (u.created_at = ? AND u.id > ?))
             ORDER BY u.created_at ASC, u.id ASC LIMIT ?`,
          )
          .all(privat.id, after, after, afterId, limit)
      } else {
        sorok = db
          .prepare(
            `${selectSql}
             ORDER BY u.created_at DESC, u.id DESC LIMIT ?`,
          )
          .all(privat.id, limit)
          .reverse()
      }
      const now = mostIso()
      db.prepare(
        `INSERT INTO chat_privat_olvasva (privat_id, user_id, last_read_at)
         VALUES (?, ?, ?)
         ON CONFLICT(privat_id, user_id) DO UPDATE SET last_read_at = excluded.last_read_at`,
      ).run(privat.id, user.id, now)
      res.json({
        uzenetek: sorok.map(chatUzenetValasz),
        beszelgetes: chatPrivatValasz(privat, user.id),
      })
    },
  )

  router.post(
    '/chat/privat/:id/uzenetek',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const privat = db
        .prepare(
          `SELECT id, user_a, user_b, created_at FROM chat_privat WHERE id = ?`,
        )
        .get(req.params.id)
      if (!privat || !chatPrivatResztvevo(privat, user.id)) {
        res.status(404).json({ hiba: 'A beszélgetés nem található.' })
        return
      }
      const parsed = chatUzenetSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen üzenet.' })
        return
      }
      const masikId = chatPrivatMasikId(privat, user.id)
      db.prepare(
        `DELETE FROM chat_privat_rejtve WHERE privat_id = ? AND user_id IN (?, ?)`,
      ).run(privat.id, user.id, masikId)
      chatJelenletFrissit(user)
      const profil = profilVagyUres(db, user.id, user.email)
      const nev = chatMegjelenitoNev(user, profil)
      const id = randomUUID()
      const now = mostIso()
      db.prepare(
        `INSERT INTO chat_privat_uzenetek (id, privat_id, user_id, szoveg, created_at)
         VALUES (?, ?, ?, ?, ?)`,
      ).run(id, privat.id, user.id, parsed.data.szoveg, now)
      db.prepare(
        `INSERT INTO chat_privat_olvasva (privat_id, user_id, last_read_at)
         VALUES (?, ?, ?)
         ON CONFLICT(privat_id, user_id) DO UPDATE SET last_read_at = excluded.last_read_at`,
      ).run(privat.id, user.id, now)
      res.status(201).json({
        uzenet: {
          id,
          userId: user.id,
          nev,
          email: user.email,
          role: user.role,
          szoveg: parsed.data.szoveg,
          createdAt: now,
          szobaId: null,
        },
        beszelgetes: chatPrivatValasz(privat, user.id),
      })
    },
  )

  router.delete(
    '/chat/privat/:id',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      const privat = db
        .prepare(
          `SELECT id, user_a, user_b, created_at FROM chat_privat WHERE id = ?`,
        )
        .get(req.params.id)
      if (!privat || !chatPrivatResztvevo(privat, user.id)) {
        res.status(404).json({ hiba: 'A beszélgetés nem található.' })
        return
      }
      db.prepare(
        `INSERT OR IGNORE INTO chat_privat_rejtve (privat_id, user_id)
         VALUES (?, ?)`,
      ).run(privat.id, user.id)
      const mindketten = db
        .prepare(
          `SELECT COUNT(*) AS db FROM chat_privat_rejtve WHERE privat_id = ?`,
        )
        .get(privat.id).db
      if (mindketten >= 2) {
        db.prepare(`DELETE FROM chat_privat WHERE id = ?`).run(privat.id)
      }
      res.json({ ok: true })
    },
  )

  function aktualisSorValasz(sor) {
    let munka = null
    try {
      munka = JSON.parse(sor.payload)
    } catch {
      munka = null
    }
    return {
      id: sor.id,
      munkaAzonosito: sor.munka_azonosito,
      kliensUserId: sor.kliens_user_id,
      cimzettEmail: sor.cimzett_email,
      cimzettNev: sor.cimzett_nev,
      assignedAt: sor.assigned_at,
      createdAt: sor.created_at,
      hangLejatszva: Boolean(sor.hang_lejatszva),
      allapot: sor.allapot || 'kikuldve',
      munka,
    }
  }

  router.get('/munkak/aktualis', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    if (user.role === 'ADMIN') {
      const sorok = db
        .prepare(
          `SELECT * FROM aktualis_munkak ORDER BY assigned_at DESC`,
        )
        .all()
      res.json({
        munka: null,
        munkak: sorok.map(aktualisSorValasz),
      })
      return
    }
    const sor = db
      .prepare(`SELECT * FROM aktualis_munkak WHERE kliens_user_id = ?`)
      .get(user.id)
    res.json({
      munka: sor ? aktualisSorValasz(sor) : null,
      munkak: sor ? [aktualisSorValasz(sor)] : [],
    })
  })

  router.post(
    '/munkak/aktualis/kikuldes',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const admin = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!admin || !admin.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      if (admin.role !== 'ADMIN') {
        res.status(403).json({ hiba: 'Csak admin küldhet ki munkát.' })
        return
      }
      const parsed = aktualisKikuldesSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen kiküldési adat.' })
        return
      }
      const kliens = felhasznaloLekerdezese(db, parsed.data.kliensUserId)
      if (!kliens || !kliens.is_active || kliens.role !== 'KLIENS') {
        res.status(404).json({ hiba: 'A kliens nem található.' })
        return
      }
      const profil = profilVagyUres(db, kliens.id, kliens.email)
      const nev = [profil.first_name, profil.last_name]
        .filter(Boolean)
        .join(' ')
        .trim()
      const munka = demoAktualisMunka()
      const now = mostIso()
      const id = randomUUID()
      db.prepare(`DELETE FROM aktualis_munkak WHERE kliens_user_id = ?`).run(
        kliens.id,
      )
      db.prepare(
        `INSERT INTO aktualis_munkak (
          id, munka_azonosito, kliens_user_id, cimzett_email, cimzett_nev,
          payload, assigned_at, created_at, hang_lejatszva, allapot
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, 'kikuldve')`,
      ).run(
        id,
        munka.azonosito,
        kliens.id,
        kliens.email,
        nev,
        JSON.stringify(munka),
        now,
        now,
      )
      if (naplozas) {
        naplozas(req, {
          kategoria: 'belso_munka',
          esemeny: 'munka_kikuldve',
          uzenet: 'Aktuális munka kiküldve kliensnek.',
          felhasznalo: admin.id,
          adat: {
            munkaAzonosito: munka.azonosito,
            kliensUserId: kliens.id,
            rekordId: id,
          },
        })
      }
      const sor = db
        .prepare(`SELECT * FROM aktualis_munkak WHERE id = ?`)
        .get(id)
      res.status(201).json(aktualisSorValasz(sor))
    },
  )

  router.post(
    '/munkak/aktualis/hang-lejatszva',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      db.prepare(
        `UPDATE aktualis_munkak SET hang_lejatszva = 1 WHERE kliens_user_id = ?`,
      ).run(user.id)
      res.json({ ok: true })
    },
  )

  router.post(
    '/munkak/aktualis/allapot',
    belsoFelhasznaloKotelezo,
    csrfEllenorzes,
    (req, res) => {
      const user = felhasznaloLekerdezese(db, req.belsoUserId)
      if (!user || !user.is_active) {
        res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
        return
      }
      if (user.role !== 'KLIENS') {
        res.status(403).json({ hiba: 'Csak kliens frissíthet állapotot.' })
        return
      }
      const parsed = aktualisAllapotSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(400).json({ hiba: 'Érvénytelen állapot.' })
        return
      }
      const info = db
        .prepare(
          `UPDATE aktualis_munkak SET allapot = ? WHERE kliens_user_id = ?`,
        )
        .run(parsed.data.allapot, user.id)
      if (!info.changes) {
        res.status(404).json({ hiba: 'Nincs aktuális munka.' })
        return
      }
      const sor = db
        .prepare(`SELECT * FROM aktualis_munkak WHERE kliens_user_id = ?`)
        .get(user.id)
      res.json(aktualisSorValasz(sor))
    },
  )

  router.get('/ertesites/hang', belsoFelhasznaloKotelezo, (req, res) => {
    const user = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!user || !user.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    try {
      const buffer = ertesitesHangBufferElkeszit()
      res.setHeader('Content-Type', 'audio/wav')
      res.setHeader('Cache-Control', 'public, max-age=86400')
      res.setHeader(
        'Content-Disposition',
        'inline; filename="uj-munka-ertesites.wav"',
      )
      res.send(buffer)
    } catch {
      res.status(500).json({ hiba: 'A hangfájl nem érhető el.' })
    }
  })

  router.get('/kliensek', (req, res) => {
    const userId = req.session?.belsoUserId
    if (!userId) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    const admin = felhasznaloLekerdezese(db, userId)
    if (!admin || !admin.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    if (admin.role !== 'ADMIN') {
      res.status(403).json({ hiba: 'Nincs jogosultság.' })
      return
    }
    const sorok = db
      .prepare(
        `SELECT u.id, u.email,
                COALESCE(p.first_name, '') AS first_name,
                COALESCE(p.last_name, '') AS last_name
         FROM users u
         LEFT JOIN user_profiles p ON p.user_id = u.id
         WHERE u.role = 'KLIENS' AND u.is_active = 1
         ORDER BY p.last_name COLLATE NOCASE, p.first_name COLLATE NOCASE, u.email COLLATE NOCASE`,
      )
      .all()
    res.json({
      kliensek: sorok.map((sor) => ({
        id: sor.id,
        email: sor.email,
        firstName: sor.first_name,
        lastName: sor.last_name,
      })),
    })
  })

  function soforNev(firstName, lastName, email) {
    const teljes = [lastName, firstName]
      .map((resz) => String(resz || '').trim())
      .filter(Boolean)
      .join(' ')
    return teljes || email
  }

  function soforMunkaOsszegzes(payload) {
    const munka = payload?.munka || payload || {}
    const jarmu = munka.jarmu || {}
    const felvetel = munka.felvetel || {}
    const leadas = munka.leadas || {}
    return {
      jarmuModell: jarmu.modell || [jarmu.marka, jarmu.tipus].filter(Boolean).join(' ') || '—',
      rendszam: jarmu.rendszam || '—',
      felvetelAllomas: felvetel.allomas || '—',
      felvetelCim: felvetel.cim || '',
      leadasAllomas: leadas.allomas || '—',
      leadasCim: leadas.cim || '',
      tavolsagKm: Number(munka.tavolsagKm) || 0,
      dijEuro: Number(munka.dijEuro) || 0,
    }
  }

  router.get('/soforok', belsoFelhasznaloKotelezo, (req, res) => {
    const admin = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!admin || !admin.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    if (admin.role !== 'ADMIN') {
      res.status(403).json({ hiba: 'Nincs jogosultság.' })
      return
    }
    const sorok = db
      .prepare(
        `SELECT u.id, u.email, u.created_at, u.is_active,
                COALESCE(p.first_name, '') AS first_name,
                COALESCE(p.last_name, '') AS last_name,
                COALESCE(p.phone, '') AS phone,
                COALESCE(p.country, '') AS country,
                COALESCE(p.city, '') AS city,
                COALESCE(p.postal_code, '') AS postal_code,
                (SELECT COUNT(*) FROM elvegzett_munkak e WHERE e.kliens_user_id = u.id) AS elvegzett_db
         FROM users u
         LEFT JOIN user_profiles p ON p.user_id = u.id
         WHERE u.role = 'KLIENS'
         ORDER BY p.last_name COLLATE NOCASE, p.first_name COLLATE NOCASE, u.email COLLATE NOCASE`,
      )
      .all()

    const soforok = sorok.map((sor) => {
      const munkak = db
        .prepare(
          `SELECT payload FROM elvegzett_munkak WHERE kliens_user_id = ?`,
        )
        .all(sor.id)
      let osszKm = 0
      for (const m of munkak) {
        try {
          const parsed = JSON.parse(m.payload)
          osszKm += Number(parsed?.munka?.tavolsagKm || parsed?.tavolsagKm || 0)
        } catch {
          /* ignore */
        }
      }
      return {
        id: sor.id,
        email: sor.email,
        firstName: sor.first_name,
        lastName: sor.last_name,
        phone: sor.phone,
        country: sor.country,
        city: sor.city,
        postalCode: sor.postal_code,
        createdAt: sor.created_at,
        isActive: Boolean(sor.is_active),
        megjelenitoNev: soforNev(sor.first_name, sor.last_name, sor.email),
        elvegzettDb: Number(sor.elvegzett_db) || 0,
        osszKm,
      }
    })
    res.json({ soforok })
  })

  router.get('/soforok/:id', belsoFelhasznaloKotelezo, (req, res) => {
    const admin = felhasznaloLekerdezese(db, req.belsoUserId)
    if (!admin || !admin.is_active) {
      res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
      return
    }
    if (admin.role !== 'ADMIN') {
      res.status(403).json({ hiba: 'Nincs jogosultság.' })
      return
    }
    const sofor = felhasznaloLekerdezese(db, req.params.id)
    if (!sofor || sofor.role !== 'KLIENS') {
      res.status(404).json({ hiba: 'A sofőr nem található.' })
      return
    }
    const profil = profilVagyUres(db, sofor.id, sofor.email)
    const sorok = db
      .prepare(
        `SELECT * FROM elvegzett_munkak
         WHERE kliens_user_id = ?
         ORDER BY completed_at DESC`,
      )
      .all(sofor.id)
    let osszKm = 0
    const munkak = sorok.map((sor) => {
      const teljes = elvegzettSorValasz(sor)
      const osszeg = soforMunkaOsszegzes(teljes.payload)
      osszKm += osszeg.tavolsagKm
      return {
        id: teljes.id,
        munkaAzonosito: teljes.munkaAzonosito,
        completedAt: teljes.completedAt,
        ...osszeg,
      }
    })
    res.json({
      sofor: {
        id: sofor.id,
        email: sofor.email,
        role: sofor.role,
        isActive: Boolean(sofor.is_active),
        createdAt: sofor.created_at,
        megjelenitoNev: soforNev(
          profil.first_name,
          profil.last_name,
          sofor.email,
        ),
        profile: {
          firstName: profil.first_name,
          lastName: profil.last_name,
          phone: profil.phone,
          birthDate: profil.birth_date || null,
          country: profil.country,
          postalCode: profil.postal_code,
          city: profil.city,
          streetAddress: profil.street_address,
        },
      },
      statisztika: {
        elvegzettDb: munkak.length,
        osszKm,
      },
      munkak,
    })
  })

  return router
}

export { jelszoErvenyes }
