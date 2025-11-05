import { useState, type FC } from "react";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImage from "@/assets/s7-logo.jpg";
import PlanFloatButton from "./PlanFloatButton";

// Floating WhatsApp contact button shown across pages via the Header
const WhatsAppFloatButton: FC = () => (
  <a
    href="https://wa.me/919962919086?text=Hello%21%20I%27d%20like%20to%20know%20more%20about%20S7%20Events%20%26%20Entertainments."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open WhatsApp chat"
    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg p-4 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
  >
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46 0 .11 5.34.11 11.94c0 2.1.56 4.15 1.62 5.96L0 24l6.27-1.64a11.88 11.88 0 0 0 5.79 1.48h.01c6.6 0 11.95-5.34 11.95-11.94 0-3.19-1.24-6.19-3.5-8.38ZM12.07 22.07h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.93 9.93 0 0 1-1.55-5.52c0-5.47 4.46-9.92 9.95-9.92 2.65 0 5.14 1.03 7.02 2.9a9.85 9.85 0 0 1 2.91 7.03c0 5.47-4.46 9.93-9.95 9.93Zm5.46-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.07-.15-.68-1.64-.94-2.25-.25-.6-.5-.52-.68-.53-.18-.01-.38-.01-.58-.01-.2 0-.54.08-.82.38-.28.3-1.07 1.04-1.07 2.55 0 1.5 1.1 2.95 1.26 3.15.15.2 2.16 3.3 5.24 4.62.73.31 1.29.49 1.73.62.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.44-.07-.13-.27-.21-.57-.36Z" />
    </svg>
  </a>
);
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
  return <>
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
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
    </header>
    <WhatsAppFloatButton />
    <PlanFloatButton />
  </>;
};
export default Header;