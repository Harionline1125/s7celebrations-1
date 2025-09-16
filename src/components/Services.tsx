import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Cake, Camera, Utensils, Flower2, Music, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const services = [{
    icon: Heart,
    title: "Wedding Management",
    description: "Complete wedding planning from venue booking to décor, catering, photography, entertainment, and logistics.",
    features: ["Venue Selection", "Décor Planning", "Catering Services", "Photography & Videography"]
  }, {
    icon: Cake,
    title: "Birthday & Celebrations",
    description: "Memorable birthday parties with theme décor, custom cake design, photography, and entertainment.",
    features: ["Theme Décor", "Custom Cakes", "Entertainment", "Party Planning"]
  }, {
    icon: Camera,
    title: "Photography Services",
    description: "Professional photography for pre-wedding shoots, event coverage, candid shots, and custom albums.",
    features: ["Pre-wedding Shoots", "Event Coverage", "Candid Photography", "Custom Albums"]
  }];
  const features = [{
    icon: MapPin,
    title: "Venue Booking",
    description: "Premium venues across the city"
  }, {
    icon: Flower2,
    title: "Décor & Styling",
    description: "Elegant themes and setups"
  }, {
    icon: Utensils,
    title: "Catering",
    description: "Diverse cuisine options"
  }, {
    icon: Music,
    title: "Entertainment",
    description: "DJ, live music & performers"
  }, {
    icon: Users,
    title: "Event Coordination",
    description: "Seamless event management"
  }, {
    icon: Camera,
    title: "Media Coverage",
    description: "Professional photo & video"
  }];
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation({ threshold: 0.2 });

  return <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-luxury-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-luxury-pink/10 to-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Our <span className="bg-gradient-to-r from-primary to-luxury-pink bg-clip-text text-transparent italic">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed"
          >
            We simplify event planning by bringing everything you need to one place — 
            venues, vendors, décor, photography, catering, and more.
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <motion.div 
          ref={servicesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-500 h-full hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-luxury-pink/10 rounded-2xl mb-4 mx-auto group-hover:shadow-lg transition-all duration-300"
                  >
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-body text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-muted-foreground font-body group-hover:text-foreground transition-colors"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-luxury-pink rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          ref={featuresRef}
          initial={{ opacity: 0, y: 50 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-card/90 to-secondary/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-luxury border border-border/50"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-luxury-pink bg-clip-text text-transparent italic">S7 Events</span>
            </h3>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              With a team of passionate professionals and trusted partners, we ensure every detail reflects your unique story.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={featuresInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-luxury-pink/10 rounded-xl mb-4 mx-auto group-hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </motion.div>
                <h4 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground font-body text-sm group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Services;