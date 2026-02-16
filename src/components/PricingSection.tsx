import { DollarSign, X, Calendar } from "lucide-react";

interface PricingSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Quanto custa?",
    price: "R$ 75",
    priceUnit: "por aula",
    features: [
      "Sem mensalidade",
      "Cancele quando quiser"
    ],
    note: "Aula experimental de 30 minutos totalmente grátis"
  },
  en: {
    title: "How much does it cost?",
    price: "R$ 75",
    priceUnit: "per class",
    features: [
      "No monthly fees",
      "Cancel anytime"
    ],
    note: "30-minute trial class completely free"
  }
};

export const PricingSection = ({ language }: PricingSectionProps) => {
  const t = content[language];
  
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {t.title}
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-medium animate-scale-in">
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="text-5xl md:text-6xl font-bold text-primary">{t.price}</span>
              <span className="text-xl text-muted-foreground">{t.priceUnit}</span>
            </div>
            
            <div className="space-y-3 mb-6">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-lg">
                  <CheckIcon className="w-5 h-5 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground bg-accent/10 py-3 px-4 rounded-lg">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);
