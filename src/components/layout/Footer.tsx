import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-cream/10 rounded-full transition-all duration-300 group-hover:bg-cream/20">
                <Coffee className="w-6 h-6 text-cream" />
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Crafting premium coffee experiences since 2017. From our carefully sourced beans to your cup, every sip tells a story of passion and perfection.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-').replace('our-', '')}`}
                    className="text-cream/70 hover:text-cream transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Coffee</h4>
            <ul className="space-y-3">
              {['Dark Roast Powder', 'Medium Roast Blend', 'Organic Arabica', 'Flavored Coffee', 'Gift Packs'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-cream/70 hover:text-cream transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-cream/70 text-sm">
                  Goro, Behind Yerer hospital<br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:0983039999" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  0983039999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:tootrade.36b@gmail.com" className="text-cream/70 text-sm hover:text-cream transition-colors">
                    tootrade.36b@gmail.com
                  </a>
                  <a href="mailto:lkiecoffeeww@gmail.com" className="text-cream/70 text-sm hover:text-cream transition-colors">
                    lkiecoffeeww@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {currentYear} Lkie Coffee House. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/50 text-sm hover:text-cream transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/50 text-sm hover:text-cream transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
