import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, FileSpreadsheet, TrendingUp, Users } from 'lucide-react';

/**
 * Portfolio Section Component
 * Interactive project cards with parallax and motion effects
 * LOCKED PALETTE: Blue Gold White Black Only
 */

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Quarterly AR Performance Dashboard',
    category: 'Power BI',
    description: 'Comprehensive AR aging dashboard with standardized buckets, KPI cards, drilldowns, and exportable management packs.',
    icon: <BarChart3 size={28} />,
    features: ['Collections Performance', 'Aging Summary', 'DSO Tracking', 'Bad Debt Analysis'],
  },
  {
    id: 2,
    title: 'Receivables Reporting Factory',
    category: 'Excel',
    description: 'Clean and merge multi-file AR exports into one controlled model with pivot summaries and 90+ listings.',
    icon: <FileSpreadsheet size={28} />,
    features: ['Power Query Automation', 'Company-wise Totals', 'Category Totals', 'Transaction Detail'],
  },
  {
    id: 3,
    title: 'ECL Movements Tracker',
    category: 'IFRS 9',
    description: 'Period-over-period ECL tracking with movements table, drivers analysis, and commentary templates.',
    icon: <TrendingUp size={28} />,
    features: ['Roll Rate Analysis', 'LGD Calculations', 'Exception Lists', 'Audit Narratives'],
  },
  {
    id: 4,
    title: 'Collections Operations Tracker',
    category: 'Operations',
    description: 'Follow-up cadence management with accountability tracking, dispute stages, and closure status.',
    icon: <Users size={28} />,
    features: ['Action Logs', 'Dispute Tracking', 'Escalation Workflow', 'Performance Metrics'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl border border-gold/20 overflow-hidden cursor-pointer"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300">
            {project.icon}
          </div>
          <motion.div
            className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/50 group-hover:text-gold group-hover:border-gold transition-all"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-electric bg-electric/10 rounded-full mb-4">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-bone mb-3 group-hover:text-gold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-bone/60 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {project.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs text-bone/50 bg-midnight/50 rounded-md border border-gold/10"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 bg-ink overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #3A6FF8 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #C8A951 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/30 mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-bone mb-6">
            Featured <span className="text-electric">Projects</span>
          </h2>
          <p className="text-bone/60 text-lg max-w-2xl mx-auto">
            Real-world finance reporting solutions for real estate portfolios, 
            community management, and enterprise AR operations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-xl bloom transition-all"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
