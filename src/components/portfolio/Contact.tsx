import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "booking@violetamoore.com",
      description: "For bookings and inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York City, NY",
      description: "Available for travel"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Year-round",
      description: "Book 2-8 weeks in advance"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-8 tracking-tight">
            <span className="text-gradient-elegant">Get in</span>{" "}
            <span className="text-gradient-silver">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Ready to bring sophisticated entertainment to your venue or event? 
            Let's discuss how we can create an unforgettable experience together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-3xl font-light text-gradient-elegant mb-8 tracking-wide">
                Let's Create Magic Together
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10 font-light">
                Whether you're planning an intimate jazz evening, a sophisticated cabaret show, 
                or an elegant burlesque performance, I'm here to bring your vision to life 
                with professionalism and artistic excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="p-8 bg-gradient-card border-border/30 shadow-soft hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-elegant rounded-full">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-light text-foreground mb-2 tracking-wide">{method.title}</h4>
                        <p className="text-primary font-medium mb-2">{method.value}</p>
                        <p className="text-sm text-muted-foreground font-light">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-10 bg-gradient-elegant border-primary/20 shadow-elegant">
              <h4 className="font-display text-xl font-light text-primary-foreground mb-6 tracking-wide">
                Booking Information
              </h4>
              <div className="space-y-4 text-primary-foreground/90 font-light">
                <p>• Minimum 2-week advance booking required</p>
                <p>• Travel performances available nationwide</p>
                <p>• Custom setlists and themed performances</p>
                <p>• Professional sound equipment provided</p>
                <p>• Flexible performance duration (30min - 2 hours)</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-10 bg-gradient-card border-border/30 shadow-elegant">
            <h3 className="font-display text-2xl font-light text-gradient-elegant mb-8 tracking-wide">
              Send a Message
            </h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-foreground mb-3 tracking-wide">
                    First Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-light"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-foreground mb-3 tracking-wide">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-light"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-3 tracking-wide">
                  Email Address
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-3 tracking-wide">
                  Event Type
                </label>
                <select className="w-full px-4 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-light">
                  <option value="">Select event type</option>
                  <option value="burlesque">Burlesque Performance</option>
                  <option value="cabaret">Cabaret Show</option>
                  <option value="private">Private Event</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding Entertainment</option>
                  <option value="other">Other Type of Performance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-3 tracking-wide">
                  Event Date
                </label>
                <input 
                  type="date"
                  className="w-full px-4 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-light"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-3 tracking-wide">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none font-light"
                  placeholder="Tell me about your event, venue, and any special requirements..."
                />
              </div>

              <Button 
                type="submit"
                variant="hero"
                className="w-full py-4 text-lg font-light tracking-wide"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;