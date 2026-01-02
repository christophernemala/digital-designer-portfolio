import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

/**
 * Footer Component with Contact Form
 * LOCKED PALETTE: Blue Gold White Black Only
 * - ink/midnight background
 * - bone text with gold accents
 * - electric blue highlights
 */

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      toast.success('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    },
    onError: (error: { message?: string }) => {
      toast.error(error.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    submitLead.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer id="contact" className="relative w-full py-20 bg-gradient-to-t from-midnight via-ink to-ink overflow-hidden">
      {/* Volumetric Light Effect - Electric Blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(58, 111, 248, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-bone mb-4">
                Let's Work{' '}
                <span className="text-gold bloom">Together</span>
              </h2>
              <p className="text-bone/70 text-lg leading-relaxed max-w-md">
                Ready to transform your real estate finance operations? 
                Get in touch and let's discuss how I can help streamline your receivables and reporting.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href="mailto:contact@christophernemala.com"
                className="flex items-center gap-4 text-bone/70 hover:text-gold transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors">
                  <Mail size={20} className="text-gold" />
                </div>
                <span>contact@christophernemala.com</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 text-bone/70"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center border border-gold/20">
                  <MapPin size={20} className="text-gold" />
                </div>
                <span>Available Worldwide</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 text-bone/70"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center border border-gold/20">
                  <Phone size={20} className="text-gold" />
                </div>
                <span>Schedule a Call</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center border border-gold/20 text-bone/60 hover:text-gold hover:border-gold/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-gold/20 space-y-6">
              <h3 className="text-2xl font-semibold text-bone mb-2">Send a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-bone/70">
                    Name <span className="text-gold">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-midnight/50 border-gold/20 focus:border-gold text-bone placeholder:text-bone/40"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-bone/70">
                    Email <span className="text-gold">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-midnight/50 border-gold/20 focus:border-gold text-bone placeholder:text-bone/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-bone/70">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-midnight/50 border-gold/20 focus:border-gold text-bone placeholder:text-bone/40"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-bone/70">
                  Message <span className="text-gold">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-midnight/50 border-gold/20 focus:border-gold text-bone placeholder:text-bone/40 resize-none"
                  required
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gold hover:bg-electric text-ink hover:text-bone font-semibold rounded-lg flex items-center justify-center gap-3 bloom transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-ink/30 border-t-ink rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gold/20 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-bone/50 text-sm">
            © {new Date().getFullYear()} Christopher Nemala. All rights reserved.
          </p>
          <p className="text-bone/50 text-sm">
            Finance Intelligence for Real Estate
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
