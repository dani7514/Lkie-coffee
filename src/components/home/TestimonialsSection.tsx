import { useState, useEffect, useMemo } from 'react';
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    content: "Lkie Coffee has completely transformed my morning routine. The dark roast powder delivers the perfect bold flavor I've been searching for. Absolutely exceptional quality!",
    rating: 5,
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Café Regular',
    content: "The cozy atmosphere and incredible coffee keep me coming back. Their baristas are true artists, and the hazelnut vanilla blend is simply divine. Best café in town!",
    rating: 5,
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Home Brewer',
    content: "I've tried countless coffee brands, but Lkie's organic arabica stands out. Fresh, flavorful, and ethically sourced – everything I look for in premium coffee.",
    rating: 5,
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
  },
];

const ITEMS_PER_PAGE = 6;

const STORAGE_KEY = 'lkie-coffee-testimonials';

const TestimonialsSection = () => {
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 0,
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  // Load testimonials from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const userTestimonials = JSON.parse(stored);
        setAllTestimonials([...defaultTestimonials, ...userTestimonials]);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      }
    }
  }, []);

  // Sort testimonials by date (newest first) and paginate
  const { sortedTestimonials, totalPages, paginatedTestimonials } = useMemo(() => {
    // Sort by date (newest first), with items without dates at the end
    const sorted = [...allTestimonials].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA; // Newest first
    });

    const total = Math.ceil(sorted.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginated = sorted.slice(startIndex, endIndex);

    return {
      sortedTestimonials: sorted,
      totalPages: total,
      paginatedTestimonials: paginated,
    };
  }, [allTestimonials, currentPage]);

  // Reset to page 1 when testimonials change
  useEffect(() => {
    setCurrentPage(1);
  }, [allTestimonials.length]);

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.content || formData.rating === 0) {
      toast.error('Please fill in all required fields and select a rating');
      return;
    }

    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: formData.name,
      role: formData.role || 'Customer',
      content: formData.content,
      rating: formData.rating,
      date: new Date().toISOString(),
    };

    // Get existing user testimonials
    const stored = localStorage.getItem(STORAGE_KEY);
    const userTestimonials = stored ? JSON.parse(stored) : [];
    const updatedTestimonials = [...userTestimonials, newTestimonial];

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTestimonials));

    // Update state
    setAllTestimonials([...defaultTestimonials, ...updatedTestimonials]);
    setCurrentPage(1); // Reset to first page to show newest testimonial

    // Reset form
    setFormData({ name: '', role: '', content: '', rating: 0 });
    setIsDialogOpen(false);
    toast.success('Thank you for your feedback! Your testimonial has been added.');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of testimonials section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          
          {/* Add Testimonial Button */}
          <div className="mt-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-cream/10 border-cream/20 text-cream hover:bg-cream/20">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Share Your Experience
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background text-foreground">
                <DialogHeader>
                  <DialogTitle>Share Your Feedback</DialogTitle>
                  <DialogDescription>
                    Help us improve by sharing your experience with Lkie Coffee.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Role (Optional)</label>
                    <Input
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g., Coffee Enthusiast, Café Regular"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rating *</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => handleRatingClick(rating)}
                          onMouseEnter={() => setHoveredRating(rating)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              rating <= (hoveredRating || formData.rating)
                                ? 'fill-accent text-accent'
                                : 'text-muted-foreground'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Feedback *</label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Tell us about your experience..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Submit Feedback</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {paginatedTestimonials.map((testimonial, index) => (
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
                {testimonial.date && (
                  <p className="text-cream/40 text-xs mt-1">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-cream/10 border-cream/20 text-cream hover:bg-cream/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="flex gap-1">
              {(() => {
                const pages: (number | string)[] = [];
                
                if (totalPages <= 7) {
                  // Show all pages if 7 or fewer
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  // Always show first page
                  pages.push(1);
                  
                  if (currentPage > 3) {
                    pages.push('...');
                  }
                  
                  // Show pages around current
                  const start = Math.max(2, currentPage - 1);
                  const end = Math.min(totalPages - 1, currentPage + 1);
                  
                  for (let i = start; i <= end; i++) {
                    pages.push(i);
                  }
                  
                  if (currentPage < totalPages - 2) {
                    pages.push('...');
                  }
                  
                  // Always show last page
                  pages.push(totalPages);
                }
                
                return pages.map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="px-2 text-cream/50">
                        ...
                      </span>
                    );
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page as number)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        currentPage === page
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-cream/10 text-cream hover:bg-cream/20'
                      }`}
                    >
                      {page}
                    </button>
                  );
                });
              })()}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-cream/10 border-cream/20 text-cream hover:bg-cream/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {/* Results Info */}
        {allTestimonials.length > 0 && (
          <div className="text-center mt-6 text-cream/60 text-sm">
            Showing {paginatedTestimonials.length} of {allTestimonials.length} testimonials
            {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
