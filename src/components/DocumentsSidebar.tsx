import React, { useState } from 'react';
import { FileText, CheckCircle2, Circle, Info, Download } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function DocumentsSidebar() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const { t, language } = useLanguage();

  // Handle form download
  const handleDownloadForm = () => {
    // Create a blob with sample form content
    const formContent = generateFormContent(language);
    const blob = new Blob([formContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Anmeldeformular_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Generate form content (simulated PDF content)
  const generateFormContent = (lang: string) => {
    const formText = `
ANMELDEFORMULAR FÜR WOHNSITZ IN BERLIN
Registration Form for Residence in Berlin
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERSÖNLICHE ANGABEN / PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vorname / First Name: _________________________________

Nachname / Last Name: _________________________________

Geburtsdatum / Date of Birth: _________________________

Geburtsort / Place of Birth: __________________________

Staatsangehörigkeit / Nationality: ____________________


NEUE ADRESSE / NEW ADDRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Straße / Street: ______________________________________

Hausnummer / House Number: ____________________________

Postleitzahl / Postal Code: ___________________________

Stadt / City: Berlin

Einzugsdatum / Move-in Date: __________________________


VORHERIGE ADRESSE / PREVIOUS ADDRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Straße / Street: ______________________________________

Hausnummer / House Number: ____________________________

Postleitzahl / Postal Code: ___________________________

Stadt / City: _________________________________________

Land / Country: _______________________________________


KONTAKTDATEN / CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Telefonnummer / Phone Number: _________________________

E-Mail: _______________________________________________


UNTERSCHRIFT / SIGNATURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ort, Datum / Place, Date: _____________________________

Unterschrift / Signature: _____________________________


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HINWEISE / NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bitte bringen Sie folgende Dokumente mit:
Please bring the following documents:

✓ Personalausweis oder Reisepass / ID card or passport
✓ Wohnungsgeberbestätigung / Landlord confirmation
✓ Dieses ausgefüllte Formular / This completed form

Servicetelefon 115
service.berlin.de
    `;
    return formText;
  };

  const requiredDocuments = [
    {
      id: 'doc-1',
      title: t.documents.items.passport,
      description: t.documents.descriptions.passportDesc,
      required: true
    },
    {
      id: 'doc-2',
      title: t.documents.items.confirmation,
      description: t.documents.descriptions.confirmationDesc,
      required: true
    },
    {
      id: 'doc-3',
      title: t.documents.items.form,
      description: t.documents.descriptions.formDesc,
      required: true
    },
    {
      id: 'doc-4',
      title: t.documents.items.powerOfAttorney,
      description: t.documents.descriptions.powerOfAttorneyDesc,
      required: false
    },
    {
      id: 'doc-5',
      title: t.documents.items.certificates,
      description: t.documents.descriptions.certificatesDesc,
      required: false
    }
  ];

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const requiredCount = requiredDocuments.filter(doc => doc.required).length;
  const checkedRequiredCount = requiredDocuments
    .filter(doc => doc.required && checkedItems.has(doc.id))
    .length;

  return (
    <aside className="lg:w-80 flex-shrink-0">
      <div className="lg:sticky lg:top-8 bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-br from-amber-50 to-white border-b border-amber-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-amber-500 rounded-lg p-2">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">
              {t.documents.title}
            </h3>
          </div>
          <p className="text-sm text-gray-600">
            {t.documents.subtitle}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">{t.documents.preparation}</span>
            <span className="text-sm font-medium text-gray-700">
              {checkedRequiredCount} / {requiredCount}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(checkedRequiredCount / requiredCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Document Checklist */}
        <div className="p-4">
          <div className="space-y-3">
            {requiredDocuments.map((doc) => (
              <div
                key={doc.id}
                className={`border rounded-lg p-3 cursor-pointer transition-all ${
                  checkedItems.has(doc.id)
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleCheck(doc.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {checkedItems.has(doc.id) ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {doc.title}
                      </h4>
                      {doc.required && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                          {t.documents.required}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {doc.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Footer */}
        <div className="border-t border-gray-200 bg-blue-50 p-4">
          <div className="flex gap-2 mb-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                <span className="font-medium">{t.documents.tipLabel}</span> {t.documents.tipText}
              </p>
            </div>
          </div>
          
          {/* Download Button */}
          <button
            onClick={handleDownloadForm}
            className="w-full mt-3 py-3 px-4 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
            style={{ backgroundColor: '#E60032' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#CC0028';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(230, 0, 50, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E60032';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            <Download className="w-5 h-5" />
            {t.documents.downloadForm}
          </button>
        </div>
      </div>
    </aside>
  );
}