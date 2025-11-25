import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919962919086";
    const message = "Hi! I'm interested in your event services. Can we discuss my requirements?";
    const encodedMessage = encodeURIComponent(message);
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Open WhatsApp app on mobile
      window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    } else {
      // Open WhatsApp Web on desktop
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    }
  };
  const contactInfo = [{
    icon: Phone,
    title: "Call Us",
    details: ["9962919086", "8754696030", "9363511307"],
    description: "Available 24/7 for your events"
  }, {
    icon: Mail,
    title: "Email Us",
  details: ["s7celebrations@gmail.com"],
    description: "We'll respond within 24 hours"
  }, {
    icon: MapPin,
    title: "Location",
    details: ["Tamil Nadu, India"],
    description: "Serving across Tamil Nadu"
  }, {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sun: 9:00 AM - 9:00 PM"],
    description: "Always ready for consultations"
  }];
  const socialLinks = [{
    icon: Instagram,
    name: "Instagram",
  handle: "S7 Celebrations",
    url: "#"
  }, {
    icon: Facebook,
    name: "Facebook",
  handle: "S7 Celebrations",
    url: "#"
  }];
  return <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's Plan Your <span className="text-primary italic">Special Day</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Ready to create unforgettable memories? Get in touch with us today and let's start planning 
            your perfect event together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Contact */}
          <Card className="bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl">Get In Touch Instantly</CardTitle>
              <CardDescription className="font-body">
                Start a conversation with us on WhatsApp and get immediate assistance for your event planning needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Chat with S7 Events</h3>
                  <p className="text-muted-foreground font-body mb-6">
                    Get instant responses to your queries about event planning, pricing, and availability.
                  </p>
                </div>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white font-body px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="mr-3 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground font-body">
                  Available 24/7 • Quick Response • Free Consultation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-1">{info.title}</h3>
                         <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => {
                            if (info.title === "Call Us") {
                              return (
                                <a key={detailIndex} href={`tel:+91${detail}`} className="text-foreground font-body font-medium hover:text-primary transition-colors cursor-pointer block">
                                  {detail}
                                </a>
                              );
                            } else if (info.title === "Email Us") {
                              return (
                                <a key={detailIndex} href={`mailto:${detail}`} className="text-foreground font-body font-medium hover:text-primary transition-colors cursor-pointer block">
                                  {detail}
                                </a>
                              );
                            } else {
                              return (
                                <p key={detailIndex} className="text-foreground font-body font-medium">
                                  {detail}
                                </p>
                              );
                            }
                          })}
                        </div>
                        <p className="text-muted-foreground font-body text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Social Media */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Follow Our Journey</h3>
                <p className="font-body mb-6 text-primary-foreground/80">
                  Stay connected with us on social media for the latest updates, 
                  behind-the-scenes content, and inspiration.
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
  href={social.name === "Instagram" ? "https://www.instagram.com/s7celebrations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" : "https://www.facebook.com/share/17Ea8M4aeJ/?mibextid=wwXIfr"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-primary-foreground/60 transition-colors cursor-pointer"
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <div className="font-body font-medium">{social.name}</div>
                        <div className="font-body text-sm text-primary-foreground/80">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Planning?
          </h3>
          <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
            Don't wait for the perfect moment – create it! Contact us today for a free consultation 
            and let's make your dream event a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="font-body"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;