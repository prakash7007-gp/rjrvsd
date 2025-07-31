import React from "react";
import bgImage from "../assets/background2.jpg"; // Replace with your actual image

const Varmacourse = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[80vh] text-white flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Diploma in Varma Massage
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Learn the ancient healing art of Varma Massage, a traditional Tamil method of restoring balance and wellness through vital energy points.
          </p>

          <ul className="space-y-2 text-base text-gray-200 list-disc list-inside mb-6">
            <li>Certified 3-Month Professional Course</li>
            <li>Experienced Traditional Trainers</li>
            <li>Hands-on Practical & Live Sessions</li>
            <li>Government-Recognized Certification</li>
          </ul>

          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg text-white font-semibold">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Varmacourse;
