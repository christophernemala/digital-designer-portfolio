import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

/**
 * Home Page
 * Design Philosophy: Modern 3D Maximalism
 * - Premium portfolio landing page for Christopher Nemala
 * - Fixed navigation with social links
 * - Hero section with 3D graphics and smooth animations
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />
      <HeroSection />
    </div>
  );
}
