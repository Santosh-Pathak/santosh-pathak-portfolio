'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedis, SiJenkins, SiTypescript, SiNextdotjs, SiMicrosoftazure, SiTerraform, SiGrafana } from 'react-icons/si';

export default function Experience() {
  const experiences = [
    {
      company: "Tedekstra",
      position: "Full Stack Software Developer",
      duration: "Current",
      location: "UK (Remote)",
      type: "Full-time",
      description: "Leading development of enterprise-level applications and CRM systems for UK-based clients. Working with Tedekstra's comprehensive offerings including bespoke software development, IT team augmentation, SaaS products, and managed IT services.",
      projects: [
        {
          name: "Case Management CRM",
          description: "Comprehensive customer relationship management system with advanced case tracking and analytics.",
          technologies: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Express.js", "Redis", "Azure", "Terraform"]
        },
        {
          name: "Jobber App",
          description: "Job management platform with real-time tracking, scheduling, and client communication features.",
          technologies: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Express.js", "WebSocket", "Azure"]
        },
        {
          name: "Energized Earth CRM",
          description: "Specialized CRM for managing opportunities, jobs, tasks, leads, and conversion reports with advanced analytics.",
          technologies: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Express.js", "Chart.js", "Grafana", "Azure", "Terraform"]
        }
      ],
      achievements: [
        "Delivered 3 major CRM projects within tight deadlines",
        "Improved system performance by 40% through optimization",
        "Implemented secure authentication and role-based access control",
        "Collaborated with international teams across UK and India"
      ],
      companyOfferings: {
        title: "Tedekstra Offerings",
        tagline: "Providing scalable solutions at all times for every need",
        services: [
          {
            name: "Bespoke Software Development",
            description: "Co-innovate solutions that fit your needs utilising our expertise and know-how."
          },
          {
            name: "IT Team Augmentation",
            description: "Hire our highly skilled resources to flex your team and build in-house capability."
          },
          {
            name: "Off-the-Shelf SaaS Products",
            description: "Built to plug industry white spaces offering innovation and cost effectiveness."
          },
          {
            name: "Managed IT Services",
            description: "Focus on things that matter the most by allowing TDK Global to manage your IT services."
          }
        ]
      }
    },
    {
      company: "Technology Business Incubator - Graphic Era (GEU)",
      position: "Software Engineer Intern",
      duration: "Jul 2024 - Oct 2024",
      location: "Dehradun, UK",
      type: "Internship",
      description: "Developed full-stack applications using MERN stack technologies with focus on scalability and performance.",
      projects: [
        {
          name: "JobHunt Website",
          description: "Full-stack job-seeking platform enabling 500+ recruiters to efficiently post jobs & manage applicants.",
          technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "Jenkins"]
        }
      ],
      achievements: [
        "Reduced system latency by 25% with efficient API handling and caching mechanisms",
        "Enhanced authentication security by integrating JWT & OAuth 2.0",
        "Optimized deployment pipelines with CI/CD automation",
        "Successfully delivered two major projects within internship period"
      ]
    }
  ];

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'MongoDB': <SiMongodb className="text-green-500" />,
      'Express.js': <SiExpress className="text-gray-500" />,
      'React.js': <SiReact className="text-blue-500" />,
      'Node.js': <SiNodedotjs className="text-green-600" />,
      'Redis': <SiRedis className="text-red-500" />,
      'Jenkins': <SiJenkins className="text-blue-600" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'Next.js': <SiNextdotjs className="text-gray-800" />,
      'Azure': <SiMicrosoftazure className="text-blue-500" />,
      'Terraform': <SiTerraform className="text-purple-600" />,
      'Grafana': <SiGrafana className="text-orange-500" />,
    };
    return iconMap[tech] || <FaCode className="text-purple-500" />;
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: expIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaBuilding className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-purple-400 font-semibold">{exp.position}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-purple-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRocket className="text-green-400" />
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg">{exp.description}</p>

              {/* Projects */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCode className="text-purple-400" />
                  Key Projects
                </h4>
                <div className="grid gap-6">
                  {exp.projects.map((project, projIndex) => (
                    <motion.div
                      key={projIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: projIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-xl p-6 border border-white/10"
                    >
                      <h5 className="text-lg font-semibold text-white mb-3">{project.name}</h5>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                          >
                            {getTechIcon(tech)}
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaUsers className="text-green-400" />
                  Key Achievements
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: achIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Company Offerings - Only for Tedekstra */}
              {exp.companyOfferings && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <FaBuilding className="text-blue-400" />
                    {exp.companyOfferings.title}
                  </h4>
                  <p className="text-gray-300 mb-6 italic">{exp.companyOfferings.tagline}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.companyOfferings.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: serviceIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                      >
                        <h5 className="text-lg font-semibold text-white mb-2">{service.name}</h5>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
