import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
        Technical Skills
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-xl mx-auto">
        Technologies and frameworks I utilize across frontend, backend, and cloud architectures.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((skill) => (
                <li key={skill} className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}