import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Send } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Phone,
    title: "Call Us",
    details: ["9962919086", "8754696030", "9363511307"],
    description: "Available 24/7 for your events"
  }, {
    icon: Mail,
    title: "Email Us",
    details: ["s7eventsentertainments@gmail.com"],
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
    handle: "@s7_events_entertainments",
    url: "#"
  }, {
    icon: Facebook,
    name: "Facebook",
    handle: "S7 Events Entertainments",
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
          {/* Contact Form */}
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="font-body">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-body">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-body">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType" className="font-body">Event Type</Label>
                <Input id="eventType" placeholder="Wedding, Birthday, Corporate Event, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDate" className="font-body">Event Date</Label>
                <Input id="eventDate" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body">Message</Label>
                <Textarea id="message" placeholder="Tell us about your event vision, guest count, budget, and any special requirements..." rows={4} />
              </div>

              <Button size="lg" className="w-full font-body">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
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
                          {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-foreground font-body font-medium">
                              {detail}
                            </p>)}
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
                  {socialLinks.map((social, index) => <div key={index} className="flex items-center gap-3">
                      <social.icon className="w-5 h-5" />
                      <div>
                        <div className="font-body font-medium">{social.name}</div>
                        <div className="font-body text-sm text-primary-foreground/80">
                          {social.handle}
                        </div>
                      </div>
                    </div>)}
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