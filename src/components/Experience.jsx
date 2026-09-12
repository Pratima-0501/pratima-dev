import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
        Experience
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
        My professional trajectory and engineering contributions.
      </p>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-6 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {exp.role} <span className="text-blue-600 dark:text-blue-400">@ {exp.company}</span>
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}