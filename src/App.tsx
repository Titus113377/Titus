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
import { CustomCursor } from './components/CustomCursor';

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
    <div className="min-h-screen bg-[#10182B] text-slate-100 flex flex-col font-sans selection:bg-[#4F7CFF] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Top Bar Contract Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section (Deep Navy / Indigo / Blue / Teal) */}
        <Hero />

        {/* 2. Quick Status & Focus Cards (Cream / Colored Indicators) */}
        <QuickProfile />

        {/* 3. About Section (Soft Cream / Editorial / Blue & Teal Highlights) */}
        <About />

        {/* 4. Skills & Technologies (Midnight Indigo / Constellation) */}
        <Skills />

        {/* 5. Projects Section (Cream / Flagship Emerald-Teal + Color Identities) */}
        <Projects />

        {/* 6. Hackathons & Ideathons (Deep Indigo / Warm Amber / Pipeline) */}
        <Hackathons />

        {/* 7. Learning Journey (Deep Navy / Gradient Spine: Blue → Indigo → Teal → Emerald → Amber) */}
        <Journey />

        {/* 8. Currently Exploring (Midnight Indigo / 6 Floating Colored Cards) */}
        <CurrentlyExploring />

        {/* 9. Personal Operating Philosophy (Deep Navy → Indigo Art Poster) */}
        <Philosophy />

        {/* 10. Contact / Connect (Indigo → Blue → Teal Radiant Gradient) */}
        <Contact />
      </main>

      {/* 11. Footer (Deep Indigo / Gradient Line) */}
      <Footer />
    </div>
  );
}
