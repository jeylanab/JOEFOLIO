import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import "./Services.css";

const services = [
  { id: 1, title: "Web Development", description: "Building modern and efficient web applications using HTML5, CSS, JavaScript, React, and other latest technologies." },
  { id: 2, title: "Software Development", description: "Creating cross-platform mobile applications using different technologies including React Native and Kotlin." },
  { id: 3, title: "UI/UX Design", description: "Designing user-centric, visually appealing interfaces using tools like Figma, Adobe XD and other latest Technologies." },
  { id: 4, title: "Backend Development", description: "Developing robust and scalable server-side applications with Node.js and other latest framework or libraries." },
];

const ServiceCard = ({ id, title, description, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: id * 0.2, ease: "easeOut" }}
      className="glassmorphism p-6 rounded-xl shadow-lg border border-gray-700 text-start w-66  relative"
    >
      <motion.div className="flex justify-between num items-start mb-2">
        <motion.span className="text-5xl  text-white font-bold " >
          {`0${id}`}
        </motion.span>
        <motion.div whileHover={{ rotate: 90, scale: 1.2 }} transition={{ duration: 0.3 }}>
          <ArrowRightCircle className="w-10 arrow h-10 text-white hover:text-green-500 transition-colors duration-300" />
        </motion.div>
      </motion.div>
      <h3 className="text-2xl text-start font-semibold text-black">{title}</h3>
      <p className="opacity-80 text-black text-start text-sm mt-2">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <motion.div ref={ref} className="container mx-auto py-16 px-6 md:px-16 relative text-gray-300">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>
      <motion.div className="grid place-items-center justify-center grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} inView={inView} />
        ))}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-blue-700/20 blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
    </motion.div>
  );
};

export default ServicesSection;
