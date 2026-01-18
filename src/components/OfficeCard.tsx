import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface Office {
  id: string;
  name: string;
  address: string;
  nextAvailable: string;
  availableSlots: number;
  distance: string;
}

interface OfficeCardProps {
  office: Office;
  isSelected: boolean;
  onSelect: () => void;
  selectedDate?: string;
}

export function OfficeCard({ office, isSelected, onSelect, selectedDate }: OfficeCardProps) {
  const { t } = useLanguage();
  const hasNoAppointments = office.availableSlots === 0;

  // Helper to get actual date from relative label
  const getActualDate = (relativeDate: string): string => {
    const today = new Date();
    if (relativeDate.toLowerCase().includes('today') || relativeDate.toLowerCase().includes('heute')) {
      return today.toISOString().split('T')[0];
    } else if (relativeDate.toLowerCase().includes('tomorrow') || relativeDate.toLowerCase().includes('morgen')) {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
    } else if (relativeDate.toLowerCase().includes('day after') || relativeDate.toLowerCase().includes('übermorgen')) {
      const dayAfter = new Date(today);
      dayAfter.setDate(today.getDate() + 2);
      return dayAfter.toISOString().split('T')[0];
    }
    return today.toISOString().split('T')[0];
  };

  // Helper to format date for display
  const formatDateDisplay = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' });
  };

  return (
    <div
      className={`bg-white border rounded-lg p-4 transition-all ${
        hasNoAppointments 
          ? 'opacity-60 cursor-not-allowed' 
          : isSelected
            ? 'border-blue-600 ring-2 ring-blue-600 ring-opacity-50 cursor-pointer'
            : 'border-gray-200 hover:border-gray-300 hover:shadow-md cursor-pointer'
      }`}
      onClick={hasNoAppointments ? undefined : onSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900 flex-1">{office.name}</h4>
        {isSelected && (
          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {t.allOffices.selected}
          </div>
        )}
        {hasNoAppointments && (
          <div className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full">
            {t.officeCard.fullyBooked}
          </div>
        )}
      </div>

      <div className="space-y-2 text-sm mb-4">
        <div className="flex items-start gap-2 text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{office.address}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className={`w-4 h-4 ${hasNoAppointments ? 'text-gray-400' : 'text-green-600'}`} />
          <span className={hasNoAppointments ? 'text-gray-500' : 'text-green-700 font-medium'}>
            {selectedDate 
              ? `${formatDateDisplay(selectedDate)}` 
              : hasNoAppointments 
                ? office.nextAvailable 
                : `${office.nextAvailable} (${formatDateDisplay(getActualDate(office.nextAvailable))})`
            }
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-gray-600">
            {hasNoAppointments ? t.officeCard.noAppointments : `${office.availableSlots} ${t.allOffices.available}`}
          </span>
          <span className="text-gray-600">{office.distance}</span>
        </div>
      </div>

      <button
        className={`w-full py-2 px-4 rounded-lg transition-colors ${
          hasNoAppointments
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : isSelected
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        disabled={hasNoAppointments}
      >
        {hasNoAppointments ? t.officeCard.fullyBooked : isSelected ? t.allOffices.selected : t.allOffices.selectButton}
      </button>
    </div>
  );
}