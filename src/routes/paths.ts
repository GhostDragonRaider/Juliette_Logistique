export const paths = {
  home: '/',
  services: '/leistungen',
  about: '/ueber-uns',
  partners: '/partner',
  contact: '/kontakt',
  careers: '/karriere',
  apply: '/karriere/bewerbung',
  admin: '/admin',
} as const

export type Path = (typeof paths)[keyof typeof paths]
