import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactSection({ t, onOpenModal }) {
  return (
    <section id="contact" className="contact-section py-20 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="inline-block font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm sm:text-base tracking-wider uppercase">
          {t.number}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t.title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          {t.description}
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={16} />
            {t.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
}
