import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import InfrastructureSection from '@/components/InfrastructureSection'
import ResultsSection from '@/components/ResultsSection'
import PhilosophySection from '@/components/PhilosophySection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <InfrastructureSection />
      <ResultsSection />
      <PhilosophySection />
      <AboutSection />
      <CTASection />
    </>
  )
}
