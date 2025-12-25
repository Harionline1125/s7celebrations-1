import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Calendar, Camera } from "lucide-react";
import { motion } from "framer-motion";
import PlanEventForm from "./PlanEventForm";
import pg6 from "@/assets/pg6.jpg";

const Hero = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const [showFloating, setShowFloating] = React.useState(false);
  const inlineCtaRef = React.useRef<HTMLButtonElement | null>(null);
  const heroImages = [pg6];
  const [heroIndex, setHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const el = inlineCtaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting;
        setShowFloating(!isVisible);
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (heroImages.length <= 1) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [heroImages.length]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-background to-muted/30 px-4 pt-32 md:pt-40"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 w-full text-center lg:text-center pt-8 md:pt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="font-heading font-bold leading-tight mx-auto max-w-[20ch] break-words whitespace-normal
                           text-[clamp(2.25rem,7vw,4rem)] md:text-[clamp(2.5rem,6vw,3.5rem)] lg:text-[clamp(2.75rem,5.5vw,3.25rem)]"
              >
                Turning <span className="italic text-[#eb0303]">Moments</span> into <span className="italic text-[#be6013]">Memories</span>
              </h1>
            </motion.div>

            {/* subtitle removed as requested */}

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground font-body mx-auto max-w-2xl text-center leading-relaxed
                         text-[clamp(0.95rem,2.2vw,1.25rem)]"
            >
              Premium event management platform specializing in weddings,
              birthdays, and entertainment events. We bring everything you
              need to one place venues, décor, catering, photography, and more.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button
                  ref={inlineCtaRef}
                  size="lg"
                  className="font-medium"
                  onClick={() => setOpenForm(true)}
                >
                  Plan Your Event
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
                <div className="text-2xl font-bold text-primary font-heading">50+</div>
                <div className="text-sm text-muted-foreground font-body">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-heading">100+</div>
                <div className="text-sm text-muted-foreground font-body">Events Planned</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary font-heading">2+</div>
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
              <motion.img
                key={heroIndex}
                src={pg6}
                alt="Elegant wedding ceremony setup"
                className="w-full h-auto max-h-[70vh] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
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
      {showFloating && (
        <Button
          size="lg"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 sm:bottom-24 z-50 font-medium shadow-lg"
          onClick={() => setOpenForm(true)}
          aria-label="Plan Your Event"
        >
          Plan Your Event
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      )}
      <PlanEventForm open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
};

export default Hero;
