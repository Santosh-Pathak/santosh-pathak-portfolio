'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-purple-400" />,
      title: "Phone",
      value: "+91 95287 90597",
      link: "tel:+919528790597"
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-400" />,
      title: "Email",
      value: "pathaksantosh987@gmail.com",
      link: "mailto:pathaksantosh987@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-green-400" />,
      title: "Location",
      value: "UK (Remote) / India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/santosh-pathak-68a971214/",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/Santosh-Pathak",
      color: "hover:text-gray-300"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-2xl" />,
      url: "https://leetcode.com/u/21011177/",
      color: "hover:text-yellow-500"
    },
    {
      name: "GeeksForGeeks",
      icon: <SiGeeksforgeeks className="text-2xl" />,
      url: "https://www.geeksforgeeks.org/user/pathaksantosh987/",
      color: "hover:text-green-500"
    },
    {
      name: "Codolio",
      icon: <FaExternalLinkAlt className="text-2xl" />,
      url: "https://codolio.com/profile/Lucifer96",
      color: "hover:text-purple-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 ${social.color}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="font-semibold">{social.name}</span>
                    <FaExternalLinkAlt className="text-xs ml-auto opacity-50" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="What's this about?"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to <span className="text-purple-400">Collaborate?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m currently available for freelance projects and full-time opportunities. 
              Let&apos;s discuss how we can work together to build something amazing!
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="mailto:pathaksantosh987@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Let&apos;s Talk
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/santosh-pathak-68a971214/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
