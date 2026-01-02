import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Home Page
 * Design Philosophy: Modern 3D Maximalism
 * - Premium portfolio landing page for Christopher Nemala
 * - Fixed navigation with social links
 * - Hero section with 3D graphics and smooth animations
 * - Integrated with full-stack authentication
 */

export default function Home() {
  // Authentication state from the full-stack setup
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />
      <HeroSection />
    </div>
  );
}
