'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedis, SiJenkins, SiAxios, SiTypescript, SiNextdotjs, SiMicrosoftazure, SiTerraform, SiGrafana } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: "Case Management CRM",
      description: "Comprehensive customer relationship management system with advanced case tracking, analytics, and automated workflows for enterprise clients.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Express.js", "Redis", "Chart.js", "Azure", "Terraform"],
      features: [
        "Advanced case tracking and management",
        "Real-time analytics dashboard",
        "Automated workflow management",
        "Role-based access control",
        "Multi-tenant architecture"
      ],
      github: "#",
      live: "#",
      status: "Production",
      company: "Tedekstra"
    },
    {
      title: "Jobber App",
      description: "Complete job management platform with real-time tracking, scheduling, client communication, and comprehensive reporting features.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Express.js", "WebSocket", "Socket.io", "Azure"],
      features: [
        "Real-time job tracking and updates",
        "Advanced scheduling system",
        "Client communication portal",
        "Comprehensive reporting",
        "Mobile-responsive design"
      ],
      github: "#",
      live: "#",
      status: "Production",
      company: "Tedekstra"
    },
    {
      title: "Energized Earth CRM",
      description: "Specialized CRM system for managing opportunities, jobs, tasks, leads, and conversion reports with advanced analytics and automation.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Express.js", "Chart.js", "D3.js", "Grafana", "Azure", "Terraform"],
      features: [
        "Lead management and tracking",
        "Opportunity pipeline management",
        "Task automation and scheduling",
        "Conversion analytics",
        "Custom reporting dashboard"
      ],
      github: "#",
      live: "#",
      status: "Production",
      company: "Tedekstra"
    },
    {
      title: "JobHunt - Job Seeking Platform",
      description: "Full-stack job-seeking platform enabling 500+ recruiters to efficiently post jobs and manage applicants with advanced filtering and matching.",
      image: "/api/placeholder/600/400",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "Jenkins"],
      features: [
        "Job posting and management",
        "Advanced applicant filtering",
        "Real-time notifications",
        "Resume parsing and matching",
        "Analytics dashboard"
      ],
      github: "https://github.com/Santosh-Pathak/JobHunt",
      live: "#",
      status: "Completed",
      company: "GEU Internship"
    },
    {
      title: "VideoTube - YouTube Clone",
      description: "High-performance video streaming platform featuring real-time video upload, user authentication, and interactive engagement features.",
      image: "/api/placeholder/600/400",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "JWT"],
      features: [
        "Video upload and streaming",
        "User authentication system",
        "Interactive comments and likes",
        "Video recommendations",
        "Responsive design"
      ],
      github: "https://github.com/Santosh-Pathak/VideoTube",
      live: "#",
      status: "Completed",
      company: "Personal Project"
    },
    {
      title: "Xcrypto - Cryptocurrency Tracker",
      description: "Real-time cryptocurrency market tracker with interactive charts, price alerts, and comprehensive market analysis using CoinGecko API.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Axios", "CoinGecko API", "Chart.js", "Tailwind CSS"],
      features: [
        "Real-time price tracking",
        "Interactive charts and graphs",
        "Price alerts and notifications",
        "Market analysis dashboard",
        "Mobile-responsive design"
      ],
      github: "https://github.com/Santosh-Pathak/Xcrypto",
      live: "#",
      status: "Completed",
      company: "Personal Project"
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
      'Axios': <SiAxios className="text-purple-500" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'Next.js': <SiNextdotjs className="text-gray-800" />,
      'Azure': <SiMicrosoftazure className="text-blue-500" />,
      'Terraform': <SiTerraform className="text-purple-600" />,
      'Grafana': <SiGrafana className="text-orange-500" />,
      'CoinGecko API': <FaCode className="text-yellow-500" />,
    };
    return iconMap[tech] || <FaCode className="text-purple-500" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            A showcase of my professional and personal projects, demonstrating expertise in full-stack development, 
            modern technologies, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaRocket className="text-6xl text-purple-400/50" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-400/30">
                    {project.company}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg text-white transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
