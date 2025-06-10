
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Hero = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-50 via-ivory-100 to-gold-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-navy-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-warmGray-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Sparkle Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Sparkles className="h-16 w-16 text-gold-500 animate-pulse" />
            <div className="absolute inset-0 h-16 w-16 text-gold-300 animate-ping opacity-20">
              <Sparkles className="h-16 w-16" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-navy-900 mb-6 animate-fade-in-up">
          {t.heroTitle}
        </h1>

        {/* Tagline */}
        <p className="font-playfair text-2xl md:text-3xl text-gold-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t.heroTagline}
        </p>

        {/* Subtitle */}
        <p className="font-lato text-lg md:text-xl text-warmGray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {t.heroSubtext}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToServices}
            className={`group relative bg-navy-800 hover:bg-navy-900 text-ivory-50 font-lato font-medium 
                      px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                      transition-all duration-300 border-2 border-transparent hover:border-gold-400
                      ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <span className="relative z-10 flex items-center gap-3">
              {!isRTL && <span>{t.heroCTA}</span>}
              <ArrowRight className={`h-5 w-5 transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} ${isRTL ? 'rotate-180' : ''}`} />
              {isRTL && <span>{t.heroCTA}</span>}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory-50 to-transparent" />
    </section>
  );
};

export default Hero;
