import React from 'react';
import { Package, Clock, Star } from 'lucide-react';
export const Results = () => {
  const metrics = [{
  icon: <Package size={24} className="theme-primary-text" />,
    value: '1,000+',
    label: 'Loads Restored'
  }, {
  icon: <Clock size={24} className="theme-primary-text" />,
    value: '14 Days',
    label: 'Avg. Resolution Window'
  }, {
  icon: <Star size={24} className="theme-primary-text" />,
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
  <h2 className="text-3xl font-bold text-center mb-12 theme-text">
          Our Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => <div key={index} className="theme-bg p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold theme-text mb-2">
                {metric.value}
              </div>
              <div className="theme-muted">{metric.label}</div>
            </div>)}
        </div>
  <h3 className="text-2xl font-bold text-center mb-8 theme-text">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="theme-bg p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 mr-1" />)}
              </div>
              <p className="theme-muted mb-4 italic">"{testimonial.text}"</p>
              <div className="font-bold theme-text">
                {testimonial.initials}
              </div>
              <div className="text-sm theme-muted">
                {testimonial.company}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};