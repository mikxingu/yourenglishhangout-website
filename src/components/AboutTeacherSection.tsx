import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import teacherImage from "@/assets/images/teacher-michel.jpg";

interface AboutTeacherSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Quem é o professor?",
    name: "Sobre o Michel — EF SET C2 Certified",
    description: "Estudioso, viajante e apaixonado pelo idioma, Michel criou o Your English Hangout para ajudar pessoas a destravarem o inglês de forma leve, natural e personalizada.",
    certification: "Com certificação internacional C2, inglês usado diariamente no trabalho, estudos e viagens, e um estilo acolhedor de conversação, Michel oferece uma experiência única:",
    benefits: [
      "Ambiente seguro para errar",
      "Conversas reais sobre sua vida",
      "Feedback leve e natural",
      "Método perfeito para adultos"
    ],
    closing: ["Aprender inglês pode ser simples.", "E pode ser prazeroso."]
  },
  en: {
    title: "Who is the teacher?",
    name: "About Michel — EF SET C2 Certified",
    description: "A scholar, traveler, and language enthusiast, Michel created Your English Hangout to help people unlock their English in a light, natural, and personalized way.",
    certification: "With international C2 certification, English used daily in work, studies and travel, and a welcoming conversational style, Michel offers a unique experience:",
    benefits: [
      "Safe space to make mistakes",
      "Real conversations about your life",
      "Light and natural feedback",
      "Perfect method for adults"
    ],
    closing: ["Learning English can be simple.", "And it can be enjoyable."]
  }
};

export const AboutTeacherSection = ({ language }: AboutTeacherSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-large">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12">
              {/* Image */}
              <div className="flex items-center justify-center animate-fade-in-up">
                <div className="relative">
                  <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl" />
                  <img 
                    src={teacherImage} 
                    alt="Michel - English Teacher" 
                    className="relative rounded-2xl shadow-large w-full max-w-sm object-cover"
                  />
                  {/* C2 Certified Badge */}
                  <div className="absolute -top-3 -right-3 gradient-hero px-3 py-2 rounded-full shadow-large animate-scale-in border-4 border-background">
                    <span className="text-white font-bold text-xs whitespace-nowrap">
                      EF SET C2 Certified
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col justify-center space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-white text-2xl md:text-3xl font-bold gradient-hero bg-clip-text text-transparent">
                  {t.name}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t.certification}
                </p>
                
                <ul className="space-y-3">
                  {t.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <span className="text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  {t.closing.map((line, index) => (
                    <p key={index} className="text-lg font-semibold">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
