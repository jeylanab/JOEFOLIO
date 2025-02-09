import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { value: 2, label: "Years of Experience" },
    { value: 15, label: "Projects Completed" },
    { value: 8, label: "Technologies Specialized" },
    { value: 500, label: "Code Commits on Github" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="relative py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-blue-800/20 blur-3xl"
      />
      
      <div
        ref={ref}
        className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-10 px-5 lg:px-20 relative z-10"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="glassmorphism p-6 rounded-xl shadow-lg border border-gray-700 text-center w-56"
          >
            <motion.h2
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1.1 } : {}}
              transition={{ duration: 0.5, yoyo: Infinity }}
              className="text-6xl font-extrabold text-white opacity-95"
            >
              {inView ? <CountUp end={stat.value} duration={2} /> : "0"}+
            </motion.h2>
            <p className="text-lg mt-2 text-gray-300 opacity-80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
