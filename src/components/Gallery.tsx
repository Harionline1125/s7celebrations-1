import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroWedding from "@/assets/hero-wedding.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";
import coupleHappy from "@/assets/couple-happy.jpg";
import birthdayParty from "@/assets/birthday-party.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Birthdays", "Décor", "Photography"];

  const galleryItems = [
    {
      id: 1,
      image: heroWedding,
      category: "Weddings",
      title: "Garden Wedding Ceremony",
      description: "Elegant outdoor ceremony setup"
    },
    {
      id: 2,
      image: weddingDecor,
      category: "Weddings",
      title: "Reception Table Setting",
      description: "Luxury table décor with florals"
    },
    {
      id: 3,
      image: coupleHappy,
      category: "Photography",
      title: "Couple Portraits",
      description: "Candid wedding photography"
    },
    {
      id: 4,
      image: birthdayParty,
      category: "Birthdays",
      title: "Birthday Celebration",
      description: "Elegant party setup"
    },
    {
      id: 5,
      image: heroWedding,
      category: "Weddings",
      title: "Wedding Venue",
      description: "Beautiful ceremony location"
    },
    {
      id: 6,
      image: weddingDecor,
      category: "Décor",
      title: "Floral Arrangements",
      description: "Custom floral designs"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our <span className="text-primary italic">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Explore our portfolio of stunning weddings, celebrations, and events. 
            Each image tells a story of love, joy, and unforgettable moments.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="font-body"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                  {item.category}
                </Badge>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="font-body text-sm text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Follow Us on <span className="text-primary italic">Instagram</span>
          </h3>
          <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
            Stay updated with our latest work and behind-the-scenes moments. 
            Follow @s7_events_entertainments for daily inspiration.
          </p>
          <Button size="lg" variant="outline">
            @s7_events_entertainments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;