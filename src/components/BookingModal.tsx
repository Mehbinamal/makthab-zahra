
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

interface BookingModalProps {
  serviceName: string;
  children: React.ReactNode;
}

const BookingModal = ({ serviceName, children }: BookingModalProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      toast({
        title: t.fillRequired,
        description: t.requiredFields,
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: t.bookingSuccess,
      description: t.bookingSuccessDesc
    });
    
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl border-0">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="font-playfair text-2xl font-bold text-navy-900">
            {t.bookingTitle} {serviceName}
          </DialogTitle>
          <p className="font-lato text-warmGray-600 mt-2">
            {t.bookingSubtitle}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-warmGray-400" />
              <Input
                name="name"
                placeholder={`${t.name} *`}
                value={formData.name}
                onChange={handleInputChange}
                className="pl-11 py-3 border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 transition-all"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-warmGray-400" />
              <Input
                name="email"
                type="email"
                placeholder={`${t.email} *`}
                value={formData.email}
                onChange={handleInputChange}
                className="pl-11 py-3 border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 transition-all"
              />
            </div>
            
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-warmGray-400" />
              <Input
                name="phone"
                placeholder={`${t.phone} *`}
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-11 py-3 border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 transition-all"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-warmGray-400" />
                <Input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="pl-11 py-3 border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 transition-all"
                />
              </div>
              
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-warmGray-400" />
                <Input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="pl-11 py-3 border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 transition-all"
                />
              </div>
            </div>
            
            <Textarea
              name="message"
              placeholder={t.additionalNotes}
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="py-3 border-warmGray-200 rounded-xl focus:ring-2 focus:ring-gold-400 transition-all resize-none"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-navy-800 hover:bg-navy-900 text-ivory-50 font-lato font-medium py-4 rounded-xl
                      shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                      border-2 border-transparent hover:border-gold-400"
          >
            {t.scheduleConsultation}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
