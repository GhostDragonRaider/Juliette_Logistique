import type { SzerkeszthetoTartalom } from '../api/jelentkezesApi'

type KapcsolatForditasErtekek = {
  teruletErtek: string
  idopontErtek: string
}

/** Admin tartalom + fordítás fallback a kapcsolat oldalon. */
export function kapcsolatMegjelenitettErtekek(
  tartalom: SzerkeszthetoTartalom,
  forditas: KapcsolatForditasErtekek,
) {
  return {
    terulet: tartalom.terulet.trim() || forditas.teruletErtek,
    elerhetoseg: tartalom.elerhetoseg.trim() || forditas.idopontErtek,
    email: tartalom.email.trim(),
    cim: tartalom.cim.trim(),
  }
}
