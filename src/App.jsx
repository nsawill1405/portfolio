import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Lenis from 'lenis';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen text-white">
    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Lenis initialization for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Force scroll to top on load
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
