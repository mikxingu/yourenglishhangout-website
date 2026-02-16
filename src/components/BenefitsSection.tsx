import { Smile, Target, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BenefitsSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Por que escolher o Your English Hangout?",
    benefits: [
      {
        icon: Smile,
        title: "Ambiente Descontraído",
        description: "Sem pressão, sem julgamentos. Aprenda em um espaço acolhedor onde errar faz parte do processo."
      },
      {
        icon: Target,
        title: "Foco no que Importa",
        description: "Aprenda inglês conversando sobre sua vida real: trabalho, viagens, hobbies, metas. Nada de temas repetitivos ou diálogos artificiais."
      },
      {
        icon: Zap,
        title: "Progresso Rápido",
        description: "Você fala desde o primeiro minuto. A fluência vem naturalmente, a cada encontro."
      },
      {
        icon: Users,
        title: "C2 Certified & Natural Fluency",
        description: "Aprenda com alguém que domina o idioma no nível C2 internacional, tem experiência real em viagens, trabalho e carreira — e entende as dificuldades emocionais de quem está aprendendo."
      }
    ]
  },
  en: {
    title: "Why choose Your English Hangout?",
    benefits: [
      {
        icon: Smile,
        title: "Relaxed Environment",
        description: "No pressure, no judgment. Learn in a welcoming space where mistakes are part of the process."
      },
      {
        icon: Target,
        title: "Focus on What Matters",
        description: "Learn English talking about your real life: work, travel, hobbies, goals. No repetitive topics or artificial dialogues."
      },
      {
        icon: Zap,
        title: "Fast Progress",
        description: "You speak from the first minute. Fluency comes naturally, with every session."
      },
      {
        icon: Users,
        title: "C2 Certified & Natural Fluency",
        description: "Learn from someone who masters the language at the international C2 level, has real experience in travel, work and career — and understands the emotional challenges of learning."
      }
    ]
  }
};

export const BenefitsSection = ({ language }: BenefitsSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {t.benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl gradient-hero">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
