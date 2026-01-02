import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Home Page - Premium $56K Anime 3D Portfolio
 * LOCKED PALETTE: Blue Gold White Black Only
 * Features:
 * - 3D floating elements with Three.js
 * - Ultra-smooth anime-style animations
 * - Interactive portfolio cards
 * - Photo gallery with dynamic transitions
 * - Contact form with lead generation
 */

export default function Home() {
  // Authentication state from the full-stack setup
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-ink text-bone scroll-smooth">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
