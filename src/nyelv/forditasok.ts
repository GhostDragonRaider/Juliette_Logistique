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
    { azonosito: 'kezdo', felirat: 'KEZDŐLAP', cel: '/' },
    { azonosito: 'rolunk', felirat: 'RÓLUNK', cel: '/#rolunk' },
    { azonosito: 'szolgaltatasok', felirat: 'SZOLGÁLTATÁSOK', cel: '/#szolgaltatasok' },
    { azonosito: 'partnerek', felirat: 'PARTNEREK', cel: '/#partnerek' },
    { azonosito: 'karrier', felirat: 'KARRIER', cel: '/karrier' },
    { azonosito: 'kapcsolat', felirat: 'KAPCSOLAT', cel: '/#kapcsolat' },
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
  hogyanDolgozunk: {
    cim: 'HOGYAN DOLGOZUNK',
    lepesek: [
      {
        szam: '1',
        cim: 'MEGKERESÉS',
        leiras: 'Rövid egyeztetés az útvonalról, időpontról és a jármű részleteiről.',
      },
      {
        szam: '2',
        cim: 'TERVEZÉS',
        leiras: 'Pontos ütemezés, biztonságos útvonal és átlátható dokumentáció.',
      },
      {
        szam: '3',
        cim: 'ÁTVITEL',
        leiras: 'Megbízható szállítás tapasztalt sofőrökkel — határidőre.',
      },
    ],
  },
  idezet: {
    szoveg:
      'A Juliette Logistique nem csak szállít — minden járművet úgy kezel, mintha a sajátja lenne.',
    szerzo: '— Ügyfelünk, flottavezető',
  },
  zaroKep: {
    cim: 'PREMIUM LOGISZTIKA. EURÓPAI LEFEDETTSÉG.',
    gomb: 'KAPCSOLATFELVÉTEL',
    kepAlt: 'Juliette Logistique járműszállítás az úton',
  },
  karrier: {
    seoCim: 'Karrier | Juliette Logistique',
    seoLeiras:
      'Csatlakozzon a Juliette Logistique csapatához. Premium járműszállítás — sofőr és logisztikai pozíciók Németországban és Európában.',
    cim: 'KARRIER',
    alcim: 'CSATLAKOZZON A PRÉMIUM CSAPATHOZ',
    bekezdes:
      'Pontosságot, biztonságot és személyes felelősséget keresünk. Ha Ön is a járművek és a megbízható logisztika mellett elkötelezett, várjuk jelentkezését.',
    poziciokCim: 'NYITOTT POZÍCIÓK',
    poziciok: [
      {
        cim: 'JÁRMŰÁTVEZETŐ / SOFŐR',
        leiras:
          'Premium személygépjárművek biztonságos átvezetése regionális és európai útvonalakon.',
        elvarasok: [
          'Érvényes B jogosítvány (BE előny)',
          'Tiszta előélet és megbízható megjelenés',
          'Rugalmasság rövid és hosszú távú fuvarokra',
          'Német és/vagy angol kommunikáció',
        ],
      },
      {
        cim: 'LOGISZTIKAI KOORDINÁTOR',
        leiras:
          'Útvonaltervezés, ügyfélkapcsolat és a szállítások átlátható dokumentálása.',
        elvarasok: [
          'Logisztikai vagy ügyfélszolgálati tapasztalat',
          'Pontos, strukturált munkavégzés',
          'Jó kommunikációs készség (DE / EN)',
          'Önálló és csapatban is hatékony munka',
        ],
      },
    ],
    elonyokCim: 'MIÉRT ÉRDEMES HOZZÁNK CSATLAKOZNI?',
    elonyok: [
      'Prémium márkákkal és flottákkal való munka',
      'Átlátható folyamatok és személyes kapcsolattartás',
      'Európai útvonalak, változatos feladatok',
      'Megbízható, korrekt együttműködés',
    ],
    gomb: 'JELENTKEZEM',
    emailTargy: 'Karrier jelentkezés — Juliette Logistique',
  },
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
    { azonosito: 'kezdo', felirat: 'HOME', cel: '/' },
    { azonosito: 'rolunk', felirat: 'ABOUT', cel: '/#rolunk' },
    { azonosito: 'szolgaltatasok', felirat: 'SERVICES', cel: '/#szolgaltatasok' },
    { azonosito: 'partnerek', felirat: 'PARTNERS', cel: '/#partnerek' },
    { azonosito: 'karrier', felirat: 'CAREERS', cel: '/karrier' },
    { azonosito: 'kapcsolat', felirat: 'CONTACT', cel: '/#kapcsolat' },
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
  hogyanDolgozunk: {
    cim: 'HOW WE WORK',
    lepesek: [
      {
        szam: '1',
        cim: 'INQUIRY',
        leiras: 'A short briefing on route, timing and vehicle details.',
      },
      {
        szam: '2',
        cim: 'PLANNING',
        leiras: 'Precise scheduling, secure routing and clear documentation.',
      },
      {
        szam: '3',
        cim: 'TRANSFER',
        leiras: 'Reliable transport with experienced drivers — on time.',
      },
    ],
  },
  idezet: {
    szoveg:
      'Juliette Logistique does not just transport — every vehicle is handled as if it were their own.',
    szerzo: '— Client, fleet manager',
  },
  zaroKep: {
    cim: 'PREMIUM LOGISTICS. EUROPE-WIDE COVERAGE.',
    gomb: 'CONTACT US',
    kepAlt: 'Juliette Logistique vehicle transport on the road',
  },
  karrier: {
    seoCim: 'Careers | Juliette Logistique',
    seoLeiras:
      'Join the Juliette Logistique team. Premium vehicle transport — driver and logistics roles across Germany and Europe.',
    cim: 'CAREERS',
    alcim: 'JOIN A PREMIUM TEAM',
    bekezdes:
      'We look for precision, safety and personal responsibility. If you are committed to vehicles and reliable logistics, we welcome your application.',
    poziciokCim: 'OPEN POSITIONS',
    poziciok: [
      {
        cim: 'VEHICLE TRANSFER DRIVER',
        leiras:
          'Safe transfer of premium passenger cars on regional and Europe-wide routes.',
        elvarasok: [
          'Valid category B licence (BE is an advantage)',
          'Clean record and professional appearance',
          'Flexibility for short and long-distance trips',
          'German and/or English communication',
        ],
      },
      {
        cim: 'LOGISTICS COORDINATOR',
        leiras:
          'Route planning, client contact and clear documentation of transports.',
        elvarasok: [
          'Logistics or customer-service experience',
          'Precise, structured working style',
          'Strong communication skills (DE / EN)',
          'Effective both independently and in a team',
        ],
      },
    ],
    elonyokCim: 'WHY JOIN US?',
    elonyok: [
      'Work with premium brands and fleets',
      'Clear processes and personal contact',
      'European routes and varied assignments',
      'Reliable, fair collaboration',
    ],
    gomb: 'APPLY NOW',
    emailTargy: 'Career application — Juliette Logistique',
  },
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
    { azonosito: 'kezdo', felirat: 'STARTSEITE', cel: '/' },
    { azonosito: 'rolunk', felirat: 'ÜBER UNS', cel: '/#rolunk' },
    { azonosito: 'szolgaltatasok', felirat: 'LEISTUNGEN', cel: '/#szolgaltatasok' },
    { azonosito: 'partnerek', felirat: 'PARTNER', cel: '/#partnerek' },
    { azonosito: 'karrier', felirat: 'KARRIERE', cel: '/karrier' },
    { azonosito: 'kapcsolat', felirat: 'KONTAKT', cel: '/#kapcsolat' },
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
  hogyanDolgozunk: {
    cim: 'SO ARBEITEN WIR',
    lepesek: [
      {
        szam: '1',
        cim: 'ANFRAGE',
        leiras: 'Kurze Abstimmung zu Route, Termin und Fahrzeugdetails.',
      },
      {
        szam: '2',
        cim: 'PLANUNG',
        leiras: 'Präzise Terminierung, sichere Strecke und klare Dokumentation.',
      },
      {
        szam: '3',
        cim: 'ÜBERFÜHRUNG',
        leiras: 'Zuverlässiger Transport mit erfahrenen Fahrern — pünktlich.',
      },
    ],
  },
  idezet: {
    szoveg:
      'Juliette Logistique transportiert nicht nur — jedes Fahrzeug wird behandelt, als wäre es das eigene.',
    szerzo: '— Kunde, Flottenmanager',
  },
  zaroKep: {
    cim: 'PREMIUM LOGISTIK. EUROPAWEITE ABDECKUNG.',
    gomb: 'KONTAKT AUFNEHMEN',
    kepAlt: 'Juliette Logistique Fahrzeugtransport unterwegs',
  },
  karrier: {
    seoCim: 'Karriere | Juliette Logistique',
    seoLeiras:
      'Werden Sie Teil von Juliette Logistique. Premium Fahrzeugüberführung — Fahrer- und Logistikpositionen in Deutschland und Europa.',
    cim: 'KARRIERE',
    alcim: 'WERDEN SIE TEIL EINES PREMIUM-TEAMS',
    bekezdes:
      'Wir suchen Präzision, Sicherheit und persönliche Verantwortung. Wenn Sie Fahrzeuge und zuverlässige Logistik leben, freuen wir uns auf Ihre Bewerbung.',
    poziciokCim: 'OFFENE STELLEN',
    poziciok: [
      {
        cim: 'FAHRZEUGÜBERFÜHRER / FAHRER',
        leiras:
          'Sichere Überführung von Premium-Pkw auf regionalen und europaweiten Strecken.',
        elvarasok: [
          'Gültiger Führerschein Klasse B (BE von Vorteil)',
          'Sauberes Führungszeugnis und gepflegtes Auftreten',
          'Flexibilität für Kurz- und Langstrecken',
          'Kommunikation auf Deutsch und/oder Englisch',
        ],
      },
      {
        cim: 'LOGISTIKKOORDINATOR',
        leiras:
          'Routenplanung, Kundenkontakt und transparente Dokumentation der Transporte.',
        elvarasok: [
          'Erfahrung in Logistik oder Kundenservice',
          'Präzise, strukturierte Arbeitsweise',
          'Starke Kommunikationsfähigkeit (DE / EN)',
          'Effektiv im Team und selbstständig',
        ],
      },
    ],
    elonyokCim: 'WARUM ZU UNS?',
    elonyok: [
      'Arbeit mit Premium-Marken und Flotten',
      'Klare Abläufe und persönlicher Kontakt',
      'Europäische Routen und abwechslungsreiche Einsätze',
      'Zuverlässige, faire Zusammenarbeit',
    ],
    gomb: 'JETZT BEWERBEN',
    emailTargy: 'Karrierebewerbung — Juliette Logistique',
  },
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
