import type { SzerkeszthetoTartalom } from '../api/jelentkezesApi'

/** Alapértelmezés, ha az API nem érhető el vagy egy mező üres. */
export const weboldalTartalomAlap: SzerkeszthetoTartalom = {
  cegnev: 'Juliette Logistique',
  telefonszam: '+49 157 35 88 47 88',
  email: '',
  cim: '',
  terulet: '',
  elerhetoseg: '',
}
