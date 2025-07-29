import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "alex.morgan@example.com",
      href: "mailto:alex.morgan@example.com"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
              >
                <SafeIcon icon={FiSend} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <SafeIcon icon={info.icon} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-900/50 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    title={social.label}
                  >
                    <SafeIcon icon={social.icon} className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">Let's Build Something Amazing</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project in mind, need technical consultation, or just want to connect, 
                I'm always excited to collaborate with fellow developers and innovators.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;