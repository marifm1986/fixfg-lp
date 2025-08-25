import React from 'react';
import { Phone } from 'lucide-react';
export const FloatingButton = () => {
  return <div className="fixed bottom-6 right-6 z-40">
    <a
      href="https://wa.me/+14244576440"
      target="_blank"
      rel="noopener noreferrer"
      className="theme-primary text-white py-4 px-6 rounded-full shadow-lg flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <img src="/whatsapp.svg" width={45} height={45} alt="WhatsApp icon" />
      <span className="ml-4 text-xl">424-457-6440</span>
    </a>

  </div>;
};