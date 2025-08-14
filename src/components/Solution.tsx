import React from 'react';
import { Search, FileText, CheckCircle } from 'lucide-react';
interface SolutionProps {
  openModal: () => void;
}
export const Solution: React.FC<SolutionProps> = ({
  openModal
}) => {
  return <section id="solution" className="py-16 theme-dark ">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        No panic. There's a plan.
      </h2>
      <p className="text-center  mb-12 max-w-2xl mx-auto">
        Our proven approach has helped carriers nationwide resolve negative
        reports and restore their reputation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="theme-surface-dark p-6 rounded-lg">
          <div className="mb-4 flex justify-center">
            <div className="theme-primary p-3 rounded-full">
              <Search size={24} />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-3 text-center">Assess</h3>
          <p className="text-center ">
            We review your report, gather the facts, and analyze your MC
            profile to understand the full picture.
          </p>
        </div>
        <div className="theme-surface-dark p-6 rounded-lg">
          <div className="mb-4 flex justify-center">
            <div className="theme-primary p-3 rounded-full">
              <FileText size={24} />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-3 text-center">Act</h3>
          <p className="text-center ">
            We craft the right response strategy and manage broker outreach to
            address the issues effectively.
          </p>
        </div>
        <div className="theme-surface-dark p-6 rounded-lg">
          <div className="mb-4 flex justify-center">
            <div className="theme-primary p-3 rounded-full">
              <CheckCircle size={24} />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-3 text-center">Resolve</h3>
          <p className="text-center ">
            Target removal or clarification of the report, followed by
            comprehensive reputation clean-up.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button onClick={openModal} className="theme-primary text-white px-6 py-3 rounded-md hover:theme-primary-hover transition">
          Book Free Consultation
        </button>
      </div>
    </div>
  </section>;
};