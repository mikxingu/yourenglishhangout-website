import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  language: 'pt' | 'en';
  onLanguageChange: (lang: 'pt' | 'en') => void;
}

export const LanguageSwitcher = ({ language, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};
