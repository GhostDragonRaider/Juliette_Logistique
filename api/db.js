import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

const MIGRATIONS = [
  `
  CREATE TABLE IF NOT EXISTS schema_migrations (
    id TEXT PRIMARY KEY,
    applied_at TEXT NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'KLIENS' CHECK (role IN ('KLIENS', 'ADMIN')),
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  CREATE UNIQUE INDEX IF NOT EXISTS users_email_unique ON users (email);
  `,
  `
  CREATE TABLE IF NOT EXISTS user_profiles (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL UNIQUE REFERENCES users (id) ON DELETE CASCADE,
    first_name TEXT NOT NULL DEFAULT '',
    last_name TEXT NOT NULL DEFAULT '',
    phone TEXT NOT NULL DEFAULT '',
    birth_date TEXT,
    country TEXT NOT NULL DEFAULT '',
    postal_code TEXT NOT NULL DEFAULT '',
    city TEXT NOT NULL DEFAULT '',
    street_address TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    sess TEXT NOT NULL,
    expire INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS sessions_expire_idx ON sessions (expire);
  `,
  `
  PRAGMA foreign_keys=OFF;
  CREATE TABLE users_szerep (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'KLIENS' CHECK (role IN ('KLIENS', 'ADMIN')),
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  INSERT INTO users_szerep (id, email, password_hash, role, is_active, created_at, updated_at)
  SELECT id, email, password_hash,
    CASE WHEN role = 'ADMIN' THEN 'ADMIN' ELSE 'KLIENS' END,
    is_active, created_at, updated_at
  FROM users;
  DROP TABLE users;
  ALTER TABLE users_szerep RENAME TO users;
  CREATE UNIQUE INDEX IF NOT EXISTS users_email_unique ON users (email);
  PRAGMA foreign_keys=ON;
  `,
  `
  CREATE TABLE IF NOT EXISTS elvegzett_munkak (
    id TEXT PRIMARY KEY,
    munka_azonosito TEXT NOT NULL,
    kliens_user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    cimzett_email TEXT NOT NULL,
    cimzett_nev TEXT NOT NULL DEFAULT '',
    payload TEXT NOT NULL,
    completed_at TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS elvegzett_munkak_completed_idx
    ON elvegzett_munkak (completed_at DESC);
  CREATE INDEX IF NOT EXISTS elvegzett_munkak_kliens_idx
    ON elvegzett_munkak (kliens_user_id);
  `,
  `
  CREATE TABLE IF NOT EXISTS chat_uzenetek (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    szoveg TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS chat_uzenetek_created_idx
    ON chat_uzenetek (created_at ASC);
  CREATE TABLE IF NOT EXISTS chat_jelenlet (
    user_id TEXT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
    display_name TEXT NOT NULL DEFAULT '',
    last_seen TEXT NOT NULL
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS aktualis_munkak (
    id TEXT PRIMARY KEY,
    munka_azonosito TEXT NOT NULL,
    kliens_user_id TEXT NOT NULL UNIQUE REFERENCES users (id) ON DELETE CASCADE,
    cimzett_email TEXT NOT NULL,
    cimzett_nev TEXT NOT NULL DEFAULT '',
    payload TEXT NOT NULL,
    assigned_at TEXT NOT NULL,
    created_at TEXT NOT NULL,
    hang_lejatszva INTEGER NOT NULL DEFAULT 0
  );
  CREATE INDEX IF NOT EXISTS aktualis_munkak_assigned_idx
    ON aktualis_munkak (assigned_at DESC);
  `,
  `
  ALTER TABLE aktualis_munkak ADD COLUMN allapot TEXT NOT NULL DEFAULT 'kikuldve';
  `,
  `
  CREATE TABLE IF NOT EXISTS chat_szobak (
    id TEXT PRIMARY KEY,
    nev TEXT NOT NULL,
    created_by TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS chat_szoba_tagok (
    szoba_id TEXT NOT NULL REFERENCES chat_szobak (id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY (szoba_id, user_id)
  );
  CREATE INDEX IF NOT EXISTS chat_szoba_tagok_user_idx
    ON chat_szoba_tagok (user_id);
  CREATE TABLE IF NOT EXISTS chat_privat (
    id TEXT PRIMARY KEY,
    user_a TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    user_b TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    created_at TEXT NOT NULL,
    UNIQUE (user_a, user_b)
  );
  CREATE INDEX IF NOT EXISTS chat_privat_user_a_idx ON chat_privat (user_a);
  CREATE INDEX IF NOT EXISTS chat_privat_user_b_idx ON chat_privat (user_b);
  CREATE TABLE IF NOT EXISTS chat_privat_uzenetek (
    id TEXT PRIMARY KEY,
    privat_id TEXT NOT NULL REFERENCES chat_privat (id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    szoveg TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS chat_privat_uzenetek_idx
    ON chat_privat_uzenetek (privat_id, created_at ASC);
  CREATE TABLE IF NOT EXISTS chat_privat_rejtve (
    privat_id TEXT NOT NULL REFERENCES chat_privat (id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY (privat_id, user_id)
  );
  CREATE TABLE IF NOT EXISTS chat_privat_olvasva (
    privat_id TEXT NOT NULL REFERENCES chat_privat (id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    last_read_at TEXT NOT NULL,
    PRIMARY KEY (privat_id, user_id)
  );
  `,
  `
  ALTER TABLE chat_uzenetek ADD COLUMN szoba_id TEXT REFERENCES chat_szobak (id) ON DELETE CASCADE;
  CREATE INDEX IF NOT EXISTS chat_uzenetek_szoba_idx
    ON chat_uzenetek (szoba_id, created_at ASC);
  `,
]

/**
 * Megnyitja az SQLite adatbázist és futtatja a hiányzó migrációkat.
 */
export function adatbazisLetrehozasa(dataDir) {
  fs.mkdirSync(dataDir, { recursive: true })
  const dbPath = process.env.SQLITE_PATH || path.join(dataDir, 'belso.sqlite')
  const db = new Database(dbPath)
  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = ON')

  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `)

  const applied = new Set(
    db.prepare('SELECT id FROM schema_migrations').all().map((r) => r.id),
  )

  MIGRATIONS.forEach((sql, index) => {
    const id = `00${index + 1}`
    if (applied.has(id)) {
      return
    }
    db.exec(sql)
    db.prepare('INSERT INTO schema_migrations (id, applied_at) VALUES (?, ?)').run(
      id,
      new Date().toISOString(),
    )
  })

  return db
}
