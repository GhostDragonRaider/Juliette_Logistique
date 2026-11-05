/**
 * A nyilvános oldal görgethető gyökére — nem a window (fix fejléc stabil marad).
 */
export function gorgetesiGyoker(): HTMLElement {
  const gyoker = document.getElementById('root')
  if (!gyoker) {
    throw new Error('Nem található a #root görgetési konténer.')
  }
  return gyoker
}

/**
 * A böngésző focus/scrollIntoView gyakran a window-t görgeti,
 * miközben a tartalom a #root-ban van → üres fekete képernyő.
 * Az eltérést visszavezeti a #root-ra.
 */
export function documentGorgetesVisszavonasa(): number {
  const html = document.documentElement
  const body = document.body
  const delta = window.scrollY || html.scrollTop || body.scrollTop || 0
  if (delta === 0) {
    return 0
  }

  window.scrollTo(0, 0)
  html.scrollTop = 0
  body.scrollTop = 0

  const gyoker = document.getElementById('root')
  if (gyoker) {
    gyoker.scrollTo({ top: gyoker.scrollTop + delta, left: 0, behavior: 'auto' })
  }

  return delta
}

/** Az oldal tetejére görget a belső konténerben. */
export function oldalTetejereGorget(behavior: ScrollBehavior = 'auto') {
  documentGorgetesVisszavonasa()
  gorgetesiGyoker().scrollTo({ top: 0, left: 0, behavior })
}

/**
 * Elemet a #root görgetőben láthatóvá tesz (window.scrollIntoView helyett).
 */
export function elemLathatovaGorget(
  elem: Element,
  options: {
    behavior?: ScrollBehavior
    block?: 'start' | 'center' | 'end' | 'nearest'
  } = {},
) {
  const behavior = options.behavior ?? 'smooth'
  const block = options.block ?? 'start'
  const gyoker = gorgetesiGyoker()

  documentGorgetesVisszavonasa()

  const gyokerDoboz = gyoker.getBoundingClientRect()
  const elemDoboz = elem.getBoundingClientRect()
  const paddingTop = Number.parseFloat(getComputedStyle(gyoker).scrollPaddingTop) || 0
  const paddingBottom =
    Number.parseFloat(getComputedStyle(gyoker).scrollPaddingBottom) || 0

  let delta = 0
  if (block === 'start') {
    delta = elemDoboz.top - gyokerDoboz.top - paddingTop
  } else if (block === 'center') {
    delta =
      elemDoboz.top -
      gyokerDoboz.top -
      gyoker.clientHeight / 2 +
      elemDoboz.height / 2
  } else if (block === 'end') {
    delta = elemDoboz.bottom - gyokerDoboz.bottom + paddingBottom
  } else {
    if (elemDoboz.top < gyokerDoboz.top + paddingTop) {
      delta = elemDoboz.top - gyokerDoboz.top - paddingTop
    } else if (elemDoboz.bottom > gyokerDoboz.bottom - paddingBottom) {
      delta = elemDoboz.bottom - gyokerDoboz.bottom + paddingBottom
    }
  }

  if (Math.abs(delta) > 1) {
    gyoker.scrollTo({ top: gyoker.scrollTop + delta, left: 0, behavior })
  }
}
