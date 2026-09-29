/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickProfile } from './components/QuickProfile';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Journey } from './components/Journey';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Status & Focus Cards */}
        <QuickProfile />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills & Technologies */}
        <Skills />

        {/* 5. Projects Section (Featuring Waste2Value AI & Python Simulators) */}
        <Projects />

        {/* 6. Hackathons & Ideathons */}
        <Hackathons />

        {/* 7. Learning Journey Roadmap */}
        <Journey />

        {/* 8. Currently Exploring */}
        <CurrentlyExploring />

        {/* 9. Personal Operating Philosophy */}
        <Philosophy />

        {/* 10. Contact / Connect */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
