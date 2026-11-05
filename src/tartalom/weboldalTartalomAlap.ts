import type { SzerkeszthetoTartalom } from '../api/jelentkezesApi'

/** Alapértelmezés, ha az API nem érhető el vagy egy mező üres. */
export const weboldalTartalomAlap: SzerkeszthetoTartalom = {
  cegnev: 'Juliette Logistique',
  telefonszam: '+49 155 10 93 0734',
  email: 'info@juliettelogistique.de',
  cim: '',
  terulet: 'Deutschland und Europa',
  elerhetoseg: 'Montag–Freitag, 08:00–18:00 (CET)',
}
