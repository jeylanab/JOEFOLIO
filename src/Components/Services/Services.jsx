import React from "react";
import { ArrowRightCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern and efficient web applications using React, JavaScript.",
    color: "text-white",
    hoverColor: "text-green-500",
  },
  {
    id: 2,
    title: "Software Development",
    description: "Creating cross-platform mobile applications using different technologies including React Native and Kotlin.",
    color: "text-white",
    hoverColor: "text-green-500",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing user-centric, visually appealing interfaces.",
    color: "text-white",
    hoverColor: "text-green-500",
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Developing robust server-side applications with Node.js.",
    color: "text-green-500",
    hoverColor: "text-green-700",
  },
];

const ServicesSection = () => {
  return (
    <div className=" text-gray-300 py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:animate-pulse"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col  items-start gap-2">
                <span className="text-6xl font-bold">{`0${service.id}`}</span>

              </div>
               <ArrowRightCircle className="w-10 h-10 text-gray-300 hover:text-green-500 hover:rotate-90 hover:scale-110 transition-transform duration-300" />
                </div>
                                <h3
                  className={`text-3xl font-semibold transition-colors ${service.hoverColor}`}
                >
                  {service.title}
                </h3>
            <p className="opacity-80">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
