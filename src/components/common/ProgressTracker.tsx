import React from 'react';

interface ProgressTrackerProps {
  activeSection: string;
}

export const sectionsList = [
  { id: 'hero', number: '01', label: 'INTRO' },
  { id: 'path', number: '02', label: 'JOURNEY' },
  { id: 'developer', number: '03', label: 'BUILD' },
  { id: 'workshop', number: '04', label: 'WORK' },
  { id: 'otherside', number: '05', label: 'PEOPLE' },
  { id: 'numbers', number: '06', label: 'NUMBERS' },
  { id: 'human', number: '07', label: 'HUMAN' },
  { id: 'lab', number: '08', label: 'LAB' },
  { id: 'journal', number: '09', label: 'JOURNAL' },
  { id: 'contact', number: '10', label: 'CONTACT' },
];

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ activeSection }) => {
  return (
    <aside
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col space-y-3 pointer-events-auto"
      aria-label="Progress navigation"
    >
      <div className="bg-[#F8F7F4]/80 dark:bg-[#121316]/80 backdrop-blur-md p-2 rounded-full border border-[#E5E4DE] dark:border-[#2D3139] flex flex-col space-y-2.5 items-center shadow-lg">
        {sectionsList.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group relative flex items-center justify-center"
              aria-label={`Jump to section ${sec.number} ${sec.label}`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0047FF] scale-125 ring-4 ring-[#0047FF]/20'
                    : 'bg-[#D1D1C7] dark:bg-[#3D424D] group-hover:bg-[#121316] dark:group-hover:bg-white'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-[#121316] text-white dark:bg-white dark:text-[#121316] text-[10px] font-mono px-2 py-0.5 rounded-sm shadow-md">
                {sec.number} {sec.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
