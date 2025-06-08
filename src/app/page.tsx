import { FeaturesSection } from '@queue/components/features'
import { FooterSection } from '@queue/components/footer'
import { HeroSection } from '@queue/components/hero'
import { ScreenshotsSection } from '@queue/components/screenshots'

export const revalidate = 120 // 2 minutes

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <FooterSection />
    </main>
  )
}
