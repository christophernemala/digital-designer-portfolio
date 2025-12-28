import { motion } from 'framer-motion';
import { Twitter, Dribbble, Instagram } from 'lucide-react';

/**
 * Navigation Component
 * Design Philosophy: Modern 3D Maximalism
 * Exact specifications from HeaderPortfolioPrompt:
 * - Position: Fixed top
 * - Width: 100%
 * - Height: 80px
 * - Background: White (#FFFFFF)
 * - Border-bottom: 1px solid #E5E5E5
 * - Z-index: 100
 * - Padding: 0 60px
 */

export default function Navigation() {
  const navLinks = ['Home', 'Services', 'About', 'Portfolio', 'Process', 'Pricing', 'Contact'];
  const socialIcons = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Dribbble, label: 'Dribbble', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full h-20 bg-white border-b border-gray-200 px-60 flex items-center justify-between z-100"
    >
      {/* Logo - Left Side */}
      <div className="text-3xl font-bold text-black" style={{ letterSpacing: '-0.5px' }}>
        Digital Designer
      </div>

      {/* Center Navigation Links */}
      <div className="flex gap-9 items-center">
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`text-sm font-medium transition-colors duration-200 ${
              link === 'Home' ? 'text-indigo-500' : 'text-black'
            }`}
            whileHover={{ color: '#6366F1' }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Social Icons - Right Side */}
      <div className="flex gap-3 items-center">
        {socialIcons.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            className="w-11 h-11 border-2 border-black rounded-lg flex items-center justify-center bg-transparent text-black"
            whileHover={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
            title={label}
          >
            <Icon size={20} strokeWidth={1.5} />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
