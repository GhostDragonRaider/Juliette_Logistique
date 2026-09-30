import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const MAX_SOROK = 10_000
const MAX_FAJL_MERET = 4 * 1024 * 1024

/**
 * Eseménynapló JSONL fájlba (egy sor = egy esemény).
 */
export function naploModulLetrehozasa(dataDir) {
  const logFajl = path.join(dataDir, 'naplo.jsonl')
  fs.mkdirSync(dataDir, { recursive: true })

  function kliensIp(req) {
    const tovabbitott = req.headers['x-forwarded-for']
    if (typeof tovabbitott === 'string' && tovabbitott.length > 0) {
      return tovabbitott.split(',')[0].trim()
    }
    return req.socket?.remoteAddress || ''
  }

  function sorokBetoltese() {
    if (!fs.existsSync(logFajl)) {
      return []
    }
    const nyers = fs.readFileSync(logFajl, 'utf8')
    const sorok = nyers
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean)
    const bejegyzesek = []
    for (const sor of sorok) {
      try {
        bejegyzesek.push(JSON.parse(sor))
      } catch {
        /* sérült sor kihagyása */
      }
    }
    return bejegyzesek
  }

  function sorokCsonkitasa(sorok) {
    if (sorok.length <= MAX_SOROK) {
      return sorok
    }
    return sorok.slice(sorok.length - MAX_SOROK)
  }

  function fajlIrasa(sorok) {
    const tartalom = sorok.map((s) => JSON.stringify(s)).join('\n') + (sorok.length ? '\n' : '')
    fs.writeFileSync(logFajl, tartalom, 'utf8')
  }

  function naplozas(req, bejegyzes) {
    const uj = {
      id: `log-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`,
      idopont: new Date().toISOString(),
      kategoria: bejegyzes.kategoria,
      esemeny: bejegyzes.esemeny,
      uzenet: bejegyzes.uzenet,
      adat: bejegyzes.adat ?? {},
      felhasznalo: bejegyzes.felhasznalo ?? req?.admin?.u ?? null,
      ip: req ? kliensIp(req) : '',
    }

    let sorok = sorokBetoltese()
    sorok.push(uj)
    sorok = sorokCsonkitasa(sorok)

    try {
      if (fs.existsSync(logFajl) && fs.statSync(logFajl).size > MAX_FAJL_MERET) {
        sorok = sorokCsonkitasa(sorok.slice(-Math.floor(MAX_SOROK / 2)))
      }
      fajlIrasa(sorok)
    } catch (err) {
      console.error('Napló írása sikertelen:', err)
    }

    return uj
  }

  function naploLekeres({ limit = 100, offset = 0, kategoria = '', esemeny = '' }) {
    let sorok = sorokBetoltese()
    sorok.sort((a, b) => String(b.idopont).localeCompare(String(a.idopont)))

    if (kategoria) {
      sorok = sorok.filter((s) => s.kategoria === kategoria)
    }
    if (esemeny) {
      sorok = sorok.filter((s) => s.esemeny === esemeny)
    }

    const osszesen = sorok.length
    const limitSzam = Math.min(500, Math.max(1, Number(limit) || 100))
    const offsetSzam = Math.max(0, Number(offset) || 0)

    return {
      osszesen,
      limit: limitSzam,
      offset: offsetSzam,
      naplo: sorok.slice(offsetSzam, offsetSzam + limitSzam),
    }
  }

  return { naplozas, naploLekeres, logFajl }
}
