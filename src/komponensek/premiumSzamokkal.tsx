import { PremiumSzam } from './PremiumSzam'

/**
 * A szövegben található számokat prémium stílusú span-ekbe csomagolja.
 * Példa: "5+ ÉV TAPASZTALAT" → kiemelt "5+" + sima szöveg.
 */
export function premiumSzamokkal(szoveg: string) {
  const darabok = szoveg.split(/(\+?\d[\d\s.+-]*)/g)

  return darabok.map((darab, index) => {
    const szamE = /^\+?\d[\d\s.+-]*$/.test(darab.trim()) && /\d/.test(darab)

    if (szamE) {
      return (
        <PremiumSzam key={`szam-${index}`} className="premium-szam">
          {darab}
        </PremiumSzam>
      )
    }

    return <span key={`szoveg-${index}`}>{darab}</span>
  })
}
