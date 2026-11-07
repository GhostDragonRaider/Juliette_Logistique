;(() => {
  /**
   * A nyilvános SPA a #root-ban görget; a böngésző focus/scrollIntoView
   * viszont gyakran a window-t mozgatja → üres fekete képernyő (jelentkezés 2. szekció).
   */
  function ensureFixedRoot() {
    const root = document.getElementById('root')
    if (!root) return null
    const style = root.style
    if (style.position !== 'fixed') {
      style.position = 'fixed'
      style.inset = '0'
      style.width = '100%'
      style.height = '100%'
      style.overflowX = 'clip'
      style.overflowY = 'auto'
    }
    return root
  }

  function documentGorgetesVisszavonasa() {
    const html = document.documentElement
    const body = document.body
    const delta = window.scrollY || html.scrollTop || body.scrollTop || 0
    if (!delta) return 0
    window.scrollTo(0, 0)
    html.scrollTop = 0
    body.scrollTop = 0
    const root = ensureFixedRoot()
    if (root) {
      root.scrollTo({ top: root.scrollTop + delta, left: 0, behavior: 'auto' })
    }
    return delta
  }

  function elemLathatovaGorget(elem) {
    const root = ensureFixedRoot()
    if (!root || !elem || !(elem instanceof Element)) return
    documentGorgetesVisszavonasa()
    const gyokerDoboz = root.getBoundingClientRect()
    const elemDoboz = elem.getBoundingClientRect()
    const paddingTop = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0
    const paddingBottom = Number.parseFloat(getComputedStyle(root).scrollPaddingBottom) || 0
    let delta = 0
    if (elemDoboz.top < gyokerDoboz.top + paddingTop) {
      delta = elemDoboz.top - gyokerDoboz.top - paddingTop
    } else if (elemDoboz.bottom > gyokerDoboz.bottom - paddingBottom) {
      delta = elemDoboz.bottom - gyokerDoboz.bottom + paddingBottom
    }
    if (Math.abs(delta) > 1) {
      root.scrollTo({ top: root.scrollTop + delta, left: 0, behavior: 'auto' })
    }
  }

  function javitFokuszUtan(cel) {
    documentGorgetesVisszavonasa()
    const root = ensureFixedRoot()
    if (cel instanceof HTMLElement && root && root.contains(cel)) {
      elemLathatovaGorget(cel)
    }
  }

  function boot() {
    ensureFixedRoot()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }

  window.addEventListener(
    'scroll',
    () => {
      documentGorgetesVisszavonasa()
    },
    { passive: true },
  )

  document.addEventListener('focusin', (e) => {
    const cel = e.target
    requestAnimationFrame(() => {
      requestAnimationFrame(() => javitFokuszUtan(cel))
    })
    setTimeout(() => javitFokuszUtan(cel), 50)
    setTimeout(() => javitFokuszUtan(cel), 150)
  })
})()
