import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';
import CircularBadge from './CircularBadge';

/**
 * Hero Section Component - Premium $56K Anime 3D Portfolio
 * Ultra-smooth cinematic motion with photo integration
 * LOCKED PALETTE: Blue Gold White Black Only
 */

// Decorative sparkle SVG
function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.3 6.2L20 12l-6.7 3.8L12 22l-1.3-6.2L4 12l6.7-3.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Decorative wavy lines SVG
function WavyLines({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 90" fill="none" aria-hidden="true">
      <path
        d="M10 20c18 0 18-10 36-10s18 10 36 10 18-10 36-10 18 10 36 10 18-10 36-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 45c18 0 18-10 36-10s18 10 36 10 18-10 36-10 18 10 36 10 18-10 36-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M10 70c18 0 18-10 36-10s18 10 36 10 18-10 36-10 18 10 36 10 18-10 36-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export default function HeroSection() {
  // Ultra-smooth anime-style animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.0, delay: 0.4 },
    },
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-midnight via-ink to-ink"
    >
      {/* 3D Background */}
      <Hero3D />

      {/* Volumetric Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(58, 111, 248, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(200, 169, 81, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Decorative Sparkles */}
      <div className="pointer-events-none absolute top-24 right-20 text-gold/70">
        <motion.div
          animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkle className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute -left-8 top-6"
          animate={{ rotate: [0, -10, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          <Sparkle className="w-5 h-5 opacity-70" />
        </motion.div>
      </div>

      {/* Wavy Lines Decoration */}
      <motion.div 
        className="pointer-events-none absolute bottom-20 right-10 text-gold/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <WavyLines className="w-[200px] h-[80px]" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 min-h-[calc(100vh-5rem)] flex items-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="glass px-5 py-2.5 rounded-full border border-gold/30 backdrop-blur-md inline-flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-sm font-semibold">Christopher Nemala</span>
                <span className="text-bone/60 text-sm">Senior Executive – Receivables, Credit Control and Financial Reporting</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[52px] leading-[1.08] text-bone"
              style={{ fontWeight: 600 }}
            >
              Finance reporting and controls for{' '}
              <span className="relative inline-block">
                <span className="text-electric electric-glow">large real estate portfolios</span>
                {/* Gold Accent Underline */}
                <motion.span
                  className="absolute left-0 right-0 -bottom-1 h-[10px] bg-gold/30 -z-10 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              {' '}and community management.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-bone/70 max-w-xl leading-relaxed"
            >
              Oracle Fusion subledger governance, AR aging, DSO and 90+ risk, and IFRS 9 ECL 
              assessment reporting. Excel and Power BI delivery with clean templates, drilldowns, 
              and audit-ready narratives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(200, 169, 81, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-xl bg-gold text-ink font-semibold text-[15px] transition-all bloom"
              >
                View Portfolio
                <ArrowRight size={18} className="ml-2" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(200, 169, 81, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-xl border-2 border-gold/50 text-gold font-semibold text-[15px] transition-all hover:border-gold"
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait + Badge */}
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Portrait Container with Glassmorphism */}
              <motion.div
                className="relative w-[320px] h-[400px] md:w-[360px] md:h-[450px] rounded-[28px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Glass border effect */}
                <div className="absolute inset-0 rounded-[28px] border-2 border-gold/30 z-10 pointer-events-none" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent z-10 pointer-events-none" />
                
                {/* Portrait Image */}
                <img
                  src="/portraits/hero-2.jpg"
                  alt="Christopher Nemala"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </motion.div>

              {/* Circular Badge - positioned bottom left */}
              <div className="absolute -left-8 -bottom-8 z-20">
                <CircularBadge />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-electric/20 backdrop-blur-sm border border-electric/30"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 -right-6 w-12 h-12 rounded-lg bg-gold/20 backdrop-blur-sm border border-gold/30"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Wave Divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 opacity-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="#C8A951"
        >
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" />
        </svg>
      </motion.div>
    </section>
  );
}
