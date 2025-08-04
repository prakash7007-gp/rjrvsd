import React from "react";
import { motion } from "framer-motion";
import bgVector from "../assets/varmabg.jpg"; // Your abstract vector-style background
import rightImage from "../assets/varma2.jpg"; // Add your Varma image here

const Varmacourse = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgVector})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl "
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 text-primary text-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-black"> Diploma in </span> Varma Massage
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl  mb-6 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Learn the ancient healing art of Varma Massage, a traditional Tamil method of restoring balance and wellness through vital energy points.
            </motion.p>

            <motion.ul
              className="space-y-2 text-base text-gray-200 list-disc list-inside mb-6 text-black font-semiblod"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <li>Certified 3-Month Professional Course</li>
              <li>Experienced Traditional Trainers</li>
              <li>Hands-on Practical & Live Sessions</li>
              <li>Government-Recognized Certification</li>
            </motion.ul>

            <motion.button
              className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src={rightImage}
              alt="Varma Massage"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Varmacourse;
