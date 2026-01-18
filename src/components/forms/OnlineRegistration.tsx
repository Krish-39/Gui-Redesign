import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { User, Home, Calendar, Upload, FileText } from 'lucide-react';

interface OnlineRegistrationProps {
  onSubmit: (formData: any) => void;
}

export function OnlineRegistration({ onSubmit }: OnlineRegistrationProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    nationality: '',
    
    // Previous Address
    previousStreet: '',
    previousHouseNumber: '',
    previousPostalCode: '',
    previousCity: '',
    
    // New Address in Berlin
    newStreet: '',
    newHouseNumber: '',
    newPostalCode: '',
    newCity: 'Berlin',
    
    // Move Date
    moveInDate: '',
    
    // Contact
    email: '',
    phone: '',
    
    // Documents uploaded
    idDocumentUploaded: false,
    landlordConfirmationUploaded: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (documentType: string) => {
    // Simulate file upload
    setFormData({
      ...formData,
      [`${documentType}Uploaded`]: true
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

          <div>
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

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.onlineRegistration.birthPlace} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
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
              {t.onlineRegistration.nationality} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
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

      {/* Previous Address Section */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#666666' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.onlineRegistration.previousAddress}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.onlineRegistration.street} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="previousStreet"
              value={formData.previousStreet}
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
              {t.onlineRegistration.houseNumber} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="previousHouseNumber"
              value={formData.previousHouseNumber}
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
              {t.onlineRegistration.postalCode} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="previousPostalCode"
              value={formData.previousPostalCode}
              onChange={handleChange}
              required
              maxLength={5}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.onlineRegistration.city} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="previousCity"
              value={formData.previousCity}
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

      {/* New Address in Berlin Section */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#007256' }}>
            <Home className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.onlineRegistration.newAddress}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.onlineRegistration.street} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="newStreet"
              value={formData.newStreet}
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
              {t.onlineRegistration.houseNumber} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="newHouseNumber"
              value={formData.newHouseNumber}
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
              {t.onlineRegistration.postalCode} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="newPostalCode"
              value={formData.newPostalCode}
              onChange={handleChange}
              required
              maxLength={5}
              placeholder="10178"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.onlineRegistration.city} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="text"
              name="newCity"
              value={formData.newCity}
              onChange={handleChange}
              required
              disabled
              className="w-full px-4 py-3 border rounded"
              style={{ borderColor: '#CCCCCC', backgroundColor: '#F2F2F2' }}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.onlineRegistration.moveInDate} <span style={{ color: '#E40422' }}>*</span>
            </label>
            <input
              type="date"
              name="moveInDate"
              value={formData.moveInDate}
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

      {/* Contact Information */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#003366' }}>
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.form.contact.title}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.appointment.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+49 30 1234567"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#003366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF6B00' }}>
            <Upload className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.onlineRegistration.uploadDocuments}
          </h3>
        </div>

        <div className="space-y-4">
          {/* ID Document Upload */}
          <div className="border rounded-lg p-4" style={{ borderColor: formData.idDocumentUploaded ? '#007256' : '#CCCCCC', backgroundColor: formData.idDocumentUploaded ? 'rgba(0, 114, 86, 0.05)' : '#FFFFFF' }}>
            <div className="flex items-center justify-between mb-2">
              <label className="font-semibold" style={{ color: '#000000' }}>
                {t.documents.items.passport} <span style={{ color: '#E40422' }}>*</span>
              </label>
              {formData.idDocumentUploaded && (
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#007256', color: '#FFFFFF' }}>
                  ✓ {t.onlineRegistration.uploaded}
                </span>
              )}
            </div>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>
              {t.documents.descriptions.passportDesc}
            </p>
            <button
              type="button"
              onClick={() => handleFileUpload('idDocument')}
              className="px-4 py-2 rounded font-semibold transition-colors"
              style={{ 
                backgroundColor: formData.idDocumentUploaded ? '#F2F2F2' : '#003366',
                color: formData.idDocumentUploaded ? '#666666' : '#FFFFFF'
              }}
              disabled={formData.idDocumentUploaded}
            >
              {formData.idDocumentUploaded ? t.onlineRegistration.uploaded : t.onlineRegistration.uploadFile}
            </button>
          </div>

          {/* Landlord Confirmation Upload */}
          <div className="border rounded-lg p-4" style={{ borderColor: formData.landlordConfirmationUploaded ? '#007256' : '#CCCCCC', backgroundColor: formData.landlordConfirmationUploaded ? 'rgba(0, 114, 86, 0.05)' : '#FFFFFF' }}>
            <div className="flex items-center justify-between mb-2">
              <label className="font-semibold" style={{ color: '#000000' }}>
                {t.documents.items.confirmation} <span style={{ color: '#E40422' }}>*</span>
              </label>
              {formData.landlordConfirmationUploaded && (
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#007256', color: '#FFFFFF' }}>
                  ✓ {t.onlineRegistration.uploaded}
                </span>
              )}
            </div>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>
              {t.documents.descriptions.confirmationDesc}
            </p>
            <button
              type="button"
              onClick={() => handleFileUpload('landlordConfirmation')}
              className="px-4 py-2 rounded font-semibold transition-colors"
              style={{ 
                backgroundColor: formData.landlordConfirmationUploaded ? '#F2F2F2' : '#003366',
                color: formData.landlordConfirmationUploaded ? '#666666' : '#FFFFFF'
              }}
              disabled={formData.landlordConfirmationUploaded}
            >
              {formData.landlordConfirmationUploaded ? t.onlineRegistration.uploaded : t.onlineRegistration.uploadFile}
            </button>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={!formData.idDocumentUploaded || !formData.landlordConfirmationUploaded}
          className="px-12 py-4 text-white font-bold text-lg rounded transition-colors"
          style={{ 
            backgroundColor: (formData.idDocumentUploaded && formData.landlordConfirmationUploaded) ? '#E40422' : '#CCCCCC',
            boxShadow: (formData.idDocumentUploaded && formData.landlordConfirmationUploaded) ? '0 2px 4px rgba(228, 4, 34, 0.2)' : 'none',
            cursor: (formData.idDocumentUploaded && formData.landlordConfirmationUploaded) ? 'pointer' : 'not-allowed'
          }}
          onMouseEnter={(e) => {
            if (formData.idDocumentUploaded && formData.landlordConfirmationUploaded) {
              e.currentTarget.style.backgroundColor = '#CC0420';
            }
          }}
          onMouseLeave={(e) => {
            if (formData.idDocumentUploaded && formData.landlordConfirmationUploaded) {
              e.currentTarget.style.backgroundColor = '#E40422';
            }
          }}
        >
          {t.onlineRegistration.submitRegistration}
        </button>
      </div>

      {/* Required Fields Notice */}
      <p className="text-sm text-center" style={{ color: '#666666' }}>
        <span style={{ color: '#E40422' }}>*</span> {t.form.requiredFields}
      </p>
    </form>
  );
}
