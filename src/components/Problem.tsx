import React from 'react';
import { AlertCircle, Building, TrendingDown, DollarSign, Shield, Users, Scale, Globe } from 'lucide-react';
interface ProblemProps {
  openModal: () => void;
}
export const Problem: React.FC<ProblemProps> = ({
  openModal
}) => {
  const problems = [{
    icon: <Building size={24} className="text-[#00A389]" />,
    title: 'Business Losses & Contract Risk',
    description: 'Negative reports scare brokers/shippers away from working with your company.'
  }, {
    icon: <AlertCircle size={24} className="text-[#00A389]" />,
    title: 'Brand Damage',
    description: "One false report can label your company as 'unreliable' in the industry."
  }, {
    icon: <TrendingDown size={24} className="text-[#00A389]" />,
    title: 'Weakened Leverage',
    description: "You're forced into accepting lower rates and unfavorable terms."
  }, {
    icon: <DollarSign size={24} className="text-[#00A389]" />,
    title: 'Financial Blow',
    description: 'Revenue hit plus additional PR and legal costs to manage the situation.'
  }, {
    icon: <Shield size={24} className="text-[#00A389]" />,
    title: 'Higher Insurance Costs',
    description: 'Premium increases and potential policy cancellations can follow.'
  }, {
    icon: <Users size={24} className="text-[#00A389]" />,
    title: 'Driver Retention Problems',
    description: 'Morale drops and driver turnover spikes when loads decrease.'
  }, {
    icon: <Scale size={24} className="text-[#00A389]" />,
    title: 'Legal Liability',
    description: 'False accusations create regulatory exposure and compliance concerns.'
  }, {
    icon: <Globe size={24} className="text-[#00A389]" />,
    title: 'Lasting Online Footprint',
    description: 'Damage lingers in industry databases even after resolution.'
  }];
  return <section id="problem" className="py-16 bg-[#F6F8FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1C2E]">
          The Impact of Negative Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-start">
                <div className="mr-4 mt-1">{problem.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#0F1C2E]">
                    {problem.title}
                  </h3>
                  <p className="text-[#5B6472]">{problem.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button onClick={openModal} className="bg-[#00A389] text-white px-6 py-3 rounded-md hover:bg-[#008E78] transition">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>;
};