import { GraduationCap, Code, Briefcase, Heart, Microscope, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const Programs = () => {
  const programCategories = [
    {
      icon: Code,
      title: "Engineering & Technology",
      description: "Cutting-edge programs in Computer Science, Electronics, Mechanical, and more",
      programs: ["Computer Science Engineering", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering"],
      color: "from-primary to-primary-dark"
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      description: "Comprehensive business education preparing future leaders",
      programs: ["MBA", "BBA", "Finance", "Marketing"],
      color: "from-education-blue to-primary"
    },
    {
      icon: Heart,
      title: "Healthcare & Medicine",
      description: "Training the next generation of healthcare professionals",
      programs: ["Medicine", "Nursing", "Pharmacy", "Physiotherapy"],
      color: "from-success to-education-blue"
    },
    {
      icon: Microscope,
      title: "Science & Research",
      description: "Advanced programs fostering scientific innovation and discovery",
      programs: ["Physics", "Chemistry", "Biology", "Mathematics"],
      color: "from-warning to-primary"
    },
    {
      icon: Paintbrush,
      title: "Arts & Design",
      description: "Creative programs nurturing artistic talents and design thinking",
      programs: ["Fine Arts", "Graphic Design", "Interior Design", "Fashion Design"],
      color: "from-primary to-success"
    },
    {
      icon: GraduationCap,
      title: "Liberal Arts",
      description: "Holistic education developing critical thinking and communication",
      programs: ["English Literature", "Psychology", "Sociology", "Philosophy"],
      color: "from-education-blue to-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-education-blue-light to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover world-class programs designed to shape your future and unlock your potential
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: `fadeIn 0.8s ease-out forwards ${index * 0.1}s both`
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Programs List */}
                  <div className="space-y-2 mb-6">
                    {category.programs.map((program, idx) => (
                      <div key={idx} className="text-sm text-foreground/80 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {program}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Admission Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to begin your journey with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Apply Online", description: "Submit your application through our online portal" },
                { step: "2", title: "Document Review", description: "Our admission team reviews your documents" },
                { step: "3", title: "Interview", description: "Personal interview with faculty members" },
                { step: "4", title: "Confirmation", description: "Receive admission confirmation and join us" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 slide-up" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="btn-primary px-8 py-4 text-lg">
              Start Your Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;