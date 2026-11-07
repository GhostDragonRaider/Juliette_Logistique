import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function kepKonyvtarak() {
  return [
    process.env.KEPEK_DIR,
    path.join(__dirname, '..', '..', 'public', 'kepek'),
    path.join(__dirname, '..', 'public', 'kepek'),
    '/var/www/juliettelogistique.de/kepek',
  ].filter(Boolean)
}

function kepFajlUtvonal(kepUrl) {
  if (!kepUrl) {
    return null
  }
  const fajlNev = path.basename(String(kepUrl).split('?')[0])
  if (!fajlNev || fajlNev === '.' || fajlNev === '..') {
    return null
  }
  for (const dir of kepKonyvtarak()) {
    const teljes = path.join(dir, fajlNev)
    if (fs.existsSync(teljes)) {
      return teljes
    }
  }
  return null
}

function fotoCim(elem) {
  if (elem?.cim && typeof elem.cim === 'object') {
    return elem.cim.hu || elem.cim.de || elem.cim.en || elem.lepesId
  }
  return elem?.lepesId || 'Ismeretlen szög'
}

function fotoLista(payload, tipus) {
  const teljes =
    tipus === 'felvetel' ? payload.felvetelKepek : payload.leadasKepek
  if (Array.isArray(teljes) && teljes.length > 0) {
    return teljes
  }
  const regi =
    tipus === 'felvetel' ? payload.felvetelSerules : payload.leadasSerules
  if (!Array.isArray(regi)) {
    return []
  }
  return regi.map((elem) => ({
    ...elem,
    cim: { hu: elem.lepesId },
    vanSerules: true,
  }))
}

function szoveg(ertek) {
  if (ertek == null || ertek === '') {
    return '—'
  }
  return String(ertek)
}

function idopontHu(ertek, opcio = {}) {
  if (!ertek) {
    return '—'
  }
  const d = new Date(ertek)
  if (Number.isNaN(d.getTime())) {
    return szoveg(ertek)
  }
  const beallitas = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  if (opcio.csakDatum) {
    delete beallitas.hour
    delete beallitas.minute
  }
  if (opcio.hetnap) {
    beallitas.weekday = 'short'
  }
  return new Intl.DateTimeFormat('hu-HU', beallitas).format(d)
}

function datumSor(ertek) {
  if (!ertek) {
    return '—'
  }
  const d = new Date(ertek)
  if (Number.isNaN(d.getTime())) {
    return szoveg(ertek)
  }
  const nap = String(d.getDate()).padStart(2, '0')
  const ho = String(d.getMonth() + 1).padStart(2, '0')
  const ev = d.getFullYear()
  return `${nap}.${ho}.${ev}`
}

function vonal(doc, y, x1 = 48, x2 = 547) {
  doc
    .strokeColor('#222222')
    .lineWidth(0.6)
    .moveTo(x1, y)
    .lineTo(x2, y)
    .stroke()
}

function keret(doc, x, y, w, h) {
  doc
    .strokeColor('#333333')
    .lineWidth(0.8)
    .rect(x, y, w, h)
    .stroke()
}

function cimkeErtek(doc, cimke, ertek, x, y, szelesseg = 240) {
  doc.font('Helvetica').fontSize(9).fillColor('#333333')
  doc.text(`${cimke}: `, x, y, { continued: true, width: szelesseg })
  doc.font('Helvetica-Bold').text(szoveg(ertek), { width: szelesseg })
  return doc.y
}

function serulesOsszegzes(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return 'Nincs jelölt sérülés.'
  }
  return lista
    .filter((elem) => elem.vanSerules !== false)
    .map((elem) => {
      const korok = Array.isArray(elem.korok) ? elem.korok.length : 0
      if (!elem.vanSerules && korok === 0) {
        return null
      }
      return `${fotoCim(elem)} (${korok} jelölés)`
    })
    .filter(Boolean)
    .join('; ') || 'Nincs jelölt sérülés.'
}

function serulesKorokRajzolasa(doc, korok, x, y, w, h) {
  if (!Array.isArray(korok) || korok.length === 0) {
    return
  }
  for (const kor of korok) {
    const cx = x + Number(kor.x) * w
    const cy = y + Number(kor.y) * h
    const rx = Math.max(2, Number(kor.rx) * w)
    const ry = Math.max(2, Number(kor.ry) * h)
    doc.save()
    doc
      .lineWidth(1.8)
      .fillColor('#b42318')
      .fillOpacity(0.18)
      .strokeColor('#b42318')
      .strokeOpacity(1)
      .ellipse(cx, cy, rx, ry)
      .fillAndStroke()
    doc.restore()
  }
}

/**
 * Fotómellékletek — átvétel / leadás, címkézve, sérülésjelöléssel.
 */
function oldalakFotoSorozat(doc, { cim, lista }) {
  if (!Array.isArray(lista) || lista.length === 0) {
    doc.addPage()
    const bal = 48
    doc.font('Helvetica-Bold').fontSize(14).fillColor('#111111')
    doc.text(cim, bal, 48, { width: 500 })
    doc.font('Helvetica').fontSize(10).fillColor('#333333')
    doc.text('Nincs csatolt fotó ehhez a szakaszhoz.', bal, 78, { width: 500 })
    return
  }

  const bal = 48
  const oldalSzelesseg = 499
  const kepSzelesseg = oldalSzelesseg
  const kepMagassag = Math.round((kepSzelesseg * 9) / 16)
  const cimMagassag = 18
  const megjMagassag = 16
  const oldalKepKapacitas = 2
  let index = 0

  while (index < lista.length) {
    doc.addPage()
    let y = 40
    doc.font('Helvetica-Bold').fontSize(14).fillColor('#111111')
    doc.text(cim, bal, y, { width: oldalSzelesseg })
    y = 68

    for (let i = 0; i < oldalKepKapacitas && index < lista.length; i += 1) {
      const elem = lista[index]
      index += 1
      const cimke = fotoCim(elem)
      const vanSerules =
        elem.vanSerules === true ||
        (Array.isArray(elem.korok) && elem.korok.length > 0)

      doc.font('Helvetica-Bold').fontSize(10).fillColor('#111111')
      doc.text(`${index}. ${cimke}`, bal, y, { width: oldalSzelesseg })
      y += cimMagassag

      const fajl = kepFajlUtvonal(elem.kep)
      if (fajl) {
        try {
          doc.image(fajl, bal, y, {
            width: kepSzelesseg,
            height: kepMagassag,
          })
          serulesKorokRajzolasa(
            doc,
            elem.korok,
            bal,
            y,
            kepSzelesseg,
            kepMagassag,
          )
        } catch {
          doc.font('Helvetica').fontSize(9).fillColor('#666666')
          doc.text('(A kép nem olvasható.)', bal, y + 80, {
            width: kepSzelesseg,
            align: 'center',
          })
        }
      } else {
        keret(doc, bal, y, kepSzelesseg, kepMagassag)
        doc.font('Helvetica').fontSize(9).fillColor('#666666')
        doc.text('(Képfájl nem található a szerveren.)', bal, y + 80, {
          width: kepSzelesseg,
          align: 'center',
        })
      }
      y += kepMagassag + 4

      doc.font('Helvetica').fontSize(8).fillColor(vanSerules ? '#b42318' : '#444444')
      doc.text(
        vanSerules
          ? `Sérülés jelölve ezen a nézeten (${Array.isArray(elem.korok) ? elem.korok.length : 0} karika).`
          : 'Sérülés nem jelölve ezen a nézeten.',
        bal,
        y,
        { width: oldalSzelesseg },
      )
      y += megjMagassag + 14
    }
  }
}

/**
 * 1. oldal — SIXT-szerű szállítási megbízás / átvételi igazolás
 */
function oldalSzallitasiMegbizas(doc, { munka, jarmu, felvetel, leadas, rekord }) {
  const bal = 48
  const jobb = 320
  let y = 48

  doc.font('Helvetica-Bold').fontSize(18).fillColor('#111111')
  doc.text(szoveg(munka.megbizo || 'Juliette Logistique'), bal, y)
  doc.font('Helvetica-Bold').fontSize(12)
  doc.text('Szállítási megbízás / átvételi igazolás', bal, y + 26, {
    width: 500,
  })

  y = 90
  doc.font('Helvetica').fontSize(9).fillColor('#222222')
  doc.text(szoveg(rekord.cimzett_nev || rekord.cimzett_email), bal, y)
  doc.text(szoveg(rekord.cimzett_email), bal, y + 12)

  doc.text(`Pullach / generálva: ${datumSor(rekord.completed_at || new Date())}`, jobb, y, {
    width: 220,
    align: 'right',
  })
  doc.text(`Megbízás dátuma: ${datumSor(felvetel.idopont)}`, jobb, y + 14, {
    width: 220,
    align: 'right',
  })
  doc.text(`Megbízás száma: ${szoveg(munka.azonosito || rekord.munka_azonosito)}`, jobb, y + 28, {
    width: 220,
    align: 'right',
  })
  doc.text(`Beszállítás dátuma: ${datumSor(leadas.idopont)}`, jobb, y + 42, {
    width: 220,
    align: 'right',
  })
  doc.text(`Ügyfélszám / sofőr: ${szoveg(rekord.cimzett_email)}`, jobb, y + 56, {
    width: 220,
    align: 'right',
  })

  y = 175
  doc.font('Helvetica').fontSize(10)
  doc.text('Az alábbi jármű(vek) szállításával bízzuk meg Önt:', bal, y)

  y = 200
  const tablaW = [130, 70, 150, 149]
  const fejlecek = ['Jármű', 'Részletek', 'Felvételi hely', 'Leadási hely']
  let x = bal
  keret(doc, bal, y, 499, 22)
  doc.font('Helvetica-Bold').fontSize(8)
  for (let i = 0; i < fejlecek.length; i += 1) {
    doc.text(fejlecek[i], x + 4, y + 7, { width: tablaW[i] - 8 })
    x += tablaW[i]
  }

  y += 22
  const sorMagassag = 78
  keret(doc, bal, y, 499, sorMagassag)
  x = bal
  const jarmuSzoveg = [
    szoveg(jarmu.modell),
    szoveg(jarmu.rendszam),
    szoveg(jarmu.kategoria?.hu),
    szoveg(jarmu.szin?.hu),
  ].join('\n')
  const reszletek = [
    `${szoveg(munka.tavolsagKm)} km`,
    `${szoveg(munka.dijEuro)} EUR`,
    szoveg(jarmu.uzemanyag?.hu),
    szoveg(jarmu.valto?.hu),
  ].join('\n')
  const felvetelSzoveg = [
    szoveg(felvetel.allomas),
    szoveg(felvetel.cim),
    idopontHu(felvetel.idopont),
  ].join('\n')
  const leadasSzoveg = [
    szoveg(leadas.allomas),
    szoveg(leadas.cim),
    idopontHu(leadas.idopont),
  ].join('\n')
  const cellak = [jarmuSzoveg, reszletek, felvetelSzoveg, leadasSzoveg]
  doc.font('Helvetica').fontSize(8)
  for (let i = 0; i < cellak.length; i += 1) {
    doc.text(cellak[i], x + 4, y + 6, {
      width: tablaW[i] - 8,
      height: sorMagassag - 10,
    })
    x += tablaW[i]
  }

  y += sorMagassag + 14
  doc.font('Helvetica-Oblique').fontSize(9)
  doc.text(
    munka.dijEuro != null
      ? `Díj: ${szoveg(munka.dijEuro)} EUR (egyedi ár-megállapodás)`
      : 'egyedi ár-megállapodás',
    bal,
    y,
  )

  y += 36
  doc.font('Helvetica').fontSize(9)
  doc.text('Helyszín, dátum', bal, y)
  doc.text('Sofőr aláírása', 320, y)
  y += 28
  vonal(doc, y, bal, 250)
  vonal(doc, y, 320, 520)

  y += 28
  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('Feltételek', bal, y)
  y += 14
  doc.font('Helvetica').fontSize(8).fillColor('#222222')
  const feltetelek = [
    'Ha a jármű nyári gumival van felszerelve, és az átvevő állomáson, a leadási helyen vagy az oda vezető úton téli időjárási viszonyok (jegesedés, hó, latyak) állnak fenn, a járművet nem szabad szállítani. Ilyen esetben a megbízás megkezdése előtt vegye fel a kapcsolatot a megbízó kapcsolattartójával.',
    'Be- és kirakodás csak az ismert nyitvatartási időben! A fuvarozó köteles ellenőrizni, hogy a megbízott és a berakodott jármű megegyezik-e, és minden eltérést azonnal jelentenie kell.',
    'Ez géppel létrehozott megbízás, és aláírás nélkül is jogilag érvényes.',
  ]
  for (const sz of feltetelek) {
    doc.text(`• ${sz}`, bal, y, { width: 499, align: 'justify' })
    y = doc.y + 8
  }

  if (Array.isArray(munka.teendok?.hu) && munka.teendok.hu.length) {
    y += 6
    doc.font('Helvetica-Bold').fontSize(9)
    doc.text('Teendők', bal, y)
    y += 12
    doc.font('Helvetica').fontSize(8)
    for (const t of munka.teendok.hu) {
      doc.text(`• ${t}`, bal, y, { width: 499 })
      y = doc.y + 4
    }
  }
}

/**
 * 2. oldal — ONLOGIST-szerű megbízás-visszaigazolás
 */
function oldalMegbizasVisszaigazolas(doc, { munka, jarmu, felvetel, leadas, rekord, payload }) {
  const bal = 48
  let y = 48

  doc.font('Helvetica-Bold').fontSize(14).fillColor('#111111')
  doc.text(
    `Megbízás-visszaigazolás — ID-#: ${szoveg(munka.azonosito || rekord.munka_azonosito)}`,
    bal,
    y,
    { width: 500 },
  )

  y = 78
  keret(doc, bal, y, 499, 72)
  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('Szolgáltató', bal + 8, y + 8)
  doc.font('Helvetica').fontSize(9)
  doc.text(szoveg(rekord.cimzett_nev || rekord.cimzett_email), bal + 8, y + 22)
  doc.text(szoveg(rekord.cimzett_email), bal + 8, y + 36)

  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('Megbízó', 300, y + 8)
  doc.font('Helvetica').fontSize(9)
  doc.text(szoveg(munka.megbizo), 300, y + 22)
  doc.text('Juliette Logistique belső rendszer', 300, y + 36)

  y = 168
  doc.font('Helvetica').fontSize(10)
  y = cimkeErtek(doc, 'ID-#', munka.azonosito || rekord.munka_azonosito, bal, y, 500)
  y = cimkeErtek(doc, 'UNIT-ID / rendszám', jarmu.rendszam, bal, y + 4, 500)
  y = cimkeErtek(doc, 'Modell', jarmu.modell, bal, y + 4, 500)
  y = cimkeErtek(doc, 'Kategória', jarmu.kategoria?.hu, bal, y + 4, 500)
  y = cimkeErtek(doc, 'Belső szám', rekord.id, bal, y + 4, 500)

  y += 16
  doc.font('Helvetica-Bold').fontSize(10)
  doc.text(
    `Legkorábbi felvételi idő: ${idopontHu(felvetel.idopont, { hetnap: true })}`,
    bal,
    y,
    { width: 500 },
  )

  y += 22
  keret(doc, bal, y, 499, 88)
  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('HONNAN', bal + 8, y + 8)
  doc.font('Helvetica').fontSize(9)
  doc.text(szoveg(felvetel.allomas), bal + 8, y + 22, { width: 230 })
  doc.text(szoveg(felvetel.cim), bal + 8, y + 36, { width: 230 })
  doc.text(szoveg(felvetel.telefon), bal + 8, y + 50)
  doc.text(szoveg(felvetel.nyitvatartas?.hu), bal + 8, y + 64, { width: 230 })

  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('HOVA', 300, y + 8)
  doc.font('Helvetica').fontSize(9)
  doc.text(szoveg(leadas.allomas), 300, y + 22, { width: 230 })
  doc.text(szoveg(leadas.cim), 300, y + 36, { width: 230 })
  doc.text(szoveg(leadas.telefon), 300, y + 50)
  doc.text(szoveg(leadas.nyitvatartas?.hu), 300, y + 64, { width: 230 })

  y += 102
  doc.font('Helvetica-Bold').fontSize(10)
  doc.text(
    `Legkésőbbi érkezési idő: ${idopontHu(leadas.idopont, { hetnap: true })}`,
    bal,
    y,
    { width: 500 },
  )
  y += 16
  doc.font('Helvetica').fontSize(9)
  doc.text(
    `Távolság: ${szoveg(munka.tavolsagKm)} km · Menetidő: ${szoveg(munka.menetidoPerc)} perc · Díj: ${szoveg(munka.dijEuro)} EUR`,
    bal,
    y,
    { width: 500 },
  )

  y += 24
  keret(doc, bal, y, 499, 120)
  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('Megjegyzés / Info', bal + 8, y + 8)
  doc.font('Helvetica').fontSize(8)
  const infok = []
  if (Array.isArray(munka.megjegyzesek?.hu)) {
    infok.push(...munka.megjegyzesek.hu)
  }
  if (felvetel.utasitas?.hu) {
    infok.push(`Felvétel: ${felvetel.utasitas.hu}`)
  }
  if (leadas.utasitas?.hu) {
    infok.push(`Leadás: ${leadas.utasitas.hu}`)
  }
  doc.text(
    infok.length ? infok.map((s) => `• ${s}`).join('\n') : '—',
    bal + 8,
    y + 22,
    { width: 483, height: 90 },
  )

  y += 136
  doc.font('Helvetica-Bold').fontSize(9)
  doc.text('Dokumentált sérülések (összefoglaló)', bal, y)
  y += 14
  doc.font('Helvetica').fontSize(8)
  doc.text(
    `Átvételkor: ${serulesOsszegzes(fotoLista(payload, 'felvetel'))}`,
    bal,
    y,
    { width: 500 },
  )
  y = doc.y + 6
  doc.text(
    `Leadáskor: ${serulesOsszegzes(fotoLista(payload, 'leadas'))}`,
    bal,
    y,
    { width: 500 },
  )
  y = doc.y + 8
  doc.font('Helvetica-Oblique').fontSize(8).fillColor('#555555')
  doc.text(
    'A teljes fotósorozat a következő oldalakon, nézetenként címkézve, a sérülésjelölésekkel együtt.',
    bal,
    y,
    { width: 500 },
  )

  y = doc.y + 20
  doc.font('Helvetica').fontSize(8).fillColor('#555555')
  doc.text(
    `Leadás lezárva: ${idopontHu(rekord.completed_at)} · Generálva: ${idopontHu(new Date())}`,
    bal,
    y,
    { width: 500 },
  )
}

/**
 * Teljes elvégzett-munka jelentés PDF — a két megbízásminta alapján.
 */
export function elvegzettMunkaPdfBuffer(rekord) {
  const payload =
    typeof rekord.payload === 'string'
      ? JSON.parse(rekord.payload)
      : rekord.payload || {}
  const munka = payload.munka || {}
  const jarmu = munka.jarmu || {}
  const felvetel = munka.felvetel || {}
  const leadas = munka.leadas || {}
  const ctx = { munka, jarmu, felvetel, leadas, rekord, payload }

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      margin: 48,
      size: 'A4',
      info: {
        Title: `Jelentés ${munka.azonosito || rekord.munka_azonosito || ''}`,
        Author: 'Juliette Logistique',
      },
    })
    const chunks = []
    doc.on('data', (c) => chunks.push(c))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    oldalSzallitasiMegbizas(doc, ctx)
    doc.addPage()
    oldalMegbizasVisszaigazolas(doc, ctx)
    oldalakFotoSorozat(doc, {
      cim: 'Átvételi fotók (felvétel)',
      lista: fotoLista(payload, 'felvetel'),
    })
    oldalakFotoSorozat(doc, {
      cim: 'Leadási fotók',
      lista: fotoLista(payload, 'leadas'),
    })

    doc.end()
  })
}
