import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#0F1C2E] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fix Freight Guard</h3>
            <p className="text-[#A0A8B3] mb-4">
              Helping carriers resolve negative reputation reports and get back
              to business.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-[#A0A8B3] hover:text-white transition">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-[#A0A8B3] hover:text-white transition">
                  Solution
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#A0A8B3] hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#platforms" className="text-[#A0A8B3] hover:text-white transition">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#results" className="text-[#A0A8B3] hover:text-white transition">
                  Results
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#A0A8B3] hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-[#00A389]" />
                <a href="tel:8554475155" className="text-[#A0A8B3] hover:text-white transition">
                  855-447-5155
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-[#00A389]" />
                <a href="mailto:support@fixfreightguard.com" className="text-[#A0A8B3] hover:text-white transition">
                  support@fixfreightguard.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-3 text-[#00A389]" />
                <span className="text-[#A0A8B3]">
                  Mon–Fri 8:00am–8:00pm PST
                </span>
              </div>
            </div>
          </div>
          {/* Newsletter (placeholder) */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-[#A0A8B3] mb-4">
              Get the latest industry news and updates on freight reputation
              management.
            </p>
          </div>
        </div>
        {/* Copyright & Disclaimer */}
        <div className="border-t border-[#2A3647] pt-6 mt-6 text-sm text-[#A0A8B3]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fix Freight Guard. All rights
              reserved.
            </div>
            <div>
              <p>
                Results may vary. Information provided is for general
                educational purposes only and does not constitute legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};