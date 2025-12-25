import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Coffee Street, Brew District', 'Melbourne, VIC 3000', 'Australia'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+61 3 1234 5678', '+61 4 9876 5432'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@Lkiecoffee.com', 'orders@Lkiecoffee.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 7:00 AM - 9:00 PM', 'Sat - Sun: 8:00 AM - 10:00 PM'],
  },
];

const Contact = () => {
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

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input
                      placeholder="John"
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    placeholder="How can we help you?"
                    className="h-12 bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button variant="default" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
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
                      Lkie Coffee Street, Brew District
                      <br />
                      Melbourne, VIC 3000
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
                a: 'We source our beans from premium coffee-growing regions including Colombia, Ethiopia, Brazil, and Indonesia, partnering directly with ethical farms.',
              },
              {
                q: 'Do you sell powder coffee online?',
                a: 'Yes! You can place orders through our contact form or visit our café. We offer shipping across Australia for all our powder coffee products.',
              },
              {
                q: 'Do you offer bulk orders for businesses?',
                a: 'Absolutely! We provide custom bulk orders for offices, restaurants, and events. Contact us for special pricing and packaging options.',
              },
              {
                q: 'Are your products organic?',
                a: 'We offer certified organic options including our Organic Arabica Powder. Look for the organic label on our product pages.',
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
