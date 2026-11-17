import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience({ t }) {
  return (
    <section id="experience" className="experience-section py-20">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="flex-1 h-[1px] bg-zinc-300 dark:bg-zinc-800 max-w-[70px] sm:max-w-[180px]"></div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-lg sm:text-xl">{t.number}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.title}
          </h2>
        </div>
        <div className="flex-1 h-[1px] bg-zinc-300 dark:bg-zinc-800 max-w-[70px] sm:max-w-[180px]"></div>
      </div>

      {/* Experience Item */}
      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l border-zinc-300 dark:border-zinc-700 space-y-6">
        <div className="relative">
          {/* Timeline Dot */}
          <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-zinc-100 dark:ring-zinc-900"></span>

          <div className="p-6 rounded-xl border border-zinc-300/90 dark:border-zinc-700/80 bg-white dark:bg-zinc-900 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-500 shrink-0" />
                {t.role}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {t.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {t.duration}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
