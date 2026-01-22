import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';
import productMediumRoast from '@/assets/product-medium-roast.jpg';
import productOrganicArabica from '@/assets/product-organic-arabica.jpg';

const products = [
  {
    id: 1,
    name: 'Guji Medium Roast Powder',
    description: 'Premium single-origin coffee with complex fruity notes, wine-like acidity, and a smooth, balanced finish.',
    price: 24.99,
    origin: 'Guji',
    roast: 'Medium',
    image: productMediumRoast,
  },
  {
    id: 2,
    name: 'Gofa Medium Roast Powder',
    description: 'Rich and full-bodied with notes of chocolate and caramel. A well-rounded medium roast that delivers exceptional flavor.',
    price: 22.99,
    origin: 'Gofa',
    roast: 'Medium',
    image: productMediumRoast,
  },
  {
    id: 3,
    name: 'Jimma Medium Roast Powder',
    description: 'Bright and vibrant with floral notes and citrus undertones. Medium roasted to highlight its natural sweetness.',
    price: 28.99,
    origin: 'Jimma',
    roast: 'Medium',
    image: productMediumRoast,
  },
  {
    id: 4,
    name: 'Yrga Chefe Medium Roast Powder',
    description: 'Elegant and refined with berry notes and a clean finish. Medium roasted to preserve its delicate flavor profile.',
    price: 26.99,
    origin: 'Yrga Chefe',
    roast: 'Medium',
    image: productOrganicArabica,
  },
  {
    id: 5,
    name: 'Harer Medium Roast Powder',
    description: 'Bold and aromatic with spicy notes and a distinctive character. Medium roasted to balance intensity with smoothness.',
    price: 27.99,
    origin: 'Harer',
    roast: 'Medium',
    image: productMediumRoast,
  },
  {
    id: 6,
    name: 'Guji Premium Blend',
    description: 'A special selection from Guji region with enhanced fruity complexity and exceptional body. Medium roasted.',
    price: 29.99,
    origin: 'Guji',
    roast: 'Medium',
    image: productOrganicArabica,
  },
  {
    id: 7,
    name: 'Jimma Organic Medium Roast',
    description: 'Certified organic single-origin from Jimma with bright acidity and floral notes. Medium roasted for optimal flavor.',
    price: 31.99,
    origin: 'Jimma',
    roast: 'Medium',
    image: productOrganicArabica,
  },
  {
    id: 8,
    name: 'Yrga Chefe Classic Blend',
    description: 'A classic representation of Yrga Chefe with balanced acidity and smooth finish. Medium roasted to perfection.',
    price: 25.99,
    origin: 'Yrga Chefe',
    roast: 'Medium',
    image: productMediumRoast,
  },
];

const origins = [
  { id: 'all', name: 'All Origins' },
  { id: 'Guji', name: 'Guji' },
  { id: 'Gofa', name: 'Gofa' },
  { id: 'Jimma', name: 'Jimma' },
  { id: 'Yrga Chefe', name: 'Yrga Chefe' },
  { id: 'Harer', name: 'Harer' },
];

const FeaturedProducts = () => {
  const [activeOrigin, setActiveOrigin] = useState('all');

  const filteredProducts = activeOrigin === 'all'
    ? products.slice(0, 4) // Show first 4 products when "All Origins" is selected
    : products.filter(product => product.origin === activeOrigin).slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Featured Powder Coffee
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our premium selection of freshly ground coffee powder, crafted for the perfect brew every time.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground mr-4">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by Origin:</span>
          </div>
          {origins.map((origin) => (
            <button
              key={origin.id}
              onClick={() => setActiveOrigin(origin.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeOrigin === origin.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {origin.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                  {product.origin}
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-coffee-dark/80 text-cream rounded-full text-xs font-medium">
                  {product.roast} Roast
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center">
                  <span className="font-serif text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
