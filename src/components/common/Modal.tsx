import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  category?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#121316]/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#F8F7F4] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] shadow-2xl rounded-sm overflow-hidden flex flex-col z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E4DE] dark:border-[#2D3139] bg-[#F1F0EC] dark:bg-[#141518]">
              <div>
                {category && (
                  <span className="text-[10px] font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase">
                    {category}
                  </span>
                )}
                {title && (
                  <h3 className="text-lg font-display font-semibold text-[#121316] dark:text-[#EAEAEA]">
                    {title}
                  </h3>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#5A5A5A] hover:text-[#121316] dark:text-[#A0A0A0] dark:hover:text-white hover:bg-[#E5E4DE] dark:hover:bg-[#2D3139] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto font-sans leading-relaxed text-[#2A2A2A] dark:text-[#D4D4D4]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
