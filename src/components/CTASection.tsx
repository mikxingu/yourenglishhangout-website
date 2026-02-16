import { Button } from "@/components/ui/button";
import { CalendarPlus, Mail } from "lucide-react";

interface CTASectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Pronto para destravar seu inglês?",
    subtitle: "Agende sua aula gratuita de 30 minutos e sinta como é aprender conversando — leve, natural e sem pressão.",
    whatsapp: "Agendar aula grátis",
    email: "Enviar Email",
    note: "Aula experimental grátis • Sem compromisso • Online via Google Meet"
  },
  en: {
    title: "Ready to unlock your English?",
    subtitle: "Schedule your free 30-minute class and feel what it's like to learn by talking — light, natural and pressure-free.",
    whatsapp: "Schedule free class",
    email: "Send Email",
    note: "Free trial class • No commitment • Online via Google Meet"
  }
};

export const CTASection = ({ language }: CTASectionProps) => {
  const t = content[language];
  
  const handleWhatsApp = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de agendar uma aula experimental gratuita.'
      : 'Hello! I would like to schedule a free trial class.';
    window.open(`https://calendar.app.google/o21o5LeN671Qvdhg7`, '_blank');
  };
  
  const handleEmail = () => {
    const subject = language === 'pt' 
      ? 'Aula Experimental Gratuita'
      : 'Free Trial Class';
    window.location.href = `mailto:michelalvs@gmail.com?subject=${encodeURIComponent(subject)}`;
  };
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="text-lg px-8 py-6 gradient-hero border-0 hover:opacity-90 transition-opacity shadow-large"
              >
                <CalendarPlus className="mr-2 h-5 w-5" />
                {t.whatsapp}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={handleEmail}
                className="text-lg px-8 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t.email}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
