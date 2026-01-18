import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../../lib/LanguageContext';

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

  const [logoUrl, setLogoUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Fetch the logo from Google Drive and convert to data URL
    const loadLogo = async () => {
      try {
        const urls = [
          'https://drive.google.com/uc?export=download&id=1m_oPD7fj_TAgNVGjhQ6Js4VXfBvzCbcd&confirm=t',
          'https://lh3.googleusercontent.com/d/1m_oPD7fj_TAgNVGjhQ6Js4VXfBvzCbcd=s1000',
          'https://drive.google.com/uc?export=view&id=1m_oPD7fj_TAgNVGjhQ6Js4VXfBvzCbcd'
        ];

        for (const url of urls) {
          try {
            const response = await fetch(url, {
              mode: 'cors',
              credentials: 'omit'
            });
            if (response.ok) {
              const blob = await response.blob();
              const reader = new FileReader();
              reader.onloadend = () => {
                setLogoUrl(reader.result as string);
              };
              reader.readAsDataURL(blob);
              return;
            }
          } catch (e) {
            // Try next URL
          }
        }
      } catch (error) {
        console.error('Failed to load logo:', error);
      }
    };
    loadLogo();
  }, []);

  return (
    <header className="bg-white border-b shadow-sm" style={{ borderColor: '#E0E0E0' }}>
      <div className="max-w-7xl mx-auto h-20">
        <div className="flex items-center justify-between h-full pl-0">
          {/* Logo and Title */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            {logoUrl ? (
              <img 
                src={logoUrl}
                alt="Custom Logo" 
                className="h-16 object-contain"
                style={{ maxWidth: '200px' }}
              />
            ) : (
              <div className="h-12 w-12 bg-gray-300 rounded animate-pulse" />
            )}
            <div style={{ height: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 className="text-lg font-bold" style={{ color: '#000000' }}>
                {t.header.title}
              </h1>
              <p className="text-xs" style={{ color: '#666666' }}>
                {t.header.subtitle}
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