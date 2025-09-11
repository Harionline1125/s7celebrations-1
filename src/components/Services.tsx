import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Cake, 
  Camera, 
  Utensils, 
  Flower2, 
  Music, 
  MapPin, 
  Users,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Management",
      description: "Complete wedding planning from venue booking to décor, catering, photography, entertainment, and logistics.",
      features: ["Venue Selection", "Décor Planning", "Catering Services", "Photography & Videography"]
    },
    {
      icon: Cake,
      title: "Birthday & Celebrations",
      description: "Memorable birthday parties with theme décor, custom cake design, photography, and entertainment.",
      features: ["Theme Décor", "Custom Cakes", "Entertainment", "Party Planning"]
    },
    {
      icon: Camera,
      title: "Photography Services",
      description: "Professional photography for pre-wedding shoots, event coverage, candid shots, and custom albums.",
      features: ["Pre-wedding Shoots", "Event Coverage", "Candid Photography", "Custom Albums"]
    }
  ];

  const features = [
    { icon: MapPin, title: "Venue Booking", description: "Premium venues across the city" },
    { icon: Flower2, title: "Décor & Styling", description: "Elegant themes and setups" },
    { icon: Utensils, title: "Catering", description: "Diverse cuisine options" },
    { icon: Music, title: "Entertainment", description: "DJ, live music & performers" },
    { icon: Users, title: "Event Coordination", description: "Seamless event management" },
    { icon: Camera, title: "Media Coverage", description: "Professional photo & video" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            We simplify event planning by bringing everything you need to one place — 
            venues, vendors, décor, photography, catering, and more.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                <CardDescription className="font-body">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground font-body">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Why Choose <span className="text-primary italic">S7 Events</span>
            </h3>
            <p className="text-lg text-muted-foreground font-body">
              With a team of passionate professionals and trusted partners, we ensure every detail reflects your unique story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;