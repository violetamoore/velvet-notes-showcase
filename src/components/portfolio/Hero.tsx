import { Button } from "@/components/ui/button";
import heroImage from "@/assets/violeta-about.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Jazz performance in an intimate cabaret setting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl font-light mb-6 animate-float tracking-tight">
          <span className="text-gradient-elegant">Violeta</span>{" "}
          <span className="text-gradient-silver">Moore</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide">
          {t('heroSubtitle')}
        </p>
        
        <p className="text-lg md:text-xl text-foreground/70 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          {t('heroDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
          >
            {t('viewPerformances')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 transition-all duration-500 font-light tracking-wide"
          >
            {t('contactBooking')}
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-60" />
        </div>
    </section>
  );
};

export default Hero;