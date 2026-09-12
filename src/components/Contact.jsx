import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Whether you have an inquiry, a project idea, or just want to connect, feel free to drop a message.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 transition"
        >
          <Mail size={18} /> Say Hello <Send size={16} />
        </a>

        <footer className="mt-16 text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </footer>
      </div>
    </section>
  );
}