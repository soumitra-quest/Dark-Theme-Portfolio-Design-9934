import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "RESTful APIs", level: 92 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Jest Testing", level: 80 },
        { name: "Webpack", level: 75 },
        { name: "Figma", level: 85 }
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;