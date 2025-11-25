import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Keerthivasan",
    review: "I had placed an order with S7 Catering Service for my brother's function — the food was absolutely amazing! Even though it was a last-minute order, everything was delivered on time with great taste and quality. The service and presentation were top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sasi",
  review: "A heartfelt thank you to S7 Celebrations for making our wedding truly memorable! Every detail was handled with professionalism and perfection. Your creativity, coordination, and dedication made our big day stress-free and beautiful. 100% satisfied and highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Ramesh",
    review: "S7 Events transformed our wedding reception into a dream come true! From decor to lighting and music, everything was perfect. The photography team captured every precious moment beautifully. We'll cherish these memories forever!",
    rating: 5,
  },
  {
    id: 4,
    name: "Aravind Kumar",
    review: "We booked S7 Events for our daughter's first birthday, and they made it magical! The theme decoration, entertainment, and food arrangements were all perfect. Our guests loved every detail!",
    rating: 5,
  },
  {
    id: 5,
    name: "Divya Raj",
    review: "The S7 team handled our corporate annual day flawlessly. Their planning, stage setup, and sound arrangements were very professional. Truly impressed with their dedication and creativity!",
    rating: 5,
  },
  {
    id: 6,
    name: "Nivetha Suresh",
    review: "S7 Events made my brother's engagement ceremony so special! The flower arrangements and photography were simply beautiful. Thank you for your punctuality and excellent service!",
    rating: 5,
  },
  {
    id: 7,
    name: "Karthick M",
    review: "Highly recommend S7 Events for any function! They managed our family reception with great care and detail. The decoration, catering, and music coordination were all outstanding.",
    rating: 5,
  },
  {
    id: 8,
    name: "Lakshmi Narayanan",
    review: "We hired S7 Events for a housewarming function, and they did an amazing job. The catering was delicious, and the team ensured everything went smoothly from start to finish. Great experience!",
    rating: 5,
  },
  {
    id: 9,
    name: "Sanjana R",
    review: "S7 Events handled my best friend's wedding photography and videography — the shots were stunning! They captured all emotions perfectly and delivered the album on time. Superb service!",
    rating: 5,
  },
  {
    id: 10,
    name: "Vignesh Prabhu",
  review: "Our office New Year event was organized by S7 Celebrations, and it was a grand success! The sound system, stage setup, and decorations were perfect. Great teamwork and professionalism!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="text-2xl md:text-3xl text-secondary drop-shadow-sm"
        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            What Our <span className="text-primary italic">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-card rounded-3xl shadow-lg p-8 md:p-12 mx-4 md:mx-0 border border-border">
                  {/* Stars */}
                  <div className="flex justify-center mb-6 gap-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground text-center mb-8 leading-relaxed italic font-body">
                    "{testimonials[currentIndex].review}"
                  </blockquote>

                  {/* Customer Name */}
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold font-heading text-primary">
                      — {testimonials[currentIndex].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-card hover:bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-card hover:bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-primary shadow-lg"
                  : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Counter */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-muted-foreground font-body">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

