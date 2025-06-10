
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.fillRequired,
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: t.messageSent,
      description: t.messageDesc
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-ivory-50 to-warmGray-50 transition-all duration-500">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl font-bold text-navy-900 mb-6">
            {t.contactTitle}
          </h2>
          <div className="w-24 h-1 bg-gold-500 rounded-full mx-auto mb-6"></div>
          <p className="font-lato text-xl text-warmGray-600 max-w-3xl mx-auto leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-navy-900 mb-8">
                Connect With Us
              </h3>
              <p className="font-lato text-lg text-warmGray-600 leading-relaxed mb-10">
                Whether you need immediate assistance or want to explore our services, 
                we're here to help you achieve your goals with precision and care.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-ivory-50" />
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-navy-900 mb-1">{t.emailLabel}</h4>
                  <p className="font-lato text-warmGray-600">info@example.com</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-ivory-50" />
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-navy-900 mb-1">{t.phoneLabel}</h4>
                  <p className="font-lato text-warmGray-600">+966 555 000 123</p>
                  <p className="font-lato text-warmGray-600">+966 512 345 678</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-ivory-50" />
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-navy-900 mb-1">{t.addressLabel}</h4>
                  <p className="font-lato text-warmGray-600">{t.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="font-playfair text-3xl font-bold text-navy-900 mb-8">
              {t.sendMessage}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-lato font-medium text-navy-900 mb-2">
                  {t.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                  placeholder={t.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-lato font-medium text-navy-900 mb-2">
                  {t.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                  placeholder={t.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-lato font-medium text-navy-900 mb-2">
                  {t.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t.message}
                />
              </div>

              <Button
                type="submit"
                className={`w-full bg-navy-800 hover:bg-navy-900 text-ivory-50 font-lato font-medium py-4 px-8 rounded-xl
                          shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                          border-2 border-transparent hover:border-gold-400 group ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t.sendMessage}
                <Send className={`${isRTL ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1'} h-5 w-5 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
