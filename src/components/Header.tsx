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
          <div className="text-xl font-bold text-[#0F1C2E]">
            Fix Freight Guard
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('problem')} className="text-[#5B6472] hover:text-[#0F1C2E]">
              Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="text-[#5B6472] hover:text-[#0F1C2E]">
              Solution
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#5B6472] hover:text-[#0F1C2E]">
              How It Works
            </button>
            <button onClick={() => scrollToSection('platforms')} className="text-[#5B6472] hover:text-[#0F1C2E]">
              Platforms
            </button>
            <button onClick={() => scrollToSection('results')} className="text-[#5B6472] hover:text-[#0F1C2E]">
              Results
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-[#5B6472] hover:text-[#0F1C2E]">
              FAQ
            </button>
          </nav>
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:8554475155" className="flex items-center text-[#0F1C2E] font-medium hover:text-[#00A389]">
              <Phone size={16} className="mr-2" />
              855-447-5155
            </a>
            <button onClick={openModal} className="bg-[#00A389] text-white px-4 py-2 rounded-md hover:bg-[#008E78] transition">
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
              <button onClick={() => scrollToSection('problem')} className="text-[#5B6472] hover:text-[#0F1C2E]">
                Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="text-[#5B6472] hover:text-[#0F1C2E]">
                Solution
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-[#5B6472] hover:text-[#0F1C2E]">
                How It Works
              </button>
              <button onClick={() => scrollToSection('platforms')} className="text-[#5B6472] hover:text-[#0F1C2E]">
                Platforms
              </button>
              <button onClick={() => scrollToSection('results')} className="text-[#5B6472] hover:text-[#0F1C2E]">
                Results
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-[#5B6472] hover:text-[#0F1C2E]">
                FAQ
              </button>
              <a href="tel:8554475155" className="flex items-center text-[#0F1C2E] font-medium hover:text-[#00A389]">
                <Phone size={16} className="mr-2" />
                855-447-5155
              </a>
              <button onClick={openModal} className="bg-[#00A389] text-white px-4 py-2 rounded-md hover:bg-[#008E78] transition w-full">
                Book Free Consultation
              </button>
            </nav>
          </div>}
      </div>
    </header>;
};