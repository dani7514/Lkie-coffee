import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Leaf, Heart, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-coffee.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 overlay-warm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cream/10 rounded-full blur-xl animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float-slow opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cream/10 rounded-full blur-xl animate-float opacity-50" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 animate-fade-in-up">
            <Coffee className="w-4 h-4 text-cream" />
            <span className="text-cream/90 text-sm font-medium">Premium Artisan Coffee</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight animate-fade-in-up delay-100">
            Crafted Coffee,
            <br />
            <span className="text-accent">Perfected Flavor</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Premium coffee blends made for true coffee lovers. Experience the perfect harmony of rich aroma, smooth texture, and unforgettable taste.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Explore Our Coffee
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream" asChild>
              <Link to="/contact">
                Visit Our Café
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 animate-fade-in-up delay-400">
            {[
              { icon: Leaf, text: 'Ethically Sourced' },
              { icon: Heart, text: 'Freshly Roasted' },
              { icon: Shield, text: 'Quality Guaranteed' },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-cream/70">
                <badge.icon className="w-4 h-4" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
