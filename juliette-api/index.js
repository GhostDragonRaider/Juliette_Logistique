import argon2 from 'argon2'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import crypto from 'node:crypto'
import express from 'express'
import fs from 'node:fs'
import helmet from 'helmet'
import multer from 'multer'
import path from 'node:path'
import session from 'express-session'
import { fileURLToPath } from 'node:url'
import { naploModulLetrehozasa } from './naplo.js'
import { adatbazisLetrehozasa } from './db.js'
import { SqliteSessionStore } from './sessionStore.js'
import { belsoRouterLetrehozasa } from './belso/routes.js'
import { ensureDevTestUser } from './belso/devSeed.js'
import { csrfEllenorzes } from './belso/middleware.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT || 3010)
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data')
const CONTENT_FILE = path.join(DATA_DIR, 'content.json')
const APPS_DIR = path.join(DATA_DIR, 'jelentkezesek')
const UPLOADS_DIR = path.join(DATA_DIR, 'feltoltesek')
const DEFAULT_CONTENT = path.join(__dirname, 'content-default.json')

const ADMIN_USER = process.env.ADMIN_USER || 'admin'
const ADMIN_SALT = process.env.ADMIN_SALT || 'juliette-admin-salt-v1'
const ADMIN_HASH =
  process.env.ADMIN_HASH ||
  crypto.scryptSync('admin321', ADMIN_SALT, 64).toString('hex')
const TOKEN_SECRET =
  process.env.TOKEN_SECRET || 'juliette-token-secret-change-in-prod'

fs.mkdirSync(APPS_DIR, { recursive: true })
fs.mkdirSync(UPLOADS_DIR, { recursive: true })

if (!fs.existsSync(CONTENT_FILE) && fs.existsSync(DEFAULT_CONTENT)) {
  fs.copyFileSync(DEFAULT_CONTENT, CONTENT_FILE)
}

const { naplozas, naploLekeres } = naploModulLetrehozasa(DATA_DIR)
const belsoDb = adatbazisLetrehozasa(DATA_DIR)
const sessionStore = new SqliteSessionStore(belsoDb)

const SESSION_SECRET =
  process.env.SESSION_SECRET || 'juliette-dev-session-secret-change-me'
const CORS_ORIGINS = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const app = express()
if (process.env.TRUST_PROXY === '1') {
  app.set('trust proxy', 1)
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
)

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true)
        return
      }
      if (CORS_ORIGINS.length === 0 || CORS_ORIGINS.includes(origin)) {
        callback(null, true)
        return
      }
      callback(null, false)
    },
    credentials: true,
  }),
)

app.use(cookieParser())
app.use(
  session({
    name: 'jl.sid',
    secret: SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 12 * 60 * 60 * 1000,
    },
  }),
)
app.use(express.json({ limit: '2mb' }))

app.use('/api', belsoRouterLetrehozasa(belsoDb, { naplozas }))

/**
 * Multer/busboy a Content-Disposition fájlnevet latin1 bájtsorként adja.
 * A böngésző UTF-8 nevét visszaalakítjuk helyes Unicode szöveggé.
 */
function utf8Fajlnev(originalname) {
  const nyers = String(originalname || 'fajl')
  try {
    const dekodolt = Buffer.from(nyers, 'latin1').toString('utf8')
    if (dekodolt.includes('\uFFFD')) {
      return nyers
    }
    return dekodolt
  } catch {
    return nyers
  }
}

function biztonsagosFajlnev(originalname) {
  return utf8Fajlnev(originalname)
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}._-]+/gu, '_')
}

/** Már elmentett (hibásan latin1-ként tárolt) fájlnevek javítása válaszadáskor. */
function fajlokUtf8Javitas(fajlok) {
  if (!Array.isArray(fajlok)) return fajlok
  return fajlok.map((fajl) => {
    if (!fajl || typeof fajl !== 'object') return fajl
    return { ...fajl, nev: utf8Fajlnev(fajl.nev) }
  })
}

const feltoltes = multer({
  storage: multer.diskStorage({
    destination(req, _file, cb) {
      const id = req.jelentkezesId
      const dir = path.join(UPLOADS_DIR, id)
      fs.mkdirSync(dir, { recursive: true })
      cb(null, dir)
    },
    filename(_req, file, cb) {
      cb(null, `${Date.now()}-${biztonsagosFajlnev(file.originalname)}`)
    },
  }),
  limits: { fileSize: 12 * 1024 * 1024, files: 12 },
})

function tartalomOlvasasa() {
  return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'))
}

function tartalomMentese(adat) {
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(adat, null, 2), 'utf8')
}

function tokenKeszites(felhasznalo) {
  const payload = Buffer.from(
    JSON.stringify({
      u: felhasznalo,
      exp: Date.now() + 12 * 60 * 60 * 1000,
    }),
  ).toString('base64url')
  const alairas = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(payload)
    .digest('base64url')
  return `${payload}.${alairas}`
}

function tokenEllenorzes(token) {
  if (!token || !token.includes('.')) {
    return null
  }
  const [payload, alairas] = token.split('.')
  const vart = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(payload)
    .digest('base64url')
  if (vart !== alairas) {
    return null
  }
  try {
    const adat = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    if (!adat.exp || adat.exp < Date.now()) {
      return null
    }
    return adat
  } catch {
    return null
  }
}

function adminVedett(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  const session = tokenEllenorzes(token)
  if (!session) {
    res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
    return
  }
  req.admin = session
  next()
}

function jelszoEgyezik(jelszo) {
  const hash = crypto.scryptSync(jelszo, ADMIN_SALT, 64).toString('hex')
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(ADMIN_HASH))
}

function tartalomValtozasok(regi, uj) {
  const kulcsok = ['telefonszam', 'email', 'cim', 'terulet', 'elerhetoseg', 'cegnev']
  const valtozott = []
  for (const k of kulcsok) {
    if (String(regi[k] ?? '') !== String(uj[k] ?? '')) {
      valtozott.push(k)
    }
  }
  return valtozott
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.get('/api/content', (_req, res) => {
  res.json(tartalomOlvasasa())
})

app.post('/api/admin/login', (req, res) => {
  const felhasznalo = String(req.body?.username || '')
  const jelszo = String(req.body?.password || '')
  if (felhasznalo !== ADMIN_USER || !jelszoEgyezik(jelszo)) {
    naplozas(req, {
      kategoria: 'auth',
      esemeny: 'bejelentkezes_sikertelen',
      uzenet: 'Sikertelen admin bejelentkezés.',
      felhasznalo: felhasznalo || null,
      adat: { probaltFelhasznalo: felhasznalo },
    })
    res.status(401).json({ hiba: 'Hibás felhasználónév vagy jelszó.' })
    return
  }
  naplozas(req, {
    kategoria: 'auth',
    esemeny: 'bejelentkezes_siker',
    uzenet: 'Sikeres admin bejelentkezés.',
    felhasznalo,
    adat: {},
  })
  res.json({ token: tokenKeszites(felhasznalo), felhasznalo })
})

/**
 * Belső ADMIN session → admin JWT (az irányítópulton nincs külön /admin belépés).
 */
app.post('/api/admin/session-token', csrfEllenorzes, (req, res) => {
  const userId = req.session?.belsoUserId
  if (!userId) {
    res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
    return
  }
  const user = belsoDb
    .prepare(
      `SELECT id, email, role, is_active FROM users WHERE id = ?`,
    )
    .get(userId)
  if (!user || !user.is_active) {
    res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
    return
  }
  if (user.role !== 'ADMIN') {
    res.status(403).json({ hiba: 'Nincs jogosultság.' })
    return
  }
  naplozas(req, {
    kategoria: 'auth',
    esemeny: 'admin_session_token',
    uzenet: 'Admin API token belső sessionből.',
    felhasznalo: user.id,
    adat: { email: user.email },
  })
  res.json({ token: tokenKeszites(user.email), felhasznalo: user.email })
})

app.get('/api/admin/content', adminVedett, (req, res) => {
  naplozas(req, {
    kategoria: 'tartalom',
    esemeny: 'tartalom_megtekintes',
    uzenet: 'Tartalom lekérdezése az adminban.',
    adat: {},
  })
  res.json(tartalomOlvasasa())
})

app.put('/api/admin/content', adminVedett, (req, res) => {
  const jelenlegi = tartalomOlvasasa()
  const kovetkezo = {
    telefonszam: String(req.body?.telefonszam ?? jelenlegi.telefonszam).trim(),
    email: String(req.body?.email ?? jelenlegi.email).trim(),
    cim: String(req.body?.cim ?? jelenlegi.cim).trim(),
    terulet: String(req.body?.terulet ?? jelenlegi.terulet).trim(),
    elerhetoseg: String(req.body?.elerhetoseg ?? jelenlegi.elerhetoseg).trim(),
    cegnev: String(req.body?.cegnev ?? jelenlegi.cegnev).trim(),
  }
  const valtozott = tartalomValtozasok(jelenlegi, kovetkezo)
  tartalomMentese(kovetkezo)
  naplozas(req, {
    kategoria: 'tartalom',
    esemeny: 'tartalom_modositas',
    uzenet: valtozott.length
      ? `Weboldal tartalom módosítva (${valtozott.join(', ')}).`
      : 'Weboldal tartalom mentve (változás nélkül).',
    adat: { valtozottMezok: valtozott },
  })
  res.json(kovetkezo)
})

app.post('/api/jelentkezesek', (req, res, next) => {
  req.jelentkezesId = `jl-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`
  next()
}, feltoltes.any(), (req, res) => {
  try {
    const id = req.jelentkezesId
    let mezok = {}
    if (req.body?.adat) {
      mezok = typeof req.body.adat === 'string' ? JSON.parse(req.body.adat) : req.body.adat
    } else {
      mezok = { ...req.body }
      delete mezok.adat
    }

    const fajlok = (req.files || []).map((f) => ({
      mezo: f.fieldname,
      nev: utf8Fajlnev(f.originalname),
      meret: f.size,
      utvonal: path.relative(DATA_DIR, f.path),
    }))

    const rekord = {
      id,
      erkezett: new Date().toISOString(),
      mezok,
      fajlok,
      statusz: 'uj',
    }

    fs.writeFileSync(
      path.join(APPS_DIR, `${id}.json`),
      JSON.stringify(rekord, null, 2),
      'utf8',
    )

    naplozas(req, {
      kategoria: 'jelentkezes',
      esemeny: 'uj_jelentkezes',
      uzenet: `Új jelentkezés érkezett: ${mezok.teljesNev || id}.`,
      adat: {
        jelentkezesId: id,
        nev: mezok.teljesNev || '',
        email: mezok.email || '',
        telefon: mezok.telefon || '',
        fajlDb: fajlok.length,
      },
    })

    res.status(201).json({ ok: true, id })
  } catch (hiba) {
    console.error(hiba)
    naplozas(req, {
      kategoria: 'rendszer',
      esemeny: 'jelentkezes_mentes_hiba',
      uzenet: 'Jelentkezés mentése sikertelen.',
      adat: { hiba: String(hiba?.message || hiba) },
    })
    res.status(500).json({ hiba: 'A jelentkezés mentése sikertelen.' })
  }
})

app.get('/api/admin/jelentkezesek', adminVedett, (req, res) => {
  const lista = fs
    .readdirSync(APPS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const adat = JSON.parse(fs.readFileSync(path.join(APPS_DIR, f), 'utf8'))
      return {
        id: adat.id,
        erkezett: adat.erkezett,
        statusz: adat.statusz || 'uj',
        nev: adat.mezok?.teljesNev || '',
        email: adat.mezok?.email || '',
        telefon: adat.mezok?.telefon || '',
        fiokUserId: adat.fiokUserId || null,
        fiokEmail: adat.fiokEmail || null,
        fiokLetrehozva: adat.fiokLetrehozva || null,
      }
    })
    .sort((a, b) => String(b.erkezett).localeCompare(String(a.erkezett)))

  naplozas(req, {
    kategoria: 'jelentkezes',
    esemeny: 'lista_megtekintes',
    uzenet: `Jelentkezések listája megnyitva (${lista.length} db).`,
    adat: { darab: lista.length },
  })

  res.json(lista)
})

app.get('/api/admin/jelentkezesek/:id', adminVedett, (req, res) => {
  const fajl = path.join(APPS_DIR, `${req.params.id}.json`)
  if (!fs.existsSync(fajl)) {
    res.status(404).json({ hiba: 'Nem található.' })
    return
  }
  const adat = JSON.parse(fs.readFileSync(fajl, 'utf8'))
  adat.fajlok = fajlokUtf8Javitas(adat.fajlok)
  naplozas(req, {
    kategoria: 'jelentkezes',
    esemeny: 'reszlet_megtekintes',
    uzenet: `Jelentkezés részlete megnyitva: ${req.params.id}.`,
    adat: {
      jelentkezesId: req.params.id,
      nev: adat.mezok?.teljesNev || '',
      statusz: adat.statusz || 'uj',
    },
  })
  res.json(adat)
})

app.patch('/api/admin/jelentkezesek/:id', adminVedett, (req, res) => {
  const fajl = path.join(APPS_DIR, `${req.params.id}.json`)
  if (!fs.existsSync(fajl)) {
    res.status(404).json({ hiba: 'Nem található.' })
    return
  }
  const adat = JSON.parse(fs.readFileSync(fajl, 'utf8'))
  const regiStatusz = adat.statusz || 'uj'
  if (req.body?.statusz) {
    adat.statusz = String(req.body.statusz)
  }
  fs.writeFileSync(fajl, JSON.stringify(adat, null, 2), 'utf8')
  naplozas(req, {
    kategoria: 'jelentkezes',
    esemeny: 'statusz_modositas',
    uzenet: `Jelentkezés státusza módosítva: ${regiStatusz} → ${adat.statusz}.`,
    adat: {
      jelentkezesId: req.params.id,
      regiStatusz,
      ujStatusz: adat.statusz,
      nev: adat.mezok?.teljesNev || '',
    },
  })
  res.json(adat)
})

function nevReszek(teljesNev) {
  const reszek = String(teljesNev || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (reszek.length === 0) {
    return { firstName: '', lastName: '' }
  }
  if (reszek.length === 1) {
    return { firstName: reszek[0], lastName: '' }
  }
  return {
    lastName: reszek[0],
    firstName: reszek.slice(1).join(' '),
  }
}

function ideiglenesJelszo() {
  return crypto.randomBytes(12).toString('base64url').slice(0, 16)
}

app.post('/api/admin/jelentkezesek/:id/fiok', adminVedett, async (req, res) => {
  res.status(403).json({ hiba: 'A fiók létrehozása átmenetileg nem elérhető.' })
  return

  const fajl = path.join(APPS_DIR, `${req.params.id}.json`)
  if (!fs.existsSync(fajl)) {
    res.status(404).json({ hiba: 'Nem található.' })
    return
  }
  const adat = JSON.parse(fs.readFileSync(fajl, 'utf8'))
  if (adat.fiokUserId) {
    res.status(409).json({
      hiba: 'Ehhez a jelentkezéshez már létrejött felhasználói fiók.',
      fiokUserId: adat.fiokUserId,
      email: adat.fiokEmail || adat.mezok?.email || '',
    })
    return
  }
  const email = String(adat.mezok?.email || '')
    .trim()
    .toLowerCase()
  if (!email || !email.includes('@')) {
    res.status(400).json({ hiba: 'A jelentkezéshez nincs érvényes e-mail-cím.' })
    return
  }
  const letezo = belsoDb
    .prepare(`SELECT id FROM users WHERE email = ? COLLATE NOCASE`)
    .get(email)
  if (letezo) {
    res.status(409).json({
      hiba: 'Ez az e-mail-cím már regisztrálva van a zárt felületen.',
      fiokUserId: letezo.id,
      email,
    })
    return
  }

  const jelszo = ideiglenesJelszo()
  const hash = await argon2.hash(jelszo, { type: argon2.argon2id })
  const userId = crypto.randomUUID()
  const profilId = crypto.randomUUID()
  const now = new Date().toISOString()
  const { firstName, lastName } = nevReszek(adat.mezok?.teljesNev)
  const telefon = String(adat.mezok?.telefon || '').trim()
  const orszag = String(adat.mezok?.orszag || '').trim()
  const lakhely = String(adat.mezok?.lakhely || '').trim()
  const szuletesi = String(adat.mezok?.szuletesiDatum || '').trim() || null

  const tx = belsoDb.transaction(() => {
    belsoDb
      .prepare(
        `INSERT INTO users (id, email, password_hash, role, is_active, created_at, updated_at)
         VALUES (?, ?, ?, 'KLIENS', 1, ?, ?)`,
      )
      .run(userId, email, hash, now, now)
    belsoDb
      .prepare(
        `INSERT INTO user_profiles (
          id, user_id, first_name, last_name, phone, birth_date,
          country, postal_code, city, street_address, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, '', '', ?, ?)`,
      )
      .run(
        profilId,
        userId,
        firstName,
        lastName,
        telefon,
        szuletesi,
        orszag,
        lakhely,
        now,
        now,
      )
  })
  tx()

  adat.fiokUserId = userId
  adat.fiokEmail = email
  adat.fiokLetrehozva = now
  if ((adat.statusz || 'uj') === 'uj') {
    adat.statusz = 'folyamatban'
  }
  fs.writeFileSync(fajl, JSON.stringify(adat, null, 2), 'utf8')

  naplozas(req, {
    kategoria: 'jelentkezes',
    esemeny: 'fiok_letrehozva',
    uzenet: `Sofőr fiók létrehozva jelentkezésből: ${email}.`,
    adat: {
      jelentkezesId: req.params.id,
      fiokUserId: userId,
      email,
      nev: adat.mezok?.teljesNev || '',
    },
  })

  res.status(201).json({
    ok: true,
    fiokUserId: userId,
    email,
    ideiglenesJelszo: jelszo,
    jelentkezes: adat,
  })
})

const FAJL_MIME = {
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
}

function fajlContentDisposition(inline, fajlnev) {
  const tiszta = String(fajlnev).replace(/[\r\n"]/g, '')
  const ascii = tiszta.replace(/[^\w.\-]+/g, '_') || 'dokumentum'
  return `${inline ? 'inline' : 'attachment'}; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(tiszta)}`
}

app.get('/api/admin/fajl', (req, res, next) => {
  const header = req.headers.authorization || ''
  const bearer = header.startsWith('Bearer ') ? header.slice(7) : ''
  const queryToken = typeof req.query.access === 'string' ? req.query.access : ''
  const session = tokenEllenorzes(bearer || queryToken)
  if (!session) {
    res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
    return
  }
  req.admin = session
  next()
}, (req, res) => {
  const rel = String(req.query.path || '')
  const gyoker = path.resolve(DATA_DIR)
  const abs = path.resolve(gyoker, rel)
  if (!abs.startsWith(`${gyoker}${path.sep}`) || !fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    res.status(404).json({ hiba: 'Fájl nem található.' })
    return
  }
  const kertNev = typeof req.query.nev === 'string' ? path.basename(req.query.nev) : ''
  const fajlnev = kertNev || path.basename(abs)
  const mime = FAJL_MIME[path.extname(fajlnev).toLowerCase()] || 'application/octet-stream'
  const letoltes = req.query.letoltes === '1'
  const megnyithato = mime === 'application/pdf' || mime.startsWith('image/')
  naplozas(req, {
    kategoria: 'fajl',
    esemeny: 'letoltes',
    uzenet: `Fájl letöltve / megtekintve: ${fajlnev}.`,
    adat: { utvonal: rel },
  })
  res.setHeader('Content-Type', mime)
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader(
    'Content-Disposition',
    fajlContentDisposition(!letoltes && megnyithato, fajlnev),
  )
  res.sendFile(abs)
})

app.get('/api/admin/naplo', adminVedett, (req, res) => {
  const eredmeny = naploLekeres({
    limit: req.query.limit,
    offset: req.query.offset,
    kategoria: String(req.query.kategoria || ''),
    esemeny: String(req.query.esemeny || ''),
  })
  res.json(eredmeny)
})

await ensureDevTestUser(belsoDb)

app.listen(PORT, '127.0.0.1', () => {
  naplozas(null, {
    kategoria: 'rendszer',
    esemeny: 'szerver_inditas',
    uzenet: 'Juliette API elindult.',
    adat: { port: PORT },
  })
  console.log(`Juliette API listening on 127.0.0.1:${PORT}`)
})
