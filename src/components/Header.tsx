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
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`w-full py-4 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-md bg-white z-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold theme-text">
            Fix Freight Guard
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('problem')} className="theme-muted hover:theme-text">
              Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="theme-muted hover:theme-text">
              Solution
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="theme-muted hover:theme-text">
              How It Works
            </button>
            <button onClick={() => scrollToSection('platforms')} className="theme-muted hover:theme-text">
              Platforms
            </button>
            <button onClick={() => scrollToSection('results')} className="theme-muted hover:theme-text">
              Results
            </button>
            <button onClick={() => scrollToSection('faq')} className="theme-muted hover:theme-text">
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
              <button onClick={() => scrollToSection('problem')} className="theme-muted hover:theme-text">
                Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="theme-muted hover:theme-text">
                Solution
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="theme-muted hover:theme-text">
                How It Works
              </button>
              <button onClick={() => scrollToSection('platforms')} className="theme-muted hover:theme-text">
                Platforms
              </button>
              <button onClick={() => scrollToSection('results')} className="theme-muted hover:theme-text">
                Results
              </button>
              <button onClick={() => scrollToSection('faq')} className="theme-muted hover:theme-text">
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