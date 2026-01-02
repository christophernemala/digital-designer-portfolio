import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { trpc } from '@/lib/trpc';

interface Project {
  title: string;
  description: string;
  category: string;
}

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function AIAssistantModal({ isOpen, onClose, project }: AIAssistantModalProps) {
  const [question, setQuestion] = useState('');
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false);

  const explainMutation = trpc.ai.explainProject.useMutation({
    onSuccess: (data) => {
      setExplanation(data.explanation);
      setIsLoading(false);
    },
    onError: (error) => {
      console.error('AI explanation error:', error);
      setExplanation('Sorry, I was unable to generate an explanation. Please try again.');
      setIsLoading(false);
    },
  });

  const handleExplain = () => {
    if (!project) return;
    setIsLoading(true);
    setHasAskedQuestion(false);
    explainMutation.mutate({
      projectTitle: project.title,
      projectDescription: project.description,
      projectCategory: project.category,
    });
  };

  const handleAskQuestion = () => {
    if (!project || !question.trim()) return;
    setIsLoading(true);
    setHasAskedQuestion(true);
    explainMutation.mutate({
      projectTitle: project.title,
      projectDescription: project.description,
      projectCategory: project.category,
      question: question.trim(),
    });
    setQuestion('');
  };

  const handleClose = () => {
    setExplanation(null);
    setQuestion('');
    setHasAskedQuestion(false);
    onClose();
  };

  // Auto-explain when modal opens with a project
  const handleModalOpen = () => {
    if (project && !explanation && !isLoading) {
      handleExplain();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
          onAnimationComplete={handleModalOpen}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl bg-[#0E1A2B] border border-gold/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AI Portfolio Assistant</h3>
                  <p className="text-sm text-white/60">{project.title}</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="w-10 h-10 text-gold animate-spin mb-4" />
                  <p className="text-white/70">
                    {hasAskedQuestion ? 'Answering your question...' : 'Analyzing project details...'}
                  </p>
                </div>
              ) : explanation ? (
                <div className="space-y-4">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 leading-relaxed whitespace-pre-wrap">{explanation}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <Sparkles className="w-12 h-12 text-gold/50 mb-4" />
                  <p className="text-white/60 text-center">
                    Click below to get an AI-powered explanation of this project.
                  </p>
                  <button
                    onClick={handleExplain}
                    className="mt-4 px-6 py-3 bg-gold text-[#0B0F14] font-semibold rounded-xl hover:bg-gold/90 transition-colors"
                  >
                    Explain This Project
                  </button>
                </div>
              )}
            </div>

            {/* Question Input */}
            {explanation && !isLoading && (
              <div className="p-6 border-t border-gold/20">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAskQuestion()}
                    placeholder="Ask a follow-up question..."
                    className="flex-1 px-4 py-3 bg-white/5 border border-gold/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <button
                    onClick={handleAskQuestion}
                    disabled={!question.trim()}
                    className="px-4 py-3 bg-gold text-[#0B0F14] font-semibold rounded-xl hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/40 text-center">
                  Powered by AI • Ask about technologies, challenges, or outcomes
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
