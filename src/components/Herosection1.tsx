import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVideo from "@/assets/background1.mp4";

const HeroSection1 = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in mb-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 text-shadow leading-tight">
            RJR Voctional Skill
            <span className="block text-primary-light">Development</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who trust EduTrust for world-class education,
            innovative programs, and career success. Your journey to excellence starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-4 h-auto group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button
              size="lg"
              className="btn-danger text-lg px-8 py-4 h-auto"
            >
              <Play className="mr-2 w-5 h-5 " />
              Virtual Campus Tour
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1; 