import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/violeta-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const specialties = [
    t('specialty1'),
    t('specialty2'),
    t('specialty3'),
    t('specialty4'),
    t('specialty5'),
    t('specialty6')
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-8 tracking-tight">
            <span className="text-gradient-elegant">{t('aboutTitle').split(' ')[0]}</span>{" "}
            <span className="text-gradient-silver">{t('aboutTitle').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-foreground/80 font-light">
              {t('aboutDescription1')}
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80 font-light">
              {t('aboutDescription2')}
            </p>
            
            <div className="pt-8">
              <h3 className="font-display text-2xl font-light text-gradient-elegant mb-6 tracking-wide">
                {t('specialtiesTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-1.5 h-1.5 bg-gradient-elegant rounded-full" />
                    <span className="text-foreground/70 font-light">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={aboutImage}
              alt="Violeta Moore in an elegant white feather costume"
              className="w-full h-[600px] object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;