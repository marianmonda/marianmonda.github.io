import React, { useState } from 'react';

export default function AboutSection({ t }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-divider py-20">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="flex-1 h-[1px] bg-zinc-300 dark:bg-zinc-800 max-w-[70px] sm:max-w-[180px]"></div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-lg sm:text-xl">{t.number}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.title}
          </h2>
        </div>
        <div className="flex-1 h-[1px] bg-zinc-300 dark:bg-zinc-800 max-w-[70px] sm:max-w-[180px]"></div>
      </div>

      {/* Contenido centrado: Foto más grande y texto más separado */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-16 max-w-6xl mx-auto">
        {/* Columna Izquierda: Foto */}
        <div className="shrink-0 flex justify-center">
          <div className="relative group w-80 sm:w-96 md:w-[390px] lg:w-[430px]">
            {/* Marco decorativo desplazado detrás */}
            <div className="absolute -inset-0.5 translate-x-3 translate-y-3 rounded-2xl border-2 border-emerald-500/40 dark:border-emerald-400/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* Contenedor de la imagen */}
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
              {!imgError ? (
                <img
                  src="/profile.jpg"
                  alt="Marian Monda"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-200/70 dark:from-zinc-900 dark:to-zinc-800/60">
                  <span className="font-mono text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    MM
                  </span>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {t.photoPlaceholder}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Texto mucho más grande y separado */}
        <div className="space-y-6 leading-snug max-w-xl text-center md:text-left">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? 'text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight text-zinc-900 dark:text-zinc-100'
                  : 'text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
