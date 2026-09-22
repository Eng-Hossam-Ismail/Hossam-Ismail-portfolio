import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Training } from '@/components/sections/Training';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { EmailModalProvider } from '@/context/EmailModalContext';
import { portfolio } from '@/data/portfolio';

function App() {
  const enabledIds = new Set(portfolio.nav.filter((n) => n.enabled).map((n) => n.id));

  return (
    <ThemeProvider>
      <LanguageProvider>
        <EmailModalProvider>
          <MotionConfig reducedMotion="user">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] btn btn-primary"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content">
              {enabledIds.has('home') && <Hero />}
              {enabledIds.has('about') && <About />}
              {enabledIds.has('skills') && <Skills />}
              {enabledIds.has('experience') && <Experience />}
              {enabledIds.has('training') && <Training />}
              {enabledIds.has('projects') && <Projects />}
              {enabledIds.has('education') && <Education />}
              {enabledIds.has('certifications') && <Certifications />}
              {enabledIds.has('contact') && <Contact />}
            </main>
            <Footer />
          </MotionConfig>
        </EmailModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
