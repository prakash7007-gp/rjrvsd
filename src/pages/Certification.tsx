import React from "react";
import certImage from "@/assets/certificate.png"; // ✅ Replace with your image

const Certification = ({ name, course, date }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-12 p-6 gap-8">
      
      {/* ✅ Left Side: Benefits */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Benefits of an RJR VSD Certification
        </h2>

        <div className="space-y-5 text-gray-700 text-base leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl">✔</span>
            <div>
              <p className="font-semibold">CPD Accredited & Recognized</p>
              <p className="text-sm">Our certifications are industry-recognized and add value to your resumé.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl">🌟</span>
            <div>
              <p className="font-semibold">Skill-Oriented Education</p>
              <p className="text-sm">Designed to provide practical vocational and technical skills for real-world success.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl">🎯</span>
            <div>
              <p className="font-semibold">Career Growth</p>
              <p className="text-sm">Demonstrates your commitment to continuous learning and excellence.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl">📚</span>
            <div>
              <p className="font-semibold">Supportive Learning Environment</p>
              <p className="text-sm">Get access to expert trainers, lab facilities, and mentorship during your course.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl">🚀</span>
            <div>
              <p className="font-semibold">Boost Employability</p>
              <p className="text-sm">Share your certificate with employers and open doors to better job opportunities.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl">📈</span>
            <div>
              <p className="font-semibold">Life-Long Value</p>
              <p className="text-sm">RJR VSD certificates are valid for life and showcase your dedication to skill development.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Right Side: Certificate Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={certImage}
          alt="RJR Certificate"
          className="w-full max-w-md rounded-xl shadow-xl border-4 border-primary"
        />
      </div>
    </div>
  );
};

export default Certification;
