import { Heart, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              S7 Events & Entertainments
            </h3>
            <p className="font-body text-background/80 mb-6 max-w-md">
              Turning moments into memories with premium event management services. 
              Specializing in weddings, birthdays, and entertainment events across Tamil Nadu.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/s7_events_entertainments?igsh=MXNubnlzbWZ4NGU4Zw==" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/17Ea8M4aeJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li><Link to="/" className="text-background/80 hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-background transition-colors">About</Link></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-background/80 hover:text-background transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 font-body">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-background/60" />
                <a href="tel:+919962919086" className="text-background/80 text-sm hover:text-background transition-colors">9962919086</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-background/60" />
                <a href="mailto:s7eventsentertainments@gmail.com" className="text-background/80 text-sm hover:text-background transition-colors">s7eventsentertainments@gmail.com</a>
              </div>
              <div className="text-background/80 text-sm">
                Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-background/60 text-sm">
              © {currentYear} S7 Events & Entertainments. All rights reserved.
            </p>
            <p className="font-body text-background/60 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400" /> for creating beautiful memories
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;