import React from 'react';
import { motion } from 'framer-motion';
import { otherSidePillars, headlineQuote, positioningStatement } from '../../data/otherSideData';
import { Users, Briefcase, Compass, ShieldCheck } from 'lucide-react';

export const OtherSideSection: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'people': return <Users className="w-6 h-6 text-[#0047FF]" />;
      case 'business': return <Briefcase className="w-6 h-6 text-[#10B981]" />;
      case 'product': return <Compass className="w-6 h-6 text-[#F59E0B]" />;
      case 'ownership': return <ShieldCheck className="w-6 h-6 text-[#EC4899]" />;
      default: return null;
    }
  };

  return (
    <section id="otherside" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] dark:bg-[#121316] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            05 — THE OTHER SIDE
          </span>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#121316] dark:text-white leading-tight">
            {headlineQuote}
          </h2>

          <div className="p-4 sm:p-6 bg-[#0047FF]/10 dark:bg-[#0047FF]/20 border-l-4 border-[#0047FF] rounded-r-sm">
            <p className="text-base sm:text-xl font-editorial italic text-[#121316] dark:text-white">
              "{positioningStatement}"
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherSidePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F1F0EC] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] p-6 sm:p-8 rounded-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F8F7F4] dark:bg-[#121316] rounded-sm">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#121316] dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0]">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-sans text-[#3A3A3A] dark:text-[#D4D4D4] leading-relaxed">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-semibold bg-[#F8F7F4] dark:bg-[#121316] text-[#121316] dark:text-[#EAEAEA] border border-[#D1D1C7] dark:border-[#2D3139] rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139]">
                <p className="text-xs font-mono text-[#0047FF] dark:text-[#3B82F6] font-semibold">
                  KEY INSIGHT: "{pillar.keyInsight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
