;(() => {
  const STORAGE_KEY = 'jl.cookie-consent'
  const COOKIE_NAME = 'jl_consent'
  const VERSION = 1
  const CATEGORIES = ['necessary', 'preferences', 'analytics', 'marketing']

  const I18N = {
    de: {
      title: 'Cookie-Einstellungen',
      bannerTitle: 'Wir verwenden Cookies',
      bannerText:
        'Wir nutzen notwendige Cookies für den Betrieb der Website. Optionale Cookies helfen uns bei Einstellungen, Statistik und Marketing – nur mit Ihrer Zustimmung.',
      privacy: 'Datenschutz',
      privacyHref: '/adatvedelmi',
      acceptAll: 'Alle akzeptieren',
      reject: 'Nur notwendige',
      customize: 'Einstellungen',
      save: 'Auswahl speichern',
      close: 'Schließen',
      fab: 'Cookies',
      lead: 'Wählen Sie, welche Cookie-Kategorien Sie zulassen. Notwendige Cookies sind immer aktiv.',
      cats: {
        necessary: {
          title: 'Notwendig',
          desc: 'Erforderlich für Sicherheit, Anmeldung und grundlegende Funktionen. Können nicht deaktiviert werden.',
        },
        preferences: {
          title: 'Einstellungen',
          desc: 'Speichern z. B. Sprache und Anzeigeeinstellungen für Ihren nächsten Besuch.',
        },
        analytics: {
          title: 'Statistik',
          desc: 'Helfen uns zu verstehen, wie die Website genutzt wird – anonymisiert, soweit möglich.',
        },
        marketing: {
          title: 'Marketing',
          desc: 'Können für personalisierte Angebote und externe Werbeinhalte verwendet werden.',
        },
      },
    },
    en: {
      title: 'Cookie settings',
      bannerTitle: 'We use cookies',
      bannerText:
        'We use necessary cookies to run the site. Optional cookies support preferences, analytics and marketing — only with your consent.',
      privacy: 'Privacy policy',
      privacyHref: '/adatvedelmi',
      acceptAll: 'Accept all',
      reject: 'Necessary only',
      customize: 'Settings',
      save: 'Save choices',
      close: 'Close',
      fab: 'Cookies',
      lead: 'Choose which cookie categories you allow. Necessary cookies are always on.',
      cats: {
        necessary: {
          title: 'Necessary',
          desc: 'Required for security, sign-in and core features. Cannot be turned off.',
        },
        preferences: {
          title: 'Preferences',
          desc: 'Remember language and display choices for your next visit.',
        },
        analytics: {
          title: 'Analytics',
          desc: 'Help us understand how the site is used — anonymised where possible.',
        },
        marketing: {
          title: 'Marketing',
          desc: 'May be used for personalised offers and third-party advertising content.',
        },
      },
    },
    hu: {
      title: 'Süti beállítások',
      bannerTitle: 'Sütiket használunk',
      bannerText:
        'A weboldal működéséhez szükséges sütiket használunk. Az opcionális sütik a beállításokhoz, statisztikához és marketinghez szolgálnak — csak az Ön hozzájárulásával.',
      privacy: 'Adatvédelem',
      privacyHref: '/adatvedelmi',
      acceptAll: 'Összes elfogadása',
      reject: 'Csak szükséges',
      customize: 'Beállítások',
      save: 'Választás mentése',
      close: 'Bezárás',
      fab: 'Sütik',
      lead: 'Válassza ki, mely süti-kategóriákat engedélyezi. A szükséges sütik mindig aktívak.',
      cats: {
        necessary: {
          title: 'Szükséges',
          desc: 'Biztonsághoz, bejelentkezéshez és az alapfunkciókhoz kellenek. Nem kapcsolhatók ki.',
        },
        preferences: {
          title: 'Beállítások',
          desc: 'Nyelv és megjelenítési preferenciák megjegyzése a következő látogatásra.',
        },
        analytics: {
          title: 'Statisztika',
          desc: 'Segítenek megérteni a weboldal használatát — ahol lehet, anonim módon.',
        },
        marketing: {
          title: 'Marketing',
          desc: 'Személyre szabott ajánlatokhoz és külső hirdetési tartalmakhoz használhatók.',
        },
      },
    },
  }

  function detectLang() {
    const raw = (document.documentElement.lang || 'de').slice(0, 2).toLowerCase()
    return I18N[raw] ? raw : 'de'
  }

  function t() {
    return I18N[detectLang()]
  }

  function defaultConsent(partial = {}) {
    return {
      version: VERSION,
      necessary: true,
      preferences: Boolean(partial.preferences),
      analytics: Boolean(partial.analytics),
      marketing: Boolean(partial.marketing),
      updatedAt: new Date().toISOString(),
    }
  }

  function readStored() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return null
      const data = JSON.parse(raw)
      if (!data || data.version !== VERSION) return null
      return defaultConsent(data)
    } catch {
      return null
    }
  }

  function writeCookie(consent) {
    const payload = [
      consent.necessary ? '1' : '0',
      consent.preferences ? '1' : '0',
      consent.analytics ? '1' : '0',
      consent.marketing ? '1' : '0',
      String(VERSION),
    ].join('')
    const maxAge = 60 * 60 * 24 * 180
    const secure = location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${COOKIE_NAME}=${payload}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`
  }

  function persist(consent) {
    const next = defaultConsent(consent)
    next.necessary = true
    next.updatedAt = new Date().toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    writeCookie(next)
    state.consent = next
    document.documentElement.dataset.jlConsent = [
      next.preferences ? 'preferences' : '',
      next.analytics ? 'analytics' : '',
      next.marketing ? 'marketing' : '',
    ]
      .filter(Boolean)
      .concat('necessary')
      .join(' ')
    window.dispatchEvent(
      new CustomEvent('jl:cookie-consent', { detail: { ...next } }),
    )
    return next
  }

  function has(category) {
    if (category === 'necessary') return true
    const c = state.consent
    return Boolean(c && c[category])
  }

  const state = {
    consent: readStored(),
    bannerOpen: false,
    modalOpen: false,
  }

  let root
  let bannerEl
  let overlayEl
  let fabEl

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag)
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'className') node.className = v
      else if (k === 'text') node.textContent = v
      else if (k === 'html') node.innerHTML = v
      else if (k.startsWith('on') && typeof v === 'function')
        node.addEventListener(k.slice(2).toLowerCase(), v)
      else if (v !== undefined && v !== null) node.setAttribute(k, String(v))
    }
    for (const child of [].concat(children)) {
      if (child == null) continue
      node.appendChild(
        typeof child === 'string' ? document.createTextNode(child) : child,
      )
    }
    return node
  }

  function categoryRow(key, draft, locked) {
    const copy = t().cats[key]
    const input = el('input', {
      type: 'checkbox',
      'aria-label': copy.title,
    })
    input.checked = Boolean(draft[key])
    input.disabled = Boolean(locked)
    input.addEventListener('change', () => {
      if (!locked) draft[key] = input.checked
    })
    return el('div', { className: 'jl-cc-cat' }, [
      el('div', { className: 'jl-cc-cat-head' }, [
        el('h3', { className: 'jl-cc-cat-title', text: copy.title }),
        el('label', { className: 'jl-cc-switch' }, [input, el('span')]),
      ]),
      el('p', { className: 'jl-cc-cat-desc', text: copy.desc }),
    ])
  }

  function renderModal() {
    const copy = t()
    const draft = defaultConsent(
      state.consent || {
        preferences: false,
        analytics: false,
        marketing: false,
      },
    )
    const panel = el('div', {
      className: 'jl-cc-modal',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': 'jl-cc-modal-title',
    })
    panel.append(
      el('h2', { id: 'jl-cc-modal-title', text: copy.title }),
      el('p', { className: 'jl-cc-modal-lead', text: copy.lead }),
    )
    for (const key of CATEGORIES) {
      panel.appendChild(categoryRow(key, draft, key === 'necessary'))
    }
    panel.appendChild(
      el('div', { className: 'jl-cc-actions' }, [
        el('button', {
          type: 'button',
          className: 'jl-cc-btn jl-cc-btn-primary',
          text: copy.save,
          onClick: () => {
            persist(draft)
            closeModal()
            hideBanner()
            showFab()
          },
        }),
        el('button', {
          type: 'button',
          className: 'jl-cc-btn',
          text: copy.acceptAll,
          onClick: () => {
            persist({
              preferences: true,
              analytics: true,
              marketing: true,
            })
            closeModal()
            hideBanner()
            showFab()
          },
        }),
        el('button', {
          type: 'button',
          className: 'jl-cc-btn',
          text: copy.close,
          onClick: () => closeModal(),
        }),
      ]),
    )
    return panel
  }

  function openModal() {
    closeModal()
    state.modalOpen = true
    overlayEl = el(
      'div',
      {
        className: 'jl-cc-overlay',
        onClick: (e) => {
          if (e.target === overlayEl) closeModal()
        },
      },
      [renderModal()],
    )
    document.body.appendChild(overlayEl)
    overlayEl.querySelector('button')?.focus()
  }

  function closeModal() {
    state.modalOpen = false
    overlayEl?.remove()
    overlayEl = null
  }

  function renderBanner() {
    const copy = t()
    bannerEl = el('div', {
      className: 'jl-cc-banner',
      role: 'region',
      'aria-label': copy.bannerTitle,
    })
    bannerEl.append(
      el('p', { className: 'jl-cc-banner-title', text: copy.bannerTitle }),
      el('p', {
        className: 'jl-cc-banner-text',
        html: `${escapeHtml(copy.bannerText)} <a href="${copy.privacyHref}">${escapeHtml(copy.privacy)}</a>`,
      }),
      el('div', { className: 'jl-cc-actions' }, [
        el('button', {
          type: 'button',
          className: 'jl-cc-btn jl-cc-btn-primary',
          text: copy.acceptAll,
          onClick: () => {
            persist({
              preferences: true,
              analytics: true,
              marketing: true,
            })
            hideBanner()
            showFab()
          },
        }),
        el('button', {
          type: 'button',
          className: 'jl-cc-btn',
          text: copy.reject,
          onClick: () => {
            persist({
              preferences: false,
              analytics: false,
              marketing: false,
            })
            hideBanner()
            showFab()
          },
        }),
        el('button', {
          type: 'button',
          className: 'jl-cc-btn',
          text: copy.customize,
          onClick: () => openModal(),
        }),
      ]),
    )
    root.appendChild(bannerEl)
    state.bannerOpen = true
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function hideBanner() {
    state.bannerOpen = false
    bannerEl?.remove()
    bannerEl = null
  }

  function showFab() {
    fabEl?.remove()
    fabEl = el('button', {
      type: 'button',
      className: 'jl-cc-fab',
      text: t().fab,
      'aria-label': t().title,
      onClick: () => openModal(),
    })
    root.appendChild(fabEl)
  }

  function refreshCopy() {
    if (state.modalOpen) openModal()
    if (state.bannerOpen) {
      hideBanner()
      renderBanner()
    }
    if (fabEl) {
      fabEl.textContent = t().fab
      fabEl.setAttribute('aria-label', t().title)
    }
  }

  function init() {
    if (document.getElementById('jl-cookie-consent-root')) return
    root = el('div', { id: 'jl-cookie-consent-root', className: 'jl-cc-root' })
    document.body.appendChild(root)

    if (state.consent) {
      persist(state.consent)
      showFab()
    } else {
      renderBanner()
    }

    new MutationObserver(refreshCopy).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang'],
    })

    document.addEventListener('jl:open-cookie-settings', () => openModal())
  }

  window.jlCookieConsent = {
    getConsent: () => (state.consent ? { ...state.consent } : null),
    has,
    openSettings: () => openModal(),
    acceptAll: () =>
      persist({ preferences: true, analytics: true, marketing: true }),
    rejectOptional: () =>
      persist({ preferences: false, analytics: false, marketing: false }),
    onChange(cb) {
      const handler = (e) => cb(e.detail)
      window.addEventListener('jl:cookie-consent', handler)
      return () => window.removeEventListener('jl:cookie-consent', handler)
    },
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
