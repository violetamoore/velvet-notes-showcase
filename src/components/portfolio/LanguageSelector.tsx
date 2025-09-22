import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-border/30 rounded-full p-2 shadow-soft">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-sm font-light"
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="h-8 px-3 text-sm font-light"
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageSelector;