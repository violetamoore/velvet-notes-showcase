import { Button } from "@/components/ui/button";
import heroImage from "@/assets/violeta-about.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20 bg-gradient-elegant p-1">
                <img 
                  src={heroImage} 
                  alt="Violeta Moore - Jazz Singer and Burlesque Artist"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-elegant opacity-20 blur-xl scale-110 -z-10" />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:order-1">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-float tracking-tight">
              <span className="text-gradient-elegant">Violeta</span>{" "}
              <span className="text-gradient-silver">Moore</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide">
              {t('heroSubtitle')}
            </p>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
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