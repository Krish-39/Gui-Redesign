import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { User, Mail } from 'lucide-react';

interface RegistrationFormProps {
  onSubmit: () => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information Section */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E40422' }}>
            <User className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.form.personalInfo.title}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.form.personalInfo.firstName} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.form.personalInfo.lastName} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.form.personalInfo.birthDate} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#003366' }}>
            <Mail className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.form.contact.title}
          </h3>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
            {t.form.contact.email} <span style={{ color: '#E40422' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="beispiel@email.de"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
            style={{ borderColor: '#CCCCCC' }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
          />
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <button
          type="submit"
          className="px-12 py-4 text-white font-bold text-lg rounded transition-colors"
          style={{ 
            backgroundColor: '#E40422',
            boxShadow: '0 2px 4px rgba(228, 4, 34, 0.2)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CC0420'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E40422'}
        >
          {t.form.submitButton}
        </button>
      </div>

      {/* Required Fields Notice */}
      <p className="text-sm text-center" style={{ color: '#666666' }}>
        <span style={{ color: '#E40422' }}>*</span> {t.form.requiredFields}
      </p>
    </form>
  );
}