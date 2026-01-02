import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, FileSpreadsheet, TrendingUp, Users, Sparkles } from 'lucide-react';
import { useState } from 'react';
import AIAssistantModal from './AIAssistantModal';

/**
 * Portfolio Section Component
 * Interactive project cards with AI-powered explanations
 * LOCKED PALETTE: Blue Gold White Black Only
 */

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  // Enhanced metadata for AI
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  timeline: string;
  challenges: string[];
  outcomes: string[];
  clientType: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Quarterly AR Performance Dashboard',
    category: 'Power BI',
    description: 'Comprehensive AR aging dashboard with standardized buckets, KPI cards, drilldowns, and exportable management packs.',
    icon: <BarChart3 size={28} />,
    features: ['Collections Performance', 'Aging Summary', 'DSO Tracking', 'Bad Debt Analysis'],
    technologies: ['Power BI Desktop', 'DAX', 'Power Query M', 'SQL Server', 'Oracle Fusion Cloud', 'Excel Data Models'],
    metrics: [
      { label: 'Report Generation Time Reduced', value: '85%' },
      { label: 'Manual Data Entry Eliminated', value: '100%' },
      { label: 'Executive Review Time Saved', value: '6 hours/week' },
      { label: 'Data Accuracy Improvement', value: '99.5%' },
    ],
    timeline: '8 weeks from requirements to production deployment',
    challenges: [
      'Consolidating data from 12 different Oracle Fusion subledgers',
      'Standardizing aging bucket definitions across business units',
      'Creating drill-through functionality for transaction-level detail',
      'Automating daily refresh without impacting source system performance',
    ],
    outcomes: [
      'Single source of truth for AR performance across 15,000+ units',
      'Real-time DSO visibility for C-suite executives',
      'Automated email distribution of weekly management packs',
      'Enabled proactive collections prioritization based on risk scoring',
    ],
    clientType: 'Large real estate portfolio management company (15,000+ residential and commercial units)',
  },
  {
    id: 2,
    title: 'Receivables Reporting Factory',
    category: 'Excel',
    description: 'Clean and merge multi-file AR exports into one controlled model with pivot summaries and 90+ listings.',
    icon: <FileSpreadsheet size={28} />,
    features: ['Power Query Automation', 'Company-wise Totals', 'Category Totals', 'Transaction Detail'],
    technologies: ['Excel 365', 'Power Query', 'VBA Macros', 'Power Pivot', 'Oracle Fusion Exports', 'SharePoint Integration'],
    metrics: [
      { label: 'Monthly Close Time Reduced', value: '3 days to 4 hours' },
      { label: 'Files Consolidated Automatically', value: '47 source files' },
      { label: 'Error Rate Reduction', value: '95%' },
      { label: 'Audit Query Response Time', value: '< 5 minutes' },
    ],
    timeline: '6 weeks including UAT and training',
    challenges: [
      'Handling inconsistent file formats from legacy systems',
      'Managing 90+ day aging with proper cutoff controls',
      'Creating audit trail for all data transformations',
      'Building user-friendly interface for non-technical finance staff',
    ],
    outcomes: [
      'Eliminated manual copy-paste errors in monthly reporting',
      'Created standardized 90+ listings for credit committee review',
      'Enabled same-day response to external auditor requests',
      'Reduced overtime during month-end close by 80%',
    ],
    clientType: 'Community management company with 200+ HOA associations',
  },
  {
    id: 3,
    title: 'ECL Movements Tracker',
    category: 'IFRS 9',
    description: 'Period-over-period ECL tracking with movements table, drivers analysis, and commentary templates.',
    icon: <TrendingUp size={28} />,
    features: ['Roll Rate Analysis', 'LGD Calculations', 'Exception Lists', 'Audit Narratives'],
    technologies: ['Excel Advanced Formulas', 'Power BI', 'SQL Queries', 'Oracle Fusion AR', 'IFRS 9 ECL Models', 'Statistical Analysis'],
    metrics: [
      { label: 'ECL Calculation Accuracy', value: '99.8%' },
      { label: 'Audit Finding Reduction', value: '100% (zero findings)' },
      { label: 'Quarterly Reporting Time', value: '2 days to 3 hours' },
      { label: 'Commentary Generation', value: 'Automated' },
    ],
    timeline: '12 weeks including model validation and audit review',
    challenges: [
      'Implementing IFRS 9 three-stage impairment model',
      'Calculating forward-looking PD, LGD, and EAD parameters',
      'Creating movements reconciliation between periods',
      'Generating auditor-ready documentation and narratives',
    ],
    outcomes: [
      'Full IFRS 9 compliance with documented methodology',
      'Automated ECL movements table with variance explanations',
      'Roll rate matrices updated monthly with trend analysis',
      'Clean audit opinions for 3 consecutive years',
    ],
    clientType: 'Real estate developer with AED 2B+ receivables portfolio',
  },
  {
    id: 4,
    title: 'Collections Operations Tracker',
    category: 'Operations',
    description: 'Follow-up cadence management with accountability tracking, dispute stages, and closure status.',
    icon: <Users size={28} />,
    features: ['Action Logs', 'Dispute Tracking', 'Escalation Workflow', 'Performance Metrics'],
    technologies: ['Excel', 'Power Automate', 'SharePoint Lists', 'Microsoft Teams', 'Outlook Integration', 'Power BI Dashboards'],
    metrics: [
      { label: 'Collection Rate Improvement', value: '23%' },
      { label: 'Average Days to Resolution', value: '45 to 28 days' },
      { label: 'Dispute Resolution Time', value: '60% faster' },
      { label: 'Team Productivity Increase', value: '35%' },
    ],
    timeline: '10 weeks including process redesign and team training',
    challenges: [
      'Standardizing follow-up cadence across 8-person collections team',
      'Tracking dispute stages with proper escalation triggers',
      'Creating accountability without micromanagement',
      'Integrating with existing Oracle Fusion AR workflows',
    ],
    outcomes: [
      'Reduced 90+ day balances by AED 15M in first quarter',
      'Established clear escalation paths to legal and management',
      'Created performance dashboards for individual collectors',
      'Improved customer satisfaction scores by 18%',
    ],
    clientType: 'Mixed-use real estate portfolio (retail, residential, commercial)',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  onAIClick: (project: Project) => void;
}

function ProjectCard({ project, index, onAIClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl border border-gold/20 overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300">
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            {/* AI Explain Button */}
            <motion.button
              onClick={() => onAIClick(project)}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Ask AI about this project"
            >
              <Sparkles size={16} />
            </motion.button>
            <motion.div
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/50 group-hover:text-gold group-hover:border-gold transition-all cursor-pointer"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
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
        <p className="text-bone/60 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Metrics Preview */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="px-3 py-2 bg-gold/5 rounded-lg border border-gold/10">
              <div className="text-gold font-bold text-lg">{metric.value}</div>
              <div className="text-bone/50 text-xs">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs text-electric/80 bg-electric/10 rounded-md border border-electric/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs text-bone/50 bg-midnight/50 rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

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

        {/* AI Badge */}
        <motion.button
          onClick={() => onAIClick(project)}
          className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-sm font-medium text-gold/70 bg-gold/5 border border-gold/20 rounded-xl hover:bg-gold/10 hover:text-gold hover:border-gold/40 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles size={14} />
          Ask AI about this project
        </motion.button>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAIClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
            <Sparkles size={14} className="text-gold" />
            <span className="text-sm text-gold/80">AI-powered project explanations with detailed metrics</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onAIClick={handleAIClick}
            />
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

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
