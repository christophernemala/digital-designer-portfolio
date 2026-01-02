import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

/**
 * Navigation Component
 * LOCKED PALETTE: Blue Gold White Black Only
 * - ink background with gold border
 * - bone text with electric active state
 * - gold hover effects
 * - Enhanced motion effects and typography
 */

export default function Navigation() {
  const navItems = ['Home', 'Portfolio', 'About', 'Contact'];
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/christophernemala', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:christophernemala@gmail.com', label: 'Email' },
  ];

  // Staggered fade-in animation for nav container
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // Slide-up with spring animation for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Scale-in animation for social icons
  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 bg-ink border-b border-gold/20 backdrop-blur-xl"
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo - Enhanced typography */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ 
            scale: 1.03,
            textShadow: "0 0 20px rgba(200, 169, 81, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
          className="text-[22px] font-bold text-gold bloom cursor-pointer tracking-tight"
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Christopher Nemala
        </motion.a>

        {/* Center Navigation Links - Enhanced motion */}
        <motion.div 
          className="hidden md:flex gap-10"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={navItemVariants}
              whileHover={{ 
                color: '#C8A951',
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`text-[15px] font-medium transition-colors ${
                idx === 0 ? 'text-electric' : 'text-bone/70 hover:text-gold'
              }`}
              style={{ fontWeight: 500 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons - Enhanced motion */}
        <motion.div 
          className="flex gap-5"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover={{ 
                  scale: 1.25,
                  color: '#C8A951',
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className="text-bone/60 hover:text-gold transition-colors"
                aria-label={social.label}
              >
                <Icon size={20} strokeWidth={1.8} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
}
