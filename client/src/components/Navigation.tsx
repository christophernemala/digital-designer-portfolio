import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

/**
 * Navigation Component
 * LOCKED PALETTE: Blue Gold White Black Only
 * - ink background with gold border
 * - bone text with electric active state
 * - gold hover effects
 */

export default function Navigation() {
  const navItems = ['Home', 'Portfolio', 'About', 'Contact'];
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 bg-ink border-b border-gold/20 backdrop-blur-xl"
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-gold bloom cursor-pointer"
        >
          Christopher Nemala
        </motion.div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ 
                color: '#C8A951',
                scale: 1.05,
              }}
              className={`text-sm font-medium transition-all ${
                idx === 0 ? 'text-electric' : 'text-bone/70 hover:text-gold'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.2,
                  color: '#C8A951',
                }}
                whileTap={{ scale: 0.95 }}
                className="text-bone/60 hover:text-gold transition-all"
                aria-label={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
