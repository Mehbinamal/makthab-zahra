
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-warmGray-200">
      <div className="flex items-center p-2">
        <Globe className="h-4 w-4 text-navy-600 mr-2" />
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'en'
                ? 'bg-navy-800 text-ivory-50 shadow-md'
                : 'text-navy-600 hover:text-gold-600 hover:bg-gold-50'
            }`}
          >
            EN
          </button>
          <div className="w-px h-4 bg-warmGray-300" />
          <button
            onClick={() => setLanguage('ar')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'ar'
                ? 'bg-navy-800 text-ivory-50 shadow-md'
                : 'text-navy-600 hover:text-gold-600 hover:bg-gold-50'
            }`}
          >
            AR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
