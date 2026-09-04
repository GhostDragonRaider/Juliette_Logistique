import type { OldalForditas, NyelvKod } from './nyelvTipusok'

/**
 * Magyar fordítások a főoldalhoz.
 */
const magyar: OldalForditas = {
  htmlNyelv: 'hu',
  navigacioAria: 'Fő navigáció',
  nyelvAria: 'Nyelv választása',
  menuAria: 'Menü megnyitása',
  menuBezaroAria: 'Menü bezárása',
  ugrasATartalomra: 'Ugrás a tartalomra',
  seo: {
    cim: 'Juliette Logistique | Premium járműszállítás és logisztika',
    leiras:
      'Premium járműszállítás és személyre szabott logisztika Németországban és Európában. Megbízható, biztonságos és pontos szolgáltatás.',
    kulcsszavak:
      'járműszállítás, premium logisztika, autószállítás, Németország, Európa, Juliette Logistique',
  },
  navigacio: [
    { azonosito: 'kezdo', felirat: 'KEZDŐLAP', cel: '#kezdooldal' },
    { azonosito: 'rolunk', felirat: 'RÓLUNK', cel: '#rolunk' },
    { azonosito: 'szolgaltatasok', felirat: 'SZOLGÁLTATÁSOK', cel: '#szolgaltatasok' },
    { azonosito: 'partnerek', felirat: 'PARTNEREK', cel: '#partnerek' },
    { azonosito: 'kapcsolat', felirat: 'KAPCSOLAT', cel: '#kapcsolat' },
  ],
  hos: {
    markaNev: 'JULIETTE LOGISTIQUE',
    alcim: 'PREMIUM JÁRMŰSZÁLLÍTÁS ÉS LOGISZTIKA',
    motto: 'MEGBÍZHATÓ. BIZTONSÁGOS. PONTOSSÁG.',
    elsodlegesGomb: 'SZÁLLÍTÁS IGÉNYLÉSE',
    masodlagosGomb: 'TUDJON MEG TÖBBET',
  },
  ertekekAria: 'Erősségeink',
  ertekek: [
    {
      azonosito: 'biztonsag',
      cim: 'MAXIMÁLIS BIZTONSÁG',
      leiras: 'Minden szállításnál a legfontosabb',
      ikon: 'pajzs',
    },
    {
      azonosito: 'tapasztalat',
      cim: '5+ ÉV TAPASZTALAT',
      leiras: 'Professzionális járműlogisztika',
      ikon: 'csillag',
    },
    {
      azonosito: 'lefedettseg',
      cim: 'NÉMETORSZÁG ÉS EURÓPA',
      leiras: 'Megbízható útvonaltervezés',
      ikon: 'terkep',
    },
    {
      azonosito: 'premium',
      cim: 'PREMIUM SZOLGÁLTATÁS',
      leiras: 'Személyes ügyfélkapcsolat',
      ikon: 'gyemant',
    },
    {
      azonosito: 'partnerek',
      cim: 'MEGBÍZHATÓ PARTNEREK',
      leiras: 'Erős szakmai hálózat',
      ikon: 'kezetfogas',
    },
  ],
  szolgaltatasokCim: 'SZOLGÁLTATÁSAINK',
  szolgaltatasokGomb: 'ÖSSZES SZOLGÁLTATÁS',
  szolgaltatasok: [
    {
      azonosito: 'sajat-kerekeken',
      cim: 'SZÁLLÍTÁS SAJÁT KEREKEKEN',
      leiras: 'Biztonságos járműátvitel tapasztalt sofőrökkel.',
      kep: '/kepek/szolgaltatas-szallitas.png',
      ikon: 'auto',
    },
    {
      azonosito: 'atvetel',
      cim: 'ÁTVÉTEL ÉS KISZÁLLÍTÁS',
      leiras: 'Rugalmas időpontok és pontos átadás.',
      kep: '/kepek/szolgaltatas-atvetel.png',
      ikon: 'kulcs',
    },
    {
      azonosito: 'flotta',
      cim: 'KERESKEDŐI ÉS FLOTTA SZÁLLÍTÁS',
      leiras: 'Hatékony megoldások kereskedőknek és flottáknak.',
      kep: '/kepek/szolgaltatas-flotta.png',
      ikon: 'flotta',
    },
    {
      azonosito: 'tavolsag',
      cim: 'RÖVID ÉS HOSSZÚ TÁV',
      leiras: 'Regionális utaktól az európai útvonalakig.',
      kep: '/kepek/szolgaltatas-tavolsag.png',
      ikon: 'ut',
    },
    {
      azonosito: 'europa',
      cim: 'ORSZÁGOS ÉS EURÓPAI LEFEDETTSÉG',
      leiras: 'Megbízható logisztika országhatárokon át.',
      kep: '/kepek/szolgaltatas-europa.png',
      ikon: 'europa',
    },
    {
      azonosito: 'dokumentacio',
      cim: 'TELJES DOKUMENTÁCIÓ',
      leiras: 'Átlátható átadás teljes fotódokumentációval.',
      kep: '/kepek/szolgaltatas-dokumentacio.png',
      ikon: 'kamera',
    },
  ],
  rolunk: {
    cim: 'SZENVEDÉLY A JÁRMŰVEKÉRT. FELELŐSSÉG AZ ÖN SIKERÉÉRT.',
    bekezdes:
      'A Juliette Logistique a premium járműszállítást és a személyre szabott logisztikát képviseli. Pontosságot, biztonságot és személyes szolgáltatást kapcsolunk össze — kereskedők, flották és igényes magánügyfelek számára.',
    pontok: [
      'Tapasztalt sofőrök',
      'Modern folyamatok',
      'Átlátható ügyintézés',
      'Személyes kapcsolattartás',
    ],
    gomb: 'TUDJON MEG TÖBBET',
    kepAlt: 'Juliette Logistique szállítójármű',
  },
  partnerekCim: 'PARTNEREINK',
  lablec: {
    kerdes: 'KÉSZ AZ EGYÜTTMŰKÖDÉSRE?',
    gomb: 'KAPCSOLATFELVÉTEL',
    markaLeiras: '— Premium járműszállítás',
  },
}

/**
 * Angol fordítások a főoldalhoz.
 */
const angol: OldalForditas = {
  htmlNyelv: 'en',
  navigacioAria: 'Main navigation',
  nyelvAria: 'Choose language',
  menuAria: 'Open menu',
  menuBezaroAria: 'Close menu',
  ugrasATartalomra: 'Skip to content',
  seo: {
    cim: 'Juliette Logistique | Premium vehicle transport & logistics',
    leiras:
      'Premium vehicle transport and tailored logistics across Germany and Europe. Reliable, safe and on-time service.',
    kulcsszavak:
      'vehicle transport, premium logistics, car transfer, Germany, Europe, Juliette Logistique',
  },
  navigacio: [
    { azonosito: 'kezdo', felirat: 'HOME', cel: '#kezdooldal' },
    { azonosito: 'rolunk', felirat: 'ABOUT', cel: '#rolunk' },
    { azonosito: 'szolgaltatasok', felirat: 'SERVICES', cel: '#szolgaltatasok' },
    { azonosito: 'partnerek', felirat: 'PARTNERS', cel: '#partnerek' },
    { azonosito: 'kapcsolat', felirat: 'CONTACT', cel: '#kapcsolat' },
  ],
  hos: {
    markaNev: 'JULIETTE LOGISTIQUE',
    alcim: 'PREMIUM VEHICLE TRANSPORT & LOGISTICS',
    motto: 'RELIABLE. SAFE. ON TIME.',
    elsodlegesGomb: 'REQUEST TRANSPORT',
    masodlagosGomb: 'LEARN MORE',
  },
  ertekekAria: 'Our strengths',
  ertekek: [
    {
      azonosito: 'biztonsag',
      cim: 'MAXIMUM SECURITY',
      leiras: 'Highest priority on every transport',
      ikon: 'pajzs',
    },
    {
      azonosito: 'tapasztalat',
      cim: '5+ YEARS EXPERIENCE',
      leiras: 'Professional vehicle logistics',
      ikon: 'csillag',
    },
    {
      azonosito: 'lefedettseg',
      cim: 'GERMANY & EUROPE',
      leiras: 'Reliable route planning',
      ikon: 'terkep',
    },
    {
      azonosito: 'premium',
      cim: 'PREMIUM SERVICE',
      leiras: 'Personal customer care',
      ikon: 'gyemant',
    },
    {
      azonosito: 'partnerek',
      cim: 'TRUSTED PARTNERS',
      leiras: 'A strong professional network',
      ikon: 'kezetfogas',
    },
  ],
  szolgaltatasokCim: 'OUR SERVICES',
  szolgaltatasokGomb: 'VIEW ALL SERVICES',
  szolgaltatasok: [
    {
      azonosito: 'sajat-kerekeken',
      cim: 'TRANSPORT ON OWN WHEELS',
      leiras: 'Safe vehicle transfer with experienced drivers.',
      kep: '/kepek/szolgaltatas-szallitas.png',
      ikon: 'auto',
    },
    {
      azonosito: 'atvetel',
      cim: 'PICKUP & DELIVERY',
      leiras: 'Flexible schedules and punctual handover.',
      kep: '/kepek/szolgaltatas-atvetel.png',
      ikon: 'kulcs',
    },
    {
      azonosito: 'flotta',
      cim: 'DEALER & FLEET TRANSPORT',
      leiras: 'Efficient solutions for dealers and fleets.',
      kep: '/kepek/szolgaltatas-flotta.png',
      ikon: 'flotta',
    },
    {
      azonosito: 'tavolsag',
      cim: 'SHORT & LONG DISTANCE',
      leiras: 'From regional trips to Europe-wide routes.',
      kep: '/kepek/szolgaltatas-tavolsag.png',
      ikon: 'ut',
    },
    {
      azonosito: 'europa',
      cim: 'NATIONWIDE & EUROPE-WIDE',
      leiras: 'Reliable logistics across borders.',
      kep: '/kepek/szolgaltatas-europa.png',
      ikon: 'europa',
    },
    {
      azonosito: 'dokumentacio',
      cim: 'FULL DOCUMENTATION',
      leiras: 'Transparent handover with complete photo records.',
      kep: '/kepek/szolgaltatas-dokumentacio.png',
      ikon: 'kamera',
    },
  ],
  rolunk: {
    cim: 'PASSION FOR VEHICLES. RESPONSIBILITY FOR YOUR SUCCESS.',
    bekezdes:
      'Juliette Logistique stands for premium vehicle transport and tailored logistics. We combine precision, safety and personal service — for dealers, fleets and discerning private clients.',
    pontok: [
      'Experienced drivers',
      'Modern processes',
      'Transparent workflows',
      'Personal contact',
    ],
    gomb: 'LEARN MORE',
    kepAlt: 'Juliette Logistique transport vehicle',
  },
  partnerekCim: 'OUR PARTNERS',
  lablec: {
    kerdes: 'READY TO COLLABORATE?',
    gomb: 'CONTACT US',
    markaLeiras: '— Premium vehicle transport',
  },
}

/**
 * Német fordítások a főoldalhoz.
 */
const nemet: OldalForditas = {
  htmlNyelv: 'de',
  navigacioAria: 'Hauptnavigation',
  nyelvAria: 'Sprache wählen',
  menuAria: 'Menü öffnen',
  menuBezaroAria: 'Menü schließen',
  ugrasATartalomra: 'Zum Inhalt springen',
  seo: {
    cim: 'Juliette Logistique | Premium Fahrzeugüberführung & Logistik',
    leiras:
      'Premium Fahrzeugüberführung und maßgeschneiderte Logistik in Deutschland und Europa. Zuverlässig, sicher und pünktlich.',
    kulcsszavak:
      'Fahrzeugüberführung, Premium Logistik, Autotransport, Deutschland, Europa, Juliette Logistique',
  },
  navigacio: [
    { azonosito: 'kezdo', felirat: 'STARTSEITE', cel: '#kezdooldal' },
    { azonosito: 'rolunk', felirat: 'ÜBER UNS', cel: '#rolunk' },
    { azonosito: 'szolgaltatasok', felirat: 'LEISTUNGEN', cel: '#szolgaltatasok' },
    { azonosito: 'partnerek', felirat: 'PARTNER', cel: '#partnerek' },
    { azonosito: 'kapcsolat', felirat: 'KONTAKT', cel: '#kapcsolat' },
  ],
  hos: {
    markaNev: 'JULIETTE LOGISTIQUE',
    alcim: 'PREMIUM FAHRZEUGÜBERFÜHRUNG & LOGISTIK',
    motto: 'ZUVERLÄSSIG. SICHER. PÜNKTLICH.',
    elsodlegesGomb: 'TRANSPORT ANFRAGEN',
    masodlagosGomb: 'MEHR ÜBER UNS',
  },
  ertekekAria: 'Unsere Stärken',
  ertekek: [
    {
      azonosito: 'biztonsag',
      cim: 'SICHERHEIT',
      leiras: 'Höchste Priorität bei jedem Transport',
      ikon: 'pajzs',
    },
    {
      azonosito: 'tapasztalat',
      cim: '5+ JAHRE ERFAHRUNG',
      leiras: 'Professionelle Fahrzeuglogistik',
      ikon: 'csillag',
    },
    {
      azonosito: 'lefedettseg',
      cim: 'DEUTSCHLANDWEIT & EUROPAWEIT',
      leiras: 'Zuverlässige Streckenplanung',
      ikon: 'terkep',
    },
    {
      azonosito: 'premium',
      cim: 'PREMIUM SERVICE',
      leiras: 'Persönliche Betreuung',
      ikon: 'gyemant',
    },
    {
      azonosito: 'partnerek',
      cim: 'VERLÄSSLICHE PARTNER',
      leiras: 'Starke Netzwerke',
      ikon: 'kezetfogas',
    },
  ],
  szolgaltatasokCim: 'UNSERE LEISTUNGEN',
  szolgaltatasokGomb: 'ALLE LEISTUNGEN ANSEHEN',
  szolgaltatasok: [
    {
      azonosito: 'sajat-kerekeken',
      cim: 'ÜBERFÜHRUNG AUF EIGENEN RÄDERN',
      leiras: 'Sichere Fahrzeugüberführung mit erfahrenen Fahrern.',
      kep: '/kepek/szolgaltatas-szallitas.png',
      ikon: 'auto',
    },
    {
      azonosito: 'atvetel',
      cim: 'ABHOLUNG & ZUSTELLUNG',
      leiras: 'Flexible Termine und pünktliche Übergabe.',
      kep: '/kepek/szolgaltatas-atvetel.png',
      ikon: 'kulcs',
    },
    {
      azonosito: 'flotta',
      cim: 'HÄNDLER- & FLOTTENTRANSPORTE',
      leiras: 'Effiziente Lösungen für Händler und Flotten.',
      kep: '/kepek/szolgaltatas-flotta.png',
      ikon: 'flotta',
    },
    {
      azonosito: 'tavolsag',
      cim: 'KURZ- & LANGSTRECKE',
      leiras: 'Von regionalen Fahrten bis europaweite Routen.',
      kep: '/kepek/szolgaltatas-tavolsag.png',
      ikon: 'ut',
    },
    {
      azonosito: 'europa',
      cim: 'BUNDESWEIT & EUROPAWEIT',
      leiras: 'Zuverlässige Logistik über Ländergrenzen hinweg.',
      kep: '/kepek/szolgaltatas-europa.png',
      ikon: 'europa',
    },
    {
      azonosito: 'dokumentacio',
      cim: 'FOTODOKUMENTATION',
      leiras: 'Transparente Übergabe mit vollständiger Dokumentation.',
      kep: '/kepek/szolgaltatas-dokumentacio.png',
      ikon: 'kamera',
    },
  ],
  rolunk: {
    cim: 'LEIDENSCHAFT FÜR FAHRZEUGE. VERANTWORTUNG FÜR IHREN ERFOLG.',
    bekezdes:
      'Juliette Logistique steht für Premium-Fahrzeugüberführung und maßgeschneiderte Logistik. Wir verbinden Präzision, Sicherheit und persönlichen Service — für Händler, Flotten und anspruchsvolle Privatkunden.',
    pontok: [
      'Erfahrene Fahrer',
      'Moderne Prozesse',
      'Transparente Abläufe',
      'Persönlicher Kontakt',
    ],
    gomb: 'MEHR ÜBER UNS',
    kepAlt: 'Juliette Logistique Transportfahrzeug',
  },
  partnerekCim: 'UNSERE PARTNER',
  lablec: {
    kerdes: 'BEREIT ZUR ZUSAMMENARBEIT?',
    gomb: 'KONTAKT AUFNEHMEN',
    markaLeiras: '— Premium Fahrzeugüberführung',
  },
}

/**
 * Az összes nyelv fordításait egy objektumban tárolja.
 */
export const forditasok: Record<NyelvKod, OldalForditas> = {
  hu: magyar,
  en: angol,
  de: nemet,
}
