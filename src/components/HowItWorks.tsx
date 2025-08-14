import React from 'react';
import { ClipboardCheck, FileText, MessageSquare, Award } from 'lucide-react';
export const HowItWorks = () => {
  const steps = [{
    icon: <ClipboardCheck size={24} className="text-white" />,
    title: 'Intake & Eligibility Check',
    description: "We assess your situation through our 'Check Your Chances' form to determine the best approach for your specific case."
  }, {
    icon: <FileText size={24} className="text-white" />,
    title: 'Document & Evidence Collection',
    description: 'We gather all necessary documentation and evidence to build a strong case for resolving your negative report.'
  }, {
    icon: <MessageSquare size={24} className="text-white" />,
    title: 'Platform & Broker Engagement',
    description: 'We engage with the platform and brokers on your behalf, managing the response window effectively.'
  }, {
    icon: <Award size={24} className="text-white" />,
    title: 'Resolution & Prevention',
    description: 'We secure proof of resolution and provide guidance to prevent future issues and protect your reputation.'
  }];
  return <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1C2E]">
          How It Works
        </h2>
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E0E5EB] -ml-0.5"></div>
          {steps.map((step, index) => <div key={index} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <h3 className="font-bold text-xl mb-3 text-[#0F1C2E]">
                    {step.title}
                  </h3>
                  <p className="text-[#5B6472]">{step.description}</p>
                </div>
                <div className="flex justify-center my-4 md:my-0 md:w-0">
                  <div className="bg-[#00A389] rounded-full p-3 z-10">
                    {step.icon}
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'}`}>
                  {/* Empty div for layout on desktop */}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};