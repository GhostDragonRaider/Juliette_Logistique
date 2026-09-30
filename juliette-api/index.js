import cors from 'cors'
import crypto from 'node:crypto'
import express from 'express'
import fs from 'node:fs'
import multer from 'multer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { naploModulLetrehozasa } from './naplo.js'

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

const app = express()
app.use(cors())
app.use(express.json({ limit: '2mb' }))

const feltoltes = multer({
  storage: multer.diskStorage({
    destination(req, _file, cb) {
      const id = req.jelentkezesId
      const dir = path.join(UPLOADS_DIR, id)
      fs.mkdirSync(dir, { recursive: true })
      cb(null, dir)
    },
    filename(_req, file, cb) {
      const biztonsagos = file.originalname.replace(/[^\w.\-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/g, '_')
      cb(null, `${Date.now()}-${biztonsagos}`)
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
      nev: f.originalname,
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

app.get('/api/admin/fajl', adminVedett, (req, res) => {
  const rel = String(req.query.path || '')
  const abs = path.resolve(DATA_DIR, rel)
  if (!abs.startsWith(path.resolve(DATA_DIR)) || !fs.existsSync(abs)) {
    res.status(404).json({ hiba: 'Fájl nem található.' })
    return
  }
  naplozas(req, {
    kategoria: 'fajl',
    esemeny: 'letoltes',
    uzenet: `Fájl letöltve / megtekintve: ${path.basename(abs)}.`,
    adat: { utvonal: rel },
  })
  res.download(abs)
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

app.listen(PORT, '127.0.0.1', () => {
  naplozas(null, {
    kategoria: 'rendszer',
    esemeny: 'szerver_inditas',
    uzenet: 'Juliette API elindult.',
    adat: { port: PORT },
  })
  console.log(`Juliette API listening on 127.0.0.1:${PORT}`)
})
