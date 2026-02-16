import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TargetAudienceSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Para quem é o Your English Hangout?",
    audiences: [
      "Pessoas que têm vergonha de falar inglês",
      "Adultos que não querem aulas tradicionais",
      "Profissionais que precisam destravar conversação",
      "Quem está cansado de Duolingo/gramática",
      "Viajantes que querem conversar sem medo",
      "Programadores que querem melhorar inglês de trabalho",
      "Quem tem nível básico/intermediário e quer fluência real"
    ]
  },
  en: {
    title: "Who is Your English Hangout for?",
    audiences: [
      "People who are shy about speaking English",
      "Adults who don't want traditional classes",
      "Professionals who need to unlock conversation",
      "Those tired of Duolingo/grammar",
      "Travelers who want to speak without fear",
      "Programmers who want to improve work English",
      "Those with basic/intermediate level wanting real fluency"
    ]
  }
};

export const TargetAudienceSection = ({ language }: TargetAudienceSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 md:py-32 gradient-section">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-large bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="grid sm:grid-cols-2 gap-6">
              {t.audiences.map((audience, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="shrink-0 p-2 rounded-lg gradient-hero">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-base md:text-lg font-medium pt-1">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
