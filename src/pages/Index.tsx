import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Varmacourse from "./Varmacourse";
import CourseDetails from "./Coursedetalis";
import HeroSection1 from "@/components/Herosection1";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <TopBar /> */}
      <Navbar />
      <main>
        <HeroSection1 />
        {/* <StatisticsSection /> */}
        <FeaturesSection />
        <Varmacourse />
        <TestimonialsSection />
        <CTASection />
        <CourseDetails />
      </main>
    </div>
  );
};

export default Index;
