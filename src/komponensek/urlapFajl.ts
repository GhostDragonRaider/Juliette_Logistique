/** Igazolvány-kép max. méret (px) — hosszabb oldal illeszkedik ebbe a kerethez */
const PROFIL_MAX_SZELESSEG = 1050
const PROFIL_MAX_MAGASSAG = 660

const KEP_MIME = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
])

export function fajlKepVagyPdf(fajl: File) {
  if (fajl.type === 'application/pdf') return true
  return KEP_MIME.has(fajl.type) || /\.(jpe?g|png|webp)$/i.test(fajl.name)
}

export function fajlCsakPdf(fajl: File) {
  return (
    fajl.type === 'application/pdf' ||
    fajl.name.toLowerCase().endsWith('.pdf')
  )
}

export function fajlCsakKep(fajl: File) {
  return KEP_MIME.has(fajl.type) || /\.(jpe?g|png|webp)$/i.test(fajl.name)
}

/**
 * Profilkép: max. igazolvány-méretű keretbe skálázás, JPEG tömörítés.
 */
export async function profilkepNormalizal(fajl: File): Promise<File> {
  if (!fajlCsakKep(fajl)) {
    throw new Error('A profilkép csak JPG, PNG vagy WebP lehet.')
  }

  const url = URL.createObjectURL(fajl)
  try {
    const kep = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('A kép nem olvasható.'))
      img.src = url
    })

    let { width, height } = kep
    const arany = width / height
    const maxArany = PROFIL_MAX_SZELESSEG / PROFIL_MAX_MAGASSAG

    if (width > PROFIL_MAX_SZELESSEG || height > PROFIL_MAX_MAGASSAG) {
      if (arany >= maxArany) {
        width = PROFIL_MAX_SZELESSEG
        height = Math.round(width / arany)
      } else {
        height = PROFIL_MAX_MAGASSAG
        width = Math.round(height * arany)
      }
    }

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('A kép átméretezése nem sikerült.')
    }
    ctx.drawImage(kep, 0, 0, width, height)

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error('A kép mentése nem sikerült.'))),
        'image/jpeg',
        0.88,
      )
    })

    const alapNev = fajl.name.replace(/\.[^.]+$/, '') || 'profilkep'
    return new File([blob], `${alapNev}-igazolvany.jpg`, {
      type: 'image/jpeg',
      lastModified: Date.now(),
    })
  } finally {
    URL.revokeObjectURL(url)
  }
}

export function feltoltesTipusUzenet(
  kulcs: 'szemelyi' | 'jogositvany' | 'fuehrungszeugnis' | 'oneletrajz' | 'profilkep' | 'referencia',
) {
  switch (kulcs) {
    case 'oneletrajz':
    case 'referencia':
      return 'Csak PDF formátum engedélyezett.'
    case 'profilkep':
      return 'Csak képfájl (JPG, PNG, WebP) engedélyezett.'
    default:
      return 'Csak kép (JPG, PNG, WebP) vagy PDF engedélyezett.'
  }
}

export function ellenorizFeltoltesFajl(
  kulcs: 'szemelyi' | 'jogositvany' | 'fuehrungszeugnis' | 'oneletrajz' | 'profilkep' | 'referencia',
  fajl: File,
): string | null {
  switch (kulcs) {
    case 'oneletrajz':
    case 'referencia':
      return fajlCsakPdf(fajl) ? null : feltoltesTipusUzenet(kulcs)
    case 'profilkep':
      return fajlCsakKep(fajl) ? null : feltoltesTipusUzenet(kulcs)
    default:
      return fajlKepVagyPdf(fajl) ? null : feltoltesTipusUzenet(kulcs)
  }
}
