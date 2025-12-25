import { Coffee, Sparkles, Home, Leaf } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Premium Coffee Beans',
    description: 'Sourced from the finest coffee-growing regions around the world, our beans are carefully selected for exceptional quality.',
  },
  {
    icon: Sparkles,
    title: 'Freshly Ground Powder',
    description: 'Our signature powder coffee is freshly ground to preserve maximum flavor and aroma in every cup.',
  },
  {
    icon: Home,
    title: 'Cozy Café Experience',
    description: 'Unwind in our warm, inviting space designed to make every visit a memorable coffee journey.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'We partner with ethical farms that prioritize environmental responsibility and fair trade practices.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The Lkia Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            What sets us apart is our unwavering commitment to quality, sustainability, and creating exceptional coffee experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
