import { Award, Users, Target, Heart, BookOpen, Globe } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in education and student development"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building character and ethical leadership in all our students"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering teamwork and community engagement"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing change and preparing students for the future"
    }
  ];

  const milestones = [
    { year: "1970", event: "Founded RJR VSD Educational Trust" },
    { year: "1985", event: "Opened first engineering college" },
    { year: "1995", event: "Launched management programs" },
    { year: "2005", event: "Established research centers" },
    { year: "2015", event: "Introduced online learning platforms" },
    { year: "2024", event: "50+ years of educational excellence" }
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
              About <span className="text-primary">RJR VSD</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over five decades, RJR VSD Educational Trust has been at the forefront of 
              educational excellence, shaping minds and building futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide world-class education that empowers students with knowledge, 
                  skills, and values necessary to excel in their chosen fields and contribute 
                  meaningfully to society. We are committed to fostering innovation, critical 
                  thinking, and ethical leadership.
                </p>
              </div>
            </div>
            
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                <div className="w-16 h-16 bg-education-blue rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be recognized as a premier educational institution that sets global 
                  standards for academic excellence, research innovation, and holistic 
                  development, creating leaders who shape the future of our world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-500"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: `fadeIn 0.8s ease-out forwards ${index * 0.1}s both`
                  }}
                >
                  <div className="w-20 h-20 bg-primary group-hover:bg-education-blue rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20"> */}
        {/* <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five decades of educational excellence and continuous growth
            </p>
          </div> */}

          {/* <div className="max-w-4xl mx-auto">
            <div className="relative"> */}
              {/* Timeline line */}
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: `slideUp 0.8s ease-out forwards ${index * 0.2}s both`
                  }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card rounded-xl p-6 shadow-soft">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div> */}
                  
                  {/* Timeline dot */}
                  {/* <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;