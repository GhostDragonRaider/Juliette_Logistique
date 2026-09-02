import { AboutTeaser } from '@/features/home/AboutTeaser'
import { ContactCta } from '@/features/home/ContactCta'
import { Hero } from '@/features/home/Hero'
import { PartnersStrip } from '@/features/home/PartnersStrip'
import { ServicesGrid } from '@/features/home/ServicesGrid'
import { TrustBar } from '@/features/home/TrustBar'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutTeaser />
      <ServicesGrid />
      <PartnersStrip />
      <ContactCta />
    </>
  )
}
