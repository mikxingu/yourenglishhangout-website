import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AboutTeacherSection } from "@/components/AboutTeacherSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switcher - Fixed on top right */}
      <div className="fixed top-4 right-4 z-50 animate-fade-in-up">
        <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
      </div>
      
      {/* Main Content */}
      <Hero language={language} />
      <HowItWorksSection language={language} />
      <DifferenceSection language={language} />
      <BenefitsSection language={language} />
      <AboutTeacherSection language={language} />
      <TargetAudienceSection language={language} />
      <PricingSection language={language} />
      <TestimonialsSection language={language} />
      <CTASection language={language} />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Your English Hangout. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
