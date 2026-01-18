import React, { useState, useEffect, useRef } from 'react';
import { SmartSuggestions } from './components/SmartSuggestions';
import { DistrictAccordion } from './components/DistrictAccordion';
import { DocumentsSidebar } from './components/DocumentsSidebar';
import { LanguageProvider, useLanguage } from './lib/LanguageContext';
import { ProgressStepper, Step } from './components/navigation/ProgressStepper';
import { OfficialHeader } from './components/navigation/OfficialHeader';
import { DecisionHub } from './screens/DecisionHub';
import { RecoveryModal } from './components/feedback/RecoveryModal';
import { ToastContainer } from './components/feedback/Toast';
import { useToast } from './lib/useToast';
import { AppointmentBooking } from './components/forms/AppointmentBooking';
import { OnlineRegistration } from './components/forms/OnlineRegistration';
import { ContactSupport } from './components/support/ContactSupport';
import { HelpCircle } from 'lucide-react';

type Screen = 'decision' | 'office-selection' | 'details' | 'confirmation';
type FlowType = null | 'appointment' | 'online';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('decision');
  const [flowType, setFlowType] = useState<FlowType>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [selectedOfficeData, setSelectedOfficeData] = useState<any>(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState<any>(null);
  const [registrationData, setRegistrationData] = useState<any>(null);
  const { toasts, dismissToast, success, error, info } = useToast();
  const { t } = useLanguage();
  const continueButtonRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      id: 'service',
      label: t.progressStepper.steps.service,
      status: currentScreen === 'decision' ? 'active' : 'completed',
      screenRoute: 'decision'
    },
    {
      id: 'office',
      label: t.progressStepper.steps.office,
      status:
        currentScreen === 'decision'
          ? 'incomplete'
          : currentScreen === 'office-selection'
          ? 'active'
          : 'completed',
      screenRoute: 'office-selection'
    },
    {
      id: 'details',
      label: t.progressStepper.steps.details,
      status:
        currentScreen === 'details'
          ? 'active'
          : currentScreen === 'confirmation'
          ? 'completed'
          : 'incomplete',
      screenRoute: 'details'
    },
    {
      id: 'confirmation',
      label: t.progressStepper.steps.confirmation,
      status: currentScreen === 'confirmation' ? 'active' : 'incomplete',
      screenRoute: 'confirmation'
    }
  ];

  const handlePathSelection = (path: 'online' | 'appointment') => {
    if (path === 'appointment') {
      setFlowType('appointment');
      setCurrentScreen('office-selection');
      success(t.notifications.appointmentSelected.title, t.notifications.appointmentSelected.message);
    } else {
      setFlowType('online');
      handleOfficeSelection(selectedOffice, selectedOfficeData);
      setCurrentScreen('details');
      success(t.notifications.onlineRegistration.title, 'Bitte füllen Sie das Online-Formular aus');
    }
  };

  const handleOfficeSelection = (officeId: string | null, officeData?: any) => {
    if (!officeId) return;
    console.log('Office selected:', officeId, officeData);
    setSelectedOffice(officeId);
    if (officeData) {
      setSelectedOfficeData(officeData);
    }
    success(t.notifications.officeSelected.title, t.notifications.officeSelected.message);
    
    // Auto-navigate after 1.5 seconds
    setTimeout(() => {
      steps.forEach((step) => {
        if (step.status === 'completed' || step.screenRoute === currentScreen) {
          setCurrentScreen(step.screenRoute as Screen);
        }
      });
    }, 1500);
  };

  const triggerError = () => {
    setShowErrorModal(true);
    error(t.notifications.connectionError.title, t.notifications.connectionError.message);
  };

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: '#F2F2F2' }}>
        <OfficialHeader />

        {/* Progress Stepper */}
        {currentScreen !== 'decision' && (
          <div className="bg-white border-b shadow-sm sticky top-0 z-40" style={{ borderColor: '#CCCCCC' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <ProgressStepper
                steps={steps}
                currentStep={steps.findIndex((s) => s.status === 'active')}
                onStepClick={handleStepClick}
              />
            </div>
          </div>
        )}

        {/* Screen Content */}
        {currentScreen === 'decision' && (
          <DecisionHub onSelectPath={handlePathSelection} />
        )}

        {currentScreen === 'office-selection' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content Area */}
              <div className="flex-1">
                {/* Smart Suggestions Priority Section */}
                <SmartSuggestions onSelectOffice={handleOfficeSelection} />

                {/* Secondary Section: All Offices by District */}
                <DistrictAccordion
                  selectedOffice={selectedOffice}
                  onSelectOffice={handleOfficeSelection}
                />

                {/* Continue Button */}
                <div className="mt-8 flex flex-col items-center gap-4">
                  <button
                    onClick={() => {
                      if (selectedOffice) {
                        handleOfficeSelection(selectedOffice, selectedOfficeData);
                        setCurrentScreen('details');
                      } else {
                        error(t.demo.selectOfficeFirst, '');
                      }
                    }}
                    disabled={!selectedOffice}
                    className="px-8 py-3 text-white font-semibold rounded transition-colors"
                    style={{ 
                      backgroundColor: selectedOffice ? '#E40422' : '#CCCCCC',
                      boxShadow: selectedOffice ? '0 2px 4px rgba(228, 4, 34, 0.2)' : 'none',
                      cursor: selectedOffice ? 'pointer' : 'not-allowed'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedOffice) {
                        e.currentTarget.style.backgroundColor = '#CC0420';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedOffice) {
                        e.currentTarget.style.backgroundColor = '#E40422';
                      }
                    }}
                  >
                    {t.demo.continueToDetails}
                  </button>

                  {/* Demo: Trigger Error */}
                  <button
                    onClick={triggerError}
                    className="px-6 py-2 rounded transition-colors text-sm"
                    style={{
                      backgroundColor: '#F2F2F2',
                      color: '#333333'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CCCCCC'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F2F2F2'}
                  >
                    {t.demo.triggerError}
                  </button>
                </div>
              </div>

              {/* Sticky Sidebar */}
              <DocumentsSidebar />
            </div>
          </div>
        )}

        {currentScreen === 'details' && flowType === 'appointment' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>
                {t.appointment.confirmButton}
              </h2>
              <p style={{ color: '#666666' }}>
                {t.header.stepSubtitle}
              </p>
            </div>
            
            <AppointmentBooking 
              selectedOffice={selectedOffice}
              selectedOfficeData={selectedOfficeData}
              onConfirm={(data) => {
                setAppointmentData(data);
                setCurrentScreen('confirmation');
                success(t.notifications.formSubmitted.title, t.notifications.formSubmitted.message);
              }}
            />
          </div>
        )}

        {currentScreen === 'details' && flowType === 'online' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>
                {t.onlineRegistration.title}
              </h2>
              <p style={{ color: '#666666' }}>
                {t.onlineRegistration.subtitle}
              </p>
            </div>
            
            <OnlineRegistration 
              onSubmit={(data) => {
                setRegistrationData(data);
                setCurrentScreen('confirmation');
                success(t.onlineRegistration.confirmationTitle, t.onlineRegistration.confirmationMessage);
              }}
            />
          </div>
        )}

        {currentScreen === 'confirmation' && flowType === 'appointment' && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div 
              className="bg-white rounded-lg p-8 border"
              style={{ 
                borderColor: '#007256',
                boxShadow: '0 2px 8px rgba(0, 114, 86, 0.15)'
              }}
            >
              {/* Success Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'rgba(0, 114, 86, 0.1)' }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: '#007256' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#000000' }}>
                {t.appointment.confirmationTitle}
              </h2>
              <p className="text-center mb-8" style={{ color: '#666666' }}>
                {t.appointment.confirmationMessage}
              </p>

              {/* Appointment Details */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold mb-4 text-lg" style={{ color: '#000000' }}>
                  {t.appointment.appointmentDetails}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ color: '#666666' }}>{t.appointment.office}:</span>
                    <span className="font-semibold" style={{ color: '#000000' }}>
                      Bürgeramt Mitte - Karl-Marx-Allee
                    </span>
                  </div>
                  
                  {appointmentData && (
                    <>
                      <div className="flex justify-between">
                        <span style={{ color: '#666666' }}>{t.appointment.dateTime}:</span>
                        <span className="font-semibold" style={{ color: '#000000' }}>
                          {new Date(appointmentData.selectedDate).toLocaleDateString('de-DE', {
                            weekday: 'long',
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })} - {appointmentData.selectedTime} Uhr
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span style={{ color: '#666666' }}>Name:</span>
                        <span className="font-semibold" style={{ color: '#000000' }}>
                          {appointmentData.firstName} {appointmentData.lastName}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span style={{ color: '#666666' }}>E-Mail:</span>
                        <span className="font-semibold" style={{ color: '#000000' }}>
                          {appointmentData.email}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Documents Reminder */}
              <div 
                className="rounded-lg p-6 mb-6"
                style={{ 
                  backgroundColor: 'rgba(228, 4, 34, 0.05)',
                  border: '1px solid #E40422'
                }}
              >
                <h3 className="font-bold mb-3" style={{ color: '#E40422' }}>
                  {t.appointment.documentsTitle}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#333333' }}>
                  {t.appointment.documentsMessage}
                </p>
                <ul className="space-y-2 text-sm" style={{ color: '#333333' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#007256' }}>✓</span>
                    <span>{t.documents.items.passport}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#007256' }}>✓</span>
                    <span>{t.documents.items.confirmation}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#007256' }}>✓</span>
                    <span>{t.documents.items.form}</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 font-semibold rounded transition-colors"
                  style={{ 
                    backgroundColor: '#003366',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002244'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003366'}
                >
                  {t.appointment.printConfirmation}
                </button>
                
                <button
                  onClick={() => {
                    setCurrentScreen('decision');
                    setFlowType(null);
                  }}
                  className="px-6 py-3 font-semibold rounded transition-colors"
                  style={{ 
                    backgroundColor: '#F2F2F2',
                    color: '#333333',
                    border: '1px solid #CCCCCC'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F2F2F2'}
                >
                  {t.appointment.backToHome}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentScreen === 'confirmation' && flowType === 'online' && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div 
              className="bg-white rounded-lg p-8 border"
              style={{ 
                borderColor: '#007256',
                boxShadow: '0 2px 8px rgba(0, 114, 86, 0.15)'
              }}
            >
              {/* Success Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'rgba(0, 114, 86, 0.1)' }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: '#007256' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#000000' }}>
                {t.onlineRegistration.confirmationTitle}
              </h2>
              <p className="text-center mb-8" style={{ color: '#666666' }}>
                {t.onlineRegistration.confirmationMessage}
              </p>

              {/* Registration Details */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold mb-4 text-lg" style={{ color: '#000000' }}>
                  {t.onlineRegistration.referenceNumber}
                </h3>
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-mono font-bold" style={{ color: '#E40422' }}>
                    BLN-{Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </div>
                </div>

                {registrationData && (
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between">
                      <span style={{ color: '#666666' }}>Name:</span>
                      <span className="font-semibold" style={{ color: '#000000' }}>
                        {registrationData.firstName} {registrationData.lastName}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span style={{ color: '#666666' }}>E-Mail:</span>
                      <span className="font-semibold" style={{ color: '#000000' }}>
                        {registrationData.email}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span style={{ color: '#666666' }}>{t.onlineRegistration.newAddress}:</span>
                      <span className="font-semibold" style={{ color: '#000000' }}>
                        {registrationData.newStreet} {registrationData.newHouseNumber}, {registrationData.newPostalCode} Berlin
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Processing Time */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6" style={{ border: '1px solid #003366' }}>
                <h3 className="font-bold mb-3" style={{ color: '#003366' }}>
                  {t.onlineRegistration.processingTime}
                </h3>
                <p className="text-sm" style={{ color: '#333333' }}>
                  {t.onlineRegistration.nextStepsMessage}
                </p>
                <div className="mt-3 text-2xl font-bold" style={{ color: '#003366' }}>
                  5-7 {t.onlineRegistration.processingDays}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 font-semibold rounded transition-colors"
                  style={{ 
                    backgroundColor: '#003366',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002244'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003366'}
                >
                  {t.appointment.printConfirmation}
                </button>
                
                <button
                  onClick={() => {
                    setCurrentScreen('decision');
                    setFlowType(null);
                  }}
                  className="px-6 py-3 font-semibold rounded transition-colors"
                  style={{ 
                    backgroundColor: '#F2F2F2',
                    color: '#333333',
                    border: '1px solid #CCCCCC'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F2F2F2'}
                >
                  {t.appointment.backToHome}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recovery Modal */}
      <RecoveryModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        errorType="network"
        headline={t.recoveryModal.networkError.headline}
        reasons={t.recoveryModal.networkError.reasons}
        primaryAction={{
          label: t.recoveryModal.primaryAction,
          onClick: () => {
            console.log('Retry action');
            info(t.notifications.reconnecting.title, t.notifications.reconnecting.message);
          }
        }}
        secondaryAction={{
          label: t.recoveryModal.secondaryAction,
          onClick: () => {
            setCurrentScreen('decision');
            setSelectedOffice(null);
          }
        }}
        supportLink="https://service.berlin.de/contact"
      />

      {/* Contact Support Modal */}
      <ContactSupport isOpen={showSupportModal} onClose={() => setShowSupportModal(false)} />

      {/* Floating Help Button */}
      <button
        onClick={() => setShowSupportModal(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all z-50"
        style={{ backgroundColor: '#E60032' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#CC0028';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#E60032';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label={t.support.needHelp}
        title={t.support.needHelp}
      >
        <HelpCircle className="w-7 h-7 text-white" />
      </button>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}