import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBriefcase, FiCalendar, FiMapPin } = FiIcons;

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of scalable web applications using MERN stack",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2022",
      description: [
        "Built and maintained multiple React.js applications",
        "Developed RESTful APIs using Node.js and Express.js",
        "Optimized database queries improving performance by 40%",
        "Participated in agile development processes and daily standups"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2020 - 2021",
      description: [
        "Created responsive web interfaces using React and CSS",
        "Collaborated with designers to implement pixel-perfect designs",
        "Integrated third-party APIs and payment gateways",
        "Maintained and updated existing client websites"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 hidden md:block"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <SafeIcon icon={FiCalendar} className="text-sm" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <SafeIcon icon={FiMapPin} className="text-sm" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;