import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-xl mx-auto">
          Production systems, dynamic client-side apps, and creative web experiments.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-lg transition duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live <ExternalLink size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:underline"
                >
                  Code <Github size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}