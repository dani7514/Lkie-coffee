import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm">Visit Us Today</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Experience
            <br />
            <span className="text-accent">Premium Coffee?</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Visit our café for a warm welcome and the finest coffee in town, or order our signature powder coffee to enjoy at home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" asChild>
              <Link to="/products">
                Shop Coffee
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Find Our Café
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
