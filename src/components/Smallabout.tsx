import { Link } from "react-router-dom";
import aboutImg from "@/assets/mylogo.png"; // Replace with your image path

const HomeAboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Image Section */}
          <div className="fade-in">
            <img
              src={aboutImg}
              alt="About RJR VSD"
              className="w-full max-w-md md:max-w-lg mx-auto md:ml-10 rounded-2xl transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              About <span className="text-primary">RJR VSD Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For over 50 years, RJR Vocational Skill Development Educational Trust has been
              dedicated to transforming lives through high-quality vocational education. 
              Our mission is to empower individuals with practical skills, integrity, and innovation.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-primary font-semibold text-sm mb-6">
              <div>📅 50+ Years Experience</div>
              <div>🎓 10,000+ Students Trained</div>
              <div>🏅 100% Skill Certification</div>
            </div>

            <Link to="/about">
              <button className="bg-primary text-white px-6 py-3 rounded-xl text-lg hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
