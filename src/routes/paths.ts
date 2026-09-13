/*
 * A domain gyökere a karrier oldalra irányít át: az oldal elsődleges célja
 * jelenleg a sofőrkeresés, ezért a belépő tartalom a munka bemutatása.
 * A marketing főoldal ettől függetlenül elérhető a `home` útvonalon.
 */
export const paths = {
  root: '/',
  home: '/startseite',
  services: '/leistungen',
  about: '/ueber-uns',
  partners: '/partner',
  contact: '/kontakt',
  careers: '/karriere',
  apply: '/karriere/bewerbung',
  admin: '/admin',
} as const

/** Ahova a gyökér útvonal átirányít. */
export const landingPath = paths.careers

export type Path = (typeof paths)[keyof typeof paths]
