import { motion } from 'framer-motion';

/**
 * Hero Section Component
 * Design Philosophy: Modern 3D Maximalism
 * Exact specifications from HeaderPortfolioPrompt
 */

export default function HeroSection() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] mt-20 bg-gradient-to-br from-purple-100 to-pink-50 px-60 grid grid-cols-2 items-center gap-20 relative overflow-hidden">
      {/* Decorative Sparkles - Top Right */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[15%] right-[12%] w-16 h-16 z-10"
      >
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path
            d="M32 8 L34 28 L54 30 L34 32 L32 52 L30 32 L10 30 L30 28 Z"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Small Sparkle */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[18%] right-[9%] w-10 h-10 z-10"
      >
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path
            d="M32 12 L34 24 L46 26 L34 28 L32 40 L30 28 L18 26 L30 24 Z"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Decorative Wavy Lines - Bottom Right */}
      <motion.svg
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[25%] right-[8%] w-24 h-10 z-10"
        viewBox="0 0 100 40"
      >
        <path d="M0 8 Q25 4, 50 8 T100 8" fill="none" stroke="black" strokeWidth="2" />
        <path d="M0 20 Q25 16, 50 20 T100 20" fill="none" stroke="black" strokeWidth="2" />
        <path d="M0 32 Q25 28, 50 32 T100 32" fill="none" stroke="black" strokeWidth="2" />
      </motion.svg>

      {/* Left Column - Text Content */}
      <div className="flex flex-col items-start justify-center z-20">
        {/* Greeting Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-white border-2 border-black rounded-full px-5 py-2 mb-8"
        >
          <span className="text-sm font-semibold text-black">✱ HELLO!</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-7xl font-bold text-black leading-tight mb-7"
          style={{ letterSpacing: '-1px' }}
        >
          I'm Christopher Nemala,
          <br />
          <span className="relative inline-block">
            a product designer.
            {/* Hand-drawn underline */}
            <motion.svg
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="absolute bottom-1 left-0 w-full h-1"
              viewBox="0 0 400 16"
              preserveAspectRatio="none"
            >
              <path
                d="M0 12 Q100 8, 200 10 T400 12"
                fill="none"
                stroke="#6366F1"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-700 max-w-md mb-9 leading-relaxed"
        >
          I'm a freelance product designer based in London. I'm very passionate about the work that I do.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ backgroundColor: '#000000', color: '#FFFFFF', y: -2 }}
          className="px-8 py-4 border-2 border-black rounded-lg font-semibold text-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        >
          See My Works
        </motion.button>
      </div>

      {/* Right Column - Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="flex items-center justify-center relative z-20"
      >
        {/* Portrait Container */}
        <div className="relative w-[520px] h-[600px]">
          {/* Circular Badge */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: 'spring',
              stiffness: 100,
            }}
            className="absolute top-[12%] left-[-8%] w-[140px] h-[140px] bg-white border-3 border-black rounded-full flex items-center justify-center shadow-lg z-10"
            style={{ transform: 'rotate(-8deg)' }}
          >
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              className="absolute"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 70, 70 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
              </defs>
              <text fontSize="11" fontWeight="700" letterSpacing="1.5" fill="black">
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                  AVAILABLE FOR FREELANCE ★
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Portrait Image Container */}
          <div className="w-full h-full rounded-t-[260px] rounded-b-xl overflow-hidden bg-gradient-to-b from-purple-400 to-purple-500 shadow-2xl">
            <img
              src="/images/portrait-bg-gradient.png"
              alt="Christopher Nemala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
