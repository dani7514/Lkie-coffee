import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import productDarkRoast from '@/assets/product-dark-roast.jpg';
import productMediumRoast from '@/assets/product-medium-roast.jpg';
import productOrganicArabica from '@/assets/product-organic-arabica.jpg';
import productFlavored from '@/assets/product-flavored.jpg';

const products = [
  {
    id: 1,
    name: 'Guji Medium Roast Powder',
    description: 'Premium single-origin coffee with complex fruity notes, wine-like acidity, and a smooth, balanced finish. Medium roasted to perfection.',
    price: 24.99,
    origin: 'Guji',
    roast: 'Medium',
    notes: 'Fruity • Wine-like • Balanced',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 2,
    name: 'Gofa Medium Roast Powder',
    description: 'Rich and full-bodied with notes of chocolate and caramel. A well-rounded medium roast that delivers exceptional flavor.',
    price: 22.99,
    origin: 'Gofa',
    roast: 'Medium',
    notes: 'Chocolate • Caramel • Rich',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 3,
    name: 'Jimma Medium Roast Powder',
    description: 'Bright and vibrant with floral notes and citrus undertones. Medium roasted to highlight its natural sweetness and complexity.',
    price: 28.99,
    origin: 'Jimma',
    roast: 'Medium',
    notes: 'Floral • Citrus • Bright',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 4,
    name: 'Yrga Chefe Medium Roast Powder',
    description: 'Elegant and refined with berry notes and a clean finish. Medium roasted to preserve its delicate flavor profile.',
    price: 26.99,
    origin: 'Yrga Chefe',
    roast: 'Medium',
    notes: 'Berry • Clean • Elegant',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 5,
    name: 'Harer Medium Roast Powder',
    description: 'Bold and aromatic with spicy notes and a distinctive character. Medium roasted to balance intensity with smoothness.',
    price: 27.99,
    origin: 'Harer',
    roast: 'Medium',
    notes: 'Spicy • Aromatic • Bold',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 6,
    name: 'Guji Premium Blend',
    description: 'A special selection from Guji region with enhanced fruity complexity and exceptional body. Medium roasted.',
    price: 29.99,
    origin: 'Guji',
    roast: 'Medium',
    notes: 'Complex • Fruity • Premium',
    weights: ['250g', '500g', '1kg'],
    image: productOrganicArabica,
  },
  {
    id: 7,
    name: 'Jimma Organic Medium Roast',
    description: 'Certified organic single-origin from Jimma with bright acidity and floral notes. Medium roasted for optimal flavor.',
    price: 31.99,
    origin: 'Jimma',
    roast: 'Medium',
    notes: 'Organic • Floral • Bright',
    weights: ['250g', '500g', '1kg'],
    image: productOrganicArabica,
  },
  {
    id: 8,
    name: 'Yrga Chefe Classic Blend',
    description: 'A classic representation of Yrga Chefe with balanced acidity and smooth finish. Medium roasted to perfection.',
    price: 25.99,
    origin: 'Yrga Chefe',
    roast: 'Medium',
    notes: 'Balanced • Smooth • Classic',
    weights: ['250g', '500g', '1kg'],
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

const Products = () => {
  const [activeOrigin, setActiveOrigin] = useState('all');

  const filteredProducts = activeOrigin === 'all'
    ? products
    : products.filter(product => product.origin === activeOrigin);

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
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Collection</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in-up">
              Premium Powder
              <br />
              <span className="text-accent">Coffee Collection</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
              Explore our curated selection of freshly ground coffee powders, each crafted for exceptional flavor and aroma.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
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
                  <p className="text-accent text-xs font-medium mb-3">
                    {product.notes}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.weights.map((weight, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        {weight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="font-serif text-xl font-bold text-primary">
                      From ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
