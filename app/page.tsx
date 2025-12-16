import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScheduleSection from "@/components/schedule-section"
import TimelineSection from "@/components/timeline-section"
import SponsorsSection from "@/components/sponsors-section"
import RewardsSection from "@/components/rewards-section"
import RegisterSection from "@/components/register-section"
import ThemeSection from "@/components/theme-section"
import FaqSection from "@/components/faq-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MatrixBackground from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden noise-overlay scanlines">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <TimelineSection />
        <SponsorsSection />
        <RewardsSection />
        <RegisterSection />
        <ThemeSection />
        <FaqSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
