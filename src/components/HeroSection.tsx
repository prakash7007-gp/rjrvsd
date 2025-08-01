import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ModelScene from "./Model"; // Updated background 3D model component

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js 3D Background with .glb model */}
      <ModelScene />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in mb-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 text-shadow leading-tight">
            RJR Vocational Skill
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
