import { Users, TrendingUp, BookOpen, Award } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Students Enrolled",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Graduation Rate",
      color: "text-success"
    },
    {
      icon: BookOpen,
      number: "200+",
      label: "Programs Available",
      color: "text-education-blue"
    },
    {
      icon: Award,
      number: "50+",
      label: "Years of Excellence",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands of Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has made us a leading educational institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="stat-card hover:shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${stat.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;