import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import hero images from assets
import heroNew from '@/assets/hero-new.jpg'
import bdy1 from '@/assets/bdy1.jpg'
import bdy3 from '@/assets/bdy3.jpg'
import mrg2 from '@/assets/mrg2.jpg'
import mrg4 from '@/assets/mrg4.jpg'

const heroImages = [
  {
    src: heroNew,
    title: "Your Dream, Our Creation",
    subtitle: "A Celebration of Love, Crafted with Precision and Passion"
  },
  {
    src: mrg2,
    title: "Elevate Your Event",
    subtitle: "Unforgettable Moments, Crafted with Care"
  },
  {
    src: bdy1,
    title: "Celebrate Every Moment",
    subtitle: "From Intimate Gatherings to Grand Celebrations"
  },
  {
    src: mrg4,
    title: "Luxury Event Management",
    subtitle: "Premium Events That Leave Lasting Impressions"
  },
  {
    src: bdy3,
    title: "Perfect Celebrations",
    subtitle: "Creating Memories That Last a Lifetime"
  }
]

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <img 
            src={heroImages[currentIndex].src} 
            alt={heroImages[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Overlay text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-8 left-8 right-8 text-white z-10"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-2"
            >
              {heroImages[currentIndex].title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg font-body opacity-90"
            >
              {heroImages[currentIndex].subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm z-20"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm z-20"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel