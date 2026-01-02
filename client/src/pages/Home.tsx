import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Home Page
 * LOCKED PALETTE: Blue Gold White Black Only
 * - ink background (near black)
 * - bone text (near white)
 * - gold and electric accents
 */

export default function Home() {
  // Authentication state from the full-stack setup
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
}
