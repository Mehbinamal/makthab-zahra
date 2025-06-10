
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { isRTL } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-ivory-50 transition-all duration-500 ease-in-out ${isRTL ? 'font-arabic' : ''}`}>
      <LanguageSwitcher />
      <div className="transition-all duration-500 ease-in-out">
        <Hero />
        <About />
        <div id="services">
          <Services />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
