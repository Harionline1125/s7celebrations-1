import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { BACKEND_EMAIL_ENDPOINT } from "@/config";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please specify the event type"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Combine first and last name
      const fullName = `${data.firstName} ${data.lastName}`;
      
      // Prefer custom backend endpoint if provided (PHP/Node)
      const customEndpoint = BACKEND_EMAIL_ENDPOINT?.trim();
      if (customEndpoint) {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            name: fullName,
            email: data.email,
            phone: data.phone,
            eventType: data.eventType,
            eventDate: data.eventDate,
            message: data.message,
          }),
        });

        const rawAlt = await response.text();
        let resultAlt: any = {};
        try { resultAlt = rawAlt ? JSON.parse(rawAlt) : {}; } catch {}

        if (!response.ok || !resultAlt?.success) {
          const reason = resultAlt?.error || `Request failed (${response.status})`;
          throw new Error(reason);
        }

        toast({
          title: "Message Sent! 💌",
          description: "Thank you for reaching out! We'll get back to you within 24 hours.",
        });
        form.reset();
        return; // Done via custom backend
      }

      // Call Supabase Edge Function directly using the project ref (no VITE_* envs)
      const endpoint = `https://ndahuzihvcqhuocamljz.supabase.co/functions/v1/send-contact-email`;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        // Optional: public anon key for rate limiting/analytics on Supabase side
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kYWh1emlodmNxaHVvY2FtbGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4MjAyNjksImV4cCI6MjA3MzM5NjI2OX0.YNybDc4MDrZLBS_xl9GEuhPXxVDkEUj3f_HnVvHxLHM',
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: fullName,
          email: data.email,
          phone: data.phone,
          eventType: data.eventType,
          eventDate: data.eventDate,
          message: data.message,
        }),
      });

      // Safely parse JSON (handles empty bodies from 404/500)
      const raw = await response.text();
      let result: any = {};
      try {
        result = raw ? JSON.parse(raw) : {};
      } catch {
        // ignore JSON parse errors; we'll rely on status code
      }

      if (!response.ok || !result?.success) {
        const reason = result?.error || `Request failed (${response.status})`;
        throw new Error(reason);
      }

      if (result.success) {
        toast({
          title: "Message Sent! 💌",
          description: "Thank you for reaching out! We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const desc = error instanceof Error ? error.message : "Please try again or call us directly. We're here to help!";
      toast({
        title: "Oops! Something went wrong",
        description: desc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-body">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name" 
                        {...form.register("firstName")}
                        className={form.formState.errors.firstName ? "border-destructive" : ""}
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-sm text-destructive">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-body">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name" 
                        {...form.register("lastName")}
                        className={form.formState.errors.lastName ? "border-destructive" : ""}
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-sm text-destructive">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...form.register("email")}
                        className={form.formState.errors.email ? "border-destructive" : ""}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        {...form.register("phone")}
                        className={form.formState.errors.phone ? "border-destructive" : ""}
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="font-body">Event Type</Label>
                    <Input 
                      id="eventType" 
                      placeholder="Wedding, Birthday, Corporate Event, etc." 
                      {...form.register("eventType")}
                      className={form.formState.errors.eventType ? "border-destructive" : ""}
                    />
                    {form.formState.errors.eventType && (
                      <p className="text-sm text-destructive">{form.formState.errors.eventType.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="font-body">Event Date (Optional)</Label>
                    <Input 
                      id="eventDate" 
                      type="date" 
                      {...form.register("eventDate")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your event vision, guest count, budget, and any special requirements..." 
                      rows={4} 
                      {...form.register("message")}
                      className={form.formState.errors.message ? "border-destructive" : ""}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-body" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Your Love Story..." : "Send Your Love Story"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
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
                      href={social.name === "Instagram" ? "https://instagram.com/s7_events_entertainments" : "https://facebook.com/s7eventsentertainments"}
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