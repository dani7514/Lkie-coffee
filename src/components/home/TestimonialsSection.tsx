import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    content: "Lkie Coffee has completely transformed my morning routine. The dark roast powder delivers the perfect bold flavor I've been searching for. Absolutely exceptional quality!",
    rating: 5,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Café Regular',
    content: "The cozy atmosphere and incredible coffee keep me coming back. Their baristas are true artists, and the hazelnut vanilla blend is simply divine. Best café in town!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Home Brewer',
    content: "I've tried countless coffee brands, but Lkie's organic arabica stands out. Fresh, flavorful, and ethically sourced – everything I look for in premium coffee.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-coffee-dark text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-cream rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-cream rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] border border-cream rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-cream/70 text-lg">
            Don't just take our word for it – hear from our community of coffee lovers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-cream/5 backdrop-blur-sm rounded-2xl p-8 border border-cream/10 hover:border-cream/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/50 mb-6" />

              {/* Content */}
              <p className="text-cream/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Author */}
              <div>
                <h4 className="font-serif font-semibold text-cream">
                  {testimonial.name}
                </h4>
                <p className="text-cream/50 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
