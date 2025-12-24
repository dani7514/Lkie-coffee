import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import productDarkRoast from '@/assets/product-dark-roast.jpg';
import productMediumRoast from '@/assets/product-medium-roast.jpg';
import productOrganicArabica from '@/assets/product-organic-arabica.jpg';
import productFlavored from '@/assets/product-flavored.jpg';

const products = [
  {
    id: 1,
    name: 'Classic Dark Roast',
    description: 'Bold, rich, and full-bodied with notes of dark chocolate and smoky undertones.',
    price: 24.99,
    image: productDarkRoast,
  },
  {
    id: 2,
    name: 'Medium Roast Blend',
    description: 'Perfectly balanced with hints of caramel and a smooth, mellow finish.',
    price: 22.99,
    image: productMediumRoast,
  },
  {
    id: 3,
    name: 'Organic Arabica',
    description: 'Single-origin organic beans with bright acidity and fruity notes.',
    price: 28.99,
    image: productOrganicArabica,
  },
  {
    id: 4,
    name: 'Hazelnut Vanilla',
    description: 'Aromatic blend infused with natural hazelnut and vanilla flavors.',
    price: 26.99,
    image: productFlavored,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Featured Powder Coffee
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our premium selection of freshly ground coffee powder, crafted for the perfect brew every time.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
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
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button variant="default" size="sm">
                    View Details
                  </Button>
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
