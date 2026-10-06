import type { NyelvKod } from '../nyelvTipusok'
import { epitJelentkezesForditas } from './epit'
import { magyarJelentkezesPaket } from './paketHu'
import { angolJelentkezesPaket } from './paketEn'
import { nemetJelentkezesPaket } from './paketDe'

export const jelentkezesForditasok = {
  hu: epitJelentkezesForditas(magyarJelentkezesPaket),
  en: epitJelentkezesForditas(angolJelentkezesPaket),
  de: epitJelentkezesForditas(nemetJelentkezesPaket),
} satisfies Record<NyelvKod, ReturnType<typeof epitJelentkezesForditas>>
