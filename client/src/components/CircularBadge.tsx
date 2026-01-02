import { motion } from 'framer-motion';

/**
 * Circular Badge Component
 * Rotating text badge with skills/expertise
 * LOCKED PALETTE: Blue Gold White Black Only
 */

interface CircularBadgeProps {
  className?: string;
}

export default function CircularBadge({ className = '' }: CircularBadgeProps) {
  const text = "AR COLLECTIONS • ORACLE FUSION • POWER BI • ECL REPORTING • REAL ESTATE • ";
  
  return (
    <motion.div 
      className={`relative w-[180px] h-[180px] ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
      
      {/* Rotating text */}
      <motion.svg 
        viewBox="0 0 200 200" 
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            fill="none"
          />
        </defs>
        <text 
          fill="#C8A951" 
          fontSize="11" 
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text.repeat(2)}
          </textPath>
        </text>
      </motion.svg>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-[70px] h-[70px] rounded-full bg-gold flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-ink text-lg font-bold">90+</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
