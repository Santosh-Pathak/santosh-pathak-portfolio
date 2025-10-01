'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaLanguage } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiExpress, 
  SiRedux, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiJenkins, 
  SiJira,
  SiCplusplus,
  SiFirebase,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTerraform,
  SiGrafana,
  SiConfluence
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaLanguage className="text-4xl text-blue-400" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 90 },
        { name: "Java", icon: <FaCode className="text-red-500" />, level: 85 },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" />, level: 80 },
        { name: "C", icon: <FaCode className="text-gray-500" />, level: 75 },
        { name: "SQL", icon: <FaDatabase className="text-orange-500" />, level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <FaCode className="text-4xl text-green-400" />,
      skills: [
        { name: "React.js", icon: <SiReact className="text-blue-500" />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 90 },
        { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 85 },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <SiCss3 className="text-blue-400" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl text-purple-400" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: 90 },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" />, level: 90 },
        { name: "RESTful APIs", icon: <FaServer className="text-blue-500" />, level: 85 },
        { name: "WebSockets", icon: <FaServer className="text-green-500" />, level: 80 },
        { name: "JWT Authentication", icon: <FaServer className="text-purple-500" />, level: 85 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-4xl text-yellow-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 90 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 80 },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 75 },
        { name: "Redis", icon: <FaDatabase className="text-red-500" />, level: 80 },
        { name: "Cloudinary", icon: <FaServer className="text-blue-500" />, level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaServer className="text-4xl text-cyan-400" />,
      skills: [
        { name: "Azure", icon: <SiMicrosoftazure className="text-blue-500" />, level: 85 },
        { name: "Terraform", icon: <SiTerraform className="text-purple-600" />, level: 80 },
        { name: "Grafana", icon: <SiGrafana className="text-orange-500" />, level: 75 },
        { name: "Jenkins", icon: <SiJenkins className="text-blue-600" />, level: 75 },
        { name: "Docker", icon: <FaCode className="text-blue-400" />, level: 70 }
      ]
    },
    {
      title: "Development Tools",
      icon: <FaTools className="text-4xl text-red-400" />,
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" />, level: 90 },
        { name: "GitHub", icon: <SiGithub className="text-gray-500" />, level: 95 },
        { name: "VS Code", icon: <FaCode className="text-blue-500" />, level: 95 },
        { name: "Postman", icon: <SiPostman className="text-orange-600" />, level: 85 },
        { name: "Jira", icon: <SiJira className="text-blue-500" />, level: 80 },
        { name: "Confluence", icon: <SiConfluence className="text-blue-600" />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Comprehensive expertise in modern web technologies, programming languages, 
            and development tools acquired through professional experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Additional <span className="text-purple-400">Expertise</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-3">Problem Solving</h4>
                <p className="text-gray-300 text-sm">
                  1100+ LeetCode problems solved, demonstrating strong algorithmic thinking and data structure mastery.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-3">Team Collaboration</h4>
                <p className="text-gray-300 text-sm">
                  Experience working with international teams across UK and India, delivering projects on time.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-3">Performance Optimization</h4>
                <p className="text-gray-300 text-sm">
                  Proven track record of improving system performance by 25-40% through optimization techniques.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
