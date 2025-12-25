import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Leaf, Users, ArrowRight } from 'lucide-react';
import aboutBarista from '@/assets/about-barista.jpg';
import cafeInterior from '@/assets/cafe-interior.jpg';

const values = [
  {
    icon: Heart,
    title: 'Quality',
    description: 'We never compromise on the quality of our beans or the care we put into every cup.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmental responsibility guides every decision, from sourcing to packaging.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building meaningful connections with our customers and coffee-growing partners.',
  },
  {
    icon: Shield,
    title: 'Authenticity',
    description: 'Staying true to traditional coffee craftsmanship while embracing innovation.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-coffee-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-cream rounded-full" />
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-cream rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in-up">
              Our Story of
              <br />
              <span className="text-accent">Passion & Craft</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
              From a small dream to a beloved coffee destination, Lkia Coffee House has been crafting exceptional coffee experiences since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                A Legacy Built on Quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lkia Coffee House was born from a simple yet powerful vision: to share the world's finest coffee with our community. What started as a small roastery in 2010 has grown into a beloved destination for coffee enthusiasts.
                </p>
                <p>
                  Our founder, inspired by travels through Colombia, Ethiopia, and Indonesia, discovered that great coffee is more than just a beverage—it's a craft, a culture, and a connection between people across continents.
                </p>
                <p>
                  Today, we continue that legacy by carefully sourcing premium beans, roasting them to perfection, and sharing our passion with every customer who walks through our doors or brews our coffee at home.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutBarista}
                  alt="Lkia Coffee barista preparing coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-10 shadow-soft">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium coffee experiences that delight the senses and bring people together. We are committed to excellence in every cup, from sourcing the finest beans to perfecting our signature blends.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-10 shadow-soft">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted and beloved coffee brand, both locally and globally, known for exceptional quality, sustainable practices, and creating memorable moments for coffee lovers everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Café Image Section */}
      <section className="relative">
        <div className="aspect-[21/9] relative overflow-hidden">
          <img
            src={cafeInterior}
            alt="Lkia Coffee House interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-warm flex items-center justify-center">
            <div className="text-center text-cream max-w-2xl px-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Visit Our Café
              </h2>
              <p className="text-cream/80 text-lg mb-8">
                Experience the Lkia difference in person. Our doors are always open for coffee lovers.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Find Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
