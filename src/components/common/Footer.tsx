import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E4DE] dark:border-[#2D3139] bg-[#F1F0EC] dark:bg-[#0D0E10] text-[#121316] dark:text-[#EAEAEA] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#E5E4DE] dark:border-[#2D3139]">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase">
              10 — THE CLOSING STEP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#121316] dark:text-white">
              FOUND SOMETHING WORTH BUILDING?
            </h2>
            <p className="text-base sm:text-lg font-sans text-[#5A5A5A] dark:text-[#A0A0A0] max-w-2xl leading-relaxed">
              I'm interested in problems that require more than writing code—problems at the intersection of human friction, business strategy, and scalable MERN engineering.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="mailto:safwan.dev@example.com"
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-mono font-semibold text-white bg-[#0047FF] hover:bg-[#0038CC] transition-colors rounded-sm shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL SAFWAN</span>
              </a>

              <a
                href="https://linkedin.com/in/safwan-ashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-mono font-semibold text-[#121316] dark:text-white bg-[#E5E4DE] dark:bg-[#1F2228] hover:bg-[#D1D1C7] dark:hover:bg-[#2D3139] transition-colors rounded-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://github.com/Safwanashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-mono font-semibold text-[#121316] dark:text-white bg-[#E5E4DE] dark:bg-[#1F2228] hover:bg-[#D1D1C7] dark:hover:bg-[#2D3139] transition-colors rounded-sm"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                download
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-mono font-semibold text-[#121316] dark:text-white border border-[#D1D1C7] dark:border-[#3D424D] hover:border-[#0047FF] transition-colors rounded-sm"
              >
                <FileText className="w-4 h-4 text-[#E63946]" />
                <span>RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Sitemap & Motif */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xs font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0] uppercase mb-3">
                SITEMAP
              </h3>
              <ul className="space-y-2 text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0]">
                <li><a href="#hero" className="hover:text-[#0047FF] transition-colors">01 INTRO — The First Step</a></li>
                <li><a href="#path" className="hover:text-[#0047FF] transition-colors">02 JOURNEY — The Path</a></li>
                <li><a href="#developer" className="hover:text-[#0047FF] transition-colors">03 BUILD — The Developer</a></li>
                <li><a href="#workshop" className="hover:text-[#0047FF] transition-colors">04 WORK — The Workshop</a></li>
                <li><a href="#otherside" className="hover:text-[#0047FF] transition-colors">05 PEOPLE — The Other Side</a></li>
                <li><a href="#lab" className="hover:text-[#0047FF] transition-colors">08 LAB — Interactive Playground</a></li>
                <li><a href="#journal" className="hover:text-[#0047FF] transition-colors">09 JOURNAL — Editorial Writing</a></li>
              </ul>
            </div>

            {/* Recurring Motif Ending */}
            <div className="pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139]">
              <span className="block text-[10px] font-mono text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-widest">
                MOTIF CLOSING
              </span>
              <p className="text-sm font-editorial italic text-[#121316] dark:text-white mt-1">
                "The journey of a thousand miles begins with a single step."
              </p>
              <span className="block text-xs font-mono font-bold text-[#0047FF] dark:text-[#3B82F6] uppercase tracking-wider mt-1">
                THOUSANDS TO GO.
              </span>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0]">
          <p>© {new Date().getFullYear()} Safwan. All rights reserved. Built with React, Tailwind & Framer Motion.</p>

          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-1.5 hover:text-[#0047FF] dark:hover:text-white transition-colors focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
