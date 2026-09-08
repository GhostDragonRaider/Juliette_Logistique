export type FeltoltesKulcs =
  | 'szemelyi'
  | 'jogositvany'
  | 'fuehrungszeugnis'
  | 'oneletrajz'
  | 'profilkep'
  | 'referencia'

export type UrlapAllapot = {
  teljesNev: string
  szuletesiDatum: string
  telefon: string
  email: string
  lakhely: string
  orszag: string
  bJogositvanyEve: string
  professzionalisEv: string
  soforkentNemetorszag: string
  korabbiTerulet: string[]
  korabbiTeruletEgyeb: string
  premiumTapasztalat: string
  premiumMarkak: string[]
  premiumMarkaEgyeb: string
  premiumGyakorisag: string
  automataValto: string
  munkavallalasiJog: string
  nemetorszagiCim: string
  munkabaAllas: string
  rugalmassag: string
  jogositvanyKategoria: string[]
  jogositvanyEgyeb: string
  jogositvanyErvenyes: string
  eltiltas: string
  erkolesi: string
  nemetNyelv: string
  angolNyelv: string
  okostelefon: string
  navigacio: string
  gpsKovetes: string
  hosszuUt: string
  hetvege: string
  tobbnapos: string
  hetiNapok: string
  haromEvAktiv: string
  haromEvProf: string
  premiumSzuro: string
  biztonsagosVezetes: string
  gondosKezeles: string
  ellenorzesElfogadas: string
  motivacio: string
  tapasztalatLeiras: string
  adatvedelem: boolean
  hozzajarulas: boolean
  feltoltesek: Record<FeltoltesKulcs, File | null>
}
