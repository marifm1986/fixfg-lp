import React from 'react';
import { Phone } from 'lucide-react';
export const FloatingButton = () => {
  return <div className="fixed bottom-6 right-6 md:hidden z-40">
  <a href="tel:8554475155" className="theme-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center" aria-label="Call us">
        <Phone size={24} />
      </a>
    </div>;
};