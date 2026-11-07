import argon2 from 'argon2'
import { randomUUID } from 'node:crypto'

export const DEV_TEST_EMAIL = 'teszt@teszt.local'
export const DEV_TEST_LOGIN_ALIAS = 'teszt'
export const DEV_TEST_PASSWORD = 'teszt'
export const DEV_TEST_ROLE = 'KLIENS'

export const DEV_ADMIN_EMAIL = 'admin@juliette.local'
export const DEV_ADMIN_LOGIN_ALIAS = 'admin'
export const DEV_ADMIN_PASSWORD = 'admin321'
export const DEV_ADMIN_ROLE = 'ADMIN'

/**
 * Fejlesztői fiókok — productionben nem jönnek létre.
 * teszt / teszt = kliens, admin / admin321 = admin.
 */
export async function ensureDevTestUser(db) {
  if (process.env.NODE_ENV === 'production') {
    return
  }
  if (process.env.DEV_TEST_USER === '0') {
    return
  }

  await fiokBiztositasa(db, {
    email: DEV_TEST_EMAIL,
    jelszo: DEV_TEST_PASSWORD,
    szerep: DEV_TEST_ROLE,
    vezeteknev: 'Felhasználó',
    keresztnev: 'Teszt',
    uzenet: `[dev] Kliens: „${DEV_TEST_LOGIN_ALIAS}” / „${DEV_TEST_PASSWORD}” (${DEV_TEST_EMAIL})`,
  })
  await fiokBiztositasa(db, {
    email: DEV_ADMIN_EMAIL,
    jelszo: DEV_ADMIN_PASSWORD,
    szerep: DEV_ADMIN_ROLE,
    vezeteknev: 'Admin',
    keresztnev: 'Juliette',
    uzenet: `[dev] Admin: „${DEV_ADMIN_LOGIN_ALIAS}” / „${DEV_ADMIN_PASSWORD}” (${DEV_ADMIN_EMAIL})`,
  })
}

async function fiokBiztositasa(db, fiok) {
  const now = new Date().toISOString()
  const letezo = db
    .prepare(`SELECT id, role FROM users WHERE email = ? COLLATE NOCASE`)
    .get(fiok.email)

  if (letezo) {
    if (letezo.role !== fiok.szerep) {
      db.prepare(`UPDATE users SET role = ?, updated_at = ? WHERE id = ?`).run(
        fiok.szerep,
        now,
        letezo.id,
      )
    }
    return
  }

  const hash = await argon2.hash(fiok.jelszo, { type: argon2.argon2id })
  const id = randomUUID()
  db.prepare(
    `INSERT INTO users (id, email, password_hash, role, is_active, created_at, updated_at)
     VALUES (?, ?, ?, ?, 1, ?, ?)`,
  ).run(id, fiok.email, hash, fiok.szerep, now, now)

  db.prepare(
    `INSERT INTO user_profiles (
      id, user_id, first_name, last_name, phone, birth_date,
      country, postal_code, city, street_address, created_at, updated_at
    ) VALUES (?, ?, ?, ?, '', NULL, '', '', '', '', ?, ?)`,
  ).run(randomUUID(), id, fiok.keresztnev, fiok.vezeteknev, now, now)

  console.log(fiok.uzenet)
}
