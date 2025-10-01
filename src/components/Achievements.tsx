'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaCode, FaAward, FaStar } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCoursera } from 'react-icons/si';

export default function Achievements() {
  const codingStats = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode className="text-yellow-500 text-4xl" />,
      stats: {
        problems: "1100+",
        rank: "Top 5% globally",
        contests: "Multiple contests participated"
      },
      link: "https://leetcode.com/u/21011177/",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-400/30"
    },
    {
      platform: "GeeksForGeeks",
      icon: <SiGeeksforgeeks className="text-green-500 text-4xl" />,
      stats: {
        problems: "800+",
        rank: "Strong problem-solving skills",
        contests: "Comprehensive algorithm mastery"
      },
      link: "https://www.geeksforgeeks.org/user/pathaksantosh987/",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    }
  ];

  const contestAchievements = [
    {
      title: "AIR-1 Coding Ninjas Contest",
      subtitle: "Ninja Dominator Contest Winner",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      description: "Achieved All India Rank 1 in Coding Ninjas Ninja Dominator Contest",
      link: "https://www.naukri.com/code360/profile/Lucife",
      badge: "1st Place"
    },
    {
      title: "Hack-o-Holic Hackathon",
      subtitle: "24-hour Hackathon Winner",
      icon: <FaMedal className="text-blue-500 text-3xl" />,
      description: "Led a winning team securing 2nd place in 24-hour hackathon",
      link: "https://codeforces.com/profile/codeWar0011",
      badge: "2nd Place"
    }
  ];

  const certifications = [
    {
      title: "Master Data Structures & Algorithms",
      provider: "CodeHelp",
      icon: <FaCertificate className="text-purple-500 text-2xl" />,
      description: "Comprehensive course covering advanced algorithms and data structures",
      link: "#",
      status: "Completed"
    },
    {
      title: "Advanced C++ Programming",
      provider: "Coursera",
      icon: <SiCoursera className="text-blue-500 text-2xl" />,
      description: "Advanced programming concepts and object-oriented design patterns",
      link: "#",
      status: "Completed"
    },
    {
      title: "MongoDB CRUD Mastery",
      provider: "GeeksForGeeks",
      icon: <SiGeeksforgeeks className="text-green-500 text-2xl" />,
      description: "Mastery of MongoDB operations and database management",
      link: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-purple-400">Achievements</span> & <span className="text-green-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Demonstrating excellence in competitive programming, problem-solving, and continuous learning 
            through various platforms and certifications.
          </p>
        </motion.div>

        {/* Coding Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaCode className="text-blue-400" />
            Coding Platform Statistics
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {codingStats.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${platform.color} backdrop-blur-sm rounded-2xl p-8 border ${platform.borderColor} hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  {platform.icon}
                  <div>
                    <h4 className="text-2xl font-bold text-white">{platform.platform}</h4>
                    <p className="text-gray-300">Competitive Programming</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Problems Solved:</span>
                    <span className="text-white font-bold text-xl">{platform.stats.problems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Rank:</span>
                    <span className="text-green-400 font-semibold">{platform.stats.rank}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Contests:</span>
                    <span className="text-blue-400 font-semibold">{platform.stats.contests}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contest Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaAward className="text-yellow-400" />
            Contest Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {contestAchievements.map((achievement, index) => (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    {achievement.badge}
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-yellow-400 font-semibold mb-3">{achievement.subtitle}</p>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaStar className="text-purple-400" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {cert.icon}
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-purple-400 text-sm">{cert.provider}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 text-sm font-semibold">{cert.status}</span>
                  <span className="text-xs text-gray-400">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Achievement <span className="text-purple-400">Summary</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">1900+</div>
                <div className="text-gray-300 text-sm">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">Top 5%</div>
                <div className="text-gray-300 text-sm">Global Rank</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">3</div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">2</div>
                <div className="text-gray-300 text-sm">Contest Wins</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
