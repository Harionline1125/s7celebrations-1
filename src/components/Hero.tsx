import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroWedding from "@/assets/hero-wedding.jpg";
import { ArrowRight, Heart, Calendar, Camera, Sparkles, Crown, Award, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-40 w-2.5 h-2.5 bg-accent/30 rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                <Crown className="w-4 h-4 mr-2" />
                Premium Event Management
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-heading font-bold leading-none tracking-tight">
                Turning{" "}
                <span className="relative">
                  <span className="text-primary italic">Moments</span>
                  <div className="absolute -inset-2 bg-primary/10 rounded-lg -z-10 rotate-1" />
                </span>
                <br />
                into{" "}
                <span className="relative">
                  <span className="text-primary italic">Memories</span>
                  <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-accent animate-pulse" />
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-body max-w-xl leading-relaxed">
                Premium event management platform specializing in weddings, birthdays, and entertainment events. 
                We bring everything you need to one place — venues, décor, catering, photography, and more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
                Plan Your Event
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium text-lg px-8 py-4 border-2 hover:bg-muted/50">
                View Our Work
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Heart, number: "500+", label: "Happy Couples", color: "text-red-500" },
                { icon: Calendar, number: "1000+", label: "Events Planned", color: "text-blue-500" },
                { icon: Award, number: "5+", label: "Years Experience", color: "text-green-500" }
              ].map((stat, index) => (
                <div key={index} className="group text-center p-4 rounded-2xl hover:bg-muted/30 transition-colors">
                  <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-primary font-heading">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroWedding}
                  alt="Elegant wedding ceremony setup"
                  className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Glassmorphism Overlays */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent backdrop-blur-[1px]" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary font-heading">2024</div>
                  <div className="text-xs text-muted-foreground font-body">Award Winner</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading">100%</div>
                  <div className="text-xs opacity-90 font-body">Client Satisfaction</div>
                </div>
                <Heart className="w-6 h-6 text-red-300 animate-pulse" />
              </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-20 -left-4 bg-accent/90 backdrop-blur-md text-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <Sparkles className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-body">Premium</div>
              </div>
            </div>

            <div className="absolute bottom-32 -right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
              <div className="text-center">
                <Camera className="w-6 h-6 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground font-body">Photography</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-8 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/20">
          <div className="text-center">
            <div className="text-sm font-semibold text-primary font-heading">Trusted by</div>
            <div className="text-xs text-muted-foreground font-body">500+ Couples</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-sm font-semibold text-primary font-heading">Rated</div>
            <div className="text-xs text-muted-foreground font-body flex items-center gap-1">
              5.0 <Star className="w-3 h-3 fill-current text-yellow-500" />
            </div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-sm font-semibold text-primary font-heading">Featured</div>
            <div className="text-xs text-muted-foreground font-body">Award Winner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;