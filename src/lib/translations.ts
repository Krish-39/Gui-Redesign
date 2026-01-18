export type Language = 'de' | 'en' | 'tr' | 'ar' | 'pl' | 'fr';

export interface Translations {
  header: {
    location: string;
    taskTitle: string;
    stepTitle: string;
    stepSubtitle: string;
    searchPlaceholder: string;
    services: string;
  };
  smartSuggestions: {
    title: string;
    subtitle: string;
    selectButton: string;
    slotsAvailable: string;
    reasons: {
      earliest: string;
      nearby: string;
      manySlots: string;
    };
  };
  allOffices: {
    title: string;
    officeCount: string;
    officesCount: string;
    selected: string;
    selectButton: string;
    available: string;
  };
  documents: {
    title: string;
    subtitle: string;
    preparation: string;
    required: string;
    optional: string;
    tipLabel: string;
    tipText: string;
    downloadForm: string;
    items: {
      id: string;
      passport: string;
      confirmation: string;
      form: string;
      powerOfAttorney: string;
      certificates: string;
    };
    descriptions: {
      passportDesc: string;
      confirmationDesc: string;
      formDesc: string;
      powerOfAttorneyDesc: string;
      certificatesDesc: string;
    };
  };
  timeLabels: {
    today: string;
    tomorrow: string;
    dayAfterTomorrow: string;
  };
  languageSelector: {
    title: string;
  };
  progressStepper: {
    inProgress: string;
    steps: {
      service: string;
      office: string;
      details: string;
      confirmation: string;
    }
  };
  demo: {
    triggerError: string;
    detailsTitle: string;
    detailsDescription: string;
    continueButton: string;
    successTitle: string;
    successMessage: string;
    continueToDetails: string;
    selectOfficeFirst: string;
  };
  decisionHub: {
    appointmentTitle: string;
    appointmentDescription: string;
    onlineTitle: string;
    onlineDescription: string;
    learnMore: string;
    whatYouNeed: string;
  };
  notifications: {
    appointmentSelected: {
      title: string;
      message: string;
    };
    onlineRegistration: {
      title: string;
      message: string;
    };
    officeSelected: {
      title: string;
      message: string;
    };
    connectionError: {
      title: string;
      message: string;
    };
    formSubmitted: {
      title: string;
      message: string;
    };
    reconnecting: {
      title: string;
      message: string;
    }
  };
  recoveryModal: {
    networkError: {
      headline: string;
      reasons: string[];
    };
    primaryAction: string;
    secondaryAction: string;
  };
  form: {
    personalInfo: {
      title: string;
      firstName: string;
      lastName: string;
      birthDate: string;
    };
    contact: {
      title: string;
      email: string;
    };
    submitButton: string;
    requiredFields: string;
  };
  appointment: {
    selectedOffice: string;
    selectDateTime: string;
    date: string;
    time: string;
    selectDate: string;
    selectTime: string;
    personalInfo: string;
    phone: string;
    confirmButton: string;
    confirmationTitle: string;
    confirmationMessage: string;
    appointmentDetails: string;
    office: string;
    dateTime: string;
    documentsTitle: string;
    documentsMessage: string;
    downloadConfirmation: string;
    printConfirmation: string;
    backToHome: string;
  };
  onlineRegistration: {
    title: string;
    subtitle: string;
    birthPlace: string;
    nationality: string;
    previousAddress: string;
    newAddress: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    moveInDate: string;
    uploadDocuments: string;
    uploadFile: string;
    uploaded: string;
    submitRegistration: string;
    confirmationTitle: string;
    confirmationMessage: string;
    referenceNumber: string;
    processingTime: string;
    processingDays: string;
    nextSteps: string;
    nextStepsMessage: string;
  };
  support: {
    title: string;
    subtitle: string;
    contactInfo: string;
    phone: string;
    phoneHours: string;
    email: string;
    emailResponse: string;
    officeHours: string;
    mondayFriday: string;
    saturday: string;
    address: string;
    faq: string;
    faqDescription: string;
    viewFAQ: string;
    sendMessage: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    selectSubject: string;
    subjectAppointment: string;
    subjectRegistration: string;
    subjectDocuments: string;
    subjectTechnical: string;
    subjectOther: string;
    message: string;
    submitMessage: string;
    messageSent: string;
    messageResponse: string;
    needHelp: string;
  };
  errors: {
    required: string;
    invalidEmail: string;
    invalidDate: string;
    uploadFailed: string;
    networkError: string;
    sessionExpired: string;
    tryAgain: string;
    contactSupport: string;
    possibleCauses: string;
  };
  officeCard: {
    nextAvailable: string;
    slots: string;
    distance: string;
    selectButton: string;
    noAppointments: string;
    fullyBooked: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    header: {
      location: 'Berlin',
      taskTitle: 'Anmeldung einer Wohnung',
      stepTitle: 'Bürgeramt auswählen',
      stepSubtitle: 'Schritt 1 von 3: Wählen Sie einen Standort für Ihren Termin',
      searchPlaceholder: 'Suche...',
      services: 'Dienstleistungen'
    },
    smartSuggestions: {
      title: 'Empfohlene Bürgerämter',
      subtitle: 'Basierend auf Verfügbarkeit und Standort',
      selectButton: 'Termin auswählen',
      slotsAvailable: 'Termine frei',
      reasons: {
        earliest: 'Nächster verfügbarer Termin',
        nearby: 'In Ihrer Nähe',
        manySlots: 'Mehrere Termine verfügbar'
      }
    },
    allOffices: {
      title: 'Alle Bürgerämter nach Bezirk',
      officeCount: 'Bürgeramt',
      officesCount: 'Bürgerämter',
      selected: 'Ausgewählt',
      selectButton: 'Auswählen',
      available: 'Termine verfügbar'
    },
    documents: {
      title: 'Erforderliche Dokumente',
      subtitle: 'Bitte bringen Sie folgende Unterlagen mit',
      preparation: 'Vorbereitung',
      required: 'Pflicht',
      optional: 'Optional',
      tipLabel: 'Tipp:',
      tipText: 'Laden Sie das Anmeldeformular vorab herunter und füllen Sie es aus, um Zeit zu sparen.',
      downloadForm: 'Anmeldeformular herunterladen',
      items: {
        id: 'Personalausweis oder Reisepass',
        passport: 'Personalausweis oder Reisepass',
        confirmation: 'Wohnungsgeberbestätigung',
        form: 'Ausgefülltes Anmeldeformular',
        powerOfAttorney: 'Vollmacht (falls zutreffend)',
        certificates: 'Eheurkunde / Geburtsurkunde'
      },
      descriptions: {
        passportDesc: 'Mit aktuellem Lichtbild',
        confirmationDesc: 'Vom Vermieter unterschrieben',
        formDesc: 'Kann auch vor Ort ausgefüllt werden',
        powerOfAttorneyDesc: 'Bei Anmeldung durch Dritte',
        certificatesDesc: 'Bei Familienanmeldung'
      }
    },
    timeLabels: {
      today: 'Heute',
      tomorrow: 'Morgen',
      dayAfterTomorrow: 'Übermorgen'
    },
    languageSelector: {
      title: 'Sprache wählen'
    },
    progressStepper: {
      inProgress: 'In Bearbeitung',
      steps: {
        service: 'Service wählen',
        office: 'Bürgeramt wählen',
        details: 'Details eingeben',
        confirmation: 'Bestätigung'
      }
    },
    demo: {
      triggerError: 'Demo: Fehler auslösen',
      detailsTitle: 'Details eingeben',
      detailsDescription: 'Dieser Bildschirm würde das Detailformular enthalten.',
      continueButton: 'Weiter zur Bestätigung',
      successTitle: 'Anmeldung erfolgreich!',
      successMessage: 'Ihre Anmeldung wurde erfolgreich abgeschlossen.',
      continueToDetails: 'Weiter zu Details',
      selectOfficeFirst: 'Bitte wählen Sie zuerst ein Bürgeramt aus'
    },
    decisionHub: {
      appointmentTitle: 'Termin buchen',
      appointmentDescription: 'Wählen Sie ein Bürgeramt und buchen Sie einen persönlichen Termin für Ihre Anmeldung.',
      onlineTitle: 'Online-Anmeldung',
      onlineDescription: 'Vervollständigen Sie Ihre Anmeldung vollständig online – kein persönlicher Termin erforderlich.',
      learnMore: 'Mehr erfahren',
      whatYouNeed: 'Was Sie benötigen:'
    },
    notifications: {
      appointmentSelected: {
        title: 'Termin-Modus ausgewählt',
        message: 'Wählen Sie nun ein Bürgeramt aus'
      },
      onlineRegistration: {
        title: 'Online-Anmeldung',
        message: 'Diese Funktion wird bald verfügbar sein'
      },
      officeSelected: {
        title: 'Bürgeramt ausgewählt',
        message: 'Sie können jetzt mit der Terminbuchung fortfahren'
      },
      connectionError: {
        title: 'Verbindungsfehler',
        message: 'Die Anfrage konnte nicht abgeschlossen werden'
      },
      formSubmitted: {
        title: 'Formular abgeschickt',
        message: 'Ihre Daten wurden gespeichert'
      },
      reconnecting: {
        title: 'Verbindung wird wiederhergestellt...',
        message: 'Bitte warten Sie einen Moment'
      }
    },
    recoveryModal: {
      networkError: {
        headline: 'Verbindung unterbrochen',
        reasons: [
          'Ihre Internetverbindung wurde unterbrochen',
          'Der Server ist vorübergehend nicht erreichbar'
        ]
      },
      primaryAction: 'Erneut versuchen',
      secondaryAction: 'Zur Startseite'
    },
    form: {
      personalInfo: {
        title: 'Persönliche Informationen',
        firstName: 'Vorname',
        lastName: 'Nachname',
        birthDate: 'Geburtsdatum'
      },
      contact: {
        title: 'Kontaktinformationen',
        email: 'E-Mail'
      },
      submitButton: 'Absenden',
      requiredFields: 'Pflichtfelder'
    },
    appointment: {
      selectedOffice: 'Ausgewähltes Bürgeramt',
      selectDateTime: 'Datum und Uhrzeit wählen',
      date: 'Datum',
      time: 'Uhrzeit',
      selectDate: 'Datum auswählen',
      selectTime: 'Uhrzeit auswählen',
      personalInfo: 'Ihre Kontaktdaten',
      phone: 'Telefon (optional)',
      confirmButton: 'Termin bestätigen',
      confirmationTitle: 'Termin erfolgreich gebucht!',
      confirmationMessage: 'Ihre Terminbestätigung wurde an Ihre E-Mail-Adresse gesendet.',
      appointmentDetails: 'Termindetails',
      office: 'Bürgeramt',
      dateTime: 'Datum & Uhrzeit',
      documentsTitle: 'Bringen Sie diese Dokumente mit',
      documentsMessage: 'Bitte bringen Sie alle erforderlichen Dokumente zu Ihrem Termin mit.',
      downloadConfirmation: 'Bestätigung herunterladen',
      printConfirmation: 'Bestätigung drucken',
      backToHome: 'Zurück zur Startseite'
    },
    onlineRegistration: {
      title: 'Online-Anmeldung',
      subtitle: 'Bitte füllen Sie die folgenden Informationen aus',
      birthPlace: 'Geburtsort',
      nationality: 'Staatsbürgerschaft',
      previousAddress: 'Vorherige Adresse',
      newAddress: 'Neue Adresse',
      street: 'Straße',
      houseNumber: 'Hausnummer',
      postalCode: 'Postleitzahl',
      city: 'Stadt',
      moveInDate: 'Einzugstermin',
      uploadDocuments: 'Dokumente hochladen',
      uploadFile: 'Datei hochladen',
      uploaded: 'Hochgeladen',
      submitRegistration: 'Anmeldung absenden',
      confirmationTitle: 'Anmeldung erfolgreich!',
      confirmationMessage: 'Ihre Anmeldung wurde erfolgreich abgeschlossen.',
      referenceNumber: 'Referenznummer',
      processingTime: 'Verarbeitungszeit',
      processingDays: 'Tage',
      nextSteps: 'Nächste Schritte',
      nextStepsMessage: 'Sie erhalten eine Bestätigung per E-Mail.'
    },
    support: {
      title: 'Hilfe',
      subtitle: 'Kontaktieren Sie uns für Unterstützung',
      contactInfo: 'Kontaktinformationen',
      phone: 'Telefon',
      phoneHours: 'Telefonzeiten',
      email: 'E-Mail',
      emailResponse: 'E-Mail-Antwort',
      officeHours: 'Bürozeiten',
      mondayFriday: 'Montag bis Freitag',
      saturday: 'Samstag',
      address: 'Adresse',
      faq: 'FAQ',
      faqDescription: 'Häufig gestellte Fragen',
      viewFAQ: 'FAQ anzeigen',
      sendMessage: 'Nachricht senden',
      yourName: 'Ihr Name',
      yourEmail: 'Ihre E-Mail',
      subject: 'Betreff',
      selectSubject: 'Betreff auswählen',
      subjectAppointment: 'Termin',
      subjectRegistration: 'Anmeldung',
      subjectDocuments: 'Dokumente',
      subjectTechnical: 'Technische Unterstützung',
      subjectOther: 'Andere',
      message: 'Nachricht',
      submitMessage: 'Nachricht senden',
      messageSent: 'Nachricht gesendet',
      messageResponse: 'Antwort erhalten',
      needHelp: 'Hilfe benötigt'
    },
    errors: {
      required: 'Dieses Feld ist erforderlich',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      invalidDate: 'Bitte geben Sie ein gültiges Datum ein',
      uploadFailed: 'Datei-Upload fehlgeschlagen',
      networkError: 'Netzwerkfehler',
      sessionExpired: 'Sitzung abgelaufen',
      tryAgain: 'Erneut versuchen',
      contactSupport: 'Support kontaktieren',
      possibleCauses: 'Mögliche Ursachen:'
    },
    officeCard: {
      nextAvailable: 'Nächster Termin',
      slots: 'Termine verfügbar',
      distance: 'Entfernung',
      selectButton: 'Auswählen',
      noAppointments: 'Keine Termine verfügbar',
      fullyBooked: 'Ausgebucht'
    }
  },
  en: {
    header: {
      location: 'Berlin',
      taskTitle: 'Address Registration',
      stepTitle: 'Select a Citizen Service Office',
      stepSubtitle: 'Step 1 of 3: Choose a location for your appointment',
      searchPlaceholder: 'Search...',
      services: 'Services'
    },
    smartSuggestions: {
      title: 'Recommended Offices',
      subtitle: 'Based on availability and location',
      selectButton: 'Select appointment',
      slotsAvailable: 'slots available',
      reasons: {
        earliest: 'Next available appointment',
        nearby: 'Near you',
        manySlots: 'Multiple appointments available'
      }
    },
    allOffices: {
      title: 'All Offices by District',
      officeCount: 'office',
      officesCount: 'offices',
      selected: 'Selected',
      selectButton: 'Select',
      available: 'appointments available'
    },
    documents: {
      title: 'Required Documents',
      subtitle: 'Please bring the following documents',
      preparation: 'Preparation',
      required: 'Required',
      optional: 'Optional',
      tipLabel: 'Tip:',
      tipText: 'Download the registration form in advance and fill it out to save time.',
      downloadForm: 'Download Registration Form',
      items: {
        id: 'ID card or passport',
        passport: 'ID card or passport',
        confirmation: 'Landlord confirmation',
        form: 'Completed registration form',
        powerOfAttorney: 'Power of attorney (if applicable)',
        certificates: 'Marriage / birth certificate'
      },
      descriptions: {
        passportDesc: 'With current photo',
        confirmationDesc: 'Signed by landlord',
        formDesc: 'Can also be filled out on-site',
        powerOfAttorneyDesc: 'For registration by third party',
        certificatesDesc: 'For family registration'
      }
    },
    timeLabels: {
      today: 'Today',
      tomorrow: 'Tomorrow',
      dayAfterTomorrow: 'Day after tomorrow'
    },
    languageSelector: {
      title: 'Select Language'
    },
    progressStepper: {
      inProgress: 'In Progress',
      steps: {
        service: 'Select Service',
        office: 'Select Office',
        details: 'Enter Details',
        confirmation: 'Confirmation'
      }
    },
    demo: {
      triggerError: 'Demo: Trigger Error',
      detailsTitle: 'Enter Details',
      detailsDescription: 'This screen would contain the details form.',
      continueButton: 'Continue to Confirmation',
      successTitle: 'Registration Successful!',
      successMessage: 'Your registration has been completed successfully.',
      continueToDetails: 'Continue to Details',
      selectOfficeFirst: 'Please select an office first'
    },
    decisionHub: {
      appointmentTitle: 'Book Appointment',
      appointmentDescription: 'Choose a citizen service office and book an in-person appointment for your registration.',
      onlineTitle: 'Register Online',
      onlineDescription: 'Complete your registration entirely online – no in-person appointment needed.',
      learnMore: 'Learn more',
      whatYouNeed: 'What you need:'
    },
    notifications: {
      appointmentSelected: {
        title: 'Appointment Mode Selected',
        message: 'Please select a citizen service office'
      },
      onlineRegistration: {
        title: 'Online Registration',
        message: 'This feature will be available soon'
      },
      officeSelected: {
        title: 'Office Selected',
        message: 'You can now proceed with booking your appointment'
      },
      connectionError: {
        title: 'Connection Error',
        message: 'The request could not be completed'
      },
      formSubmitted: {
        title: 'Form Submitted',
        message: 'Your data has been saved'
      },
      reconnecting: {
        title: 'Reconnecting...',
        message: 'Please wait a moment'
      }
    },
    recoveryModal: {
      networkError: {
        headline: 'Connection Interrupted',
        reasons: [
          'Your internet connection was interrupted',
          'The server is temporarily unavailable'
        ]
      },
      primaryAction: 'Try Again',
      secondaryAction: 'Go to Home'
    },
    form: {
      personalInfo: {
        title: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        birthDate: 'Date of Birth'
      },
      contact: {
        title: 'Contact Information',
        email: 'Email'
      },
      submitButton: 'Submit',
      requiredFields: 'Required Fields'
    },
    appointment: {
      selectedOffice: 'Selected Office',
      selectDateTime: 'Select Date and Time',
      date: 'Date',
      time: 'Time',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      personalInfo: 'Your Contact Information',
      phone: 'Phone (optional)',
      confirmButton: 'Confirm Appointment',
      confirmationTitle: 'Appointment Booked Successfully!',
      confirmationMessage: 'Your appointment confirmation has been sent to your email address.',
      appointmentDetails: 'Appointment Details',
      office: 'Office',
      dateTime: 'Date & Time',
      documentsTitle: 'Bring These Documents',
      documentsMessage: 'Please bring all required documents to your appointment.',
      downloadConfirmation: 'Download Confirmation',
      printConfirmation: 'Print Confirmation',
      backToHome: 'Back to Home'
    },
    onlineRegistration: {
      title: 'Online Registration',
      subtitle: 'Please fill in the following information',
      birthPlace: 'Place of Birth',
      nationality: 'Nationality',
      previousAddress: 'Previous Address',
      newAddress: 'New Address',
      street: 'Street',
      houseNumber: 'House Number',
      postalCode: 'Postal Code',
      city: 'City',
      moveInDate: 'Move-in Date',
      uploadDocuments: 'Upload Documents',
      uploadFile: 'Upload File',
      uploaded: 'Uploaded',
      submitRegistration: 'Submit Registration',
      confirmationTitle: 'Registration Successful!',
      confirmationMessage: 'Your registration has been completed successfully.',
      referenceNumber: 'Reference Number',
      processingTime: 'Processing Time',
      processingDays: 'Days',
      nextSteps: 'Next Steps',
      nextStepsMessage: 'You will receive a confirmation email.'
    },
    support: {
      title: 'Help',
      subtitle: 'Contact us for support',
      contactInfo: 'Contact Information',
      phone: 'Phone',
      phoneHours: 'Phone Hours',
      email: 'Email',
      emailResponse: 'Email Response',
      officeHours: 'Office Hours',
      mondayFriday: 'Monday to Friday',
      saturday: 'Saturday',
      address: 'Address',
      faq: 'FAQ',
      faqDescription: 'Frequently Asked Questions',
      viewFAQ: 'View FAQ',
      sendMessage: 'Send Message',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      selectSubject: 'Select Subject',
      subjectAppointment: 'Appointment',
      subjectRegistration: 'Registration',
      subjectDocuments: 'Documents',
      subjectTechnical: 'Technical Support',
      subjectOther: 'Other',
      message: 'Message',
      submitMessage: 'Submit Message',
      messageSent: 'Message Sent',
      messageResponse: 'Response Received',
      needHelp: 'Need Help'
    },
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidDate: 'Please enter a valid date',
      uploadFailed: 'File upload failed',
      networkError: 'Network error',
      sessionExpired: 'Session expired',
      tryAgain: 'Try again',
      contactSupport: 'Contact support',
      possibleCauses: 'Possible causes:'
    },
    officeCard: {
      nextAvailable: 'Next Available',
      slots: 'slots available',
      distance: 'Distance',
      selectButton: 'Select',
      noAppointments: 'No appointments available',
      fullyBooked: 'Fully booked'
    }
  },
  tr: {
    header: {
      location: 'Berlin',
      taskTitle: 'Adres Kaydı',
      stepTitle: 'Vatandaşlık Hizmet Ofisi Seçin',
      stepSubtitle: 'Adım 1 / 3: Randevunuz için bir yer seçin',
      searchPlaceholder: 'Ara...',
      services: 'Hizmetler'
    },
    smartSuggestions: {
      title: 'Önerilen Ofisler',
      subtitle: 'Müsaitlik ve konuma göre',
      selectButton: 'Randevu seç',
      slotsAvailable: 'randevu mevcut',
      reasons: {
        earliest: 'En erken randevu',
        nearby: 'Yakınınızda',
        manySlots: 'Birden fazla randevu mevcut'
      }
    },
    allOffices: {
      title: 'İlçeye Göre Tüm Ofisler',
      officeCount: 'ofis',
      officesCount: 'ofis',
      selected: 'Seçildi',
      selectButton: 'Seç',
      available: 'randevu mevcut'
    },
    documents: {
      title: 'Gerekli Belgeler',
      subtitle: 'Lütfen aşağıdaki belgeleri getirin',
      preparation: 'Hazırlık',
      required: 'Gerekli',
      optional: 'İsteğe bağlı',
      tipLabel: 'İpucu:',
      tipText: 'Zaman kazanmak için kayıt formunu önceden indirin ve doldurun.',
      downloadForm: 'Kayıt Formunu İndirin',
      items: {
        id: 'Kimlik kartı veya pasaport',
        passport: 'Kimlik kartı veya pasaport',
        confirmation: 'Ev sahibi onayı',
        form: 'Doldurulmuş kayıt formu',
        powerOfAttorney: 'Vekaletname (geçerliyse)',
        certificates: 'Evlilik / doğum belgesi'
      },
      descriptions: {
        passportDesc: 'Güncel fotoğraflı',
        confirmationDesc: 'Ev sahibi tarafından imzalanmış',
        formDesc: 'Yerinde de doldurulabilir',
        powerOfAttorneyDesc: 'Üçüncü şahıs kaydı için',
        certificatesDesc: 'Aile kaydı için'
      }
    },
    timeLabels: {
      today: 'Bugün',
      tomorrow: 'Yarın',
      dayAfterTomorrow: 'Öbür gün'
    },
    languageSelector: {
      title: 'Dil Seç'
    },
    progressStepper: {
      inProgress: 'İşlemde',
      steps: {
        service: 'Hizmet Seç',
        office: 'Ofis Seç',
        details: 'Detayları Girin',
        confirmation: 'Onaylayın'
      }
    },
    demo: {
      triggerError: 'Demo: Hata Tetikle',
      detailsTitle: 'Detayları Girin',
      detailsDescription: 'Bu ekran detay formunu içerecektir.',
      continueButton: 'Onaya Devam Et',
      successTitle: 'Kayıt Başarılı!',
      successMessage: 'Kaydınız başarıyla tamamlandı.',
      continueToDetails: 'Detaylara Devam Et',
      selectOfficeFirst: 'Lütfen önce bir ofis seçin'
    },
    decisionHub: {
      appointmentTitle: 'Randevu Al',
      appointmentDescription: 'Bir vatandaşlık hizmet ofisi seçin ve kaydınızı gerçekleştirmek için bir randevu alın.',
      onlineTitle: 'Online Kayıt',
      onlineDescription: 'Kaydınızı tamamen çevrimiçi olarak tamamlayın – kişisel bir randevu gerekmez.',
      learnMore: 'Daha fazla bilgi edin',
      whatYouNeed: 'Neye ihtiyacınız var:'
    },
    notifications: {
      appointmentSelected: {
        title: 'Randevu Modu Seçildi',
        message: 'Lütfen bir vatandaşlık hizmet ofisi seçin'
      },
      onlineRegistration: {
        title: 'Online Kayıt',
        message: 'Bu özellik yakında kullanıma sunulacak'
      },
      officeSelected: {
        title: 'Ofis Seçildi',
        message: 'Artık randevu rezervasyonuna devam edebilirsiniz'
      },
      connectionError: {
        title: 'Bağlantı Hatası',
        message: 'İstek tamamlanamadı'
      },
      formSubmitted: {
        title: 'Form Gönderildi',
        message: 'Verileriniz kaydedildi'
      },
      reconnecting: {
        title: 'Yeniden bağlanıyor...',
        message: 'Lütfen bir dakika bekleyin'
      }
    },
    recoveryModal: {
      networkError: {
        headline: 'Bağlantı Kesildi',
        reasons: [
          'İnternet bağlantınız kesildi',
          'Sunucu geçici olarak kullanılamıyor'
        ]
      },
      primaryAction: 'Tekrar Dene',
      secondaryAction: 'Ana Sayfaya Git'
    },
    form: {
      personalInfo: {
        title: 'Kişisel Bilgiler',
        firstName: 'Ad',
        lastName: 'Soyad',
        birthDate: 'Doğum Tarihi'
      },
      contact: {
        title: 'İletişim Bilgileri',
        email: 'E-posta'
      },
      submitButton: 'Gönder',
      requiredFields: 'Zorunlu Alanlar'
    },
    appointment: {
      selectedOffice: 'Seçilen Ofis',
      selectDateTime: 'Tarih ve Saat Seçin',
      date: 'Tarih',
      time: 'Saat',
      selectDate: 'Tarih Seçin',
      selectTime: 'Saat Seçin',
      personalInfo: 'Kişisel Bilgileriniz',
      phone: 'Telefon (isteğe bağlı)',
      confirmButton: 'Randevuyu Onaylayın',
      confirmationTitle: 'Randevu Başarıyla Rezerve Edildi!',
      confirmationMessage: 'Randevu onay bilgileriniz e-posta adresinize gönderildi.',
      appointmentDetails: 'Randevu Detayları',
      office: 'Ofis',
      dateTime: 'Tarih & Saat',
      documentsTitle: 'Bu Dokümanları Getirin',
      documentsMessage: 'Lütfen randevunuz için tüm gerekli belgeleri getirin.',
      downloadConfirmation: 'Onaylamayı İndirin',
      printConfirmation: 'Onaylamayı Yazdırın',
      backToHome: 'Anasayfaya Geri Dön'
    },
    onlineRegistration: {
      title: 'Online Kayıt',
      subtitle: 'Lütfen aşağıdaki bilgileri doldurun',
      birthPlace: 'Doğum Yeri',
      nationality: 'Uyruk',
      previousAddress: 'Önceki Adres',
      newAddress: 'Yeni Adres',
      street: 'Sokak',
      houseNumber: 'Bina No',
      postalCode: 'Posta Kodu',
      city: 'Şehir',
      moveInDate: 'Giriş Tarihi',
      uploadDocuments: 'Belgeleri Yükle',
      uploadFile: 'Dosya Yükle',
      uploaded: 'Yüklendi',
      submitRegistration: 'Kaydı Tamamla',
      confirmationTitle: 'Kayıt Başarılı!',
      confirmationMessage: 'Kaydınız başarıyla tamamlandı.',
      referenceNumber: 'Referans Numarası',
      processingTime: 'İşleme Süresi',
      processingDays: 'Gün',
      nextSteps: 'Sonraki Adımlar',
      nextStepsMessage: 'E-posta ile bir onay alacaksınız.'
    },
    support: {
      title: 'Yardım',
      subtitle: 'Destek için bize ulaşın',
      contactInfo: 'İletişim Bilgileri',
      phone: 'Telefon',
      phoneHours: 'Telefon Saatleri',
      email: 'E-posta',
      emailResponse: 'E-posta Yanıtı',
      officeHours: 'Ofis Saatleri',
      mondayFriday: 'Pazartesi-Cuma',
      saturday: 'Cumartesi',
      address: 'Adres',
      faq: 'SSS',
      faqDescription: 'Sık Sorulan Sorular',
      viewFAQ: 'SSS\'yi Görüntüle',
      sendMessage: 'Mesaj Gönder',
      yourName: 'Adınız',
      yourEmail: 'E-posta Adresiniz',
      subject: 'Konu',
      selectSubject: 'Konu Seçin',
      subjectAppointment: 'Randevu',
      subjectRegistration: 'Kayıt',
      subjectDocuments: 'Belgeler',
      subjectTechnical: 'Teknik Destek',
      subjectOther: 'Diğer',
      message: 'Mesaj',
      submitMessage: 'Mesaj Gönder',
      messageSent: 'Mesaj Gönderildi',
      messageResponse: 'Yanıt Alındı',
      needHelp: 'Yardıma İhtiyacınız Var'
    },
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidDate: 'Please enter a valid date',
      uploadFailed: 'File upload failed',
      networkError: 'Network error',
      sessionExpired: 'Session expired',
      tryAgain: 'Try again',
      contactSupport: 'Contact support',
      possibleCauses: 'Possible causes:'
    },
    officeCard: {
      nextAvailable: 'Next Available',
      slots: 'slots available',
      distance: 'Distance',
      selectButton: 'Select',
      noAppointments: 'No appointments available',
      fullyBooked: 'Fully booked'
    }
  },
  ar: {
    header: {
      location: 'برلين',
      taskTitle: 'تسجيل العنوان',
      stepTitle: 'اختر مكتب خدمات المواطنين',
      stepSubtitle: 'الخطوة 1 من 3: اختر موقعًا لموعدك',
      searchPlaceholder: 'بحث...',
      services: 'الخدمات'
    },
    smartSuggestions: {
      title: 'المكاتب الموصى بها',
      subtitle: 'بناءً على التوفر والموقع',
      selectButton: 'اختر الموعد',
      slotsAvailable: 'مواعيد متاحة',
      reasons: {
        earliest: 'أقر موعد متاح',
        nearby: 'بالقرب منك',
        manySlots: 'مواعيد متعددة متاحة'
      }
    },
    allOffices: {
      title: 'جميع المكاتب حسب المنطقة',
      officeCount: 'مكتب',
      officesCount: 'مكاتب',
      selected: 'محدد',
      selectButton: 'اختر',
      available: 'مواعيد متاحة'
    },
    documents: {
      title: 'المستندات المطلوبة',
      subtitle: 'يرجى إحضار المستندات التالية',
      preparation: 'التحضير',
      required: 'مطلوب',
      optional: 'اختياري',
      tipLabel: 'نصيحة:',
      tipText: 'قم بتنزيل نموذج التسجيل مسبقًا واملأه لتوفير الوقت.',
      downloadForm: 'تحميل نموذج التسجيل',
      items: {
        id: 'بطاقة الهوية أو جواز السفر',
        passport: 'بطاقة الهوية أو جواز السفر',
        confirmation: 'تأكيد المالك',
        form: 'نموذج التسجيل المكتمل',
        powerOfAttorney: 'توكيل (إن وجد)',
        certificates: 'شهادة زواج / ميلاد'
      },
      descriptions: {
        passportDesc: 'مع صورة حديثة',
        confirmationDesc: 'موقع من المالك',
        formDesc: 'يمكن ملؤه في الموقع أيضًا',
        powerOfAttorneyDesc: 'للتسجيل من قبل طرف ثالث',
        certificatesDesc: 'لتسجيل العائلة'
      }
    },
    timeLabels: {
      today: 'اليوم',
      tomorrow: 'غدًا',
      dayAfterTomorrow: 'بعد غد'
    },
    languageSelector: {
      title: 'اختر اللغة'
    },
    progressStepper: {
      inProgress: 'قيد التن��يذ',
      steps: {
        service: 'اختر الخدمة',
        office: 'اختر المكتب',
        details: 'أدخل التفاصيل',
        confirmation: 'تأكيد'
      }
    },
    demo: {
      triggerError: 'تجريبي: تشغيل خطأ',
      detailsTitle: 'أدخل التفاصيل',
      detailsDescription: 'ستحتوي هذه الشاشة على نموذج التفاصيل.',
      continueButton: 'المتابعة إلى التأكيد',
      successTitle: 'نجح التسجيل!',
      successMessage: 'تم إكمال تسجيلك بنجاح.',
      continueToDetails: 'المتابعة إلى التفاصيل',
      selectOfficeFirst: 'يرجى تحديد مكتب أولاً'
    },
    decisionHub: {
      appointmentTitle: 'حجز موعد',
      appointmentDescription: 'اختر مكتب خدمات المواطنين واحجز موعدًا شخصيًا لتسجيلك.',
      onlineTitle: 'التسجيل عبر الإنترنت',
      onlineDescription: 'أكمل تسجيلك تمامًا عبر الإنترنت – لا تحتاج إلى موعد شخصي.',
      learnMore: 'المزيد من المعلومات',
      whatYouNeed: 'ما تحتاجه:'
    },
    notifications: {
      appointmentSelected: {
        title: 'تم اختيار الموعد',
        message: 'لقد اخترت موعدًا.'
      },
      onlineRegistration: {
        title: 'تسجيل عبر الإنترنت',
        message: 'لقد قمت بالتسجيل عبر الإنترنت.'
      },
      officeSelected: {
        title: 'تم اختيار المكتب',
        message: 'لقد اخترت مكتبًا.'
      },
      connectionError: {
        title: 'خطأ في الاتصال',
        message: 'حدث خطأ في الاتصال.'
      },
      formSubmitted: {
        title: 'تم إرسال النموذج',
        message: 'تم إرسال النموذج بنجاح.'
      },
      reconnecting: {
        title: 'إعادة الاتصال',
        message: 'إعادة الاتصال...'
      }
    },
    recoveryModal: {
      networkError: {
        headline: 'خطأ في الشبكة',
        reasons: [
          'تحقق من اتصالك بالإنترنت.',
          'حاول مرة أخرى لاحقًا.',
          'اتصل بالدعم.'
        ]
      },
      primaryAction: 'إعادة المحاولة',
      secondaryAction: 'إلغاء'
    },
    form: {
      personalInfo: {
        title: 'المعلومات الشخصية',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        birthDate: 'تاريخ الميلاد'
      },
      contact: {
        title: 'معلمات الاتصال',
        email: 'البريد الإلكتروني'
      },
      submitButton: 'إرسال',
      requiredFields: 'الحقول المطلوبة'
    },
    appointment: {
      selectedOffice: 'المكتب المختار',
      selectDateTime: 'اختر التاريخ والوقت',
      date: 'التاريخ',
      time: 'الوقت',
      selectDate: 'اختر التاريخ',
      selectTime: 'اختر الوقت',
      personalInfo: 'معلومات الاتصال الخاصة بك',
      phone: 'الهاتف (اختياري)',
      confirmButton: 'تأكيد الموعد',
      confirmationTitle: 'تم حجز الموعد بنجاح!',
      confirmationMessage: 'تم إرسال تأكيد الموعد إلى عنوان بريدك الإلكتروني.',
      appointmentDetails: 'تفاصيل الموعد',
      office: 'المكتب',
      dateTime: 'التاريخ & الوقت',
      documentsTitle: 'جلب هذه المستندات',
      documentsMessage: 'يرجى جلب جميع المستندات المطلوبة إلى موعدك.',
      downloadConfirmation: 'تحميل التأكيد',
      printConfirmation: 'طباعة التأكيد',
      backToHome: 'العودة إلى الصفحة الرئيسية'
    },
    onlineRegistration: {
      title: 'تسجيل عبر الإنترنت',
      subtitle: 'يرجى ملء المعلومات التالية',
      birthPlace: 'مكان الولادة',
      nationality: 'الجنسية',
      previousAddress: 'العنوان السابق',
      newAddress: 'العنوان الجديد',
      street: 'الشارع',
      houseNumber: 'رقم المنزل',
      postalCode: 'الرمز البريدي',
      city: 'المدينة',
      moveInDate: 'تاريخ الدخول',
      uploadDocuments: 'تحميل المستندات',
      uploadFile: 'تحميل الملف',
      uploaded: 'تم التحميل',
      submitRegistration: 'تقديم التسجيل',
      confirmationTitle: 'التسجيل ناجح!',
      confirmationMessage: 'تم إكمال تسجيلك بنجاح.',
      referenceNumber: 'رقم المرجع',
      processingTime: 'وقت المعالجة',
      processingDays: 'يوم',
      nextSteps: 'الخطوات التالية',
      nextStepsMessage: 'سيتلقى رسالة بريد إلكتروني تأكيدية.'
    },
    support: {
      title: 'الدعم',
      subtitle: 'اتصل بنا للحصول على المساعدة',
      contactInfo: 'معلومات الاتصال',
      phone: 'الهاتف',
      phoneHours: 'ساعات الهاتف',
      email: 'البريد الإلكتروني',
      emailResponse: 'استجابة البريد الإلكتروني',
      officeHours: 'ساعات العمل',
      mondayFriday: 'من الاثنين إلى الجمعة',
      saturday: 'السبت',
      address: 'العنوان',
      faq: 'أسئلة شائعة',
      faqDescription: 'أسئلة شائعة',
      viewFAQ: 'عرض أسئلة شائعة',
      sendMessage: 'إرسال رسالة',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      selectSubject: 'اختر الموضوع',
      subjectAppointment: 'الموعد',
      subjectRegistration: 'التسجيل',
      subjectDocuments: 'الوثائق',
      subjectTechnical: 'الدعم الفني',
      subjectOther: 'آخر',
      message: 'الرسالة',
      submitMessage: 'إرسال الرسالة',
      messageSent: 'تم إرسال الرسالة',
      messageResponse: 'تم استلام الرسالة',
      needHelp: 'تحتاج إلى مساعدة'
    },
    errors: {
      required: 'هذا الحقل مطلوب',
      invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
      invalidDate: 'يرجى إدخال تاريخ صالح',
      uploadFailed: 'فشل تحميل الملف',
      networkError: 'خطأ في الشبكة',
      sessionExpired: 'انتهت الجلسة',
      tryAgain: 'حاول مرة أخرى',
      contactSupport: 'اتصل بالدعم',
      possibleCauses: 'الأسباب المحتملة:'
    },
    officeCard: {
      nextAvailable: 'التالي المتاح',
      slots: 'مواعيد متاحة',
      distance: 'المسافة',
      selectButton: 'اختر',
      noAppointments: 'لا توجد مواعيد متاحة',
      fullyBooked: 'محجوز تمامًا'
    }
  },
  pl: {
    header: {
      location: 'Berlin',
      taskTitle: 'Rejestracja adresu',
      stepTitle: 'Wybierz urząd dla obywateli',
      stepSubtitle: 'Krok 1 z 3: Wybierz lokalizację dla swojego spotkania',
      searchPlaceholder: 'Szukaj...',
      services: 'Usługi'
    },
    smartSuggestions: {
      title: 'Polecane urzędy',
      subtitle: 'Na podstawie dostępności i lokalizacji',
      selectButton: 'Wybierz termin',
      slotsAvailable: 'wolne terminy',
      reasons: {
        earliest: 'Najbliższy dostępny termin',
        nearby: 'W pobliżu',
        manySlots: 'Wiele dostępnych terminów'
      }
    },
    allOffices: {
      title: 'Wszystkie urzędy według dzielnicy',
      officeCount: 'urząd',
      officesCount: 'urzędy',
      selected: 'Wybrano',
      selectButton: 'Wybierz',
      available: 'wolne terminy'
    },
    documents: {
      title: 'Wymagane dokumenty',
      subtitle: 'Prosimy przynieść następujące dokumenty',
      preparation: 'Przygotowanie',
      required: 'Wymagane',
      optional: 'Opcjonalne',
      tipLabel: 'Wskazówka:',
      tipText: 'Pobierz formularz rejestracyjny wcześniej i wypełnij go, aby zaoszczędzić czas.',
      downloadForm: 'Pobierz Formularz Rejestracyjny',
      items: {
        id: 'Dowód osobisty lub paszport',
        passport: 'Dowód osobisty lub paszport',
        confirmation: 'Potwierdzenie wynajmującego',
        form: 'Wypełniony formularz rejestracyjny',
        powerOfAttorney: 'Pełnomocnictwo (jeśli dotyczy)',
        certificates: 'Akt małżeństwa / urodzenia'
      },
      descriptions: {
        passportDesc: 'Z aktualnym zdjęciem',
        confirmationDesc: 'Podpisane przez wynajmującego',
        formDesc: 'Można również wypełnić na miejscu',
        powerOfAttorneyDesc: 'Do rejestracji przez osobę trzecią',
        certificatesDesc: 'Do rejestracji rodzinnej'
      }
    },
    timeLabels: {
      today: 'Dziś',
      tomorrow: 'Jutro',
      dayAfterTomorrow: 'Pojutrze'
    },
    languageSelector: {
      title: 'Wybierz język'
    },
    progressStepper: {
      inProgress: 'W toku',
      steps: {
        service: 'Wybierz usługę',
        office: 'Wybierz urząd',
        details: 'Wprowadź szczegóły',
        confirmation: 'Potwierdzenie'
      }
    },
    demo: {
      triggerError: 'Demo: Wywołaj błąd',
      detailsTitle: 'Wprowadź szczegóły',
      detailsDescription: 'Ten ekran będzie zawierał formularz szczegółów.',
      continueButton: 'Przejdź do potwierdzenia',
      successTitle: 'Rejestracja udana!',
      successMessage: 'Twoja rejestracja została pomyślnie zakończona.',
      continueToDetails: 'Przejdź do szczegółów',
      selectOfficeFirst: 'Najpierw wybierz urząd'
    },
    decisionHub: {
      appointmentTitle: 'Zarezerwuj spotkanie',
      appointmentDescription: 'Wybierz urząd dla obywateli i zarezerwuj osobiste spotkanie na rejestrację.',
      onlineTitle: 'Rejestracja online',
      onlineDescription: 'Ukończ rejestrację całkowicie online – nie jest wymagane osobiste spotkanie.',
      learnMore: 'Dowiedz się więcej',
      whatYouNeed: 'Co potrzebujesz:'
    },
    notifications: {
      appointmentSelected: {
        title: 'Wybrano spotkanie',
        message: 'Wybrałeś spotkanie.'
      },
      onlineRegistration: {
        title: 'Rejestracja online',
        message: 'Zarejestrowałeś się online.'
      },
      officeSelected: {
        title: 'Wybrano urząd',
        message: 'Wybrałeś urząd.'
      },
      connectionError: {
        title: 'Błąd połączenia',
        message: 'Wystąpił błąd połączenia.'
      },
      formSubmitted: {
        title: 'Formularz wysłany',
        message: 'Formularz został pomyślnie wysłany.'
      },
      reconnecting: {
        title: 'Ponowne łączenie',
        message: 'Ponowne łączenie...'
      }
    },
    recoveryModal: {
      networkError: {
        headline: 'Błąd sieci',
        reasons: [
          'Sprawdź swoje połączenie internetowe.',
          'Spróbuj ponownie później.',
          'Skontaktuj się z wsparciem.'
        ]
      },
      primaryAction: 'Spróbuj ponownie',
      secondaryAction: 'Anuluj'
    },
    form: {
      personalInfo: {
        title: 'Informacje osobiste',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        birthDate: 'Data urodzenia'
      },
      contact: {
        title: 'Informacje kontaktowe',
        email: 'E-mail'
      },
      submitButton: 'Wyślij',
      requiredFields: 'Pola wymagane'
    },
    appointment: {
      selectedOffice: 'Wybrane urząd',
      selectDateTime: 'Wybierz datę i godzinę',
      date: 'Data',
      time: 'Godzina',
      selectDate: 'Wybierz datę',
      selectTime: 'Wybierz godzinę',
      personalInfo: 'Twoje dane kontaktowe',
      phone: 'Telefon (opcjonalnie)',
      confirmButton: 'Potwierdź termin',
      confirmationTitle: 'Termin został pomyślnie zarezerwowany!',
      confirmationMessage: 'Potwierdzenie terminu zostało wysłane na Twój adres e-mail.',
      appointmentDetails: 'Szczegóły terminu',
      office: 'Urząd',
      dateTime: 'Data & godzina',
      documentsTitle: 'Przynieś te dokumenty',
      documentsMessage: 'Proszę przynieść wszystkie wymagane dokumenty na swój termin.',
      downloadConfirmation: 'Pobierz potwierdzenie',
      printConfirmation: 'Drukuj potwierdzenie',
      backToHome: 'Wróć do strony głównej'
    },
    onlineRegistration: {
      title: 'Rejestracja online',
      subtitle: 'Proszę wypenić następujące informacje',
      birthPlace: 'Miejsce urodzenia',
      nationality: 'Obywatelstwo',
      previousAddress: 'Poprzedni adres',
      newAddress: 'Nowy adres',
      street: 'Ulica',
      houseNumber: 'Numer domu',
      postalCode: 'Kod pocztowy',
      city: 'Miasto',
      moveInDate: 'Data wejścia',
      uploadDocuments: 'Prześlij dokumenty',
      uploadFile: 'Prześlij plik',
      uploaded: 'Przesłano',
      submitRegistration: 'Zatwierdź rejestrację',
      confirmationTitle: 'Rejestracja udana!',
      confirmationMessage: 'Twoja rejestracja została pomyślnie zakończona.',
      referenceNumber: 'Numer referencyjny',
      processingTime: 'Czas przetwarzania',
      processingDays: 'Dni',
      nextSteps: 'Następne kroki',
      nextStepsMessage: 'Otrzymasz potwierdzenie e-mail.'
    },
    support: {
      title: 'Wsparcie',
      subtitle: 'Skontaktuj się z nami, aby uzyskać pomoc',
      contactInfo: 'Informacje kontaktowe',
      phone: 'Telefon',
      phoneHours: 'Godziny telefonu',
      email: 'E-mail',
      emailResponse: 'Odpowiedź e-mail',
      officeHours: 'Godziny pracy',
      mondayFriday: 'Poniedziałek-Piątek',
      saturday: 'Sobota',
      address: 'Adres',
      faq: 'FAQ',
      faqDescription: 'Często zadawane pytania',
      viewFAQ: 'Zobacz FAQ',
      sendMessage: 'Wyślij wiadomość',
      yourName: 'Twoje imię',
      yourEmail: 'Twój e-mail',
      subject: 'Temat',
      selectSubject: 'Wybierz temat',
      subjectAppointment: 'Spotkanie',
      subjectRegistration: 'Rejestracja',
      subjectDocuments: 'Dokumenty',
      subjectTechnical: 'Wsparcie techniczne',
      subjectOther: 'Inne',
      message: 'Wiadomość',
      submitMessage: 'Wyślij wiadomość',
      messageSent: 'Wiadomość wysłana',
      messageResponse: 'Odpowiedź otrzymana',
      needHelp: 'Potrzebujesz pomocy'
    },
    errors: {
      required: 'To pole jest wymagane',
      invalidEmail: 'Proszę wprowadzić prawidłowy adres e-mail',
      invalidDate: 'Proszę wprowadzić prawidłową datę',
      uploadFailed: 'Przesyłanie pliku nie powiodło się',
      networkError: 'Błąd sieci',
      sessionExpired: 'Sesja wygasła',
      tryAgain: 'Spróbuj ponownie',
      contactSupport: 'Skontaktuj się z wsparciem',
      possibleCauses: 'Możliwe przyczyny:'
    },
    officeCard: {
      nextAvailable: 'Następny dostępny',
      slots: 'terminy dostępne',
      distance: 'Odległość',
      selectButton: 'Wybierz',
      noAppointments: 'Brak dostępnych terminów',
      fullyBooked: 'Pełnie zarezerwowane'
    }
  },
  fr: {
    header: {
      location: 'Berlin',
      taskTitle: 'Enregistrement d\'adresse',
      stepTitle: 'Sélectionner un bureau des services aux citoyens',
      stepSubtitle: 'Étape 1 sur 3: Choisissez un lieu pour votre rendez-vous',
      searchPlaceholder: 'Rechercher...',
      services: 'Services'
    },
    smartSuggestions: {
      title: 'Bureaux recommandés',
      subtitle: 'Basé sur la disponibilité et l\'emplacement',
      selectButton: 'Sélectionner le rendez-vous',
      slotsAvailable: 'créneaux disponibles',
      reasons: {
        earliest: 'Prochain rendez-vous disponible',
        nearby: 'Près de vous',
        manySlots: 'Plusieurs rendez-vous disponibles'
      }
    },
    allOffices: {
      title: 'Tous les bureaux par quartier',
      officeCount: 'bureau',
      officesCount: 'bureaux',
      selected: 'Sélectionné',
      selectButton: 'Sélectionner',
      available: 'rendez-vous disponibles'
    },
    documents: {
      title: 'Documents requis',
      subtitle: 'Veuillez apporter les documents suivants',
      preparation: 'Préparation',
      required: 'Requis',
      optional: 'Optionnel',
      tipLabel: 'Conseil:',
      tipText: 'Téléchargez le formulaire d\'inscription à l\'avance et remplissez-le pour gagner du temps.',
      downloadForm: 'Télécharger le formulaire d\'inscription',
      items: {
        id: 'Carte d\'identité ou passeport',
        passport: 'Carte d\'identité ou passeport',
        confirmation: 'Confirmation du propriétaire',
        form: 'Formulaire d\'inscription rempli',
        powerOfAttorney: 'Procuration (le cas échéant)',
        certificates: 'Acte de mariage / naissance'
      },
      descriptions: {
        passportDesc: 'Avec photo récente',
        confirmationDesc: 'Signé par le propriétaire',
        formDesc: 'Peut également être rempli sur place',
        powerOfAttorneyDesc: 'Pour l\'inscription par un tiers',
        certificatesDesc: 'Pour l\'inscription familiale'
      }
    },
    timeLabels: {
      today: 'Aujourd\'hui',
      tomorrow: 'Demain',
      dayAfterTomorrow: 'Après-demain'
    },
    languageSelector: {
      title: 'Sélectionner la langue'
    },
    progressStepper: {
      inProgress: 'En cours',
      steps: {
        service: 'Choisir le service',
        office: 'Sélectionner le bureau',
        details: 'Entrer les détails',
        confirmation: 'Confirmation'
      }
    },
    demo: {
      triggerError: 'Démo: Déclencher une erreur',
      detailsTitle: 'Entrer les détails',
      detailsDescription: 'Cet écran contiendrait le formulaire de détails.',
      continueButton: 'Continuer vers la confirmation',
      successTitle: 'Enregistrement réussi!',
      successMessage: 'Votre enregistrement a été complété avec succès.',
      continueToDetails: 'Continuer vers les détails',
      selectOfficeFirst: 'Veuillez d\'abord sélectionner un bureau'
    },
    decisionHub: {
      appointmentTitle: 'Réserver un rendez-vous',
      appointmentDescription: 'Choisissez un bureau des services aux citoyens et réservez un rendez-vous en personne pour votre enregistrement.',
      onlineTitle: 'Enregistrement en ligne',
      onlineDescription: 'Complétez votre enregistrement entièrement en ligne – aucun rendez-vous en personne n\'est nécessaire.',
      learnMore: 'En savoir plus',
      whatYouNeed: 'Ce dont vous avez besoin:'
    },
    notifications: {
      appointmentSelected: {
        title: 'Rendez-vous sélectionné',
        message: 'Vous avez sélectionné un rendez-vous.'
      },
      onlineRegistration: {
        title: 'Inscription en ligne',
        message: 'Vous avez effectué une inscription en ligne.'
      },
      officeSelected: {
        title: 'Bureau sélectionné',
        message: 'Vous avez sélectionné un bureau.'
      },
      connectionError: {
        title: 'Erreur de connexion',
        message: 'Une erreur de connexion s\'est produite.'
      },
      formSubmitted: {
        title: 'Formulaire soumis',
        message: 'Le formulaire a été soumis avec succès.'
      },
      reconnecting: {
        title: 'Reconnexion',
        message: 'Reconnexion...'
      }
    },
    recoveryModal: {
      networkError: {
        headline: 'Erreur réseau',
        reasons: [
          'Vérifiez votre connexion internet.',
          'Réessayez plus tard.',
          'Contactez le support.'
        ]
      },
      primaryAction: 'Réessayer',
      secondaryAction: 'Annuler'
    },
    form: {
      personalInfo: {
        title: 'Informations personnelles',
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        birthDate: 'Date de naissance'
      },
      contact: {
        title: 'Informations de contact',
        email: 'Email'
      },
      submitButton: 'Soumettre',
      requiredFields: 'Champs requis'
    },
    appointment: {
      selectedOffice: 'Bureau sélectionné',
      selectDateTime: 'Sélectionner la date et l\'heure',
      date: 'Date',
      time: 'Heure',
      selectDate: 'Sélectionner la date',
      selectTime: 'Sélectionner l\'heure',
      personalInfo: 'Vos informations de contact',
      phone: 'Téléphone (optionnel)',
      confirmButton: 'Confirmer le rendez-vous',
      confirmationTitle: 'Rendez-vous réservé avec succès!',
      confirmationMessage: 'Votre confirmation de rendez-vous a été envoyée à votre adresse e-mail.',
      appointmentDetails: 'Détails du rendez-vous',
      office: 'Bureau',
      dateTime: 'Date & heure',
      documentsTitle: 'Apportez ces documents',
      documentsMessage: 'Veuillez apporter tous les documents requis à votre rendez-vous.',
      downloadConfirmation: 'Télécharger la confirmation',
      printConfirmation: 'Imprimer la confirmation',
      backToHome: 'Retour à la page d\'accueil'
    },
    onlineRegistration: {
      title: 'Inscription en ligne',
      subtitle: 'Veuillez remplir les informations suivantes',
      birthPlace: 'Lieu de naissance',
      nationality: 'Nationalité',
      previousAddress: 'Ancienne adresse',
      newAddress: 'Nouvelle adresse',
      street: 'Rue',
      houseNumber: 'Numéro de maison',
      postalCode: 'Code postal',
      city: 'Ville',
      moveInDate: 'Date d\'entrée',
      uploadDocuments: 'Télécharger des documents',
      uploadFile: 'Télécharger un fichier',
      uploaded: 'Téléchargé',
      submitRegistration: 'Soumettre l\'inscription',
      confirmationTitle: 'Inscription réussie!',
      confirmationMessage: 'Votre inscription a été complétée avec succès.',
      referenceNumber: 'Numéro de référence',
      processingTime: 'Temps de traitement',
      processingDays: 'Jours',
      nextSteps: 'Étapes suivantes',
      nextStepsMessage: 'Vous recevrez un e-mail de confirmation.'
    },
    support: {
      title: 'Support',
      subtitle: 'Contactez-nous pour obtenir de l\'aide',
      contactInfo: 'Informations de contact',
      phone: 'Téléphone',
      phoneHours: 'Heures de téléphone',
      email: 'Email',
      emailResponse: 'Réponse par email',
      officeHours: 'Heures de bureau',
      mondayFriday: 'Lundi-Vendredi',
      saturday: 'Samedi',
      address: 'Adresse',
      faq: 'FAQ',
      faqDescription: 'Questions fréquemment posées',
      viewFAQ: 'Voir les FAQ',
      sendMessage: 'Envoyer un message',
      yourName: 'Votre nom',
      yourEmail: 'Votre email',
      subject: 'Sujet',
      selectSubject: 'Sélectionner un sujet',
      subjectAppointment: 'Rendez-vous',
      subjectRegistration: 'Inscription',
      subjectDocuments: 'Documents',
      subjectTechnical: 'Support technique',
      subjectOther: 'Autre',
      message: 'Message',
      submitMessage: 'Envoyer le message',
      messageSent: 'Message envoyé',
      messageResponse: 'Réponse reçue',
      needHelp: 'Besoin d\'aide'
    },
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidDate: 'Please enter a valid date',
      uploadFailed: 'File upload failed',
      networkError: 'Network error',
      sessionExpired: 'Session expired',
      tryAgain: 'Try again',
      contactSupport: 'Contact support',
      possibleCauses: 'Possible causes:'
    },
    officeCard: {
      nextAvailable: 'Next Available',
      slots: 'slots available',
      distance: 'Distance',
      selectButton: 'Select',
      noAppointments: 'No appointments available',
      fullyBooked: 'Fully booked'
    }
  }
};

export const languageNames: Record<Language, { native: string; flag: string }> = {
  de: { native: 'Deutsch', flag: '🇩🇪' },
  en: { native: 'English', flag: '🇬🇧' },
  tr: { native: 'Türkçe', flag: '🇹🇷' },
  ar: { native: 'العربية', flag: '🇸🇦' },
  pl: { native: 'Polski', flag: '🇵🇱' },
  fr: { native: 'Français', flag: '🇫🇷' }
};