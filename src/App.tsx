/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  ExternalLink,
  Terminal,
  Database,
  Cpu,
  Github
} from 'lucide-react';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-2"
    >
      <div className="h-px w-12 bg-bat-accent" />
      <h2 className="text-3xl font-bold tracking-tighter uppercase text-bat-accent text-glow">
        {title}
      </h2>
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-zinc-500 ml-16 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const SkillCard = ({ icon: Icon, name, description }: { icon: any; name: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bat-card group"
  >
    <div className="w-12 h-12 rounded-lg bg-bat-accent/10 flex items-center justify-center mb-4 group-hover:bg-bat-accent/20 transition-colors">
      <Icon className="w-6 h-6 text-bat-accent" />
    </div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-zinc-400 text-sm">{description}</p>
  </motion.div>
);

const ProjectCard = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bat-card flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-bat-accent/5 rounded-md">
        <Terminal className="w-5 h-5 text-bat-accent" />
      </div>
      <ExternalLink className="w-4 h-4 text-zinc-600 hover:text-bat-accent cursor-pointer" />
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-bat-accent transition-colors">{title}</h3>
    <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-zinc-300">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [typedName, setTypedName] = useState('');
  const fullName = "KAVIN KISHORE P";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i));
      i++;
      if (i > fullName.length) clearInterval(interval);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bat-black selection:bg-bat-accent selection:text-bat-black cursor-none">
      {/* Custom Cursor Glow */}
      <div 
        className="cursor-glow hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bat-signal" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bat-signal" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        <div className="scan-line" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bat-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-bat-accent flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-bat-accent rounded-full animate-pulse" />
            KAVIN<span className="text-white">KISHORE</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-bat-accent transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-bat-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bat-gradient opacity-50" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 border border-bat-accent/30 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-bat-accent mb-8 bg-bat-accent/5 flicker-text"
            >
              Computer Science Student
            </motion.div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none min-h-[1.2em]">
              <span className="text-bat-accent text-glow">
                {typedName}
                <span className="inline-block w-[4px] h-[0.8em] bg-bat-accent ml-2 animate-pulse" />
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              A responsible and orderly Computer Science enthusiast dedicated to building efficient solutions and exploring the depths of technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(250,204,21,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-bat-accent text-bat-black font-bold uppercase tracking-widest rounded-lg transition-all"
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "rgba(250,204,21,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/10 font-bold uppercase tracking-widest rounded-lg transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-bat-accent to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The Profile" 
            subtitle="I consider myself a responsible and orderly person, looking forward to my first professional work experience where I can contribute and grow."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bat-card">
                <p className="text-zinc-300 leading-relaxed italic">
                  "I am looking forward to my first work experience. I am a dedicated student with a strong foundation in computer science principles and a passion for problem-solving."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-white/5 rounded-2xl bg-white/5">
                  <div className="text-bat-accent text-3xl font-bold mb-1">2023</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Started Journey</div>
                </div>
                <div className="p-6 border border-white/5 rounded-2xl bg-white/5">
                  <div className="text-bat-accent text-3xl font-bold mb-1">2+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Key Projects</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border border-white/10 group">
              <img 
                src="https://picsum.photos/seed/batman/1200/800?grayscale" 
                alt="Abstract Dark Tech" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bat-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-bat-accent mb-2">Location</div>
                <div className="text-2xl font-bold">Namakkal, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-bat-gray/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Education" subtitle="Academic background and foundation in engineering." />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bat-card border-l-4 border-l-bat-accent"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-bat-accent mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Bachelor of Engineering</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">M. Kumarasamy College of Engineering</h3>
                <p className="text-zinc-400">Computer Science and Engineering</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-white">2023 — 2027</div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">Current Degree</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Computer Skills" subtitle="Technical arsenal and programming proficiencies." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={Code2} 
              name="Java Programming" 
              description="Strong understanding of OOP concepts, data structures, and building robust applications using Java."
            />
            <SkillCard 
              icon={Database} 
              name="DBMS" 
              description="Experience with Database Management Systems, SQL queries, and designing efficient database schemas."
            />
            <SkillCard 
              icon={Cpu} 
              name="C Programming" 
              description="Solid foundation in procedural programming, memory management, and low-level system interactions."
            />
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-bat-accent" /> English
            </div>
            <div className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-bat-accent" /> Tamil
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-bat-gray/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Projects" subtitle="Featured work and technical implementations." />
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Snake Game"
              description="A classic arcade game implementation using C programming. Focused on game logic, real-time input handling, and efficient rendering in a console environment."
              tags={['C Programming', 'Game Logic', 'Console UI']}
            />
            <ProjectCard 
              title="Flight Ticket Booking"
              description="A comprehensive flight reservation system developed using Python. Features include flight search, seat selection, and booking management logic."
              tags={['Python', 'System Design', 'Automation']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bat-signal opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader title="Contact Me" subtitle="Let's connect and discuss potential opportunities." />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <a href="mailto:kavinkishore250@gmail.com" className="bat-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-bat-accent/10 flex items-center justify-center group-hover:bg-bat-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-bat-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email</div>
                  <div className="text-sm font-bold">kavinkishore250@gmail.com</div>
                </div>
              </a>
              <a href="tel:+916383127641" className="bat-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-bat-accent/10 flex items-center justify-center group-hover:bg-bat-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-bat-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Phone</div>
                  <div className="text-sm font-bold">+91 63831 27641</div>
                </div>
              </a>
              <div className="bat-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-bat-accent/10 flex items-center justify-center group-hover:bg-bat-accent/20 transition-colors">
                  <MapPin className="w-5 h-5 text-bat-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Location</div>
                  <div className="text-sm font-bold">Namakkal, Tamil Nadu</div>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/kavin-P-525206328" target="_blank" rel="noopener noreferrer" className="bat-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-bat-accent/10 flex items-center justify-center group-hover:bg-bat-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-bat-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">LinkedIn</div>
                  <div className="text-sm font-bold">kavin-P-525206328</div>
                </div>
              </a>
            </div>

            <div className="lg:col-span-2">
              <form className="bat-card space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-bat-accent/50 transition-colors" placeholder="Bruce Wayne" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-bat-accent/50 transition-colors" placeholder="bruce@waynecorp.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-bat-accent/50 transition-colors resize-none" placeholder="I have a mission for you..." />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-bat-accent text-bat-black font-bold uppercase tracking-widest rounded-lg transition-all"
                >
                  Send Signal
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            © {new Date().getFullYear()} KAVIN KISHORE P. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Linkedin className="w-4 h-4 text-zinc-500 hover:text-bat-accent cursor-pointer transition-colors" />
            <Github className="w-4 h-4 text-zinc-500 hover:text-bat-accent cursor-pointer transition-colors" />
            <Mail className="w-4 h-4 text-zinc-500 hover:text-bat-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
