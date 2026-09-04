import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { ProgressTracker } from './components/common/ProgressTracker';
import { Footer } from './components/common/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { PathSection } from './components/sections/PathSection';
import { DeveloperSection } from './components/sections/DeveloperSection';
import { WorkshopSection } from './components/sections/WorkshopSection';
import { OtherSideSection } from './components/sections/OtherSideSection';
import { NumbersSection } from './components/sections/NumbersSection';
import { HumanSection } from './components/sections/HumanSection';
import { LabSection } from './components/sections/LabSection';
import { JournalSection } from './components/sections/JournalSection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'path',
      'developer',
      'workshop',
      'otherside',
      'numbers',
      'human',
      'lab',
      'journal',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F7F4] dark:bg-[#121316] text-[#1A1A1A] dark:text-[#EAEAEA]">
      {/* Editorial Top Navigation */}
      <Header activeSection={activeSection} />

      {/* Floating Side Progress Indicator */}
      <ProgressTracker activeSection={activeSection} />

      {/* 10 Core Sections Flow */}
      <main>
        <HeroSection />
        <PathSection />
        <DeveloperSection />
        <WorkshopSection />
        <OtherSideSection />
        <NumbersSection />
        <HumanSection />
        <LabSection />
        <JournalSection />
        <ContactSection />
      </main>

      {/* Closing Footer & Narrative Motif */}
      <Footer />
    </div>
  );
};

export default App;
