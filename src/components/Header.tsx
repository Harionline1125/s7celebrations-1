import { useState } from "react";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Gallery",
    href: "#gallery"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/30">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>9962919086</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>s7eventsentertainments@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-[#ff4900]">
              S7 Events & Entertainments
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium font-body">
                {item.name}
              </a>)}
            <Button variant="default" size="sm" className="ml-4">
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
              {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium font-body" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <Button variant="default" size="sm" className="w-fit mt-4">
                Let's Talk
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;