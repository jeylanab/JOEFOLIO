import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

// Service Data
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern and efficient web applications using HTML5, CSS, JavaScript, React, and other latest technologies.",
  },
  {
    id: 2,
    title: "Software Development",
    description: "Creating cross-platform mobile applications using different technologies including React Native and Kotlin.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing user-centric, visually appealing interfaces using tools like Figma and Adobe XD.",
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Developing robust server-side applications with Node.js.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Card Component for Reusability
const ServiceCard = ({ id, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="p-6 border border-gray-700 rounded-2xl shadow-xl relative bg-[#1a1a1a] text-white backdrop-blur-md bg-opacity-70 hover:bg-opacity-90 transition-all duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,255,100,0.4)" }}
    >
      {/* Number & Icon */}
      <div className="flex justify-between items-center mb-4">
        <motion.span 
          className="text-6xl font-bold text-gray-400"
          whileHover={{ color: "#2dda0a" }}
        >
          {`0${id}`}
        </motion.span>
        <motion.div 
          whileHover={{ rotate: 90, scale: 1.2 }} 
          transition={{ duration: 0.3 }}
        >
          <ArrowRightCircle className="w-10 h-10 text-gray-400 hover:text-green-500 transition-colors duration-300" />
        </motion.div>
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-semibold text-green-400">{title}</h3>
      <p className="opacity-80 text-sm mt-2">{description}</p>
    </motion.div>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <motion.div 
      className="text-gray-300 py-12 px-6 md:px-16 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-white relative"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      {/* Services Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </motion.div>
      
      {/* Decorative Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        style={{
          background: "radial-gradient(circle, rgba(45,218,10,0.2) 10%, rgba(26,26,26,0.9) 60%)",
        }}
      />
    </motion.div>
  );
};

export default ServicesSection;
