import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
export const Footer = () => {
  return <footer className="theme-surface-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-white">Fix Freight Guard</h3>
            <p className="text-white/90 mb-4">
              Helping carriers resolve negative reputation reports and get back
              to business.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-white hover:theme-primary-text transition">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-white hover:theme-primary-text transition">
                  Solution
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white hover:theme-primary-text transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#platforms" className="text-white hover:theme-primary-text transition">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#results" className="text-white hover:theme-primary-text transition">
                  Results
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:theme-primary-text transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 theme-primary-text" />
                <a href="tel:8554475155" className="text-white hover:theme-primary-text transition font-medium">
                  855-447-5155
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 theme-primary-text" />
                <a href="mailto:support@fixfreightguard.com" className="text-white hover:theme-primary-text transition font-medium">
                  support@fixfreightguard.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-3 theme-primary-text" />
                <span className="text-white/90">
                  Mon–Fri 8:00am–8:00pm PST
                </span>
              </div>
            </div>
          </div>
          {/* Newsletter (placeholder) */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-white/90 mb-4">
              Get the latest industry news and updates on freight reputation
              management.
            </p>
          </div>
        </div>
        {/* Copyright & Disclaimer */}
  <div className="border-t border-white/10 pt-6 mt-6 text-sm text-white/70">
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