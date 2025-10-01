'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/Santosh-Pathak',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      url: 'https://www.linkedin.com/in/santosh-pathak-68a971214/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-xl" />,
      url: 'https://leetcode.com/u/21011177/',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'GeeksForGeeks',
      icon: <SiGeeksforgeeks className="text-xl" />,
      url: 'https://www.geeksforgeeks.org/user/pathaksantosh987/',
      color: 'hover:text-green-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Santosh Pathak
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer at Tedekstra, UK. Passionate about building scalable applications 
              and solving complex problems with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <FaPhone className="text-purple-400" />
              <span>+91 95287 90597</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaEnvelope className="text-purple-400" />
              <span>pathaksantosh987@gmail.com</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`flex items-center gap-3 text-gray-300 ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Santosh Pathak. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>using Next.js, Three.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
