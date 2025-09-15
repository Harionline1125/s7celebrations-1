import { useState } from "react";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImage from "@/assets/s7-logo.jpg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [{
    name: "Home",
    href: "/",
    isRoute: true
  }, {
    name: "About",
    href: "/about",
    isRoute: true
  }, {
    name: "Services",
    href: "#services",
    isRoute: false
  }, {
    name: "Gallery",
    href: "#gallery",
    isRoute: false
  }, {
    name: "Contact",
    href: "#contact",
    isRoute: false
  }];
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/30">
          <div className="flex items-center gap-6">
            <a href="tel:+919962919086" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              <span>9962919086</span>
            </a>
            <a href="mailto:s7eventsentertainments@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span>s7eventsentertainments@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/s7_events_entertainments" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            </a>
            <a href="https://facebook.com/s7eventsentertainments" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="S7 Events & Entertainments Logo" 
                className="w-12 h-12 object-cover rounded-full"
              />
              <span className="text-2xl font-heading font-bold text-primary">
                S7 Events & Entertainments
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => 
              item.isRoute ? (
                <Link key={item.name} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium font-body">
                  {item.name}
                </Link>
              ) : (
                <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium font-body">
                  {item.name}
                </a>
              )
            )}
            <Button variant="default" size="sm" className="ml-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Talk
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map(item => 
                item.isRoute ? (
                  <Link key={item.name} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium font-body" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ) : (
                  <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium font-body" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                )
              )}
              <Button variant="default" size="sm" className="w-fit mt-4" onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Let's Talk
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;