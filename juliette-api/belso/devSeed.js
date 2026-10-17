import argon2 from 'argon2'
import { randomUUID } from 'node:crypto'

export const DEV_TEST_EMAIL = 'teszt@teszt.local'
export const DEV_TEST_LOGIN_ALIAS = 'teszt'
export const DEV_TEST_PASSWORD = 'teszt'

/**
 * Fejlesztői teszt fiók (teszt / teszt) — productionben nem fut.
 */
export async function ensureDevTestUser(db) {
  if (process.env.NODE_ENV === 'production') {
    return
  }
  if (process.env.DEV_TEST_USER === '0') {
    return
  }

  const letezo = db
    .prepare(`SELECT id FROM users WHERE email = ? COLLATE NOCASE`)
    .get(DEV_TEST_EMAIL)
  if (letezo) {
    return
  }

  const hash = await argon2.hash(DEV_TEST_PASSWORD, { type: argon2.argon2id })
  const id = randomUUID()
  const now = new Date().toISOString()
  db.prepare(
    `INSERT INTO users (id, email, password_hash, role, is_active, created_at, updated_at)
     VALUES (?, ?, ?, 'USER', 1, ?, ?)`,
  ).run(id, DEV_TEST_EMAIL, hash, now, now)

  const profilId = randomUUID()
  db.prepare(
    `INSERT INTO user_profiles (
      id, user_id, first_name, last_name, phone, birth_date,
      country, postal_code, city, street_address, created_at, updated_at
    ) VALUES (?, ?, 'Teszt', 'Felhasználó', '', NULL, '', '', '', '', ?, ?)`,
  ).run(profilId, id, now, now)

  console.log(
    `[dev] Teszt belső felhasználó: „${DEV_TEST_LOGIN_ALIAS}” / „${DEV_TEST_PASSWORD}” (${DEV_TEST_EMAIL})`,
  )
}
