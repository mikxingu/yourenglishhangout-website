import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialsSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "O que os alunos dizem",
    testimonials: [
      {
        name: "Patricia",
        role: "Designer",
        text: "Finalmente consegui destravar! As conversas são tão naturais que eu nem percebo que estou 'estudando'. Michel tem uma paciência incrível."
      },
      {
        name: "Luiz",
        role: "Engenheiro de Software",
        text: "Preciso usar inglês no trabalho todos os dias, mas tinha vergonha de falar. Com o Your English Hangout, minha confiança melhorou muito!"
      },
      {
        name: "Thiago",
        role: "Empresário",
        text: "Já tentei vários cursos tradicionais e sempre desistia. Aqui é diferente: leve, divertido e focado no que realmente importa."
      },
      {
        name: "Elaine",
        role: "Professora",
        text: "Estava travada há anos. As aulas com Michel são um espaço seguro onde posso errar sem medo. Meu inglês melhorou muito!"
      },
      {
        name: "Vinicius",
        role: "Analista de Marketing",
        text: "Conversamos sobre temas que me interessam de verdade. É como conversar com um amigo que te ajuda a melhorar o inglês naturalmente."
      }
    ]
  },
  en: {
    title: "What students say",
    testimonials: [
      {
        name: "Patricia",
        role: "Designer",
        text: "I finally unlocked my English! The conversations are so natural I don't even realize I'm 'studying'. Michel has incredible patience."
      },
      {
        name: "Luiz",
        role: "Software Engineer",
        text: "I need to use English at work every day, but I was shy to speak. With Your English Hangout, my confidence improved a lot!"
      },
      {
        name: "Thiago",
        role: "Entrepreneur",
        text: "I've tried several traditional courses and always quit. Here it's different: light, fun and focused on what really matters."
      },
      {
        name: "Elaine",
        role: "Teacher",
        text: "I was stuck for years. Classes with Michel are a safe space where I can make mistakes without fear. My English improved so much!"
      },
      {
        name: "Vinicius",
        role: "Marketing Analyst",
        text: "We talk about topics I'm genuinely interested in. It's like chatting with a friend who helps you improve your English naturally."
      }
    ]
  }
};

export const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-hero flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
