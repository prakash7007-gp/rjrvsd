import { BookOpen, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Certification from "@/pages/Certification";
import bgImage from "@/assets/scssimage.jpg"; // ✅ Background image import

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "World-class curriculum designed by industry experts and academic leaders",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professors and industry professionals",
  },
  {
    icon: Target,
    title: "Career Success",
    description: "100% placement assistance with top companies and organizations",
  },
];

const FeaturesSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">RJR VSD</span>?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience world-class education with cutting-edge facilities, expert faculty,
              and a commitment to your success that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white shadow-lg hover:-translate-y-2 transition-all"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button size="lg" className="btn-primary px-8 py-4 text-lg">
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Below */}
      <div className="bg-gradient-to-br from-education-blue-light py-2 px-4">
        <Certification
          name="S. R. Jeyadurai"
          course="Diplomo in varma massage"
          date="July 31, 2025"
        />
      </div>
    </>
  );
};

export default FeaturesSection;
