import { BookOpen, Users, Award, Globe, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Certification from "@/pages/Certification";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "World-class curriculum designed by industry experts and academic leaders",
      gradient: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals",
      gradient: "from-primary to-primary-dark"
    },
    // {
    //   icon: Award,
    //   title: "Industry Recognition",
    //   description: "Accredited programs recognized by top employers worldwide",
    //   gradient: "bg-amber-500 "
    // },
    // {
    //   icon: Globe,
    //   title: "Global Network",
    //   description: "Connect with alumni and professionals across 50+ countries",
    //   gradient: "from-warning to-primary"
    // },
    // {
    //   icon: Lightbulb,
    //   title: "Innovation Hub",
    //   description: "State-of-the-art labs and research facilities for hands-on learning",
    //   gradient: "from-primary to-success"
    // },
    {
      icon: Target,
      title: "Career Success",
      description: "100% placement assistance with top companies and organizations",
      gradient: "from-education-blue to-warning"
    }
  ];

  return (
    <>
    <section className="py-20 bg-gradient-to-br from-education-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">RJR VSD</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience world-class education with cutting-edge facilities, expert faculty,
            and a commitment to your success that sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: `fadeIn 0.8s ease-out forwards ${index * 0.1}s both`
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-500"></div>
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
     <div className="bg-gradient-to-br from-education-blue-light py-2 px-4">
      <Certification
        name="S. R. Jeyadurai"
        course=" Diplomo in varma massage"
        date="July 31, 2025"
      />
    </div>
    </>
  );
};

export default FeaturesSection;