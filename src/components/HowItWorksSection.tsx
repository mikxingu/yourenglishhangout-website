import { Calendar, MessageCircle, CheckCircle } from "lucide-react";

interface HowItWorksSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Como Funciona",
    steps: [
      {
        icon: Calendar,
        title: "Agende a aula",
        description: "Sem compromisso"
      },
      {
        icon: MessageCircle,
        title: "Tenha uma conversa leve",
        description: "30 minutos"
      },
      {
        icon: CheckCircle,
        title: "Se gostar, marque quando quiser",
        description: "Total flexibilidade"
      }
    ]
  },
  en: {
    title: "How It Works",
    steps: [
      {
        icon: Calendar,
        title: "Schedule the class",
        description: "No commitment"
      },
      {
        icon: MessageCircle,
        title: "Have a light conversation",
        description: "30 minutes"
      },
      {
        icon: CheckCircle,
        title: "If you like it, book whenever",
        description: "Total flexibility"
      }
    ]
  }
};

export const HowItWorksSection = ({ language }: HowItWorksSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 px-4 gradient-section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
