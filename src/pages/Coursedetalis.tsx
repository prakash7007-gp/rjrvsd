import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";

const semesters = [
  {
    title: "Semester 1",
    subjects: [
      "Introduction to Varma Science",
      "Human Anatomy & Physiology",
      "Traditional Diagnosis Methods",
      "Basic Massage Techniques",
      "Practical Lab & Case Studies",
    ],
  },
  {
    title: "Semester 2",
    subjects: [
      "Advanced Varma Therapy",
      "Injury Treatment Methods",
      "Pulse Reading & Marma Analysis",
      "Energy Healing Concepts",
      "Final Practical & Assessment",
    ],
  },
];

const CourseDetails = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Course Details</h1>

      <div className="space-y-4">
        {semesters.map((semester, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{semester.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 bg-white rounded-lg shadow-inner">
                  <ul className="list-disc list-inside space-y-1">
                    {semester.subjects.map((subject, subIndex) => (
                      <li key={subIndex}>{subject}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
