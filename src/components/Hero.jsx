import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } = FiIcons;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/20 rounded-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.img
            animate={floatingAnimation}
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Alex Morgan"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500/50 shadow-2xl"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Soumitra Dey
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-2"
        >
          MERN Stack Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting exceptional web experiences with MongoDB, Express.js, React, and Node.js. 
          Passionate about clean code, innovative solutions, and bringing ideas to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300"
          >
            <SafeIcon icon={FiDownload} />
            Download Resume
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: FiGithub, href: "https://github.com" },
            { icon: FiLinkedin, href: "https://linkedin.com" },
            { icon: FiMail, href: "mailto:alex@example.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              <SafeIcon icon={social.icon} className="text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <SafeIcon icon={FiChevronDown} className="text-2xl text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;