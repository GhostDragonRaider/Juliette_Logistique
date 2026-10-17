import crypto from 'node:crypto'
import rateLimit, { ipKeyGenerator } from 'express-rate-limit'

const CSRF_HEADER = 'x-csrf-token'

/**
 * Bejelentkezett belső felhasználó kötelező.
 */
export function belsoFelhasznaloKotelezo(req, res, next) {
  const userId = req.session?.belsoUserId
  if (!userId) {
    res.status(401).json({ hiba: 'Bejelentkezés szükséges.' })
    return
  }
  req.belsoUserId = userId
  next()
}

const CSRF_COOKIE = 'jl.xsrf'
const secureCookie = process.env.NODE_ENV === 'production'

/**
 * CSRF token kiadása (cookie + opcionálisan session).
 */
export function csrfTokenKiadasa(req, res) {
  const token = crypto.randomBytes(32).toString('base64url')
  res.cookie(CSRF_COOKIE, token, {
    httpOnly: false,
    sameSite: 'lax',
    secure: secureCookie,
    maxAge: 60 * 60 * 1000,
    path: '/',
  })
  if (req.session) {
    req.session.csrfToken = token
  }
  return token
}

/**
 * Állapotváltoztató kérések CSRF ellenőrzése (fejléc + cookie/session).
 */
function tokenEgyezik(expected, headerToken) {
  if (!expected || !headerToken || headerToken.length !== expected.length) {
    return false
  }
  return crypto.timingSafeEqual(Buffer.from(headerToken), Buffer.from(expected))
}

export function csrfEllenorzes(req, res, next) {
  const headerToken = String(req.headers[CSRF_HEADER] || '')
  const cookieToken = String(req.cookies?.[CSRF_COOKIE] || '')
  const sessionToken = String(req.session?.csrfToken || '')
  if (
    tokenEgyezik(sessionToken, headerToken) ||
    tokenEgyezik(cookieToken, headerToken)
  ) {
    next()
    return
  }
  res.status(403).json({ hiba: 'Érvénytelen kérés.' })
}

export function csrfTokenBiztosit(req, res) {
  return csrfTokenKiadasa(req, res)
}

export const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { hiba: 'Túl sok bejelentkezési kísérlet. Próbálja újra később.' },
  keyGenerator(req) {
    const email = String(req.body?.email || '').toLowerCase()
    return `${ipKeyGenerator(req.ip)}:${email}`
  },
})

export { CSRF_HEADER }
