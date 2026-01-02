import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Briefcase, Award } from 'lucide-react';

/**
 * About Section Component
 * Photo gallery with dynamic transitions
 * LOCKED PALETTE: Blue Gold White Black Only
 */

const skills = [
  'Oracle Fusion AR Subledger',
  'Power BI Dashboards',
  'Excel Power Query',
  'IFRS 9 ECL Reporting',
  'AR Aging Governance',
  'Collections Management',
  'DSO & Risk Analysis',
  'Audit-Ready Narratives',
];

const stats = [
  { value: '90+', label: 'Days Risk Expertise' },
  { value: '6+', label: 'Entity Portfolios' },
  { value: '50+', label: 'Reports Delivered' },
  { value: '100%', label: 'Audit Compliance' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-ink to-midnight overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #C8A951 0%, transparent 70%)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Photo */}
            <motion.div
              className="relative w-full max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
                <img
                  src="/portraits/hero-1.jpg"
                  alt="Christopher Nemala - Professional"
                  className="w-full h-[500px] object-cover object-top"
                  draggable={false}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">Dubai, UAE</span>
                  </div>
                  <h3 className="text-xl font-semibold text-bone">Christopher Nemala</h3>
                  <p className="text-bone/70 text-sm">Senior Executive, AR & Collections</p>
                </div>
              </div>

              {/* Floating accent photos */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-40 rounded-xl overflow-hidden border-2 border-electric/40 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <img
                  src="/portraits/hero-3.jpg"
                  alt="Christopher Nemala"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </motion.div>

              {/* Stats card */}
              <motion.div
                className="absolute -bottom-8 -left-8 glass p-4 rounded-xl border border-gold/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Award size={24} className="text-ink" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold">5+</p>
                    <p className="text-xs text-bone/60">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section badge */}
            <span className="inline-block px-4 py-2 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/30">
              About Me
            </span>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-semibold text-bone leading-tight">
              Driving <span className="text-electric">Financial Excellence</span> in Real Estate
            </h2>

            {/* Description */}
            <div className="space-y-4 text-bone/70 leading-relaxed">
              <p>
                Senior Executive specializing in Accounts Receivable, Collections, and Order-to-Cash 
                operations for multi-entity real estate portfolios and community management organizations.
              </p>
              <p>
                I transform complex financial data into actionable insights through Oracle Fusion 
                subledger governance, Power BI dashboards, and Excel automation. My focus is on 
                AR aging governance, collections follow-up management, and IFRS 9 ECL assessment reporting.
              </p>
            </div>

            {/* Role info */}
            <div className="flex items-center gap-4 p-4 glass rounded-xl border border-gold/20">
              <div className="w-12 h-12 rounded-lg bg-electric/20 flex items-center justify-center">
                <Briefcase size={24} className="text-electric" />
              </div>
              <div>
                <h4 className="font-semibold text-bone">Current Role</h4>
                <p className="text-sm text-bone/60">Senior Executive, AR & Collections (Order to Cash)</p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-bone/80"
                >
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gold/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="text-xs text-bone/50 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
