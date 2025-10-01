'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaCertificate } from 'react-icons/fa';
import { SiGraphicera } from 'react-icons/si';

export default function About() {
  const achievements = [
    {
      icon: <FaCode className="text-4xl text-purple-400" />,
      title: "1100+ LeetCode Problems",
      description: "Top 5% globally, demonstrating strong problem-solving skills",
      link: "https://leetcode.com/u/21011177/"
    },
    {
      icon: <FaCode className="text-4xl text-blue-400" />,
      title: "800+ GeeksForGeeks Problems",
      description: "Comprehensive algorithm and data structure mastery",
      link: "https://www.geeksforgeeks.org/user/pathaksantosh987/"
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
      title: "AIR-1 Coding Ninjas Contest",
      description: "Ninja Dominator Contest winner",
      link: "https://www.naukri.com/code360/profile/Lucife"
    },
    {
      icon: <FaTrophy className="text-4xl text-green-400" />,
      title: "2nd Place Hackathon",
      description: "Hack-o-Holic 24-hour Hackathon winner",
      link: "https://codeforces.com/profile/codeWar0011"
    }
  ];

  const certifications = [
    "Master Data Structures & Algorithms - CodeHelp",
    "Advanced C++ Programming - Coursera",
    "MongoDB CRUD Mastery - GeeksForGeeks"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Graphic Era Hill University</h4>
                  <p className="text-gray-300">Bachelor of Technology (CSE)</p>
                  <p className="text-sm text-gray-400">Aug 2021 - June 2025</p>
                  <p className="text-purple-400 font-semibold">CGPA: 8.01</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">Kids Paradise Public School</h4>
                  <p className="text-gray-300">Intermediate (CBSE)</p>
                  <p className="text-sm text-gray-400">July 2020 - June 2021</p>
                  <p className="text-blue-400 font-semibold">Percentage: 95.40%</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCertificate className="text-green-400" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-300 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Key <span className="text-purple-400">Achievements</span>
            </h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <motion.a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 mt-2">{achievement.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I am a passionate Full Stack Developer with a strong foundation in computer science and 
              extensive experience in modern web technologies. Currently working at Tedekstra, UK, 
              I specialize in building scalable applications using the MERN stack. My journey includes 
              solving over 1100+ LeetCode problems, winning coding competitions, and delivering 
              high-impact projects that drive business growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
