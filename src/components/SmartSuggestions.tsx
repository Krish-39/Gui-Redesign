import React from 'react';
import { Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { OfficeCard } from './OfficeCard';
import { useLanguage } from '../lib/LanguageContext';

interface SmartSuggestionsProps {
  onSelectOffice: (officeId: string | null, officeData?: {
    nextAvailable: string;
    availableSlots: number;
    name: string;
    address: string;
  } | null) => void;
}

export function SmartSuggestions({ onSelectOffice }: SmartSuggestionsProps) {
  const { t } = useLanguage();

  // Helper to get actual date from relative label
  const getActualDate = (relativeDate: string): string => {
    const today = new Date();
    if (relativeDate.toLowerCase().includes('today') || relativeDate.toLowerCase().includes('heute')) {
      return today.toISOString().split('T')[0];
    } else if (relativeDate.toLowerCase().includes('tomorrow') || relativeDate.toLowerCase().includes('morgen')) {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
    }
    return today.toISOString().split('T')[0];
  };

  // Helper to format date for display
  const formatDateDisplay = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' });
  };

  const suggestedOffices = [
    {
      id: 'mitte-1',
      name: 'Bürgeramt Mitte - Karl-Marx-Allee',
      district: 'Mitte',
      address: 'Karl-Marx-Allee 31, 10178 Berlin',
      nextAvailable: `${t.timeLabels.today}, 14:30`,
      availableSlots: 3,
      distance: '2.3 km',
      reason: t.smartSuggestions.reasons.earliest
    },
    {
      id: 'fk-1',
      name: 'Bürgeramt Friedrichshain - Frankfurter Allee',
      district: 'Friedrichshain-Kreuzberg',
      address: 'Frankfurter Allee 35/37, 10247 Berlin',
      nextAvailable: `${t.timeLabels.today}, 15:45`,
      availableSlots: 2,
      distance: '3.1 km',
      reason: t.smartSuggestions.reasons.nearby
    },
    {
      id: 'pankow-1',
      name: 'Bürgeramt Pankow',
      district: 'Pankow',
      address: 'Fröbelstraße 17, 10405 Berlin',
      nextAvailable: `${t.timeLabels.today}, 16:00`,
      availableSlots: 5,
      distance: '4.7 km',
      reason: t.smartSuggestions.reasons.manySlots
    }
  ];

  return (
    <section className="mb-8">
      {/* Priority Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-600 rounded-lg p-2">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {t.smartSuggestions.title}
          </h2>
          <p className="text-sm text-gray-600">
            {t.smartSuggestions.subtitle}
          </p>
        </div>
      </div>

      {/* Suggestion Cards Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {suggestedOffices.map((office) => (
          <div
            key={office.id}
            className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelectOffice(office.id, {
              nextAvailable: office.nextAvailable,
              nextAvailableDate: getActualDate(office.nextAvailable),
              availableSlots: office.availableSlots,
              name: office.name,
              address: office.address
            })}
          >
            {/* Reason Badge */}
            <div className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-3">
              <Sparkles className="w-3 h-3" />
              {office.reason}
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">
              {office.name}
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{office.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <Calendar className="w-4 h-4" />
                <span>{office.nextAvailable} ({formatDateDisplay(getActualDate(office.nextAvailable))})</span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-blue-100">
                <span className="text-gray-600">{office.availableSlots} {t.smartSuggestions.slotsAvailable}</span>
                <span className="text-gray-600">{office.distance}</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              {t.smartSuggestions.selectButton}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}