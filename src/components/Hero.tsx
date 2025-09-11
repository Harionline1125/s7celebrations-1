import { Button } from "@/components/ui/button";
import heroNew from "@/assets/hero-new.jpg";
import { ArrowRight, Heart, Calendar, Camera } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Turning{" "}
                <span className="text-primary italic">Moments</span>
                <br />
                into{" "}
                <span className="text-primary italic">Memories</span>
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-xl">
                Premium event management platform specializing in weddings, birthdays, and entertainment events. 
                We bring everything you need to one place — venues, décor, catering, photography, and more.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium">
                Plan Your Event
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
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
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroNew}
                alt="Elegant wedding ceremony setup"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-heading">2024</div>
                <div className="text-sm text-muted-foreground font-body">Award Winner</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold font-heading">100%</div>
                <div className="text-sm font-body">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;