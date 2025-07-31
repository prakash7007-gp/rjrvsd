import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVideo from "@/assets/Herobanner.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
       {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
       {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroVideo})` }}
      >
        {/* Optional: Overlay for readability */}
        <div className="absolute inset-0 bg-red/30"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
            RJR Voctional Skill
            <span className="block  leading-tight">Development</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who trust EduTrust for world-class education,
            innovative programs, and career success. Your journey to excellence starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/programs">
              <Button
                size="lg"
                className="btn-primary text-lg px-8 py-4 h-auto group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {/* <Button
              size="lg"

              className="btn-danger text-lg px-8 py-4 h-auto"
            >
              <Play className="mr-2 w-5 h-5 " />
              Virtual Campus Tour
            </Button> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary-light mb-2">15,000+</div>
              <div className="text-white/80">Students Enrolled</div>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary-light mb-2">95%</div>
              <div className="text-white/80">Graduation Rate</div>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-primary-light mb-2">200+</div>
              <div className="text-white/80">Programs Available</div>
            </div>
          </div> */}
        </div>
      </div>


    </section>
  );
};

export default HeroSection;