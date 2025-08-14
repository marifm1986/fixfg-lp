import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
interface HeaderProps {
  openModal: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  openModal
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    // optimistic UI: mark as active immediately
    setActiveSection(id);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observe sections to keep active nav in sync with scroll position
  useEffect(() => {
    const ids = ['problem', 'solution', 'how-it-works', 'platforms', 'results', 'faq'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) setActiveSection(id);
        }
      });
    }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return <header className={`w-full py-4 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-md bg-white z-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className="text-xl font-bold theme-text">
            <img src="/logo.webp" alt="FixFreightGuard Logo" className="h-24 w-auto" />
            </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('problem')} className={`theme-muted hover:theme-text ${activeSection === 'problem' ? 'theme-primary-text font-semibold' : ''}`}>
              Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className={`theme-muted hover:theme-text ${activeSection === 'solution' ? 'theme-primary-text font-semibold' : ''}`}>
              Solution
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className={`theme-muted hover:theme-text ${activeSection === 'how-it-works' ? 'theme-primary-text font-semibold' : ''}`}>
              How It Works
            </button>
            <button onClick={() => scrollToSection('platforms')} className={`theme-muted hover:theme-text ${activeSection === 'platforms' ? 'theme-primary-text font-semibold' : ''}`}>
              Platforms
            </button>
            <button onClick={() => scrollToSection('results')} className={`theme-muted hover:theme-text ${activeSection === 'results' ? 'theme-primary-text font-semibold' : ''}`}>
              Results
            </button>
            <button onClick={() => scrollToSection('faq')} className={`theme-muted hover:theme-text ${activeSection === 'faq' ? 'theme-primary-text font-semibold' : ''}`}>
              FAQ
            </button>
          </nav>
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:8554475155" className="flex items-center theme-text font-medium hover:theme-primary-text">
              <Phone size={16} className="mr-2" />
              855-447-5155
            </a>
            <button onClick={openModal} className="theme-primary text-white px-4 py-2 rounded-md hover:theme-primary-hover transition">
              Book Free Consultation
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('problem')} className={`theme-muted hover:theme-text ${activeSection === 'problem' ? 'theme-primary-text font-semibold' : ''}`}>
                Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className={`theme-muted hover:theme-text ${activeSection === 'solution' ? 'theme-primary-text font-semibold' : ''}`}>
                Solution
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className={`theme-muted hover:theme-text ${activeSection === 'how-it-works' ? 'theme-primary-text font-semibold' : ''}`}>
                How It Works
              </button>
              <button onClick={() => scrollToSection('platforms')} className={`theme-muted hover:theme-text ${activeSection === 'platforms' ? 'theme-primary-text font-semibold' : ''}`}>
                Platforms
              </button>
              <button onClick={() => scrollToSection('results')} className={`theme-muted hover:theme-text ${activeSection === 'results' ? 'theme-primary-text font-semibold' : ''}`}>
                Results
              </button>
              <button onClick={() => scrollToSection('faq')} className={`theme-muted hover:theme-text ${activeSection === 'faq' ? 'theme-primary-text font-semibold' : ''}`}>
                FAQ
              </button>
              <a href="tel:8554475155" className="flex items-center theme-text font-medium hover:theme-primary-text">
                <Phone size={16} className="mr-2" />
                855-447-5155
              </a>
              <button onClick={openModal} className="theme-primary text-white px-4 py-2 rounded-md hover:theme-primary-hover transition w-full">
                Book Free Consultation
              </button>
            </nav>
          </div>}
      </div>
    </header>;
};