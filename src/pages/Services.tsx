import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Coffee, Package, Truck, Users, Wifi, Clock, Check } from 'lucide-react';
import cafeInterior from '@/assets/cafe-interior.jpg';
import productDarkRoast from '@/assets/product-dark-roast.jpg';
import productMediumRoast from '@/assets/product-medium-roast.jpg';
import productOrganicArabica from '@/assets/product-organic-arabica.jpg';
import productFlavored from '@/assets/product-flavored.jpg';

const cafeServices = [
  'Freshly Brewed Coffee',
  'Espresso, Cappuccino, Latte, Mocha',
  'Artisan Pastries & Snacks',
  'Comfortable Seating Areas',
  'Free High-Speed Wi-Fi',
  'Private Meeting Spaces',
];

const powderProducts = [
  {
    name: 'Classic Dark Roast Powder',
    description: 'Bold and intense with rich chocolate undertones. Perfect for those who love a strong, full-bodied coffee.',
    weights: ['250g', '500g', '1kg'],
    prices: ['$12.99', '$22.99', '$39.99'],
    image: productDarkRoast,
  },
  {
    name: 'Medium Roast Blend',
    description: 'Balanced and smooth with caramel notes. An everyday favorite for coffee lovers.',
    weights: ['250g', '500g', '1kg'],
    prices: ['$11.99', '$21.99', '$37.99'],
    image: productMediumRoast,
  },
  {
    name: 'Organic Arabica Powder',
    description: 'Single-origin certified organic beans with bright acidity and fruity notes.',
    weights: ['250g', '500g', '1kg'],
    prices: ['$14.99', '$26.99', '$47.99'],
    image: productOrganicArabica,
  },
  {
    name: 'Hazelnut Vanilla Flavored',
    description: 'Aromatic and indulgent with natural hazelnut and vanilla flavors.',
    weights: ['250g', '500g', '1kg'],
    prices: ['$13.99', '$24.99', '$43.99'],
    image: productFlavored,
  },
];

const Services = () => {
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
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in-up">
              Premium Coffee
              <br />
              <span className="text-accent">Your Way</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
              Whether you visit our café or brew at home, we offer exceptional coffee experiences tailored to your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Café Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={cafeInterior}
                  alt="Lkie Coffee House café interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Coffee className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">Café Experience</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Cozy Café Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Step into Lkie Coffee House and experience the perfect blend of comfort and quality. Our welcoming space is designed for relaxation, productivity, and meaningful conversations over exceptional coffee.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cafeServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-6 pt-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Open 7am - 9pm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-accent" />
                  <span>Free Wi-Fi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powder Coffee Sales - Primary Focus */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Package className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm">Premium Collection</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powder Coffee Sales
            </h2>
            <p className="text-muted-foreground text-lg">
              Bring the Lkie experience home with our signature freshly ground powder coffee. Available in multiple sizes and roast profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {powderProducts.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 group"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6">
                        {product.description}
                      </p>
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {product.weights.map((weight, i) => (
                          <div key={i} className="text-center p-3 bg-secondary rounded-lg">
                            <span className="block text-xs text-muted-foreground mb-1">{weight}</span>
                            <span className="font-semibold text-foreground">{product.prices[i]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaway & Retail */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Takeaway */}
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Takeaway & Retail
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grab your favorite coffee on the go or pick up packaged products to enjoy at home. We offer:
              </p>
              <ul className="space-y-3">
                {['Fresh brewed coffee to-go', 'Packaged powder coffee', 'Coffee gift packs', 'Brewing accessories'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Orders */}
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Custom & Bulk Orders
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Perfect for offices, events, and businesses. Get premium powder coffee in larger quantities with customized packaging options:
              </p>
              <ul className="space-y-3">
                {['Office coffee supply', 'Event catering packages', 'Corporate gift sets', 'White-label options'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
