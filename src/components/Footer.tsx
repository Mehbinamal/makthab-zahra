
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-navy-900 text-ivory-50 transition-all duration-500">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              {language === 'ar' ? 'مكتب' : 'MaKtab'} <span className="text-gold-400">{language === 'ar' ? 'زهرة' : 'ZaHra'}</span>
            </h3>
            <p className="font-lato text-ivory-200 leading-relaxed mb-6 max-w-md">
              {language === 'ar' 
                ? 'نرتقي بالخدمات اليومية بأناقة. نحول العمليات المعقدة إلى تجارب سلسة، نقدم التميز في كل خدمة نوفرها.'
                : 'Elevating everyday services with elegance. We transform complex processes into seamless experiences, delivering excellence in every service we provide.'
              }
            </p>
            
            {/* Social Media */}
            <div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center 
                              hover:bg-gold-600 transition-colors duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-ivory-200 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold-400 mb-6">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {[
                { key: 'about', text: language === 'ar' ? 'من نحن' : 'About Us' },
                { key: 'services', text: language === 'ar' ? 'خدماتنا' : 'Services' },
                { key: 'contact', text: language === 'ar' ? 'تواصل معنا' : 'Contact' },
                { key: 'privacy', text: t.privacy },
                { key: 'terms', text: t.terms }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`font-lato text-ivory-200 hover:text-gold-400 transition-colors duration-300
                              hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transform inline-block`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold-400 mb-6">
              {t.services}
            </h4>
            <ul className="space-y-3">
              {[
                t.generalServices,
                t.legalServices,
                'VAT Filing',
                t.accountingServices,
                t.webDevelopment
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`font-lato text-ivory-200 hover:text-gold-400 transition-colors duration-300
                              hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transform inline-block`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-lato text-ivory-300 text-sm">
              {t.copyright}
            </p>
            <p className="font-lato text-ivory-300 text-sm">
              {language === 'ar' ? 'صُنع بأناقة ودقة' : 'Crafted with elegance and precision'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
