import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiUsers, FiTrendingUp, FiAward } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiCode, label: "Projects Completed", value: "50+" },
    { icon: FiUsers, label: "Happy Clients", value: "25+" },
    { icon: FiTrendingUp, label: "Years Experience", value: "3+" },
    { icon: FiAward, label: "Awards Won", value: "5" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 3 years of experience in the MERN stack, I specialize in creating 
              scalable web applications that deliver exceptional user experiences. My journey 
              began with a curiosity for how things work on the web, and it has evolved into 
              a passion for crafting elegant solutions to complex problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies. When I'm not coding, you'll find me exploring new frameworks, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={stat.icon} className="text-xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;