import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const CONTACT_EMAIL = 'marianimonda@gmail.com';

export default function ContactSection({ t, onOpenModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="contact" className="contact-section py-24 sm:py-28">
      <div className="max-w-4xl mx-auto flex flex-col items-start text-left space-y-8">
        {/* Número de sección */}
        <span className="inline-block font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm sm:text-base tracking-wider uppercase">
          {t.number}
        </span>

        {/* Título gigante en dos líneas estilo editorial */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] text-zinc-900 dark:text-white">
          <span className="block">{t.titleLine1}</span>
          <span className="block">
            {t.titleLine2}
            <span className="text-emerald-500 dark:text-emerald-400">.</span>
          </span>
        </h2>

        {/* Descripción */}
        <p className="max-w-lg sm:min-h-[5.25rem] text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {t.description}
        </p>

        {/* Correo clicable para copiar con línea inferior verde y tick pintado al lado */}
        <div className="pt-1">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-3.5 text-xl sm:text-2xl md:text-3xl font-medium text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span className="pb-2 border-b-3 border-emerald-500 dark:border-emerald-400">
              {CONTACT_EMAIL}
            </span>
            {copied && (
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="contact-drawn-tick text-emerald-500 dark:text-emerald-400 shrink-0 overflow-visible -mt-2"
                aria-label={t.copied}
              >
                <path
                  d="M4 15.5 C7.5 19, 10 22.5, 12.2 24 C16.5 16, 21.5 9, 27.5 3.5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Botón Pill para abrir el popup de Enviar mensaje */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenModal}
            className="contact-cta-pill inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border-1.5 border-zinc-900 dark:border-zinc-200 text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base transition-all cursor-pointer"
          >
            <span>{t.ctaButton}</span>
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
