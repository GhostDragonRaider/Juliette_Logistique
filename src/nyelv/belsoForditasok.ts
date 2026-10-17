import type { NyelvKod } from './nyelvTipusok'

export type BelsoForditas = {
  bejelentkezes: string
  vezerlopult: string
  bejelentkezesAria: string
  belepésCim: string
  belepesCim: string
  emailCimke: string
  jelszoCimke: string
  jelszoMutat: string
  jelszoElrejt: string
  bejelentkezesGomb: string
  belepesGomb: string
  belepesFut: string
  belepésHibaAlt: string
  belepesHibaAlt: string
  visszaNyilvanos: string
  vezerlopultCim: string
  menuNyit: string
  menuBezar: string
  navAria: string
  sajatAdataim: string
  kijelentkezes: string
  udvozletCim: string
  udvozletSzoveg: string
  vezeteknev: string
  keresztnev: string
  telefon: string
  szuletesiDatum: string
  orszag: string
  iranyitoszam: string
  varos: string
  lakcim: string
  mentesGomb: string
  mentesFut: string
  mentesSiker: string
  mentesHiba: string
  tesztBelepesSegitseg: string
}

const hu: BelsoForditas = {
  bejelentkezes: 'BEJELENTKEZÉS',
  vezerlopult: 'VEZÉRLŐPULT',
  bejelentkezesAria: 'Bejelentkezés a belső rendszerbe',
  belepésCim: 'BEJELENTKEZÉS',
  belepesCim: 'BEJELENTKEZÉS',
  emailCimke: 'E-mail-cím',
  jelszoCimke: 'Jelszó',
  jelszoMutat: 'Mutat',
  jelszoElrejt: 'Elrejt',
  bejelentkezesGomb: 'Bejelentkezés',
  belepesGomb: 'Bejelentkezés',
  belepesFut: 'Bejelentkezés…',
  belepésHibaAlt: 'Bejelentkezés sikertelen.',
  belepesHibaAlt: 'Bejelentkezés sikertelen.',
  visszaNyilvanos: 'Vissza a nyilvános oldalra',
  vezerlopultCim: 'VEZÉRLŐPULT',
  menuNyit: 'Menü',
  menuBezar: 'Bezárás',
  navAria: 'Belső navigáció',
  sajatAdataim: 'Saját adataim',
  kijelentkezes: 'Kijelentkezés',
  udvozletCim: 'Üdvözöljük',
  udvozletSzoveg:
    'A vezérlőpult tartalma hamarosan bővül. Addig is kezelheti személyes adatait a bal oldali menüben.',
  vezeteknev: 'Vezetéknév',
  keresztnev: 'Keresztnév',
  telefon: 'Telefonszám',
  szuletesiDatum: 'Születési dátum (opcionális)',
  orszag: 'Ország',
  iranyitoszam: 'Irányítószám',
  varos: 'Város',
  lakcim: 'Lakcím (utca, házszám)',
  mentesGomb: 'Mentés',
  mentesFut: 'Mentés…',
  mentesSiker: 'Az adatok sikeresen mentve.',
  mentesHiba: 'A mentés sikertelen. Próbálja újra.',
  tesztBelepesSegitseg: 'Fejlesztői teszt: felhasználó „teszt”, jelszó „teszt”.',
}

const en: BelsoForditas = {
  bejelentkezes: 'SIGN IN',
  vezerlopult: 'DASHBOARD',
  bejelentkezesAria: 'Sign in to the internal portal',
  belepésCim: 'SIGN IN',
  belepesCim: 'SIGN IN',
  emailCimke: 'Email address',
  jelszoCimke: 'Password',
  jelszoMutat: 'Show',
  jelszoElrejt: 'Hide',
  bejelentkezesGomb: 'Sign in',
  belepesGomb: 'Sign in',
  belepesFut: 'Signing in…',
  belepésHibaAlt: 'Sign-in failed.',
  belepesHibaAlt: 'Sign-in failed.',
  visszaNyilvanos: 'Back to public site',
  vezerlopultCim: 'DASHBOARD',
  menuNyit: 'Menu',
  menuBezar: 'Close',
  navAria: 'Portal navigation',
  sajatAdataim: 'My details',
  kijelentkezes: 'Sign out',
  udvozletCim: 'Welcome',
  udvozletSzoveg:
    'More dashboard modules will appear here soon. You can manage your personal details from the side menu.',
  vezeteknev: 'Last name',
  keresztnev: 'First name',
  telefon: 'Phone number',
  szuletesiDatum: 'Date of birth (optional)',
  orszag: 'Country',
  iranyitoszam: 'Postal code',
  varos: 'City',
  lakcim: 'Street address',
  mentesGomb: 'Save',
  mentesFut: 'Saving…',
  mentesSiker: 'Your details were saved.',
  mentesHiba: 'Save failed. Please try again.',
  tesztBelepesSegitseg: 'Dev test account: user „teszt”, password „teszt”.',
}

const de: BelsoForditas = {
  bejelentkezes: 'ANMELDEN',
  vezerlopult: 'DASHBOARD',
  bejelentkezesAria: 'Im internen Portal anmelden',
  belepésCim: 'ANMELDEN',
  belepesCim: 'ANMELDEN',
  emailCimke: 'E-Mail-Adresse',
  jelszoCimke: 'Passwort',
  jelszoMutat: 'Anzeigen',
  jelszoElrejt: 'Ausblenden',
  bejelentkezesGomb: 'Anmelden',
  belepesGomb: 'Anmelden',
  belepesFut: 'Anmeldung…',
  belepésHibaAlt: 'Anmeldung fehlgeschlagen.',
  belepesHibaAlt: 'Anmeldung fehlgeschlagen.',
  visszaNyilvanos: 'Zurück zur Website',
  vezerlopultCim: 'DASHBOARD',
  menuNyit: 'Menü',
  menuBezar: 'Schließen',
  navAria: 'Interne Navigation',
  sajatAdataim: 'Meine Daten',
  kijelentkezes: 'Abmelden',
  udvozletCim: 'Willkommen',
  udvozletSzoveg:
    'Weitere Dashboard-Module folgen in Kürze. Ihre persönlichen Daten können Sie im Seitenmenü verwalten.',
  vezeteknev: 'Nachname',
  keresztnev: 'Vorname',
  telefon: 'Telefonnummer',
  szuletesiDatum: 'Geburtsdatum (optional)',
  orszag: 'Land',
  iranyitoszam: 'Postleitzahl',
  varos: 'Stadt',
  lakcim: 'Straße und Hausnummer',
  mentesGomb: 'Speichern',
  mentesFut: 'Speichern…',
  mentesSiker: 'Daten wurden gespeichert.',
  mentesHiba: 'Speichern fehlgeschlagen. Bitte erneut versuchen.',
  tesztBelepesSegitseg: 'Entwicklungs-Test: Benutzer „teszt“, Passwort „teszt”.',
}

export const belsoForditasok: Record<NyelvKod, BelsoForditas> = { hu, en, de }
