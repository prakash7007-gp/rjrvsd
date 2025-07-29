import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const benefits = [
    "World-class education with industry relevance",
    "100% placement assistance guarantee",
    "Scholarships for deserving students",
    "Modern campus with cutting-edge facilities"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Ready to Transform Your
              <span className="block text-primary-light">Future?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join thousands of successful graduates who started their journey with us. 
              Your success story begins here at RJR VSD Educational Trust.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start text-white/90 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary-light mr-3 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-10 py-4 h-auto group"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="btn-secondary text-lg px-10 py-4 h-auto"
            >
              Download Brochure
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-white/80 slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg mb-2">Have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <span>📞 +91 98765 43210</span>
              <span>✉️ admissions@rjrvsd.edu.in</span>
              <span>📍 Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;