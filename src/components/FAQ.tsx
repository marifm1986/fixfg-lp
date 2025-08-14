import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [{
    question: 'How long do I have to respond to a report?',
    answer: "Response windows vary by platform, but they're typically short. Carrier411 gives you just 14 days to respond to a FreightGuard report. Missing this window can make resolution much more difficult, which is why quick action is essential."
  }, {
    question: 'Can a broker remove a report?',
    answer: 'Yes, brokers who filed the report have the ability to remove or modify it. Part of our strategy involves appropriate broker outreach when applicable to facilitate resolution.'
  }, {
    question: 'Do you handle multiple platforms?',
    answer: 'Yes, we specialize in resolving negative reports across all major platforms including Carrier411 (FreightGuard), Carrier Assure, and Highway.'
  }, {
    question: 'What if allegations are false vs. disputed?',
    answer: 'We handle both scenarios. False allegations require a different approach than disputed facts. Our team will tailor the strategy based on the specific circumstances of your case.'
  }, {
    question: 'Do you help with prevention after removal?',
    answer: 'Absolutely. We provide guidance on preventive measures to help protect your reputation going forward, including documentation practices and communication protocols.'
  }];
  return <section id="faq" className="py-16 theme-bg">
      <div className="container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12 theme-text">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <div key={index} className="mb-4 last:mb-0">
              <button className="flex items-center justify-between w-full p-5 bg-white rounded-lg text-left focus:outline-none" onClick={() => toggleAccordion(index)}>
                <span className="font-bold theme-text">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} className="theme-primary-text" /> : <ChevronDown size={20} className="theme-muted" />}
              </button>
              {openIndex === index && <div className="p-5 bg-white rounded-b-lg border-t border-gray-200">
                  <p className="theme-muted">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};