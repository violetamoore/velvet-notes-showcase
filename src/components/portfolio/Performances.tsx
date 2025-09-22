import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram } from "lucide-react";
import violeta1 from "@/assets/violeta-1.jpg";
import violeta2 from "@/assets/violeta-2.jpg";
import violeta3 from "@/assets/violeta-3.jpg";
import violeta4 from "@/assets/violeta-4.jpg";
import violeta5 from "@/assets/violeta-5.jpg";
import violeta6 from "@/assets/violeta-6.jpg";

const Performances = () => {
  const { t } = useLanguage();
  
  const performances = [
    {
      title: t('featherDreams'),
      venue: "The Grand Theater",
      date: "Monthly Shows",
      type: "Burlesque",
      description: t('featherDreamsDesc'),
      highlights: ["Feather Choreography", "Elegant Costumes", "Theatrical Storytelling"]
    },
    {
      title: t('vintageGlamour'),
      venue: "The Velvet Room", 
      date: "Saturday Evenings",
      type: "Cabaret",
      description: t('vintageGlamourDesc'),
      highlights: ["Period Costumes", "Interactive Performance", "Vintage Music"]
    },
    {
      title: t('noirMystique'),
      venue: "The Speakeasy Lounge",
      date: "Friday Nights",
      type: "Performance Art",
      description: t('noirMystiqueDesc'),
      highlights: ["Artistic Expression", "Black & White Theme", "Contemporary Dance"]
    },
    {
      title: t('whiteFeather'),
      venue: "Private Events",
      date: "By Appointment",
      type: "Custom Shows",
      description: t('whiteFeatherDesc'),
      highlights: ["Custom Choreography", "Event Theming", "Professional Production"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Burlesque": return "bg-primary/15 text-primary border-primary/20";
      case "Cabaret": return "bg-primary-light/15 text-primary-light border-primary-light/20";
      case "Performance Art": return "bg-secondary/15 text-secondary-foreground border-secondary/20";
      case "Custom Shows": return "bg-muted/25 text-muted-foreground border-muted/30";
      default: return "bg-muted/25 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-8 tracking-tight">
            <span className="text-gradient-silver">{t('performancesTitle').split(' ')[0]}</span>{" "}
            <span className="text-gradient-elegant">{t('performancesTitle').split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            {t('performancesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {performances.map((performance, index) => (
            <Card key={index} className="p-10 bg-gradient-card border-border/30 shadow-soft hover:shadow-elegant transition-all duration-500 group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-light text-gradient-elegant group-hover:text-shimmer transition-all duration-300 tracking-wide">
                    {performance.title}
                  </h3>
                  <Badge className={getTypeColor(performance.type)}>
                    {performance.type}
                  </Badge>
                </div>
                
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="font-light">{performance.venue}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="font-light">{performance.date}</span>
                  </div>
                </div>
                
                <p className="text-foreground/70 leading-relaxed font-light">
                  {performance.description}
                </p>
                
                <div className="pt-6">
                  <h4 className="font-light text-primary mb-4 tracking-wide">Performance Highlights:</h4>
                  <div className="space-y-3">
                    {performance.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-4">
                        <div className="w-1 h-1 bg-gradient-elegant rounded-full" />
                        <span className="text-sm text-foreground/60 font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Card className="inline-block p-10 bg-gradient-elegant border-primary/20 shadow-elegant">
            <h3 className="font-display text-2xl font-light text-primary-foreground mb-6 tracking-wide">
              {t('bookPrivate')}
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-md font-light leading-relaxed">
              {t('bookPrivateDesc')}
            </p>
            <div className="space-y-3 text-primary-foreground/80 text-sm font-light">
              <div>• Corporate Events & Galas</div>
              <div>• Private Parties & Celebrations</div>
              <div>• Wedding Entertainment</div>
              <div>• Festival & Concert Bookings</div>
            </div>
          </Card>
        </div>

        {/* Photo Gallery */}
        <div className="mt-32">
          <h3 className="font-display text-3xl font-light text-gradient-elegant mb-16 text-center tracking-wide">
            {t('performanceGallery')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[violeta4, violeta5, violeta6, violeta1, violeta2, violeta3].map((image, index) => (
              <Card key={index} className="group overflow-hidden border-border/30 shadow-soft hover:shadow-elegant transition-all duration-500">
                <div className="aspect-[4/5] bg-gradient-card relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Violeta Moore Performance ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mt-32">
          <h3 className="font-display text-3xl font-light text-gradient-elegant mb-16 text-center tracking-wide">
            {t('videoGallery')}
          </h3>
          
          <div className="text-center">
            <Card className="inline-block p-12 bg-gradient-card border-border/30 shadow-soft hover:shadow-elegant transition-all duration-500">
              <div className="space-y-8 max-w-md">
                <div className="w-20 h-20 mx-auto bg-gradient-elegant rounded-full flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-light text-gradient-elegant tracking-wide">
                    {t('videoGallery')}
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {t('instagramText')}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 transition-all duration-500 font-light tracking-wide"
                  onClick={() => window.open('https://instagram.com/violeta_moore', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  {t('instagramButton')}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;