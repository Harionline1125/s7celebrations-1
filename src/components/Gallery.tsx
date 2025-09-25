import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// Image imports (keep yours)
import mrg1 from "@/assets/mrg1.jpg";
import mrg2 from "@/assets/mrg2.jpg";
import mrg3 from "@/assets/mrg3.jpg";
import mrg4 from "@/assets/mrg4.jpg";

import dec1 from "@/assets/dec1.jpg";
import dec2 from "@/assets/dec2.jpg";
import dec3 from "@/assets/dec3.jpg";
import dec4 from "@/assets/dec4.jpg";
import dec5 from "@/assets/dec5.jpg";

import bdy1 from "@/assets/bdy1.jpg";
import bdy2 from "@/assets/bdy2.jpg";
import bdy3 from "@/assets/bdy3.jpg";
import bdy4 from "@/assets/bdy4.jpg";
import bdy5 from "@/assets/bdy5.jpg";
import bdy6 from "@/assets/bdy6.jpg";
import bdy7 from "@/assets/bdy7.jpg";
import bdy8 from "@/assets/bdy8.jpg";
import bdy9 from "@/assets/bdy9.jpg";
import bdy10 from "@/assets/bdy10.jpg";
import bdy11 from "@/assets/bdy11.jpg";
import bdy12 from "@/assets/bdy12.jpg";

import pg1 from "@/assets/pg1.jpg";
import pg2 from "@/assets/pg2.jpg";
import pg3 from "@/assets/pg3.jpg";
import pg4 from "@/assets/pg4.jpg";
import pg5 from "@/assets/pg5.jpg";
import pg6 from "@/assets/pg6.jpg";
import pg7 from "@/assets/pg7.jpg";
import pg8 from "@/assets/pg8.jpg";
import pg9 from "@/assets/pg9.jpg";
import pg10 from "@/assets/pg10.jpg";
import pg11 from "@/assets/pg11.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Birthdays", "Décor", "Photography"];

  const galleryItems = [
    { id: 1, image: mrg1, category: "Weddings", title: "Wedding 1", description: "Beautiful wedding moment" },
    { id: 2, image: mrg2, category: "Weddings", title: "Wedding 2", description: "Beautiful wedding moment" },
    { id: 3, image: mrg3, category: "Weddings", title: "Wedding 3", description: "Beautiful wedding moment" },
    { id: 4, image: mrg4, category: "Weddings", title: "Wedding 4", description: "Beautiful wedding moment" },
    { id: 5, image: dec1, category: "Décor", title: "Décor 1", description: "Creative décor setup" },
    { id: 6, image: dec2, category: "Décor", title: "Décor 2", description: "Creative décor setup" },
    { id: 7, image: dec3, category: "Décor", title: "Décor 3", description: "Creative décor setup" },
    { id: 8, image: dec4, category: "Décor", title: "Décor 4", description: "Creative décor setup" },
    { id: 9, image: dec5, category: "Décor", title: "Décor 5", description: "Creative décor setup" },
    { id: 10, image: bdy1, category: "Birthdays", title: "Birthday 1", description: "Fun birthday celebration" },
    { id: 11, image: bdy2, category: "Birthdays", title: "Birthday 2", description: "Fun birthday celebration" },
    { id: 12, image: bdy3, category: "Birthdays", title: "Birthday 3", description: "Fun birthday celebration" },
    { id: 13, image: bdy4, category: "Birthdays", title: "Birthday 4", description: "Fun birthday celebration" },
    { id: 14, image: bdy5, category: "Birthdays", title: "Birthday 5", description: "Fun birthday celebration" },
    { id: 15, image: bdy6, category: "Birthdays", title: "Birthday 6", description: "Fun birthday celebration" },
    { id: 16, image: bdy7, category: "Birthdays", title: "Birthday 7", description: "Fun birthday celebration" },
    { id: 17, image: bdy8, category: "Birthdays", title: "Birthday 8", description: "Fun birthday celebration" },
    { id: 18, image: bdy9, category: "Birthdays", title: "Birthday 9", description: "Fun birthday celebration" },
    { id: 19, image: bdy10, category: "Birthdays", title: "Birthday 10", description: "Fun birthday celebration" },
    { id: 20, image: bdy11, category: "Birthdays", title: "Birthday 11", description: "Fun birthday celebration" },
    { id: 21, image: bdy12, category: "Birthdays", title: "Birthday 12", description: "Fun birthday celebration" },
    { id: 22, image: pg1, category: "Photography", title: "Photography 1", description: "Candid photo" },
    { id: 23, image: pg2, category: "Photography", title: "Photography 2", description: "Candid photo" },
    { id: 24, image: pg3, category: "Photography", title: "Photography 3", description: "Candid photo" },
    { id: 25, image: pg4, category: "Photography", title: "Photography 4", description: "Candid photo" },
    { id: 26, image: pg5, category: "Photography", title: "Photography 5", description: "Candid photo" },
    { id: 27, image: pg6, category: "Photography", title: "Photography 6", description: "Candid photo" },
    { id: 28, image: pg7, category: "Photography", title: "Photography 7", description: "Candid photo" },
    { id: 29, image: pg8, category: "Photography", title: "Photography 8", description: "Candid photo" },
    { id: 30, image: pg9, category: "Photography", title: "Photography 9", description: "Candid photo" },
    { id: 31, image: pg10, category: "Photography", title: "Photography 10", description: "Candid photo" },
    { id: 32, image: pg11, category: "Photography", title: "Photography 11", description: "Candid photo" }
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our <span className="text-primary italic">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Explore our portfolio of stunning weddings, celebrations, and events.
            Each image tells a story of love, joy, and unforgettable moments.
          </p>
        </motion.div>

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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <Badge className="absolute top-3 right-3">{item.category}</Badge>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Your Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
