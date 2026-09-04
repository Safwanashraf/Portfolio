import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fullAboutChapters } from '../../data/aboutData';
import { Modal } from '../common/Modal';
import { BookOpen, ArrowRight } from 'lucide-react';

export const HumanSection: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);

  return (
    <section id="human" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] dark:bg-[#121316] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F1F0EC] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Summary */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
              07 — THE HUMAN BEHIND THE CODE
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white leading-tight">
              Before I became a developer, I spent years trying to understand people.
            </h2>

            <p className="text-base font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed max-w-2xl">
              From leading a 75-member team at age 19 to conducting 1,500 direct customer conversations, my path was shaped by observing human motivation, handling sales objections, and supervising real-world physical construction.
            </p>

            <div>
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white bg-[#0047FF] hover:bg-[#0038CC] transition-colors rounded-sm shadow-md group"
              >
                <BookOpen className="w-4 h-4" />
                <span>READ THE FULL STORY (13 CHAPTERS)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Chapter Preview Selector Cards */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0] uppercase font-semibold">
              FEATURED CHAPTERS
            </span>
            <div className="space-y-2">
              {fullAboutChapters.slice(0, 4).map((ch, idx) => (
                <div
                  key={ch.chapterNumber}
                  onClick={() => {
                    setActiveChapterIdx(idx);
                    setIsStoryModalOpen(true);
                  }}
                  className="p-3 bg-[#F8F7F4] dark:bg-[#121316] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] cursor-pointer rounded-sm transition-colors text-xs font-mono flex items-center justify-between group"
                >
                  <span className="text-[#0047FF] font-bold">{ch.chapterNumber}</span>
                  <span className="text-[#121316] dark:text-white group-hover:text-[#0047FF] font-semibold truncate ml-2 mr-auto">
                    {ch.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5A5A5A] group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 13-Chapter Story Modal */}
      {isStoryModalOpen && (
        <Modal
          isOpen={isStoryModalOpen}
          onClose={() => setIsStoryModalOpen(false)}
          title={`CHAPTER ${fullAboutChapters[activeChapterIdx].chapterNumber} — ${fullAboutChapters[activeChapterIdx].title}`}
          category="THE HUMAN STORY (13 CHAPTERS)"
        >
          <div className="space-y-6">
            {/* Chapter Navigation Tabs */}
            <div className="flex overflow-x-auto space-x-2 pb-3 border-b border-[#E5E4DE] dark:border-[#2D3139] scrollbar-none">
              {fullAboutChapters.map((ch, idx) => (
                <button
                  key={ch.chapterNumber}
                  onClick={() => setActiveChapterIdx(idx)}
                  className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors shrink-0 ${
                    activeChapterIdx === idx
                      ? 'bg-[#0047FF] text-white font-bold'
                      : 'bg-[#F1F0EC] dark:bg-[#121316] text-[#5A5A5A] hover:text-[#121316] dark:hover:text-white'
                  }`}
                >
                  Ch {ch.chapterNumber}
                </button>
              ))}
            </div>

            {/* Current Chapter Content */}
            <div className="space-y-4">
              <p className="text-xs font-mono text-[#0047FF] dark:text-[#3B82F6] italic font-semibold">
                "{fullAboutChapters[activeChapterIdx].excerpt}"
              </p>

              {fullAboutChapters[activeChapterIdx].paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm font-sans leading-relaxed text-[#3A3A3A] dark:text-[#D4D4D4]">
                  {p}
                </p>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="pt-6 border-t border-[#E5E4DE] dark:border-[#2D3139] flex items-center justify-between text-xs font-mono">
              <button
                disabled={activeChapterIdx === 0}
                onClick={() => setActiveChapterIdx(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 bg-[#F1F0EC] dark:bg-[#121316] text-[#121316] dark:text-white rounded-sm disabled:opacity-40 hover:bg-[#0047FF] hover:text-white transition-colors"
              >
                ← PREVIOUS CHAPTER
              </button>

              <span className="text-[#5A5A5A]">
                {activeChapterIdx + 1} of {fullAboutChapters.length}
              </span>

              <button
                disabled={activeChapterIdx === fullAboutChapters.length - 1}
                onClick={() => setActiveChapterIdx(prev => Math.min(fullAboutChapters.length - 1, prev + 1))}
                className="px-4 py-2 bg-[#0047FF] text-white rounded-sm disabled:opacity-40 hover:bg-[#0038CC] transition-colors"
              >
                NEXT CHAPTER →
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
