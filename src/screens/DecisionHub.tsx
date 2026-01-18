import React, { useState } from 'react';
import { Calendar, Monitor, Info, X } from 'lucide-react';
import { DualActionCards, ActionCard } from '../components/cards/DualActionCard';
import { useLanguage } from '../lib/LanguageContext';

interface DecisionHubProps {
  onSelectPath: (path: 'online' | 'appointment') => void;
}

export function DecisionHub({ onSelectPath }: DecisionHubProps) {
  const { language, t } = useLanguage();
  const [showInfoModal, setShowInfoModal] = useState<'appointment' | 'online' | null>(null);

  const cards: [ActionCard, ActionCard] = [
    {
      id: 'appointment',
      icon: <Calendar className="w-full h-full" />,
      iconBgColor: '#E60032', // Official Berlin Red
      headline: t.decisionHub.appointmentTitle,
      description: t.decisionHub.appointmentDescription,
      ctaLabel: language === 'de' ? 'Termin buchen' : 'Book now',
      ctaAction: () => onSelectPath('appointment'),
      recommended: true,
      learnMoreLink: '#appointment-info',
      onLearnMore: () => setShowInfoModal('appointment')
    },
    {
      id: 'online',
      icon: <Monitor className="w-full h-full" />,
      iconBgColor: '#002A4E', // Official Berlin Blue
      headline: t.decisionHub.onlineTitle,
      description: t.decisionHub.onlineDescription,
      ctaLabel: language === 'de' ? 'Online starten' : 'Start online',
      ctaAction: () => onSelectPath('online'),
      learnMoreLink: '#online-info',
      onLearnMore: () => setShowInfoModal('online')
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 style={{ color: '#000000' }}>
          {language === 'de' ? 'Wie möchten Sie sich anmelden?' : 'How would you like to register?'}
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: '#333333' }}>
          {language === 'de'
            ? 'Wählen Sie die für Sie passende Methode zur Anmeldung Ihrer Wohnung in Berlin.'
            : 'Choose the registration method that works best for you.'}
        </p>
      </div>

      {/* Dual Action Cards */}
      <DualActionCards cards={cards} onCardSelect={(id) => onSelectPath(id as 'online' | 'appointment')} />

      {/* Additional Information */}
      <div 
        className="mt-12 rounded-lg p-6 border"
        style={{ 
          backgroundColor: 'rgba(0, 42, 78, 0.05)',
          borderColor: '#002A4E'
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: '#000000' }}>
          {t.decisionHub.whatYouNeed}
        </h3>
        <ul className="space-y-2 text-sm" style={{ color: '#333333' }}>
          <li className="flex items-start gap-2">
            <span style={{ color: '#007256' }} className="mt-1">✓</span>
            <span>
              {language === 'de'
                ? 'Personalausweis oder Reisepass'
                : 'ID card or passport'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#007256' }} className="mt-1">✓</span>
            <span>
              {language === 'de'
                ? 'Wohnungsgeberbestätigung (vom Vermieter unterschrieben)'
                : 'Landlord confirmation (signed)'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#007256' }} className="mt-1">✓</span>
            <span>
              {language === 'de'
                ? 'Ausgefülltes Anmeldeformular'
                : 'Completed registration form'}
            </span>
          </li>
        </ul>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setShowInfoModal(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInfoModal(null)}
              className="absolute top-4 right-4 transition-colors"
              style={{ color: '#666666' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
            >
              <X className="w-6 h-6" />
            </button>

            {showInfoModal === 'appointment' ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E60032' }}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: '#000000' }}>
                    {t.decisionHub.appointmentTitle}
                  </h2>
                </div>
                <div className="space-y-4 text-sm" style={{ color: '#333333' }}>
                  <p>
                    {language === 'de' 
                      ? 'Ein persönlicher Termin im Bürgeramt ist die empfohlene Methode für Ihre Anmeldung.' 
                      : 'An in-person appointment at the citizen service office is the recommended method for your registration.'}
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                      {language === 'de' ? 'Vorteile:' : 'Benefits:'}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li>• {language === 'de' ? 'Sofortige Bearbeitung vor Ort' : 'Immediate processing on-site'}</li>
                      <li>• {language === 'de' ? 'Persönliche Beratung bei Fragen' : 'Personal assistance with questions'}</li>
                      <li>• {language === 'de' ? 'Dokumente werden direkt geprüft' : 'Documents verified immediately'}</li>
                      <li>• {language === 'de' ? 'Anmeldebestätigung direkt erhalten' : 'Receive confirmation immediately'}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                      {language === 'de' ? 'Durchschnittliche Wartezeit:' : 'Average wait time:'}
                    </h3>
                    <p>{language === 'de' ? '15-30 Minuten mit Termin' : '15-30 minutes with appointment'}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#002A4E' }}>
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: '#000000' }}>
                    {t.decisionHub.onlineTitle}
                  </h2>
                </div>
                <div className="space-y-4 text-sm" style={{ color: '#333333' }}>
                  <p>
                    {language === 'de' 
                      ? 'Die Online-Anmeldung ermöglicht es Ihnen, den gesamten Prozess bequem von zu Hause aus durchzuführen.' 
                      : 'Online registration allows you to complete the entire process conveniently from home.'}
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                      {language === 'de' ? 'Vorteile:' : 'Benefits:'}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li>• {language === 'de' ? '24/7 verfügbar' : 'Available 24/7'}</li>
                      <li>• {language === 'de' ? 'Kein Termin erforderlich' : 'No appointment needed'}</li>
                      <li>• {language === 'de' ? 'Dokumenten-Upload möglich' : 'Document upload possible'}</li>
                      <li>• {language === 'de' ? 'Bearbeitung innerhalb von 5-7 Werktagen' : 'Processing within 5-7 business days'}</li>
                    </ul>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(230, 0, 50, 0.05)', border: '1px solid #E60032' }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: '#E60032' }}>
                      {language === 'de' ? 'Wichtig:' : 'Important:'}
                    </h3>
                    <p>
                      {language === 'de' 
                        ? 'Sie benötigen gescannte Kopien Ihrer Dokumente (PDF oder JPG Format).' 
                        : 'You need scanned copies of your documents (PDF or JPG format).'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowInfoModal(null)}
              className="mt-6 w-full py-3 text-white font-semibold rounded transition-colors"
              style={{ backgroundColor: '#002A4E' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#001A30'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#002A4E'}
            >
              {language === 'de' ? 'Verstanden' : 'Got it'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}