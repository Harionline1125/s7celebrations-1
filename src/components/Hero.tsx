import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Calendar, Camera, Sparkles } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--luxury-pink)/0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Premium Event Management
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[0.9] tracking-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  Your Dream,
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-primary via-luxury-pink to-primary bg-clip-text text-transparent"
                >
                  Our Creation
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-muted-foreground font-body max-w-xl text-lg sm:text-xl leading-relaxed"
              >
                A celebration of love, crafted with precision and passion, to last a lifetime. Premium event management specializing in weddings, birthdays, and entertainment events.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="font-medium bg-gradient-to-r from-primary to-luxury-pink hover:shadow-luxury text-white border-0 px-8 py-3 text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Plan Your Event
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 py-3 text-lg"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Gallery
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border/50"
            >
              {[
                { icon: Heart, number: "500+", label: "Happy Couples" },
                { icon: Calendar, number: "1000+", label: "Events Planned" },
                { icon: Camera, number: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-luxury-pink/10 rounded-xl mb-2 mx-auto group-hover:shadow-lg transition-all duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-luxury-pink bg-clip-text text-transparent font-heading">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative lg:order-last"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-luxury h-[500px] sm:h-[600px] lg:h-[700px]">
              <HeroCarousel />
            </div>
            
            {/* Floating satisfaction badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-luxury-pink text-white rounded-2xl p-6 shadow-luxury backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold font-heading">100%</div>
                <div className="text-sm font-body opacity-90">Satisfaction</div>
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-8 -right-4 w-20 h-20 bg-gradient-to-br from-luxury-pink/20 to-primary/20 rounded-full backdrop-blur-sm"
            />
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 -right-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-luxury-pink/20 rounded-full backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;