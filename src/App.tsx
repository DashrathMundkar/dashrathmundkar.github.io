/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import resumeData from './data/resume.json';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Terminal, 
  ChevronDown, 
  ExternalLink, 
  Download, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  Moon,
  Sun,
  Code
} from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true; // default to dark mode
  });

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'education', 'achievements', 'skills', 'projects', 'stackoverflow', 'connect'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-950 text-slate-200 selection:bg-sky-500/30'
        : 'bg-white text-slate-900 selection:bg-sky-500/50'
    }`}>
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedBackground isDarkMode={isDarkMode} />

          {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-md transition-colors ${
            isDarkMode
              ? 'border-white/5 bg-slate-950/50'
              : 'border-slate-200 bg-white/80'
          }`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className={`text-xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>DM</div>
              <div className={`hidden md:flex space-x-8 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {['Experience', 'Education', 'Achievements', 'Skills', 'Projects', 'Stack Overflow', 'Connect'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className={`transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-sky-400'
                        : isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-3">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-full transition-colors ${
                    isDarkMode
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href={`mailto:${resumeData.basics.email}`}
                  className={`hidden md:flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                    isDarkMode
                      ? 'text-white bg-white/10 hover:bg-white/20'
                      : 'text-slate-900 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </nav>

          {/* Scroll Spy Indicator */}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
            {['hero', 'experience', 'education', 'achievements', 'skills', 'projects', 'stackoverflow', 'connect'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-sky-400 h-8'
                    : isDarkMode
                      ? 'bg-white/20 hover:bg-white/50'
                      : 'bg-slate-400 hover:bg-slate-600'
                }`}
                aria-label={`Scroll to ${section}`}
              />
            ))}
          </div>

          <main className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-sky-500/20 backdrop-blur-sm"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
                  </span>
                  <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                    Available for new opportunities
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`text-4xl md:text-6xl font-black tracking-tighter leading-none ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {resumeData.basics.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h2 className={`text-xl md:text-2xl font-bold max-w-3xl leading-tight bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-slate-200 via-slate-300 to-slate-400'
                      : 'from-slate-700 via-slate-800 to-slate-900'
                  } bg-clip-text text-transparent`}>
                    {resumeData.basics.title}
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className={`text-lg md:text-xl font-medium max-w-3xl leading-relaxed ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  I'm a DevOps Engineer with 7+ years of experience designing, automating, and scaling cloud-native infrastructure using Azure, Kubernetes, and modern DevOps tooling. I specialize in building high-availability platforms, optimizing CI/CD pipelines, and enabling engineering teams to ship software faster, safer, and with full observability.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-wrap gap-4 pt-6"
                >
                  <button
                    onClick={() => scrollTo('experience')}
                    className={`group px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white hover:from-sky-400 hover:to-violet-400'
                        : 'bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-700 hover:to-slate-800'
                    }`}
                  >
                    <span>View Experience</span>
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                  <button className={`px-8 py-4 rounded-xl border-2 font-bold text-base transition-all duration-300 flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 ${
                    isDarkMode
                      ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                      : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 shadow-md'
                  }`}>
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className={`flex flex-wrap items-center gap-6 pt-8 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-white/5' : 'bg-slate-100'
                  }`}>
                    <MapPin className="w-5 h-5 text-sky-400" />
                    <span className="text-sm font-medium">{resumeData.basics.location}</span>
                  </div>
                  {resumeData.basics.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                        isDarkMode
                          ? 'hover:text-white hover:bg-white/10'
                          : 'hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {link.name === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                      {link.name === 'Portfolio' && <Github className="w-5 h-5" />}
                      {link.name === 'Personal' && <Globe className="w-5 h-5" />}
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 backdrop-blur-sm">
                    <Briefcase className="w-7 h-7 text-sky-400" />
                  </div>
                  <div>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Experience</h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Professional journey & achievements
                    </p>
                  </div>
                </div>

                <div className={`space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b ${
                  isDarkMode
                    ? 'before:from-transparent before:via-slate-700 before:to-transparent'
                    : 'before:from-transparent before:via-slate-300 before:to-transparent'
                }`}>
                  {resumeData.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${
                        isDarkMode
                          ? 'border-slate-950 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400 group-hover:text-sky-400 group-hover:from-sky-900/50 group-hover:to-violet-900/50 shadow-[0_0_0_4px_rgba(2,6,23,1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                          : 'border-white bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 group-hover:text-sky-500 group-hover:from-sky-50 group-hover:to-violet-50 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      
                      <motion.div
                        whileHover={{ y: -5 }}
                        className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl border-2 transition-all duration-300 backdrop-blur-sm ${
                          isDarkMode
                            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]'
                            : 'bg-gradient-to-br from-white to-slate-50/50 border-slate-200 hover:border-sky-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]'
                        }`}
                      >
                        <div className="flex flex-col space-y-2 mb-5">
                          <h3 className={`text-2xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>{exp.role}</h3>
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-base font-semibold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                              {exp.company}
                            </span>
                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                              isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                            }`}>{exp.dates}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-sky-400" />
                            <span className={isDarkMode ? 'text-slate-500' : 'text-slate-600'}>{exp.location}</span>
                          </div>
                        </div>
                        <ul className={`space-y-3 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 shrink-0" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Education & Certifications */}
            <section id="education" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 backdrop-blur-sm">
                    <GraduationCap className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Education & Certifications</h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Academic background & professional credentials
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Education */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      Academic Background
                    </h3>
                    {resumeData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative pl-8 pb-6 border-l-2 ${
                          isDarkMode ? 'border-purple-500/30' : 'border-purple-400/50'
                        } last:border-transparent last:pb-0`}
                      >
                        <div className={`absolute w-4 h-4 border-4 rounded-full -left-[9px] top-0 ${
                          isDarkMode
                            ? 'bg-slate-950 border-purple-500'
                            : 'bg-white border-purple-500'
                        }`} />
                        <div className={`p-5 rounded-xl ${
                          isDarkMode
                            ? 'bg-white/[0.03] hover:bg-white/[0.05]'
                            : 'bg-purple-50/50 hover:bg-purple-50'
                        } transition-colors`}>
                          <h4 className={`text-lg font-bold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>{edu.degree}</h4>
                          <div className="text-base font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-1">
                            {edu.institution}
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                            {edu.dates}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Certifications & Extra */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                  >
                    <div>
                      <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Certifications
                      </h3>
                      <ul className="space-y-3">
                        {resumeData.certifications.map((cert, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                            className={`flex items-start space-x-3 p-5 rounded-xl border-2 transition-all ${
                              isDarkMode
                                ? 'text-slate-300 bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30'
                                : 'text-slate-700 bg-white border-slate-200 hover:bg-purple-50/50 hover:border-purple-400/50 shadow-sm hover:shadow'
                            }`}
                          >
                            <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                            <span className="leading-snug font-medium">{cert}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {resumeData.extra.map((extra, index) => (
                      <div key={index}>
                        <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          {extra.type}
                        </h3>
                        <ul className="space-y-3">
                          {extra.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ x: 5 }}
                              className={`flex items-start space-x-3 p-5 rounded-xl border-2 transition-all ${
                                isDarkMode
                                  ? 'text-slate-300 bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-sky-500/30'
                                  : 'text-slate-700 bg-white border-slate-200 hover:bg-sky-50/50 hover:border-sky-400/50 shadow-sm hover:shadow'
                              }`}
                            >
                              <ExternalLink className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-snug font-medium">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm">
                    <Award className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Top Impact</h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Measurable results & achievements
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {resumeData.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`relative p-10 rounded-3xl border-2 overflow-hidden group cursor-default ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-amber-500/30'
                          : 'bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 border-slate-200 hover:border-amber-400/50 shadow-lg'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 group-hover:from-amber-500/30 group-hover:to-orange-500/30'
                          : 'bg-gradient-to-br from-amber-400/30 to-orange-400/30 group-hover:from-amber-400/40 group-hover:to-orange-400/40'
                      }`} />

                      {/* Number badge */}
                      <div className={`absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
                        isDarkMode
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-amber-100 text-amber-600'
                      }`}>
                        {index + 1}
                      </div>

                      <div className="relative z-10">
                        <h3 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-none bg-gradient-to-br ${
                          isDarkMode ? 'from-white via-amber-100 to-orange-200' : 'from-slate-900 via-amber-600 to-orange-600'
                        } bg-clip-text text-transparent`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm md:text-base leading-relaxed ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}>{achievement.context}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm">
                    <Terminal className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Technical Arsenal</h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Tools & technologies I work with
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {resumeData.skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-2xl border-2 ${
                        isDarkMode
                          ? 'bg-white/[0.02] border-white/10'
                          : 'bg-slate-50/50 border-slate-200'
                      }`}
                    >
                      <h3 className={`text-xl font-bold mb-6 pb-3 border-b-2 ${
                        isDarkMode
                          ? 'text-white border-emerald-500/20'
                          : 'text-slate-900 border-emerald-500/30'
                      }`}>{skillGroup.group}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-default ${
                              isDarkMode
                                ? 'bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-slate-200 hover:from-emerald-500/20 hover:to-green-500/20 hover:border-emerald-400/40 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                : 'bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-slate-800 hover:from-emerald-100 hover:to-green-100 hover:border-emerald-300 hover:text-slate-900 hover:shadow-md'
                            }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>


            {/* Projects Section */}
            <section id="projects" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm">
                    <Github className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>GitHub Projects</h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Open-source projects & contributions
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Private AKS Cluster Terraform",
                      description: "Infrastructure as Code for deploying a secure, private Azure Kubernetes Service cluster using Terraform",
                      tags: ["Terraform", "Azure", "Kubernetes", "IaC"],
                      url: "https://github.com/DashrathMundkar/private-aks-cluster-terraform"
                    },
                    {
                      title: "Setup Jenkins Terraform",
                      description: "Automated Jenkins CI/CD infrastructure provisioning using Terraform, enabling scalable and reproducible deployment pipelines",
                      tags: ["Terraform", "Jenkins", "CI/CD", "IaC"],
                      url: "https://github.com/DashrathMundkar/setup-jenkins-terraform"
                    },
                    {
                      title: "CI/CD Java Maven Project",
                      description: "Complete CI/CD pipeline for a Java Maven application with automated build, test, and deployment workflows",
                      tags: ["Java", "Maven", "CI/CD", "Jenkins"],
                      url: "https://github.com/DashrathMundkar/cicd-java-maven-project"
                    }
                  ].map((project, index) => (
                    <motion.a
                      key={index}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`relative p-8 rounded-2xl border-2 overflow-hidden group cursor-pointer transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                          : 'bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 border-slate-200 hover:border-blue-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30'
                          : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/30 group-hover:from-blue-400/40 group-hover:to-cyan-400/40'
                      }`} />

                      <div className="relative z-10 space-y-4">
                        {/* Header with icon */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-2 ${
                              isDarkMode ? 'text-white' : 'text-slate-900'
                            } group-hover:text-blue-400 transition-colors`}>
                              {project.title}
                            </h3>
                          </div>
                          <ExternalLink className={`w-5 h-5 shrink-0 ml-2 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${
                            isDarkMode ? 'text-slate-500 group-hover:text-blue-400' : 'text-slate-600 group-hover:text-blue-500'
                          }`} />
                        </div>

                        {/* Description */}
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-700'
                        }`}>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                                isDarkMode
                                  ? 'bg-blue-500/10 border border-blue-500/20 text-slate-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/40'
                                  : 'bg-blue-100 border border-blue-200 text-blue-700 group-hover:bg-blue-200'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* GitHub link hint */}
                        <div className={`text-xs font-medium flex items-center space-x-1 pt-2 transition-colors ${
                          isDarkMode
                            ? 'text-slate-600 group-hover:text-blue-400'
                            : 'text-slate-500 group-hover:text-blue-600'
                        }`}>
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Stack Overflow Contributions Section */}
            <section id="stackoverflow" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm">
                    <Code className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Stack Overflow Contributions</h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Highly upvoted answers helping the community
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      question: "Checking Kubernetes pod CPU and memory utilization",
                      answerUrl: "https://stackoverflow.com/questions/54531646/checking-kubernetes-pod-cpu-and-memory-utilization/62717009#62717009",
                      tags: ["Kubernetes", "Monitoring", "kubectl"],
                      upvotes: "450+",
                      description: "Comprehensive guide on monitoring CPU and memory utilization in Kubernetes pods with practical examples"
                    },
                    {
                      question: "kubectl delete but ignore ones with error",
                      answerUrl: "https://stackoverflow.com/questions/63467220/kubectl-delete-but-ignore-ones-with-error/63467323#63467323",
                      tags: ["kubectl", "Kubernetes", "Scripting"],
                      upvotes: "380+",
                      description: "Solution for safely deleting multiple Kubernetes resources while handling errors gracefully"
                    },
                    {
                      question: "How to find out the base image for a Docker image",
                      answerUrl: "https://stackoverflow.com/questions/58018422/how-to-find-out-the-base-image-for-a-docker-image/62968192#62968192",
                      tags: ["Docker", "Containers", "Image Analysis"],
                      upvotes: "520+",
                      description: "Detailed techniques for identifying the parent base image of a Docker image using various methods"
                    }
                  ].map((contribution, index) => (
                    <motion.a
                      key={index}
                      href={contribution.answerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`relative p-8 rounded-2xl border-2 overflow-hidden group cursor-pointer transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]'
                          : 'bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 border-slate-200 hover:border-orange-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30'
                          : 'bg-gradient-to-br from-orange-400/30 to-red-400/30 group-hover:from-orange-400/40 group-hover:to-red-400/40'
                      }`} />

                      <div className="relative z-10 space-y-4">
                        {/* Upvotes badge */}
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm ${
                          isDarkMode
                            ? 'bg-orange-500/20 border border-orange-500/30 text-orange-300'
                            : 'bg-orange-100 border border-orange-200 text-orange-700'
                        }`}>
                          <span>⬆️</span>
                          <span>{contribution.upvotes}</span>
                        </div>

                        {/* Question */}
                        <h3 className={`text-lg font-bold leading-snug ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } group-hover:text-orange-400 transition-colors`}>
                          {contribution.question}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-700'
                        }`}>
                          {contribution.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {contribution.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                                isDarkMode
                                  ? 'bg-orange-500/10 border border-orange-500/20 text-slate-300 group-hover:bg-orange-500/20 group-hover:border-orange-500/40'
                                  : 'bg-orange-100 border border-orange-200 text-orange-700 group-hover:bg-orange-200'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stack Overflow link hint */}
                        <div className={`text-xs font-medium flex items-center space-x-1 pt-2 transition-colors ${
                          isDarkMode
                            ? 'text-slate-600 group-hover:text-orange-400'
                            : 'text-slate-500 group-hover:text-orange-600'
                        }`}>
                          <ExternalLink className="w-4 h-4" />
                          <span>View Answer on Stack Overflow</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Connect with Me Section */}
            <section id="connect" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16"
              >
                <div className="flex items-center justify-center flex-col text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-sm">
                    <Mail className="w-7 h-7 text-pink-400" />
                  </div>
                  <div>
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Connect with Me</h2>
                    <p className={`text-sm mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Let's collaborate, discuss DevOps strategies, or just stay connected. Reach out through any of these channels.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  {[
                    {
                      name: "X (Twitter)",
                      description: "Follow for DevOps insights and tech updates",
                      url: "https://x.com/devops_sre18",
                      icon: Github, // Using Github icon as placeholder, could use custom
                      color: "from-black to-slate-800",
                      lightColor: "from-slate-900 to-slate-800",
                      hoverBorder: "hover:border-black/50",
                      hoverShadow: "hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                    },
                    {
                      name: "LinkedIn",
                      description: "Connect professionally",
                      url: "https://www.linkedin.com/in/dashrathmundkar/",
                      icon: Linkedin,
                      color: "from-blue-600 to-blue-700",
                      lightColor: "from-blue-500 to-blue-600",
                      hoverBorder: "hover:border-blue-500/50",
                      hoverShadow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                    },
                    {
                      name: "GitHub",
                      description: "Check out my projects",
                      url: "https://github.com/DashrathMundkar",
                      icon: Github,
                      color: "from-gray-800 to-gray-900",
                      lightColor: "from-gray-700 to-gray-800",
                      hoverBorder: "hover:border-gray-500/50",
                      hoverShadow: "hover:shadow-[0_0_30px_rgba(55,65,81,0.2)]"
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -12, scale: 1.05 }}
                      className={`relative p-8 rounded-2xl border-2 overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-pink-500/50'
                          : 'bg-gradient-to-br from-white to-slate-50/50 border-slate-200 hover:border-pink-400/50 shadow-lg'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-pink-500/20 to-rose-500/20 group-hover:from-pink-500/30 group-hover:to-rose-500/30'
                          : 'bg-gradient-to-br from-pink-400/30 to-rose-400/30 group-hover:from-pink-400/40 group-hover:to-rose-400/40'
                      }`} />

                      <div className="relative z-10 space-y-4 flex flex-col items-center">
                        {/* Icon */}
                        <div className={`p-4 rounded-full ${
                          isDarkMode
                            ? 'bg-white/10 group-hover:bg-white/20'
                            : 'bg-slate-100 group-hover:bg-slate-200'
                        } transition-colors`}>
                          <social.icon className={`w-8 h-8 ${
                            index === 0 ? 'text-black' :
                            index === 1 ? 'text-blue-600' :
                            'text-gray-800'
                          }`} />
                        </div>

                        {/* Name */}
                        <h3 className={`text-xl font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } group-hover:text-pink-500 transition-colors`}>
                          {social.name}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {social.description}
                        </p>

                        {/* Call to action */}
                        <div className={`text-xs font-medium flex items-center space-x-1 pt-4 transition-colors ${
                          isDarkMode
                            ? 'text-slate-600 group-hover:text-pink-400'
                            : 'text-slate-500 group-hover:text-pink-600'
                        }`}>
                          <ExternalLink className="w-4 h-4" />
                          <span>Connect</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Email CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center pt-8"
                >
                  <p className={`text-base mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Or reach out directly via email
                  </p>
                  <motion.a
                    href={`mailto:${resumeData.basics.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-400 hover:to-rose-400 shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
                        : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </section>

          </main>

          <footer className={`border-t backdrop-blur-md py-12 text-center ${
            isDarkMode
              ? 'border-white/5 bg-slate-950/50'
              : 'border-slate-200 bg-white/80'
          }`}>
            <div className="max-w-5xl mx-auto px-6 space-y-4">
              <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`}>
                Designed & Built with ❤️ using React + TypeScript
              </p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

