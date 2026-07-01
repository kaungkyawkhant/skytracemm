import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Services } from './components/Services.jsx';
import { Solutions } from './components/Solutions.jsx';
import { TSICapabilities } from './components/TSICapabilities.jsx';
import { Markets } from './components/Markets.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';

const SECTIONS = ['home', 'about', 'services', 'solutions', 'tsi', 'markets', 'projects', 'contact'];
const THEME_KEY = 'skytrace-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const tsiRef = useRef(null);
  const marketsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      solutions: solutionsRef,
      tsi: tsiRef,
      markets: marketsRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    [],
  );

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const observers = [];
    const options = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };

    SECTIONS.forEach((id) => {
      const node = sectionRefs[id].current;
      if (!node) return;

      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      }, options);

      obs.observe(node);
      observers.push(obs);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionRefs]);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollTo = useCallback(
    (id) => {
      sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    },
    [sectionRefs],
  );

  return (
    <>
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onNavigate={scrollTo}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        theme={theme}
        onThemeToggle={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <section ref={homeRef} id="home">
          <Hero onNavigate={scrollTo} />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={servicesRef} id="services">
          <Services />
        </section>
        <section ref={solutionsRef} id="solutions">
          <Solutions />
        </section>
        <section ref={tsiRef} id="tsi">
          <TSICapabilities />
        </section>
        <section ref={marketsRef} id="markets">
          <Markets />
        </section>
        <section ref={projectsRef} id="projects">
          <Projects />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </main>
      <Footer onNavigate={scrollTo} />
      <ScrollToTop />
    </>
  );
}
