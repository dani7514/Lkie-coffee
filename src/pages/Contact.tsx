import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
import { API_URL } from "@/lib/api-config";

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Goro, Behind Yerer hospital ', 'Addis Ababa, Ethiopia'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['0983039999'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['tootrade.36b@gmail.com', 'lkiecoffeeww@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 7:00 AM - 9:00 PM', 'Sat - Sun: 8:00 AM - 10:00 PM'],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      // Combine firstName and lastName into name, and include subject in message if provided
      const fullName = `${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ""}`.trim();
      const messageWithSubject = formData.subject 
        ? `Subject: ${formData.subject}\n\n${formData.message}`
        : formData.message;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name: fullName,
          email: formData.email,
          phone: formData.phone || undefined,
          message: messageWithSubject,
        }),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseData.error || `Failed to send (${response.status})`);
      }

      if (responseData.success) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(responseData.error || "Failed to send");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      let errorMessage = "Unable to send message. Please try again later.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
        // Handle network errors
        if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError") || error.message.includes("ECONNREFUSED")) {
          errorMessage = "Unable to connect to server. Please try again later.";
        }
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-coffee-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-cream rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-cream rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in-up">
              We'd Love to
              <br />
              <span className="text-accent">Hear From You</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
              Have a question, feedback, or want to place a bulk order? Get in touch with us and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-12 bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="h-12 bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="h-12 bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button variant="default" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground">
                  Visit our café or reach out through any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-64 md:h-80 relative">
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">
                    Goro, Behind Yerer hospital 
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Where do you source your coffee beans?',
                a: 'We source our beans from premium coffee-growing regions including Guji, Gofa, Jimma, Yrga Chefe, Harer, partnering directly with ethical farms.',
              },
              {
                q: 'Do you offer bulk orders for businesses?',
                a: 'Absolutely! We provide custom bulk orders for offices, restaurants, and events. Contact us for special pricing and packaging options.',
              },
              {
                q: 'Are your products organic?',
                a: 'We offer certified organic options including our Organic Coffee Powder. Look for the organic label on our product pages.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
