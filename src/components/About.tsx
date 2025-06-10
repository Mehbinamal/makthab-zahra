
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 bg-ivory-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-5xl font-bold text-navy-900 leading-tight">
                {t.aboutTitle}
              </h2>
              <div className="w-24 h-1 bg-gold-500 rounded-full"></div>
            </div>
            
            <p className="font-lato text-lg text-warmGray-600 leading-relaxed">
              {t.aboutText}
            </p>
            
            <p className="font-lato text-lg text-warmGray-600 leading-relaxed">
              {t.aboutMission}
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 pt-6">
              {[
                'Personalized approach to every client relationship',
                'Streamlined processes for maximum efficiency',
                'Commitment to excellence in every detail',
                'Trusted expertise across multiple service areas'
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="font-lato text-warmGray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-gold-100 to-ivory-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-navy-800 rounded-full mx-auto flex items-center justify-center">
                    <span className="font-playfair text-2xl font-bold text-ivory-50">MZ</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-playfair text-2xl font-bold text-navy-900">Our Promise</h3>
                    <p className="font-lato text-warmGray-600 text-sm leading-relaxed">
                      Every interaction, every service, every solution is crafted with 
                      the care and attention your success deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-navy-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
