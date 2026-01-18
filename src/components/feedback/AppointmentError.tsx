import React from 'react';
import { AlertTriangle, Calendar, HelpCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

interface AppointmentErrorProps {
  onBookNew: () => void;
  onGetHelp: () => void;
}

export function AppointmentError({ onBookNew, onGetHelp }: AppointmentErrorProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Error Alert */}
      <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-red-900 mb-2">
              {t.appointmentError.headline}
            </h2>
            <p className="text-red-800 text-lg">
              {t.appointmentError.explanation}
            </p>
          </div>
        </div>
      </div>

      {/* Reasons Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t.appointmentError.reasonsTitle}
        </h3>
        <ul className="space-y-3">
          {t.appointmentError.reasons.map((reason: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                {index + 1}
              </span>
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <button
          onClick={onBookNew}
          className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <Calendar className="w-5 h-5" />
          {t.appointmentError.bookNewButton}
        </button>
        
        <button
          onClick={onGetHelp}
          className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
        >
          <HelpCircle className="w-5 h-5" />
          {t.appointmentError.getHelpButton}
        </button>
      </div>

      {/* Offline Option */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {t.appointmentError.offlineOption.title}
            </h3>
            <p className="text-blue-800 mb-3">
              {t.appointmentError.offlineOption.description}
            </p>
            <div className="bg-white rounded-md p-4 border border-blue-200">
              <p className="text-sm text-gray-700 mb-2">
                <strong>{t.appointmentError.offlineOption.hours}</strong>
              </p>
              <p className="text-sm text-gray-600">
                {t.appointmentError.offlineOption.hoursDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
