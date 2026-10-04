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

/** Az oldal tetejére görget a belső konténerben. */
export function oldalTetejereGorget(behavior: ScrollBehavior = 'auto') {
  gorgetesiGyoker().scrollTo({ top: 0, left: 0, behavior })
}
