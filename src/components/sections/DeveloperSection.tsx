import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Sparkles } from 'lucide-react';

export const DeveloperSection: React.FC = () => {
  const techCategories = [
    {
      title: 'FRONTEND',
      icon: <Code className="w-5 h-5 text-[#0047FF]" />,
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit / State']
    },
    {
      title: 'BACKEND',
      icon: <Server className="w-5 h-5 text-[#10B981]" />,
      skills: ['Node.js', 'Express.js', 'REST API Design', 'WebSockets', 'Authentication (JWT)', 'Middleware']
    },
    {
      title: 'DATABASE',
      icon: <Database className="w-5 h-5 text-[#F59E0B]" />,
      skills: ['MongoDB', 'Mongoose ODM', 'Aggregation Pipelines', 'Schema Validation', 'TTL Indexing']
    },
    {
      title: 'ENGINEERING & TOOLS',
      icon: <Wrench className="w-5 h-5 text-[#EC4899]" />,
      skills: ['Git & GitHub', 'Postman / API Testing', 'Deployment (Vercel/Render)', 'System Debugging', 'Friction Analysis']
    }
  ];

  const currentlyExploring = [
    'Next.js (App Router & SSR)',
    'Advanced TypeScript Architecture',
    'System Design & Scalable Microservices',
    'Docker & Container Orchestration'
  ];

  return (
    <section id="developer" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] dark:bg-[#121316] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            03 — THE DEVELOPER
          </span>

          <p className="text-xl sm:text-2xl font-editorial italic text-[#5A5A5A] dark:text-[#A0A0A0]">
            "After all that wandering, I found something I kept coming back to."
          </p>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#121316] dark:text-white tracking-tight">
            BUILDING THINGS.
          </h2>

          <p className="text-base font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
            I don't use skill percentage bars. Technical competency is demonstrated through evidence, system architectural choices, and delivered software.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#F1F0EC] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] p-6 rounded-sm space-y-4"
            >
              <div className="flex items-center space-x-3 border-b border-[#E5E4DE] dark:border-[#2D3139] pb-3">
                {cat.icon}
                <h3 className="text-sm font-mono font-bold tracking-wider text-[#121316] dark:text-white">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2 text-xs font-mono text-[#3A3A3A] dark:text-[#D4D4D4]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring / Editable Learning Section */}
        <div className="bg-[#0047FF]/5 dark:bg-[#0047FF]/10 border border-[#0047FF]/20 p-6 sm:p-8 rounded-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#0047FF] dark:text-[#3B82F6]" />
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase">
              CURRENTLY EXPLORING & EXPANDING
            </h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {currentlyExploring.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 text-xs font-mono font-semibold bg-[#F8F7F4] dark:bg-[#121316] border border-[#D1D1C7] dark:border-[#2D3139] text-[#121316] dark:text-white rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
