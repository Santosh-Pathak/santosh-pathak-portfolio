'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaCode, FaTerminal, FaServer, FaDatabase } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { useState, useEffect } from 'react';

export default function Hero() {
  // Main name typewriter effect state
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = 'Santosh Pathak';
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Background terminal typewriter state
  const [terminalText, setTerminalText] = useState('');
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [terminalIsDeleting, setTerminalIsDeleting] = useState(false);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  // Terminal 2 state
  const [terminal2Text, setTerminal2Text] = useState('');
  const [terminal2Index, setTerminal2Index] = useState(0);
  const [terminal2IsDeleting, setTerminal2IsDeleting] = useState(false);
  const [currentCommand2Index, setCurrentCommand2Index] = useState(0);

  // Terminal 3 state
  const [terminal3Text, setTerminal3Text] = useState('');
  const [terminal3Index, setTerminal3Index] = useState(0);
  const [terminal3IsDeleting, setTerminal3IsDeleting] = useState(false);
  const [currentCommand3Index, setCurrentCommand3Index] = useState(0);

  // Terminal 4 state
  const [terminal4Text, setTerminal4Text] = useState('');
  const [terminal4Index, setTerminal4Index] = useState(0);
  const [terminal4IsDeleting, setTerminal4IsDeleting] = useState(false);
  const [currentCommand4Index, setCurrentCommand4Index] = useState(0);

  // Terminal 5 state
  const [terminal5Text, setTerminal5Text] = useState('');
  const [terminal5Index, setTerminal5Index] = useState(0);
  const [terminal5IsDeleting, setTerminal5IsDeleting] = useState(false);
  const [currentCommand5Index, setCurrentCommand5Index] = useState(0);

  const terminalCommands = [
    'npm install react',
    'git commit -m "feat: add new feature"',
    'docker build -t myapp .',
    'kubectl apply -f deployment.yaml',
    'npm run build',
    'git push origin main',
    'npm test',
    'docker-compose up',
    'terraform apply',
    'npm start'
  ];

  const terminal2Commands = [
    'npm run build',
    'webpack --mode production',
    'tsc --build',
    'next build',
    'npm run compile',
    'rollup --config',
    'vite build',
    'parcel build src/index.html'
  ];

  const terminal3Commands = [
    'git status',
    'git add .',
    'git commit -m "fix: bug"',
    'git push origin main',
    'git pull origin main',
    'git branch feature',
    'git checkout main',
    'git merge feature'
  ];

  const terminal4Commands = [
    'docker ps',
    'docker build -t app .',
    'docker run -p 3000:3000 app',
    'docker-compose up',
    'docker logs container',
    'docker exec -it container bash',
    'docker stop container',
    'docker rm container'
  ];

  const terminal5Commands = [
    'npm test',
    'jest --watch',
    'npm run test:coverage',
    'cypress run',
    'npm run test:e2e',
    'jest --updateSnapshot',
    'npm run test:unit',
    'vitest run'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText, typingSpeed, deletingSpeed, pauseTime]);

  // Background terminal typewriter effect
  useEffect(() => {
    const currentCommand = terminalCommands[currentCommandIndex];
    const timer = setTimeout(() => {
      if (!terminalIsDeleting && terminalIndex < currentCommand.length) {
        setTerminalText(currentCommand.substring(0, terminalIndex + 1));
        setTerminalIndex(terminalIndex + 1);
      } else if (terminalIsDeleting && terminalIndex > 0) {
        setTerminalText(currentCommand.substring(0, terminalIndex - 1));
        setTerminalIndex(terminalIndex - 1);
      } else if (!terminalIsDeleting && terminalIndex === currentCommand.length) {
        setTimeout(() => setTerminalIsDeleting(true), 2000);
      } else if (terminalIsDeleting && terminalIndex === 0) {
        setTerminalIsDeleting(false);
        setCurrentCommandIndex((prev) => (prev + 1) % terminalCommands.length);
      }
    }, terminalIsDeleting ? 30 : 80);

    return () => clearTimeout(timer);
  }, [terminalIndex, terminalIsDeleting, currentCommandIndex, terminalCommands]);

  // Terminal 2 typewriter effect
  useEffect(() => {
    const currentCommand = terminal2Commands[currentCommand2Index];
    const timer = setTimeout(() => {
      if (!terminal2IsDeleting && terminal2Index < currentCommand.length) {
        setTerminal2Text(currentCommand.substring(0, terminal2Index + 1));
        setTerminal2Index(terminal2Index + 1);
      } else if (terminal2IsDeleting && terminal2Index > 0) {
        setTerminal2Text(currentCommand.substring(0, terminal2Index - 1));
        setTerminal2Index(terminal2Index - 1);
      } else if (!terminal2IsDeleting && terminal2Index === currentCommand.length) {
        setTimeout(() => setTerminal2IsDeleting(true), 2000);
      } else if (terminal2IsDeleting && terminal2Index === 0) {
        setTerminal2IsDeleting(false);
        setCurrentCommand2Index((prev) => (prev + 1) % terminal2Commands.length);
      }
    }, terminal2IsDeleting ? 30 : 80);

    return () => clearTimeout(timer);
  }, [terminal2Index, terminal2IsDeleting, currentCommand2Index, terminal2Commands]);

  // Terminal 3 typewriter effect
  useEffect(() => {
    const currentCommand = terminal3Commands[currentCommand3Index];
    const timer = setTimeout(() => {
      if (!terminal3IsDeleting && terminal3Index < currentCommand.length) {
        setTerminal3Text(currentCommand.substring(0, terminal3Index + 1));
        setTerminal3Index(terminal3Index + 1);
      } else if (terminal3IsDeleting && terminal3Index > 0) {
        setTerminal3Text(currentCommand.substring(0, terminal3Index - 1));
        setTerminal3Index(terminal3Index - 1);
      } else if (!terminal3IsDeleting && terminal3Index === currentCommand.length) {
        setTimeout(() => setTerminal3IsDeleting(true), 2000);
      } else if (terminal3IsDeleting && terminal3Index === 0) {
        setTerminal3IsDeleting(false);
        setCurrentCommand3Index((prev) => (prev + 1) % terminal3Commands.length);
      }
    }, terminal3IsDeleting ? 30 : 80);

    return () => clearTimeout(timer);
  }, [terminal3Index, terminal3IsDeleting, currentCommand3Index, terminal3Commands]);

  // Terminal 4 typewriter effect
  useEffect(() => {
    const currentCommand = terminal4Commands[currentCommand4Index];
    const timer = setTimeout(() => {
      if (!terminal4IsDeleting && terminal4Index < currentCommand.length) {
        setTerminal4Text(currentCommand.substring(0, terminal4Index + 1));
        setTerminal4Index(terminal4Index + 1);
      } else if (terminal4IsDeleting && terminal4Index > 0) {
        setTerminal4Text(currentCommand.substring(0, terminal4Index - 1));
        setTerminal4Index(terminal4Index - 1);
      } else if (!terminal4IsDeleting && terminal4Index === currentCommand.length) {
        setTimeout(() => setTerminal4IsDeleting(true), 2000);
      } else if (terminal4IsDeleting && terminal4Index === 0) {
        setTerminal4IsDeleting(false);
        setCurrentCommand4Index((prev) => (prev + 1) % terminal4Commands.length);
      }
    }, terminal4IsDeleting ? 30 : 80);

    return () => clearTimeout(timer);
  }, [terminal4Index, terminal4IsDeleting, currentCommand4Index, terminal4Commands]);

  // Terminal 5 typewriter effect
  useEffect(() => {
    const currentCommand = terminal5Commands[currentCommand5Index];
    const timer = setTimeout(() => {
      if (!terminal5IsDeleting && terminal5Index < currentCommand.length) {
        setTerminal5Text(currentCommand.substring(0, terminal5Index + 1));
        setTerminal5Index(terminal5Index + 1);
      } else if (terminal5IsDeleting && terminal5Index > 0) {
        setTerminal5Text(currentCommand.substring(0, terminal5Index - 1));
        setTerminal5Index(terminal5Index - 1);
      } else if (!terminal5IsDeleting && terminal5Index === currentCommand.length) {
        setTimeout(() => setTerminal5IsDeleting(true), 2000);
      } else if (terminal5IsDeleting && terminal5Index === 0) {
        setTerminal5IsDeleting(false);
        setCurrentCommand5Index((prev) => (prev + 1) % terminal5Commands.length);
      }
    }, terminal5IsDeleting ? 30 : 80);

    return () => clearTimeout(timer);
  }, [terminal5Index, terminal5IsDeleting, currentCommand5Index, terminal5Commands]);

  // Floating tech icons data
  const floatingIcons = [
    { icon: <SiJavascript className="text-yellow-400" />, delay: 0, duration: 8 },
    { icon: <SiReact className="text-blue-400" />, delay: 1, duration: 10 },
    { icon: <SiNodedotjs className="text-green-500" />, delay: 2, duration: 12 },
    { icon: <SiTypescript className="text-blue-600" />, delay: 3, duration: 9 },
    { icon: <SiNextdotjs className="text-gray-300" />, delay: 4, duration: 11 },
    { icon: <FaCode className="text-purple-400" />, delay: 5, duration: 7 },
    { icon: <FaTerminal className="text-green-400" />, delay: 6, duration: 13 },
    { icon: <FaServer className="text-orange-400" />, delay: 7, duration: 8 },
    { icon: <FaDatabase className="text-red-400" />, delay: 8, duration: 10 },
  ];

  // Code snippets for background
  const codeSnippets = [
    "const developer = new SantoshPathak();",
    "developer.skills = ['TypeScript', 'Next.js', 'Azure'];",
    "developer.experience = 'Full Stack Developer';",
    "developer.company = 'Tedekstra, UK';",
    "developer.leetcode = '1100+ problems solved';",
    "developer.projects = ['CRM Systems', 'Job Platforms'];",
    "developer.deploy();",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 font-mono text-green-400 text-sm">
          {codeSnippets.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.5, duration: 1 }}
              className="mb-2"
            >
              {line}
            </motion.div>
          ))}
        </div>
        <div className="absolute top-20 right-20 font-mono text-blue-400 text-sm">
          {codeSnippets.slice().reverse().map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 1 }}
              className="mb-2"
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Tech Icons - Much Larger */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          // Use consistent positioning based on index to avoid hydration mismatch
          const positions = [
            { left: 10, top: 20 },
            { left: 80, top: 15 },
            { left: 20, top: 80 },
            { left: 90, top: 60 },
            { left: 75, top: 95 },
            { left: 5, top: 10 },
            { left: 15, top: 20 },
            { left: 25, top: 85 },
            { left: 70, top: 90 }
          ];
          const pos = positions[index] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={index}
              className="absolute text-8xl md:text-9xl opacity-15"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, (index % 3) * 10 - 15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {item.icon}
            </motion.div>
          );
        })}
      </div>

      {/* Matrix-style Rain Effect - Larger */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => {
          // Use consistent characters and timing based on index
          const characters = ['0', '1', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'];
          const char = characters[i % characters.length];
          const duration = 3 + (i % 4); // 3-6 seconds
          const delay = (i % 3) * 0.5; // 0, 0.5, or 1 second delay
          
          return (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-lg md:text-xl opacity-25"
              style={{
                left: `${i * 4}%`,
                top: '-10px',
              }}
              animate={{
                y: ['0vh', '100vh'],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            >
              {char}
            </motion.div>
          );
        })}
      </div>

      {/* Background Terminal Typewriter - Multiple Terminals */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Terminal 1 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-20 left-10 bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-lg p-3 font-mono text-xs max-w-xs shadow-2xl"
        >
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-green-400 ml-1 text-xs">dev</span>
          </div>
          <div className="text-green-400">
            <div className="mb-1">
              <span className="text-blue-400">$</span> {terminalText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-green-400"
              >
                |
              </motion.span>
            </div>
            <div className="text-gray-400 text-xs">
              {terminalText.length > 0 && 'Executing...'}
            </div>
          </div>
        </motion.div>

        {/* Terminal 2 - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute top-20 right-10 bg-black/60 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3 font-mono text-xs max-w-xs shadow-2xl"
        >
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-blue-400 ml-1 text-xs">build</span>
          </div>
          <div className="text-blue-400">
            <div className="mb-1">
              <span className="text-purple-400">$</span> {terminal2Text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-blue-400"
              >
                |
              </motion.span>
            </div>
            <div className="text-gray-400 text-xs">
              {terminal2Text.length > 0 && 'Building...'}
            </div>
          </div>
        </motion.div>

        {/* Terminal 3 - Middle Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute top-1/2 left-5 bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-3 font-mono text-xs max-w-xs shadow-2xl"
        >
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-purple-400 ml-1 text-xs">git</span>
          </div>
          <div className="text-purple-400">
            <div className="mb-1">
              <span className="text-orange-400">$</span> {terminal3Text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-purple-400"
              >
                |
              </motion.span>
            </div>
            <div className="text-gray-400 text-xs">
              {terminal3Text.length > 0 && 'Git operations...'}
            </div>
          </div>
        </motion.div>

        {/* Terminal 4 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="absolute bottom-32 right-20 bg-black/60 backdrop-blur-sm border border-orange-400/30 rounded-lg p-3 font-mono text-xs max-w-xs shadow-2xl"
        >
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-orange-400 ml-1 text-xs">docker</span>
          </div>
          <div className="text-orange-400">
            <div className="mb-1">
              <span className="text-cyan-400">$</span> {terminal4Text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-orange-400"
              >
                |
              </motion.span>
            </div>
            <div className="text-gray-400 text-xs">
              {terminal4Text.length > 0 && 'Docker operations...'}
            </div>
          </div>
        </motion.div>

        {/* Terminal 5 - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="absolute top-32 left-20 bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 font-mono text-xs max-w-xs shadow-2xl"
        >
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-cyan-400 ml-1 text-xs">test</span>
          </div>
          <div className="text-cyan-400">
            <div className="mb-1">
              <span className="text-pink-400">$</span> {terminal5Text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </div>
            <div className="text-gray-400 text-xs">
              {terminal5Text.length > 0 && 'Running tests...'}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glitch Effect Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal-style Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 font-mono text-left max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 ml-4">terminal</span>
            </div>
            <div className="text-green-400">
              <div className="mb-2">
                <span className="text-blue-400">$</span> whoami
              </div>
              <div className="text-white mb-2">Santosh Pathak</div>
              <div className="mb-2">
                <span className="text-blue-400">$</span> cat role.txt
              </div>
              <div className="text-white mb-2">Full Stack Developer @ Tedekstra, UK</div>
              <div className="mb-2">
                <span className="text-blue-400">$</span> ls skills/
              </div>
              <div className="text-white">TypeScript, Next.js, React, Node.js, Azure, Terraform...</div>
            </div>
          </motion.div>

          {/* Typewriter-style Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 font-mono min-h-[120px] flex items-center justify-center"
              animate={{
                textShadow: [
                  "0 0 0px #00ff00",
                  "2px 0 0px #ff0000, -2px 0 0px #0000ff",
                  "0 0 0px #00ff00"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-green-400">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400"
                >
                  |
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Developer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
              <div className="text-green-400 font-mono text-sm">LEETCODE</div>
              <div className="text-white text-2xl font-bold">1100+</div>
              <div className="text-gray-400 text-xs">Problems Solved</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
              <div className="text-blue-400 font-mono text-sm">PROJECTS</div>
              <div className="text-white text-2xl font-bold">6+</div>
              <div className="text-gray-400 text-xs">Major Projects</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4">
              <div className="text-purple-400 font-mono text-sm">COMPANY</div>
              <div className="text-white text-lg font-bold">Tedekstra</div>
              <div className="text-gray-400 text-xs">UK Based</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-orange-400/30 rounded-lg p-4">
              <div className="text-orange-400 font-mono text-sm">EXPERIENCE</div>
              <div className="text-white text-lg font-bold">6+ Months</div>
              <div className="text-gray-400 text-xs">Years</div>
            </div>
          </motion.div>

          {/* Tech Stack Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-6 max-w-4xl mx-auto"
          >
            <div className="text-green-400 font-mono text-sm mb-4">TECH_STACK:</div>
            <div className="flex flex-wrap justify-center gap-4">
              {['TypeScript', 'Next.js', 'React', 'Node.js', 'MongoDB', 'Azure', 'Terraform', 'Grafana'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded text-green-400 font-mono text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 font-mono max-w-2xl mx-auto"
          >
            <div className="text-green-400 mb-4">
              <span className="text-blue-400">$</span> contact --info
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-white">
                <FaPhone className="text-green-400" />
                <span>+91 95287 90597</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <FaEnvelope className="text-green-400" />
                <span>pathaksantosh987@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links - Developer Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center gap-4 mt-8"
          >
            <motion.a
              href="https://github.com/Santosh-Pathak"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-black/40 backdrop-blur-sm border border-gray-600/30 hover:border-green-400/50 rounded-lg transition-all duration-300"
            >
              <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/santosh-pathak-68a971214/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-black/40 backdrop-blur-sm border border-gray-600/30 hover:border-blue-400/50 rounded-lg transition-all duration-300"
            >
              <FaLinkedin className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </div>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/21011177/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-black/40 backdrop-blur-sm border border-gray-600/30 hover:border-yellow-400/50 rounded-lg transition-all duration-300"
            >
              <SiLeetcode className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                LeetCode
              </div>
            </motion.a>
            <motion.a
              href="https://www.geeksforgeeks.org/user/pathaksantosh987/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-black/40 backdrop-blur-sm border border-gray-600/30 hover:border-green-400/50 rounded-lg transition-all duration-300"
            >
              <SiGeeksforgeeks className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GeeksForGeeks
              </div>
            </motion.a>
          </motion.div>

          {/* Developer Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-3 font-mono text-green-400 text-xs"
            >
              <div className="text-center">
                <div>scroll down</div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mt-2"
                >
                  ⬇
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
