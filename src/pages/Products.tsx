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
    name: 'Classic Dark Roast Powder',
    description: 'Bold, rich, and full-bodied with notes of dark chocolate and smoky undertones. Perfect for espresso lovers.',
    price: 24.99,
    category: 'dark',
    notes: 'Dark Chocolate • Smoky • Bold',
    weights: ['250g', '500g', '1kg'],
    image: productDarkRoast,
  },
  {
    id: 2,
    name: 'Medium Roast Blend',
    description: 'Perfectly balanced with hints of caramel, toasted nuts, and a smooth, mellow finish.',
    price: 22.99,
    category: 'medium',
    notes: 'Caramel • Nutty • Smooth',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 3,
    name: 'Organic Arabica Powder',
    description: 'Single-origin certified organic beans with bright acidity, fruity notes, and floral undertones.',
    price: 28.99,
    category: 'light',
    notes: 'Fruity • Floral • Bright',
    weights: ['250g', '500g', '1kg'],
    image: productOrganicArabica,
  },
  {
    id: 4,
    name: 'Hazelnut Vanilla Blend',
    description: 'Aromatic and indulgent, infused with natural hazelnut and vanilla flavors for a luxurious experience.',
    price: 26.99,
    category: 'flavored',
    notes: 'Hazelnut • Vanilla • Sweet',
    weights: ['250g', '500g', '1kg'],
    image: productFlavored,
  },
  {
    id: 5,
    name: 'Espresso Supreme',
    description: 'Intensely rich with a thick crema. Our signature blend for authentic espresso shots.',
    price: 27.99,
    category: 'dark',
    notes: 'Intense • Crema • Robust',
    weights: ['250g', '500g', '1kg'],
    image: productDarkRoast,
  },
  {
    id: 6,
    name: 'Breakfast Blend',
    description: 'Light and refreshing with citrus notes. The perfect way to start your morning.',
    price: 21.99,
    category: 'light',
    notes: 'Citrus • Light • Refreshing',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
  {
    id: 7,
    name: 'Caramel Mocha',
    description: 'Sweet caramel meets rich chocolate in this decadent flavored coffee powder.',
    price: 25.99,
    category: 'flavored',
    notes: 'Caramel • Chocolate • Sweet',
    weights: ['250g', '500g', '1kg'],
    image: productFlavored,
  },
  {
    id: 8,
    name: 'House Blend',
    description: 'Our everyday favorite. A well-rounded medium roast that suits any brewing method.',
    price: 19.99,
    category: 'medium',
    notes: 'Balanced • Versatile • Classic',
    weights: ['250g', '500g', '1kg'],
    image: productMediumRoast,
  },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'dark', name: 'Dark Roast' },
  { id: 'medium', name: 'Medium Roast' },
  { id: 'light', name: 'Light Roast' },
  { id: 'flavored', name: 'Flavored' },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

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
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.name}
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
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium capitalize">
                    {product.category}
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
