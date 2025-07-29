import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      content: "RJR VSD provided me with not just education, but the confidence to excel in the tech industry. The faculty's guidance was exceptional.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The practical approach to learning and industry connections helped me land my dream job. Forever grateful to this institution.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The comprehensive curriculum and mentorship program prepared me well for the corporate world. Highly recommend RJR VSD.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-education-blue-light to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Alumni</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how RJR VSD has transformed careers and lives of thousands of students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 group"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: `slideUp 0.8s ease-out forwards ${index * 0.2}s both`
              }}
            >
              {/* Quote Icon */}
              <div className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-300">
                <Quote className="w-10 h-10" />
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;