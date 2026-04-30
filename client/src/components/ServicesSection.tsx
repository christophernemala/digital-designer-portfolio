import { motion } from 'framer-motion';
import { CheckCircle, Zap, BarChart3, Cog } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  deliverables: string[];
}

const services: Service[] = [
  {
    id: 'ar-audit',
    title: 'AR Audit & Governance',
    description: 'Comprehensive accounts receivable audits with governance framework design for large real estate portfolios.',
    icon: <CheckCircle className="w-8 h-8" />,
    highlights: [
      'Aging analysis and reconciliation',
      'Credit control process mapping',
      'Dispute root cause analysis',
      'Governance framework design',
    ],
    deliverables: [
      'AR aging report with exception listing',
      'Dispute tracking and resolution playbook',
      'Credit control SOPs and escalation matrix',
      'Governance control checklist',
    ],
  },
  {
    id: 'dashboard-build',
    title: 'Dashboard & Reporting Build',
    description: 'Executive-ready Power BI and Excel dashboards for real-time AR visibility, DSO tracking, and 90+ exposure management.',
    icon: <BarChart3 className="w-8 h-8" />,
    highlights: [
      'Real-time AR aging visualization',
      'DSO and collection metrics',
      '90+ day exposure tracking',
      'Executive summary dashboards',
    ],
    deliverables: [
      'Power BI dashboard with DAX calculations',
      'Excel reporting templates',
      'Automated refresh schedules',
      'User training and documentation',
    ],
  },
  {
    id: 'ifrs9-ecl',
    title: 'IFRS 9 ECL Reporting',
    description: 'ECL calculation support, default logic implementation, and audit-ready reporting for IFRS 9 compliance.',
    icon: <Zap className="w-8 h-8" />,
    highlights: [
      'ECL model design and validation',
      'Aging mapping and default logic',
      'Movement commentary automation',
      'Exception listing and review',
    ],
    deliverables: [
      'ECL calculation model (Excel/Power BI)',
      'Default probability mapping',
      'Monthly ECL reporting pack',
      'Audit documentation and trail',
    ],
  },
  {
    id: 'automation-ai',
    title: 'Automation & AI Workflows',
    description: 'Workflow automation and AI-powered productivity tools to compress reporting time and standardize outputs.',
    icon: <Cog className="w-8 h-8" />,
    highlights: [
      'Report generation automation',
      'Data extraction and transformation',
      'AI-powered summarization',
      'Workflow orchestration',
    ],
    deliverables: [
      'Automated reporting pipeline',
      'Data quality checks and validation',
      'AI summary generation',
      'Process documentation and training',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-[#0B0F14] via-[#0E1A2B] to-[#0B0F14] border-t border-gold/10">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-gold/30 bg-gold/5">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[950] text-white leading-tight tracking-[-1px] mb-6">
            Consulting Services for <span className="text-electric">Real Estate Finance</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Specialized consulting across AR governance, credit control, dashboard design, and automation to drive executive visibility and faster decision-making.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card Border */}
              <div className="absolute inset-0 rounded-2xl border border-gold/20 group-hover:border-gold/50 transition-colors duration-300" />
              
              {/* Card Content */}
              <div className="relative p-8 md:p-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300 mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gold/80 uppercase tracking-widest mb-4">
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="pt-6 border-t border-gold/10">
                  <h4 className="text-sm font-semibold text-gold/80 uppercase tracking-widest mb-4">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold/10 border border-gold/30 text-gold font-semibold hover:bg-gold/20 hover:border-gold/50 transition-all duration-300"
                  aria-label={`Inquire about ${service.title}`}
                >
                  Inquire About This Service
                  <span className="text-lg">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-white/60 mb-6 text-lg">
            Looking for a custom engagement or combination of services?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gold text-[#0B0F14] font-bold text-lg hover:bg-gold/90 transition-colors duration-300"
          >
            Schedule a Consultation
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
