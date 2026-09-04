import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#121316]/70 backdrop-blur-sm"
          />

          {/* Slide-over Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-[#F8F7F4] dark:bg-[#16181D] border-l border-[#D1D1C7] dark:border-[#2D3139] shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E4DE] dark:border-[#2D3139] bg-[#F1F0EC] dark:bg-[#121316]">
              <div>
                <h3 className="text-xl font-display font-bold text-[#121316] dark:text-[#EAEAEA]">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0] mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#5A5A5A] hover:text-[#121316] dark:text-[#A0A0A0] dark:hover:text-white hover:bg-[#E5E4DE] dark:hover:bg-[#2D3139] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 font-sans leading-relaxed text-[#2A2A2A] dark:text-[#D4D4D4]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
