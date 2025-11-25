import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Star, Camera, Music, MapPin, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const expertise = [
    { icon: MapPin, title: "Venue Selection", description: "Perfect locations for your special day" },
    { icon: Palette, title: "Décor Design", description: "Beautiful themes that tell your story" },
    { icon: Users, title: "Catering", description: "Delicious experiences for every guest" },
    { icon: Camera, title: "Photography", description: "Capturing every precious moment" },
    { icon: Music, title: "Entertainment", description: "Creating joy through music and celebration" },
    { icon: Sparkles, title: "Logistics", description: "Seamless coordination from start to finish" }
  ];

  const whyChooseUs = [
    { icon: Heart, text: "We care about your story" },
    { icon: Sparkles, text: "We craft every detail with love" },
    { icon: Music, text: "We bring joy through creativity and passion" },
    { icon: Star, text: "We transform visions into reality" }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      
      <main className="pt-24">
        <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Our Love Story with Events
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed mb-12">
At S7 Celebrations, we don&apos;t just plan events — we create memories that last a lifetime.
                Every celebration is a love story, every detail a reflection of happiness.
              </p>
              
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  Who <span className="text-primary italic">We Are</span>
                </h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                  We are a team of passionate event designers and storytellers, dedicated to turning your dream weddings, 
                  birthdays, and special moments into unforgettable experiences. With hearts full of creativity and minds 
                  focused on perfection, we bring together every element needed to make your celebration extraordinary.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary font-medium">Dream Makers</span>
                  </div>
                  <div className="bg-secondary/10 px-4 py-2 rounded-full">
                    <span className="text-secondary font-medium">Memory Creators</span>
                  </div>
                  <div className="bg-accent/10 px-4 py-2 rounded-full">
                    <span className="text-accent font-medium">Joy Bringers</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-body italic">
                      Team photo and behind-the-scenes moments coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    To simplify event planning and bring together everything you need — from décor to photography — 
                    under one roof, making your journey stress-free and joyful. We believe every celebration should 
                    be a beautiful experience, not a stressful one.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    To be the most trusted partner for weddings and celebrations, where love, culture, and creativity 
                    blend seamlessly. We dream of a world where every couple&apos;s love story is celebrated beautifully 
                    and authentically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Our <span className="text-primary italic">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
                With experience in managing end-to-end weddings and events, our expertise covers every aspect 
                of your celebration, ensuring nothing is left to chance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-body">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Why Choose <span className="italic">S7 Events?</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 font-body max-w-3xl mx-auto">
                We don&apos;t just organize events; we weave love, care, and creativity into every moment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-lg font-body font-medium text-primary-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Heart className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Client <span className="text-primary italic">Love</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body mb-8">
                Here&apos;s what our future couples and families will say about us...
              </p>
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12">
                <p className="text-lg text-muted-foreground font-body italic">
                  Beautiful testimonials from happy couples coming soon. Every love story we help create 
                  will be a testament to the magic we bring to your special day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8">
                Let&apos;s Create Something <span className="text-primary italic">Beautiful Together</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body mb-12 leading-relaxed">
                For us, it&apos;s not just about managing events — it&apos;s about celebrating life&apos;s most beautiful moments with you. 
                Every detail matters, every smile counts, and every memory we create together becomes a part of your forever story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/#contact">
                  <Button size="lg" className="font-body">
                    <Heart className="w-5 h-5 mr-2" />
                    Let&apos;s Plan Together
                  </Button>
                </Link>
                <Link to="/#gallery">
                  <Button variant="outline" size="lg" className="font-body">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;