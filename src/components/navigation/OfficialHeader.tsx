import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import type { Language } from '../../lib/translations';

interface OfficialHeaderProps {
  onLogoClick?: () => void;
}

export function OfficialHeader({ onLogoClick }: OfficialHeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'ar', label: 'العربية' },
    { code: 'pl', label: 'Polski' },
    { code: 'fr', label: 'Français' }
  ];

  return (
    <header className="bg-white border-b shadow-sm" style={{ borderColor: '#E0E0E0' }}>
      <div className="max-w-7xl mx-auto h-20">
        <div className="flex items-center justify-between h-full pl-0">
          {/* Logo and Title */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            <img
              src={`${import.meta.env.BASE_URL}berlin-logo.svg`}
              alt="Berlin logo"
              className="h-16 object-contain"
              style={{ maxWidth: '200px' }}
            />
            <div style={{ height: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 className="text-lg font-bold" style={{ color: '#000000' }}>
                {t.header.taskTitle}
              </h1>
              <p className="text-xs" style={{ color: '#666666' }}>
                {t.header.location}
              </p>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 pr-4 sm:pr-6 lg:pr-8">
            <Globe className="w-5 h-5" style={{ color: '#000000' }} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ 
                borderColor: '#CCCCCC',
                color: '#000000'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#002A4E'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}