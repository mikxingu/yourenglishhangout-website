import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-conversation.jpg";

interface HeroProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    badge: "Conversação Real • 1:1 ao vivo",
    title: "Pare de estudar gramática.",
    titleHighlight: "Aprenda inglês conversando.",
    subtitle: "Chega de exercícios repetitivos e regrinhas decoradas. No Your English Hangout, você aprende falando sobre sua vida — do seu jeito, no seu ritmo.",
    cta: "Agendar Primeira Aula Grátis",
    secondary: "Como Funciona",
    note: "Não exige compromisso • Aula leve para destravar o inglês"
  },
  en: {
    badge: "Real Conversation • 1:1 Live",
    title: "Stop studying grammar.",
    titleHighlight: "Learn English by talking.",
    subtitle: "No more repetitive exercises and memorized rules. At Your English Hangout, you learn by talking about your life — your way, at your pace.",
    cta: "Schedule Free First Class",
    secondary: "How It Works",
    note: "No commitment • Light class to unlock your English"
  }
};

export const Hero = ({ language }: HeroProps) => {
  const t = content[language];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People having a conversation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-scale-in">
            {t.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.title}<br />
            <span className="text-primary">
              {t.titleHighlight}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gradient-hero border-0 hover:opacity-90 transition-opacity shadow-large group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                {t.secondary}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {t.note}
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
