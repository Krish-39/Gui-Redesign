import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Calendar, Clock, MapPin, User, Mail, Phone } from 'lucide-react';
import { Office, OfficeWithDetails } from '../../lib/officeData';

export interface AppointmentData {
  selectedDate: string;
  selectedTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface AppointmentBookingProps {
  selectedOffice: string | null;
  selectedOfficeData?: Office | OfficeWithDetails | null;
  onConfirm: (appointmentData: AppointmentData) => void;
}

export function AppointmentBooking({ selectedOffice, selectedOfficeData, onConfirm }: AppointmentBookingProps) {
  const { t } = useLanguage();
  
  // Determine the initial date from office data
  const getInitialDate = () => {
    if ((selectedOfficeData as any)?.nextAvailableDate) {
      return (selectedOfficeData as any).nextAvailableDate;
    }
    return new Date().toISOString().split('T')[0];
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedDate: getInitialDate(),
    selectedTime: ''
  });

  // Get office details from all districts
  const getOfficeById = (id: string | null) => {
    if (!id) return null;

    const allDistricts = [
      {
        name: 'Mitte',
        offices: [
          { id: 'mitte-1', name: 'Bürgeramt Mitte - Karl-Marx-Allee', address: 'Karl-Marx-Allee 31, 10178 Berlin' },
          { id: 'mitte-2', name: 'Bürgeramt Mitte - Mathilde-Jacob-Platz', address: 'Mathilde-Jacob-Platz 1, 10551 Berlin' },
          { id: 'mitte-3', name: 'Bürgeramt Mitte - Müllerstraße', address: 'Müllerstraße 146, 13353 Berlin' },
          { id: 'mitte-4', name: 'Bürgeramt Mitte - Rathaus Tiergarten', address: 'Mathilde-Jacob-Platz 1, 10551 Berlin' }
        ]
      },
      {
        name: 'Friedrichshain-Kreuzberg',
        offices: [
          { id: 'fk-1', name: 'Bürgeramt Friedrichshain - Frankfurter Allee', address: 'Frankfurter Allee 35/37, 10247 Berlin' },
          { id: 'fk-2', name: 'Bürgeramt Kreuzberg - Yorckstraße', address: 'Yorckstraße 4-11, 10965 Berlin' },
          { id: 'fk-3', name: 'Bürgeramt Kreuzberg - Urbanstraße', address: 'Urbanstraße 24, 10967 Berlin' },
          { id: 'fk-4', name: 'Bürgeramt Friedrichshain - Petersburger Platz', address: 'Petersburger Platz 1, 10249 Berlin' },
          { id: 'fk-5', name: 'Bürgeramt Kreuzberg - Ora', address: 'Oranienstraße 25, 10999 Berlin' }
        ]
      },
      {
        name: 'Pankow',
        offices: [
          { id: 'pankow-1', name: 'Bürgeramt Pankow', address: 'Fröbelstraße 17, 10405 Berlin' },
          { id: 'pankow-2', name: 'Bürgeramt Weißensee', address: 'Berliner Allee 252-260, 13088 Berlin' },
          { id: 'pankow-3', name: 'Bürgeramt Prenzlauer Berg', address: 'Fröbelstraße 17, 10405 Berlin' },
          { id: 'pankow-4', name: 'Bürgeramt Karow', address: 'Busonistraße 136, 13125 Berlin' },
          { id: 'pankow-5', name: 'Bürgeramt Buch', address: 'Wiltbergstraße 19-23, 13125 Berlin' },
          { id: 'pankow-6', name: 'Bürgeramt Pankow - Neue Schönholzer Straße', address: 'Neue Schönholzer Straße 15, 13187 Berlin' }
        ]
      },
      {
        name: 'Charlottenburg-Wilmersdorf',
        offices: [
          { id: 'cw-1', name: 'Bürgeramt Charlottenburg - Otto-Suhr-Allee', address: 'Otto-Suhr-Allee 100, 10585 Berlin' },
          { id: 'cw-2', name: 'Bürgeramt Wilmersdorf', address: 'Hohenzollerndamm 174-177, 10713 Berlin' },
          { id: 'cw-3', name: 'Bürgeramt Charlottenburg - Kaiserdamm', address: 'Kaiserdamm 1, 14057 Berlin' },
          { id: 'cw-4', name: 'Bürgeramt Wilmersdorf - Fehrbelliner Platz', address: 'Hohenzollerndamm 177, 10713 Berlin' },
          { id: 'cw-5', name: 'Bürgeramt Charlottenburg Nord', address: 'Halemweg 18, 13627 Berlin' },
          { id: 'cw-6', name: 'Bürgeramt Wilmersdorf - Bundesallee', address: 'Bundesallee 31, 10717 Berlin' },
          { id: 'cw-7', name: 'Bürgeramt Charlottenburg - Rathaus', address: 'Otto-Suhr-Allee 100, 10585 Berlin' }
        ]
      },
      {
        name: 'Spandau',
        offices: [
          { id: 'spandau-1', name: 'Bürgeramt Spandau - Carl-Schurz-Straße', address: 'Carl-Schurz-Straße 2/6, 13597 Berlin' },
          { id: 'spandau-2', name: 'Bürgeramt Spandau - Moritzstraße', address: 'Moritzstraße 12, 13597 Berlin' },
          { id: 'spandau-3', name: 'Bürgeramt Hakenfelde', address: 'Streitstraße 5, 13587 Berlin' },
          { id: 'spandau-4', name: 'Bürgeramt Kladow', address: 'Kladower Damm 295, 14089 Berlin' }
        ]
      },
      {
        name: 'Steglitz-Zehlendorf',
        offices: [
          { id: 'sz-1', name: 'Bürgeramt Steglitz - Schloßstraße', address: 'Schloßstraße 37, 12163 Berlin' },
          { id: 'sz-2', name: 'Bürgeramt Zehlendorf', address: 'Kirchstraße 1/3, 14163 Berlin' },
          { id: 'sz-3', name: 'Bürgeramt Lankwitz', address: 'Hanna-Renate-Laurien-Platz 1, 12247 Berlin' },
          { id: 'sz-4', name: 'Bürgeramt Lichterfelde', address: 'Unter den Eichen 82, 12203 Berlin' }
        ]
      },
      {
        name: 'Tempelhof-Schöneberg',
        offices: [
          { id: 'ts-1', name: 'Bürgeramt Tempelhof', address: 'Tempelhofer Damm 165, 12099 Berlin' },
          { id: 'ts-2', name: 'Bürgeramt Schöneberg - John-F.-Kennedy-Platz', address: 'John-F.-Kennedy-Platz, 10825 Berlin' },
          { id: 'ts-3', name: 'Bürgeramt Schöneberg - Rathaus', address: 'Friesenstraße 3, 10965 Berlin' },
          { id: 'ts-4', name: 'Bürgeramt Mariendorf', address: 'Kaiserstraße 46, 12105 Berlin' },
          { id: 'ts-5', name: 'Bürgeramt Friedenau', address: 'Goßlerstraße 18, 12161 Berlin' }
        ]
      },
      {
        name: 'Neukölln',
        offices: [
          { id: 'nk-1', name: 'Bürgeramt Neukölln - Karl-Marx-Straße', address: 'Karl-Marx-Straße 83, 12040 Berlin' },
          { id: 'nk-2', name: 'Bürgeramt Buckow', address: 'Buckower Damm 188, 12349 Berlin' },
          { id: 'nk-3', name: 'Bürgeramt Neukölln - Britz', address: 'Gutschmidtstraße 19, 12359 Berlin' },
          { id: 'nk-4', name: 'Bürgeramt Neukölln - Rudow', address: 'Waßmannsdorfer Chaussee 49, 12355 Berlin' },
          { id: 'nk-5', name: 'Bürgeramt Neukölln - Gropiusstadt', address: 'Johannisthaler Chaussee 301, 12351 Berlin' }
        ]
      },
      {
        name: 'Treptow-Köpenick',
        offices: [
          { id: 'tk-1', name: 'Bürgeramt Treptow', address: 'Neue Krugallee 4, 12435 Berlin' },
          { id: 'tk-2', name: 'Bürgeramt Köpenick', address: 'Alt-Köpenick 21, 12555 Berlin' },
          { id: 'tk-3', name: 'Bürgeramt Adlershof', address: 'Nipkowstraße 2, 12489 Berlin' },
          { id: 'tk-4', name: 'Bürgeramt Baumschulenweg', address: 'Baumschulenstraße 79-81, 12437 Berlin' },
          { id: 'tk-5', name: 'Bürgeramt Friedrichshagen', address: 'Bölschestraße 87-91, 12587 Berlin' }
        ]
      },
      {
        name: 'Marzahn-Hellersdorf',
        offices: [
          { id: 'mh-1', name: 'Bürgeramt Marzahn', address: 'Marzahner Promenade 38-42, 12679 Berlin' },
          { id: 'mh-2', name: 'Bürgeramt Hellersdorf', address: 'Hellersdorfer Promenade 14, 12627 Berlin' },
          { id: 'mh-3', name: 'Bürgeramt Mahlsdorf', address: 'Hönower Straße 83, 12623 Berlin' },
          { id: 'mh-4', name: 'Bürgeramt Biesdorf', address: 'Alt-Biesdorf 55, 12683 Berlin' }
        ]
      },
      {
        name: 'Lichtenberg',
        offices: [
          { id: 'licht-1', name: 'Bürgeramt Lichtenberg - Möllendorffstraße', address: 'Möllendorffstraße 6, 10367 Berlin' },
          { id: 'licht-2', name: 'Bürgeramt Hohenschönhausen', address: 'Große-Leege-Straße 103, 13055 Berlin' },
          { id: 'licht-3', name: 'Bürgeramt Karlshorst', address: 'Treskowallee 112, 10318 Berlin' },
          { id: 'licht-4', name: 'Bürgeramt Rummelsburg', address: 'Hauptstraße 8/9, 10317 Berlin' },
          { id: 'licht-5', name: 'Bürgeramt Friedrichsfelde', address: 'Alfredstraße 12, 10365 Berlin' },
          { id: 'licht-6', name: 'Bürgeramt Fennpfuhl', address: 'Landsberger Allee 202, 10369 Berlin' }
        ]
      },
      {
        name: 'Reinickendorf',
        offices: [
          { id: 'rein-1', name: 'Bürgeramt Reinickendorf', address: 'Eichborndamm 215-239, 13437 Berlin' },
          { id: 'rein-2', name: 'Bürgeramt Tegel', address: 'Gorkistraße 13-17, 13507 Berlin' },
          { id: 'rein-3', name: 'Bürgeramt Waidmannslust', address: 'Halalistraße 2, 13469 Berlin' },
          { id: 'rein-4', name: 'Bürgeramt Frohnau', address: 'Zeltinger Straße 10, 13465 Berlin' }
        ]
      }
    ];

    for (const district of allDistricts) {
      const office = district.offices.find(o => o.id === id);
      if (office) return office;
    }
    return null;
  };

  const selectedOfficeDetails = getOfficeById(selectedOffice);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
  };

  // Available time slots - will be filtered based on selected office availability
  const allTimeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  // Parse the specific time from nextAvailable string (e.g., "Today, 14:30" -> "14:30")
  const parseNextAvailableTime = (nextAvailable: string | undefined): string | null => {
    if (!nextAvailable) return null;
    const timeMatch = nextAvailable.match(/(\d{1,2}):(\d{2})/);
    return timeMatch ? timeMatch[0] : null;
  };

  // Generate available dates based on the office's next available date
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    
    // Use nextAvailableDate if provided (from page 2), otherwise parse from nextAvailable string
    let startDate = new Date(today);
    
    if ((selectedOfficeData as any)?.nextAvailableDate) {
      // Use the exact date passed from page 2
      startDate = new Date((selectedOfficeData as any).nextAvailableDate);
    } else if (selectedOfficeData?.nextAvailable) {
      // Fallback: Parse the nextAvailable date string
      const nextAvail = selectedOfficeData.nextAvailable.toLowerCase();
      if (nextAvail.includes('heute') || nextAvail.includes('today')) {
        startDate = new Date(today);
      } else if (nextAvail.includes('morgen') || nextAvail.includes('tomorrow')) {
        startDate = new Date(today);
        startDate.setDate(today.getDate() + 1);
      } else if (nextAvail.includes('übermorgen') || nextAvail.includes('day after')) {
        startDate = new Date(today);
        startDate.setDate(today.getDate() + 2);
      } else {
        // Try to parse other formats (e.g., "3 days" or specific dates)
        const daysMatch = nextAvail.match(/(\d+)\s*(day|tag)/);
        if (daysMatch) {
          startDate = new Date(today);
          startDate.setDate(today.getDate() + parseInt(daysMatch[1]));
        }
      }
    }
    
    // Generate 7 days of available dates
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  }, [selectedOfficeData]);

  // Get available time slots based on office data
  const availableTimeSlots = useMemo(() => {
    if (!selectedOfficeData) {
      return allTimeSlots;
    }
    
    const slotsCount = selectedOfficeData.availableSlots || 0;
    const nextTime = parseNextAvailableTime(selectedOfficeData.nextAvailable);
    
    // If we have a specific next available time, start from that time
    if (nextTime && slotsCount > 0) {
      const timeIndex = allTimeSlots.indexOf(nextTime);
      if (timeIndex !== -1) {
        // Return slots starting from the next available time
        return allTimeSlots.slice(timeIndex, timeIndex + slotsCount);
      }
    }
    
    // If office has limited slots, show that many slots
    if (slotsCount > 0 && slotsCount <= 3) {
      return allTimeSlots.slice(0, 3);
    } else if (slotsCount > 0 && slotsCount <= 6) {
      return allTimeSlots.slice(0, 6);
    } else if (slotsCount > 0) {
      return allTimeSlots.slice(0, Math.min(slotsCount, allTimeSlots.length));
    }
    
    return allTimeSlots;
  }, [selectedOfficeData]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Selected Office Info */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#007256' }}>
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.appointment.selectedOffice}
          </h3>
        </div>
        
        <div className="bg-gray-50 rounded p-4">
          <p className="font-semibold" style={{ color: '#000000' }}>
            {selectedOfficeDetails?.name || 'Bürgeramt Mitte - Karl-Marx-Allee'}
          </p>
          <p className="text-sm mt-1" style={{ color: '#666666' }}>
            {selectedOfficeDetails?.address || 'Karl-Marx-Allee 31, 10178 Berlin'}
          </p>
        </div>
      </section>

      {/* Time Selection */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E60032' }}>
            <Clock className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.appointment.selectTime}
          </h3>
        </div>

        {/* Display the selected date */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border" style={{ borderColor: '#d82020' }}>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" style={{ color: '#d82020' }} />
            <span className="text-sm font-semibold" style={{ color: '#333333' }}>
              {t.appointment.date}: {' '}
              <span style={{ color: '#000000' }}>
                {new Date(formData.selectedDate).toLocaleDateString('de-DE', { 
                  weekday: 'long', 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
            {t.appointment.time} <span style={{ color: '#E60032' }}>*</span>
          </label>
          <select
            name="selectedTime"
            value={formData.selectedTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
            style={{ borderColor: '#CCCCCC' }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
          >
            <option value="">{t.appointment.selectTime}</option>
            {availableTimeSlots.map((time) => (
              <option key={time} value={time}>{time} Uhr</option>
            ))}
          </select>
        </div>
      </section>

      {/* Personal Information */}
      <section className="bg-white rounded-lg border p-6" style={{ borderColor: '#CCCCCC', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#002A4E' }}>
            <User className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
            {t.appointment.personalInfo}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.form.personalInfo.firstName} <span style={{ color: '#E60032' }}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.form.personalInfo.lastName} <span style={{ color: '#E60032' }}>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#CCCCCC' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.form.contact.email} <span style={{ color: '#E60032' }}>*</span>
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
              onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
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
              onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="px-12 py-4 text-white font-bold text-lg rounded transition-colors"
          style={{ 
            backgroundColor: '#E60032',
            boxShadow: '0 2px 4px rgba(230, 0, 50, 0.2)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CC0028'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E60032'}
        >
          {t.appointment.confirmButton}
        </button>
      </div>

      {/* Required Fields Notice */}
      <p className="text-sm text-center" style={{ color: '#666666' }}>
        <span style={{ color: '#E60032' }}>*</span> {t.form.requiredFields}
      </p>
    </form>
  );
}