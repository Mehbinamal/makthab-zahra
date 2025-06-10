import { Building2, Scale, Calculator, TrendingUp, Code, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import BookingModal from './BookingModal';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Building2,
      title: t.generalServices,
      description: t.generalDesc,
      color: 'from-gold-100 to-gold-200',
      details: [
        t.accountsTransfer,
        t.visaServices,
        t.chamberAttestation,
        t.tradeLicense,
        t.qiwaRegistration,
        t.insurance,
        t.bankAccount,
        t.drivingLicense,
        t.tickets,
        t.absher,
        t.vehicleTransfer
      ]
    },
    {
      icon: Scale,
      title: t.legalServices,
      description: t.legalDesc,
      color: 'from-navy-100 to-navy-200',
      details: [
        t.legalConsultation,
        t.laborCases,
        t.agreementPrep,
        t.onlineCourt,
        t.travelBanRemoval,
        t.advocateServices,
        t.corporateLaw,
        t.contractPrep
      ]
    },
    {
      icon: Calculator,
      title: t.accountingServices,
      description: t.accountingDesc,
      color: 'from-warmGray-100 to-warmGray-200',
      details: [
        t.accountsSetup,
        t.softwareSetup,
        t.vatRegistration,
        t.internalReporting,
        t.accountantTraining
      ]
    },
    {
      icon: TrendingUp,
      title: t.investmentServices,
      description: t.investmentDesc,
      color: 'from-ivory-200 to-ivory-300',
      details: [
        t.misaLicense,
        t.investorLicense,
        t.companyFormation,
        t.companyLawUpdates
      ]
    },
    {
      icon: Code,
      title: t.webDevelopment,
      description: t.webDesc,
      color: 'from-gold-200 to-navy-100',
      details: [
        t.webSolutions
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl font-bold text-navy-900 mb-6">
            {t.servicesTitle}
          </h2>
          <div className="w-24 h-1 bg-gold-500 rounded-full mx-auto mb-6"></div>
          <p className="font-lato text-xl text-warmGray-600 max-w-3xl mx-auto leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                          border border-warmGray-100 hover:border-gold-300 transform hover:-translate-y-2
                          overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl flex items-center justify-center
                                   group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-ivory-50" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-4 group-hover:text-navy-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-lato text-warmGray-600 leading-relaxed group-hover:text-warmGray-700 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>

                  {/* Expandable Details */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`service-${index}`} className="border-none">
                      <AccordionTrigger className="font-lato font-medium text-navy-800 hover:text-gold-600 transition-colors duration-300 text-left py-3">
                        View Detailed Services
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-6">
                        <ul className="space-y-2 mb-6">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="font-lato text-sm text-warmGray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        
                        {/* Book Service Button */}
                        <BookingModal serviceName={service.title}>
                          <Button 
                            className="w-full bg-gold-600 hover:bg-gold-700 text-white font-lato font-medium py-3 rounded-xl
                                      shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                          >
                            {t.bookService}
                          </Button>
                        </BookingModal>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 
                                 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Book Service Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-ivory-100 to-gold-50 rounded-3xl p-12 shadow-xl border border-gold-200">
            <h3 className="font-playfair text-3xl font-bold text-navy-900 mb-4">
              {t.readyToStart}
            </h3>
            <p className="font-lato text-lg text-warmGray-600 mb-8 max-w-2xl mx-auto">
              {t.readyToStartDesc}
            </p>
            
            <BookingModal serviceName="General Consultation">
              <Button 
                size="lg"
                className="font-lato text-lg px-12 py-6 bg-navy-800 hover:bg-navy-900 text-ivory-50 rounded-full 
                          shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300
                          border-2 border-transparent hover:border-gold-400"
              >
                {t.scheduleConsultation}
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
