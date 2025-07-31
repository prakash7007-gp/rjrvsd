import React from "react";
import bgImage from "../assets/certificate.avif";
import benefitImage from "../assets/Herobanner.jpg"; // rename and save uploaded image here

const Certification = ({ name, course, date }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-8 p-4 gap-6">
      
      {/* Left Side: Benefits of an Alison Certificate */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 rounded-xl ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits Of An Alison Certificate</h2>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="text-green-500 text-xl">✔</div>
            <div>
              <p className="font-semibold">Certify Your Skills</p>
              <p className="text-sm">A CPD accredited Alison Certificate certifies the skills you’ve learned</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-green-500 text-xl">🌟</div>
            <div>
              <p className="font-semibold">Stand Out From The Crowd</p>
              <p className="text-sm">Add your Alison Certification to your resumé and stay ahead of the competition</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-green-500 text-xl">🚀</div>
            <div>
              <p className="font-semibold">Advance in Your Career</p>
              <p className="text-sm">Share your Alison Certification with potential employers to show off your skills and capabilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Certificate */}
      <div className="w-full md:w-1/2">
        <div
          className="w-full p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-center border-4 border-red-600 relative overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/10 z-0 rounded-xl"></div>

          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-2 sm:mb-4 uppercase">
              Certificate of Completion
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">This is proudly presented to</p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black my-2 sm:my-4">
              {name}
            </h1>

            <p className="text-gray-700 text-base sm:text-lg">For successfully completing the course:</p>
            <h3 className="text-lg sm:text-xl font-bold text-red-500 mt-2 mb-4">{course}</h3>

            <p className="text-gray-600 mt-2 sm:mt-4">
              Date: <span className="font-medium">{date}</span>
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between px-2 sm:px-8 text-xs sm:text-sm text-gray-500 gap-4 sm:gap-0">
              <div className="flex-1">
                <hr className="border-t-2 border-gray-400 w-24 sm:w-40 mx-auto mb-1" />
                <p>Authorized Signatory</p>
              </div>
              <div className="flex-1">
                <hr className="border-t-2 border-gray-400 w-24 sm:w-40 mx-auto mb-1" />
                <p>Course Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
