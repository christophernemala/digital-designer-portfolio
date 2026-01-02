import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section Component
 * LOCKED PALETTE: Blue Gold White Black Only
 * - midnight/ink gradient background
 * - bone text with electric accent
 * - gold underline and button
 */

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const floatingVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -20, 0],
      opacity: 1,
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  const rotatingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-gradient-to-br from-midnight via-ink to-midnight">
      {/* Volumetric Light Background - Electric Blue */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(58, 111, 248, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(200, 169, 81, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <div className="glass px-4 py-2 w-fit rounded-full border border-gold/30 backdrop-blur-md">
                <span className="text-gold text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  Welcome to Finance Intelligence
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-bone" style={{fontWeight: '600'}}
            >
              Finance intelligence for{' '}
              <span className="relative inline-block">
                <span className="text-electric electric-glow">complex real estate</span>
                {/* Gold Accent Underline */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <path
                    d="M 0 10 Q 75 0, 150 10 T 300 10"
                    stroke="#C8A951"
                    strokeWidth="3"
                    fill="none"
                  />
                </motion.svg>
              </span>
              {' '}ecosystems
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-bone/70 max-w-md leading-relaxed"
            >
              Transforming receivables, risk, and reporting into structured automated control.
            </motion.p>

            {/* CTA Button - Gold Primary */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200, 169, 81, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-ink font-semibold rounded-lg flex items-center gap-3 hover:bg-electric hover:text-bone transition-all bloom"
              >
                View Portfolio
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-full flex items-center justify-center"
          >
            {/* Animated Circular Badge - Gold */}
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg
                className="w-80 h-80"
                viewBox="0 0 300 300"
                fill="none"
                stroke="#C8A951"
                strokeWidth="1"
                opacity="0.3"
              >
                <circle cx="150" cy="150" r="140" />
              </svg>
            </motion.div>

            {/* Circular Text Badge */}
            <motion.div
              className="absolute w-64 h-64 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 300 300"
                fill="none"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0"
                    fill="none"
                  />
                </defs>
                <text
                  fontSize="16"
                  fontWeight="bold"
                  fill="#C8A951"
                  opacity="0.6"
                >
                  <textPath href="#circlePath" startOffset="0%" textAnchor="start">
                    REAL ESTATE FINANCE • RECEIVABLES INTELLIGENCE •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Arrow Icon - Gold Border */}
            <motion.div
              className="relative z-10 glass p-8 rounded-2xl border border-gold/40 backdrop-blur-md hover:bg-gold hover:border-gold group transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              <ArrowRight size={48} className="text-gold group-hover:text-ink bloom transition-colors" />
            </motion.div>

            {/* Decorative Sparkles - Electric Blue */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-electric rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${15 + i * 12}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Wave Divider - Gold */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
        animate={{ y: [0, 10, 0] }}
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
