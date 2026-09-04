import React from 'react';
import { motion } from 'framer-motion';
import { verifiedMetrics } from '../../data/numbersData';

export const NumbersSection: React.FC = () => {
  return (
    <section id="numbers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] border-t border-b border-[#E5E4DE] dark:border-[#2D3139] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            06 — THE NUMBERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white">
            Verified Proof, Not Percentages
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
            Every statistic here reflects actual real-world responsibility, direct user interaction, and executed business outcomes.
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedMetrics.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] p-8 rounded-sm space-y-4 shadow-sm"
            >
              <div className="flex items-baseline space-x-1">
                {item.prefix && (
                  <span className="text-3xl sm:text-4xl font-display font-bold text-[#0047FF]">
                    {item.prefix}
                  </span>
                )}
                <span className="text-5xl sm:text-6xl font-display font-extrabold text-[#121316] dark:text-white tracking-tight">
                  {item.number}
                </span>
                {item.suffix && (
                  <span className="text-3xl sm:text-4xl font-display font-bold text-[#0047FF]">
                    {item.suffix}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white">
                  {item.label}
                </h3>
                <p className="text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
