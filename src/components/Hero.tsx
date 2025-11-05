import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pg6 from "@/assets/pg6.jpg";
import { ArrowRight, Heart, Calendar, Camera } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-heading">
                Turning <span className="italic text-[#eb0303]">Moments</span>
                <br />
                into <span className="italic text-[#be6013] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Memories</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground font-body max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              Premium event management platform specializing in weddings,
              birthdays, and entertainment events. We bring everything you
              need to one place venues, décor, catering, photography, and more.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link to="/plan-event" aria-label="Plan your event">
                  <Button size="lg" className="font-medium">
                    Plan Your Event
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-medium"
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Gallery
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-heading">500+</div>
                <div className="text-sm text-muted-foreground font-body">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-heading">1000+</div>
                <div className="text-sm text-muted-foreground font-body">Events Planned</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-heading">5+</div>
                <div className="text-sm text-muted-foreground font-body">Years Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={pg6}
                alt="Elegant wedding ceremony setup"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating element */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold font-heading">100%</div>
                <div className="text-sm font-body">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
