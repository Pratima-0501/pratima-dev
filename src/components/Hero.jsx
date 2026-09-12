import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          {personalInfo.role}
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(' ')[0]}</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-500/20 transition"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium"
          >
            <FileText size={18} /> Resume
          </a>
        </div>

        <div className="mt-10 flex gap-6 justify-center text-slate-500 dark:text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition">
            <Github size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            <Linkedin size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}