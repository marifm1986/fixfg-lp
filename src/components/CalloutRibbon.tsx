import React from 'react';
interface CalloutRibbonProps {
  openModal: () => void;
}
export const CalloutRibbon: React.FC<CalloutRibbonProps> = ({
  openModal
}) => {
  return <section className="py-12 theme-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Take the first step toward a clean MC record.
            </h2>
            <p className="mt-2">
              Our team of experts is ready to help you resolve your FreightGuard
              issues.
            </p>
          </div>
          <button onClick={openModal} className="bg-white theme-primary-text px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Check Your Chances
          </button>
        </div>
      </div>
    </section>;
};