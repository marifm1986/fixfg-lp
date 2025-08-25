import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Platforms } from './components/Platforms';
import { Results } from './components/Results';
import { CalloutRibbon } from './components/CalloutRibbon';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { FloatingButton } from './components/FloatingButton';
import { Toaster } from 'react-hot-toast';
export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    platform: '',
    whatHappened: ''
  });
  const openModal = (initialData = {}) => {
    setFormData(prev => ({
      ...prev,
      ...initialData
    }));
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return <div className="flex flex-col min-h-screen theme-bg theme-text">
    {/* <Header openModal={openModal} /> */}
    <main className="flex-grow">
      <Hero openModal={openModal} />
      <Problem openModal={openModal} />
      <Solution openModal={openModal} />
      <HowItWorks />
      <Platforms />
      <Results />
      <CalloutRibbon openModal={openModal} />
      <FAQ />
      <FloatingButton />
    </main>
    {/* <Footer /> */}
    <Modal isOpen={isModalOpen} onClose={closeModal} formData={formData} setFormData={setFormData} />
    <Toaster position="top-center" />
  </div>;
}