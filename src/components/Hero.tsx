import React, { useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';
interface HeroProps {
  openModal: (data?: any) => void;
}
export const Hero: React.FC<HeroProps> = ({
  openModal
}) => {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal({
      email,
      platform
    });
  };
  return <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1C2E] mb-4">
              Fix Your FreightGuard / Carrier411 Report
            </h1>
            <p className="text-xl text-[#5B6472] mb-8">
              Stop lost loads, protect your brand, and get back to business.
            </p>
            <form onSubmit={handleSubmit} className="bg-[#F6F8FB] p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Check Your Chances</h3>
              <div className="mb-4">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4">
                <select value={platform} onChange={e => setPlatform(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" required>
                  <option value="">Select Platform</option>
                  <option value="Carrier411">Carrier411</option>
                  <option value="Carrier Assure">Carrier Assure</option>
                  <option value="Highway">Highway</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#00A389] text-white py-3 rounded-md hover:bg-[#008E78] transition">
                Check Your Chances
              </button>
            </form>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => openModal()} className="bg-[#0F1C2E] text-white px-6 py-3 rounded-md hover:bg-[#1a2b43] transition flex-1">
                Book Free Consultation
              </button>
              <a href="tel:8554475155" className="bg-white border border-[#0F1C2E] text-[#0F1C2E] px-6 py-3 rounded-md hover:bg-gray-50 transition flex items-center justify-center flex-1">
                <Phone size={18} className="mr-2" />
                855-447-5155
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-[#F6F8FB] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">
                We're Trusted By Carriers Nationwide
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#00A389] mr-3" />
                  <span className="text-[#5B6472]">Industry specialists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#00A389] mr-3" />
                  <span className="text-[#5B6472]">Fast response</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#00A389] mr-3" />
                  <span className="text-[#5B6472]">
                    No fluff, real strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};