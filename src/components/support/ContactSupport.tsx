import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageSquare, HelpCircle, X } from 'lucide-react';

interface ContactSupportProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSupport({ isOpen, onClose }: ContactSupportProps) {
  const { t } = useLanguage();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      onClose();
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 transition-colors"
          style={{ color: '#666666' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6" style={{ backgroundColor: '#002A4E' }}>
          <h2 className="text-3xl font-bold text-white mb-2">
            {t.support.title}
          </h2>
          <p className="text-white opacity-90">
            {t.support.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>
                {t.support.contactInfo}
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-3 mb-4 p-4 rounded-lg" style={{ backgroundColor: '#F2F2F2' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E60032' }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>
                    {t.support.phone}
                  </h4>
                  <a href="tel:+493011555" className="text-lg hover:underline" style={{ color: '#002A4E' }}>
                    115
                  </a>
                  <p className="text-sm mt-1" style={{ color: '#666666' }}>
                    {t.support.phoneHours}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 mb-4 p-4 rounded-lg" style={{ backgroundColor: '#F2F2F2' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#002A4E' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>
                    {t.support.email}
                  </h4>
                  <a href="mailto:service@berlin.de" className="hover:underline" style={{ color: '#002A4E' }}>
                    service@berlin.de
                  </a>
                  <p className="text-sm mt-1" style={{ color: '#666666' }}>
                    {t.support.emailResponse}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3 mb-4 p-4 rounded-lg" style={{ backgroundColor: '#F2F2F2' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#007256' }}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>
                    {t.support.officeHours}
                  </h4>
                  <p className="text-sm" style={{ color: '#333333' }}>
                    {t.support.mondayFriday}: 08:00 - 18:00
                  </p>
                  <p className="text-sm" style={{ color: '#333333' }}>
                    {t.support.saturday}: 09:00 - 13:00
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#F2F2F2' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#666666' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>
                    {t.support.address}
                  </h4>
                  <p className="text-sm" style={{ color: '#333333' }}>
                    Servicetelefon 115<br />
                    Zimmerstraße 79-80<br />
                    10117 Berlin
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 42, 78, 0.05)', border: '1px solid #002A4E' }}>
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="w-5 h-5" style={{ color: '#002A4E' }} />
                <h4 className="font-semibold" style={{ color: '#002A4E' }}>
                  {t.support.faq}
                </h4>
              </div>
              <p className="text-sm mb-3" style={{ color: '#333333' }}>
                {t.support.faqDescription}
              </p>
              <a
                href="https://service.berlin.de/dienstleistung/120686/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
                style={{ color: '#002A4E' }}
              >
                {t.support.viewFAQ} →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>
              {t.support.sendMessage}
            </h3>

            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 114, 86, 0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#007256' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#007256' }}>
                  {t.support.messageSent}
                </h4>
                <p style={{ color: '#666666' }}>
                  {t.support.messageResponse}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                    {t.support.yourName} <span style={{ color: '#E40422' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                    style={{ borderColor: '#CCCCCC' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                    {t.support.yourEmail} <span style={{ color: '#E60032' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                    style={{ borderColor: '#CCCCCC' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                    {t.support.subject} <span style={{ color: '#E40422' }}>*</span>
                  </label>
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                    style={{ borderColor: '#CCCCCC' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
                  >
                    <option value="">{t.support.selectSubject}</option>
                    <option value="appointment">{t.support.subjectAppointment}</option>
                    <option value="registration">{t.support.subjectRegistration}</option>
                    <option value="documents">{t.support.subjectDocuments}</option>
                    <option value="technical">{t.support.subjectTechnical}</option>
                    <option value="other">{t.support.subjectOther}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                    {t.support.message} <span style={{ color: '#E60032' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                    style={{ borderColor: '#CCCCCC' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded transition-colors"
                  style={{ backgroundColor: '#E60032' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CC0028'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E60032'}
                >
                  {t.support.submitMessage}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}