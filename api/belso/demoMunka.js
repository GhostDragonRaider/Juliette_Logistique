/**
 * Kiküldhető minta aktuális munka (admin → kliens).
 * Az idopontok ISO stringek; a frontend Date-re konvertálja.
 */
export function demoAktualisMunka() {
  return {
    azonosito: 'JL-SX-2026-1048',
    megbizo: 'SIXT',
    jarmu: {
      marka: 'BMW',
      tipus: '520d',
      modell: 'BMW 520d',
      rendszam: 'M-JL 2401',
      kategoria: {
        hu: 'Premium, BMW 5-ös vagy hasonló',
        en: 'Premium, BMW 5 Series or similar',
        de: 'Premium, BMW 5er oder ähnlich',
      },
      szin: {
        hu: 'Zafírfekete',
        en: 'Sapphire black',
        de: 'Saphireschwarz',
      },
      gumiTipus: { hu: 'Téli', en: 'Winter', de: 'Winter' },
      uzemanyag: { hu: 'Dízel', en: 'Diesel', de: 'Diesel' },
      valto: { hu: 'Automata', en: 'Automatic', de: 'Automatik' },
      ismertSerulesek: {
        hu: ['Karcolás a jobb hátsó lökhárítón (már rögzítve).'],
        en: ['Scratch on the rear right bumper (already recorded).'],
        de: ['Kratzer am hinteren rechten Stoßfänger (bereits erfasst).'],
      },
    },
    felvetel: {
      allomas: 'SIXT München Flughafen (MUC)',
      cim: 'Terminalstr. Mitte/MWZ, Mietwagenzentrum, 85356 München',
      nyitvatartas: {
        hu: 'Minden nap 05:00–00:00',
        en: 'Daily 05:00–00:00',
        de: 'Täglich 05:00–00:00',
      },
      telefon: '+49 89 66060060',
      idopont: '2026-10-24T08:00:00.000+02:00',
      utasitas: {
        hu: 'A jármű a reptéri Mietwagenzentrum 3. szintjén áll. A kulcsot a pulton veszik át. Indulás előtt a kilométerórát, az üzemanyagszintet és a sérüléseket a helyszíni munkatárssal együtt rögzítik.',
        en: 'The car is on level 3 of the airport rental centre. Collect the key at the counter. Before leaving, record the mileage, fuel level and any damage together with the station staff.',
        de: 'Das Fahrzeug steht auf Ebene 3 im Mietwagenzentrum. Den Schlüssel gibt es am Schalter. Vor der Abfahrt werden Kilometerstand, Tankfüllung und Schäden gemeinsam mit dem Personal vor Ort erfasst.',
      },
    },
    leadas: {
      allomas: 'SIXT Frankfurt Flughafen (FRA)',
      cim: 'Hugo-Eckener-Ring/Mietwagenzentrum, 60549 Frankfurt am Main',
      nyitvatartas: {
        hu: 'Minden nap 05:00–00:30',
        en: 'Daily 05:00–00:30',
        de: 'Täglich 05:00–00:30',
      },
      telefon: '+49 69 98939340',
      idopont: '2026-10-24T18:30:00.000+02:00',
      utasitas: {
        hu: 'A „Mietwagenrückgabe” táblákat kövesse a Terminal 1, Halle A melletti visszavételig. A kulcsot és a forgalmit a munkatársnak adja át, az állapotjegyzőkönyvet ott írják alá.',
        en: 'Follow the “Mietwagenrückgabe” signs to the return area beside Terminal 1, hall A. Hand the key and registration to the staff and sign the condition report there.',
        de: 'Folgen Sie den Schildern „Mietwagenrückgabe“ zur Rückgabe neben Terminal 1, Halle A. Schlüssel und Zulassung gehen an das Personal, das Übergabeprotokoll wird dort unterschrieben.',
      },
    },
    tavolsagKm: 392,
    menetidoPerc: 250,
    dijEuro: 210,
    teendok: {
      hu: [
        'Átvételkor rögzítse a kilométerórát, az üzemanyagszintet és a látható sérüléseket.',
        'Útközben csak a szükséges tankolás és az útdíj merül fel; a bizonylatot őrizze meg.',
        'A járműben dohányozni nem szabad, és személyes holmi nem maradhat benne.',
        'Leadáskor az üzemanyagszint legyen legalább annyi, mint átvételkor.',
      ],
      en: [
        'At collection, record the mileage, fuel level and any visible damage.',
        'On the road, only necessary fuel and tolls apply; keep the receipts.',
        'No smoking in the vehicle, and no personal items may be left inside.',
        'On delivery, the fuel level must be at least what it was at collection.',
      ],
      de: [
        'Bei der Abholung Kilometerstand, Tankfüllung und sichtbare Schäden erfassen.',
        'Unterwegs fallen nur nötiges Tanken und Maut an; Belege aufbewahren.',
        'Im Fahrzeug darf nicht geraucht werden, persönliche Gegenstände bleiben nicht darin.',
        'Bei der Abgabe muss der Tank mindestens den Stand der Abholung haben.',
      ],
    },
    megjegyzesek: {
      hu: [
        'A jármű saját navigációja használható.',
        'Az állomásra utazást és a hazaútját a sofőr szervezi; az nem része a díjnak.',
      ],
      en: [
        'The car’s own navigation may be used.',
        'Travel to the station and the journey home are arranged by the driver and are not part of the fee.',
      ],
      de: [
        'Die fahrzeugeigene Navigation darf genutzt werden.',
        'An- und Abreise organisiert der Fahrer selbst; sie sind nicht Teil der Vergütung.',
      ],
    },
  }
}
