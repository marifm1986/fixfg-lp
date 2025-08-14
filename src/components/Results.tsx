import React from 'react';
import { Package, Clock, Star } from 'lucide-react';
export const Results = () => {
  const metrics = [{
    icon: <Package size={24} className="text-[#00A389]" />,
    value: '1,000+',
    label: 'Loads Restored'
  }, {
    icon: <Clock size={24} className="text-[#00A389]" />,
    value: '14 Days',
    label: 'Avg. Resolution Window'
  }, {
    icon: <Star size={24} className="text-[#00A389]" />,
    value: '98%',
    label: 'Client Satisfaction'
  }];
  const testimonials = [{
    stars: 5,
    text: 'After getting a negative FreightGuard report, we were losing loads left and right. The team at Fix Freight Guard got it resolved in just 10 days. Our business is back on track.',
    initials: 'J.M.',
    company: 'Logistics Company, CA'
  }, {
    stars: 5,
    text: 'Professional, responsive, and effective. They delivered exactly what they promised and helped us clean up our Carrier411 profile. Highly recommended for any carrier facing reputation issues.',
    initials: 'T.K.',
    company: 'Transport Services, TX'
  }];
  return <section id="results" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1C2E]">
          Our Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => <div key={index} className="bg-[#F6F8FB] p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold text-[#0F1C2E] mb-2">
                {metric.value}
              </div>
              <div className="text-[#5B6472]">{metric.label}</div>
            </div>)}
        </div>
        <h3 className="text-2xl font-bold text-center mb-8 text-[#0F1C2E]">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-[#F6F8FB] p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 mr-1" />)}
              </div>
              <p className="text-[#5B6472] mb-4 italic">"{testimonial.text}"</p>
              <div className="font-bold text-[#0F1C2E]">
                {testimonial.initials}
              </div>
              <div className="text-sm text-[#5B6472]">
                {testimonial.company}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};