import React from 'react';

const logoMap = {
  JavaScript: ['javascript', 'javascript-original.svg'],
  Python: ['python', 'python-original.svg'],
  'C#': ['csharp', 'csharp-original.svg'],
  PHP: ['php', 'php-original.svg'],
  SQL: ['postgresql', 'postgresql-original.svg'],
  React: ['react', 'react-original.svg'],
  Angular: ['angular', 'angular-original.svg'],
  'ASP.NET Core': ['dotnetcore', 'dotnetcore-original.svg'],
  'Spring Boot': ['spring', 'spring-original.svg'],
  'Node.js': ['nodejs', 'nodejs-original.svg'],
  MySQL: ['mysql', 'mysql-original.svg'],
  PostgreSQL: ['postgresql', 'postgresql-original.svg'],
  Docker: ['docker', 'docker-original.svg'],
  'Git & GitHub': ['github', 'github-original.svg'],
  Vite: ['vite', 'vite-original.svg'],
  Linux: ['linux', 'linux-original.svg'],
};

export default function Skills({ t }) {
  return (
    <section id="skills" className="skills-section">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700 max-w-[70px] sm:max-w-[180px]"></div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-lg sm:text-xl">{t.number}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.title}
          </h2>
        </div>
        <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700 max-w-[70px] sm:max-w-[180px]"></div>
      </div>

      <div className="skills-grid">
        {t.categories.map((category, index) => {
          return (
            <div className="skill-row" key={`${category.title}-${index}`}>
              <h3>{category.title}</h3>
              <div className="skill-tools">
                {category.skills.map((skill) => {
                  const logo = logoMap[skill];
                  return (
                    <span className={`skill-tool${logo ? '' : ' skill-tool--text'}`} key={skill}>
                      {logo && (
                        <span className="skill-tool__logo">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo[0]}/${logo[1]}`}
                            alt=""
                            width="30"
                            height="30"
                            onError={(event) => { event.currentTarget.parentElement.style.display = 'none'; }}
                          />
                        </span>
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
