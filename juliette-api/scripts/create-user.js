#!/usr/bin/env node
/**
 * Biztonságos belső felhasználó létrehozása (nincs nyilvános regisztráció).
 *
 * Használat:
 *   node scripts/create-user.js --email user@example.com --password 'min12karakter' [--role USER|ADMIN]
 *
 * Környezet: DATA_DIR, SQLITE_PATH (opcionális)
 */
import argon2 from 'argon2'
import { randomUUID } from 'node:crypto'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { adatbazisLetrehozasa } from '../db.js'
import { jelszoErvenyes } from '../belso/validation.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function argErtek(nev) {
  const index = process.argv.indexOf(`--${nev}`)
  if (index === -1 || !process.argv[index + 1]) {
    return null
  }
  return process.argv[index + 1]
}

async function main() {
  const email = String(argErtek('email') || '').trim().toLowerCase()
  const password = argErtek('password') || ''
  const role = String(argErtek('role') || 'USER').toUpperCase()

  if (!email || !email.includes('@')) {
    console.error('Hiányzó vagy érvénytelen --email.')
    process.exit(1)
  }
  if (!jelszoErvenyes(password)) {
    console.error('A jelszó legalább 12 karakter hosszú legyen.')
    process.exit(1)
  }
  if (role !== 'USER' && role !== 'ADMIN') {
    console.error('A --role csak USER vagy ADMIN lehet.')
    process.exit(1)
  }

  const dataDir = process.env.DATA_DIR || path.join(__dirname, '..', 'data')
  const db = adatbazisLetrehozasa(dataDir)
  const letezo = db
    .prepare(`SELECT id FROM users WHERE email = ? COLLATE NOCASE`)
    .get(email)
  if (letezo) {
    console.error('Ez az e-mail-cím már regisztrált.')
    process.exit(1)
  }

  const hash = await argon2.hash(password, { type: argon2.argon2id })
  const id = randomUUID()
  const now = new Date().toISOString()
  db.prepare(
    `INSERT INTO users (id, email, password_hash, role, is_active, created_at, updated_at)
     VALUES (?, ?, ?, ?, 1, ?, ?)`,
  ).run(id, email, hash, role, now, now)

  const profilId = randomUUID()
  db.prepare(
    `INSERT INTO user_profiles (
      id, user_id, first_name, last_name, phone, birth_date,
      country, postal_code, city, street_address, created_at, updated_at
    ) VALUES (?, ?, '', '', '', NULL, '', '', '', '', ?, ?)`,
  ).run(profilId, id, now, now)

  console.log(`Felhasználó létrehozva: ${email} (${role}), id=${id}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
