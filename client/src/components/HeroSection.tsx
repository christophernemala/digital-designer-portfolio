import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section Component
 * Dark Cinematic Finance Tech Aesthetic
 * - 50/50 split layout
 * - Ultra-smooth anime-inspired animations
 * - Glassmorphism and volumetric effects
 * - Layered parallax depth
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
      transition: {
        duration: 0.8,
      },
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
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Volumetric Light Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(91, 141, 239, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(91, 141, 239, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.25, 0.2],
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
              <div className="glass px-4 py-2 w-fit rounded-full border border-accent/30 backdrop-blur-md">
                <span className="text-accent text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Welcome to Finance Intelligence
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-foreground"
            >
              Finance intelligence for{' '}
              <span className="relative inline-block">
                <span className="text-accent bloom">complex real estate</span>
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
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-accent"
                  />
                </motion.svg>
              </span>
              {' '}ecosystems
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 max-w-md leading-relaxed"
            >
              Transforming receivables, risk, and reporting into structured automated control.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(91, 141, 239, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-background font-semibold rounded-lg flex items-center gap-3 hover:gap-4 transition-all bloom"
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
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-full flex items-center justify-center"
          >
            {/* Animated Circular Badge */}
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg
                className="w-80 h-80 text-accent/30"
                viewBox="0 0 300 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="150" cy="150" r="140" />
              </svg>
            </motion.div>

            {/* Circular Text Badge */}
            <motion.div
              className="absolute w-64 h-64 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
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
                  fill="currentColor"
                  className="text-accent/60"
                >
                  <textPath href="#circlePath" startOffset="0%" textAnchor="start">
                    REAL ESTATE FINANCE • RECEIVABLES INTELLIGENCE •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Icon */}
            <motion.div
              className="relative z-10 glass p-8 rounded-2xl border border-accent/30 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              <ArrowRight size={48} className="text-accent bloom" />
            </motion.div>

            {/* Decorative Sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Wave Divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="currentColor"
        >
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" className="text-accent/10" />
        </svg>
      </motion.div>
    </section>
  );
}
