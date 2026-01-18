import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../lib/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top Bar with Language Selector */}
        <div className="flex justify-between items-center mb-3">
          {/* Breadcrumb / Location */}
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{t.header.location}</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-gray-900">{t.header.taskTitle}</span>
          </div>
          
          {/* Language Selector */}
          <LanguageSelector />
        </div>
        
        {/* Task Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {t.header.stepTitle}
        </h1>
        <p className="text-gray-600 mt-1">
          {t.header.stepSubtitle}
        </p>
      </div>
    </header>
  );
}