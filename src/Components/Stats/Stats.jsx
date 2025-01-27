import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const stats = [
    { value: 2, label: "Years of experience" },
    { value: 15, label: "Projects completed" },
    { value: 8, label: "Technologies mastered" },
    { value: 500, label: "Code commits" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="stats text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-10 px-5 lg:px-20" ref={ref}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-5xl font-extrabold opacity-95">
              {inView ? <CountUp end={stat.value} duration={2} /> : '0'}+
            </h2>
            <p className="text-lg mt-2 opacity-60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;