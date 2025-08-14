import React from 'react';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';
export const Platforms = () => {
  const platforms = [{
    icon: <Shield size={24} className="text-[#00A389]" />,
    name: 'Carrier411 (FreightGuard)',
    description: 'The most widely used carrier monitoring system in the industry.',
    pill: 'Carrier411'
  }, {
    icon: <AlertTriangle size={24} className="text-[#00A389]" />,
    name: 'Carrier Assure',
    description: 'Growing platform focusing on carrier performance metrics.',
    pill: 'Carrier Assure'
  }, {
    icon: <TrendingUp size={24} className="text-[#00A389]" />,
    name: 'Highway',
    description: 'Modern platform with increasing broker adoption.',
    pill: 'Highway'
  }];
  return <section id="platforms" className="py-16 bg-[#F6F8FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#0F1C2E]">
          Platforms We Handle
        </h2>
        <p className="text-center text-[#5B6472] mb-12 max-w-2xl mx-auto">
          We specialize in resolving negative reports across all major freight
          platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-3">{platform.icon}</div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#E0F7F4] text-[#00A389] rounded-full text-sm font-medium">
                    {platform.pill}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0F1C2E]">
                {platform.name}
              </h3>
              <p className="text-[#5B6472]">{platform.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};