import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { journeyMilestones, JourneyMilestone } from '../../data/journeyData';
import { Modal } from '../common/Modal';
import { Users, TrendingUp, Ear, Rocket, HardHat, Code2, ArrowRight } from 'lucide-react';

export const PathSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone | null>(null);

  const getIconForCategory = (category: JourneyMilestone['category']) => {
    switch (category) {
      case 'LEADERSHIP': return <Users className="w-5 h-5 text-[#0047FF]" />;
      case 'BUSINESS': return <TrendingUp className="w-5 h-5 text-[#10B981]" />;
      case 'SALES': return <Ear className="w-5 h-5 text-[#F59E0B]" />;
      case 'EXPLORATION': return <Rocket className="w-5 h-5 text-[#EC4899]" />;
      case 'SOFTWARE': return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      default: return <HardHat className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="path" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] transition-colors border-t border-b border-[#E5E4DE] dark:border-[#2D3139]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            02 — THE PATH
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white">
            Not a straight timeline. An evolving map.
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
            Click any node on the path to discover how real-world leadership, sales, construction supervision, and business experiments led directly to full-stack engineering.
          </p>
        </div>

        {/* Interactive Grid Map System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {journeyMilestones.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMilestone(item)}
              className="group cursor-pointer bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] dark:hover:border-[#0047FF] p-6 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest px-2 py-0.5 bg-[#E5E4DE] dark:bg-[#2D3139] text-[#121316] dark:text-[#EAEAEA] rounded-sm">
                    {item.year}
                  </span>
                  <div className="p-2 rounded-full bg-[#F1F0EC] dark:bg-[#121316]">
                    {getIconForCategory(item.category)}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-[#121316] dark:text-white group-hover:text-[#0047FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139] flex items-center justify-between text-xs font-mono">
                {item.metrics ? (
                  <span className="text-[#0047FF] dark:text-[#3B82F6] font-semibold">
                    {item.metrics}
                  </span>
                ) : (
                  <span className="text-[#5A5A5A] dark:text-[#A0A0A0]">Explore story</span>
                )}
                <span className="group-hover:translate-x-1 transition-transform flex items-center text-[#121316] dark:text-white">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedMilestone && (
        <Modal
          isOpen={!!selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
          title={selectedMilestone.title}
          category={`${selectedMilestone.year} · ${selectedMilestone.category}`}
        >
          <div className="space-y-6">
            <div className="p-4 bg-[#F1F0EC] dark:bg-[#121316] border-l-4 border-[#0047FF] rounded-r-sm">
              <p className="text-xs font-mono text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                SUBTITLE
              </p>
              <p className="text-sm font-display font-semibold text-[#121316] dark:text-white">
                {selectedMilestone.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0] uppercase font-bold">
                THE STORY
              </h4>
              {selectedMilestone.story.map((paragraph, idx) => (
                <p key={idx} className="text-sm font-sans leading-relaxed text-[#3A3A3A] dark:text-[#D4D4D4]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139] space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                KEY TAKEAWAYS & LESSONS
              </h4>
              <ul className="space-y-2">
                {selectedMilestone.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#3A3A3A] dark:text-[#D4D4D4]">
                    <span className="text-[#0047FF] font-bold">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
