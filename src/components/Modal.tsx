import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { sendEmail } from '../utils/emailjs';
import toast from 'react-hot-toast';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    platform: string;
    whatHappened: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    platform: string;
    whatHappened: string;
  }>>;
}
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  formData,
  setFormData
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail({
        fromName: `${formData.firstName} ${formData.lastName}`,
        userEmail: formData.email,
        userPhone: formData.phone,
        platform: formData.platform,
        caseSummary: formData.whatHappened
      });
      toast.success('Thanks! An expert will reach out shortly.');
      onClose();
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        platform: '',
        whatHappened: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please call us at 855-447-5155.');
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="text-xl font-bold theme-text">
            Book a Free Consultation
          </h3>
          <button onClick={onClose} className="theme-muted hover:theme-text">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 theme-muted">
                First Name *
              </label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1 theme-muted">
                Last Name *
              </label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 theme-muted">
              Phone
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 theme-muted">
              Email *
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="platform" className="block mb-1 theme-muted">
              Platform *
            </label>
            <select id="platform" name="platform" value={formData.platform} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required>
              <option value="">Select Platform</option>
              <option value="Carrier411">Carrier411</option>
              <option value="Carrier Assure">Carrier Assure</option>
              <option value="Highway">Highway</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="whatHappened" className="block mb-1 theme-muted">
              What happened? (optional)
            </label>
            <textarea id="whatHappened" name="whatHappened" value={formData.whatHappened} onChange={handleChange} rows={4} className="w-full p-3 border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="w-full theme-primary text-white py-3 rounded-md hover:theme-primary-hover transition">
            Submit
          </button>
        </form>
      </div>
    </div>;
};