import { X, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DifferenceSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Qual a diferença?",
    subtitle: "Esqueça as aulas tradicionais. Aqui você aprende falando.",
    traditional: {
      title: "Aula Tradicional",
      items: [
        "Decorar regras gramaticais",
        "Exercícios repetitivos",
        "Medo de errar",
        "Conteúdo engessado",
        "Pouca prática de conversação"
      ]
    },
    conversational: {
      title: "Your English Hangout (Método Conversacional)",
      items: [
        "Conversas naturais e fluidas",
        "Temas do seu interesse",
        "Ambiente seguro para errar",
        "Aprendizado contextual",
        "100% focado em falar"
      ]
    }
  },
  en: {
    title: "What's the difference?",
    subtitle: "Forget traditional classes. Here you learn by speaking.",
    traditional: {
      title: "Traditional Class",
      items: [
        "Memorizing grammar rules",
        "Repetitive exercises",
        "Fear of making mistakes",
        "Rigid content",
        "Little conversation practice"
      ]
    },
    conversational: {
      title: "Your English Hangout (Conversational Method)",
      items: [
        "Natural, flowing conversations",
        "Topics you're interested in",
        "Safe space to make mistakes",
        "Contextual learning",
        "100% focused on speaking"
      ]
    }
  }
};

export const DifferenceSection = ({ language }: DifferenceSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 md:py-32 gradient-section">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <Card className="p-8 shadow-medium animate-fade-in-up opacity-60 hover:opacity-70 transition-opacity">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-muted-foreground">
                {t.traditional.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.traditional.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          {/* Conversational */}
          <Card className="p-8 shadow-large border-2 border-primary animate-fade-in-up bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg gradient-hero">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                {t.conversational.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.conversational.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
