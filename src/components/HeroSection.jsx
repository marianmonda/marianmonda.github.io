import React, { useEffect, useRef, useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import NodalTitle from './NodalTitle';

export default function HeroSection({ t, onOpenModal }) {
  const heroRef = useRef(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerPosition = useRef({ x: 0, y: 0 });
  const driftPosition = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('es-ES', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const updateClock = () => {
      setLocalTime(formatter.format(new Date()));
    };

    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const animateGrid = (time) => {
      const elapsed = Math.min(time - lastTime, 32);
      lastTime = time;

      const current = pointerPosition.current;
      const target = pointerTarget.current;
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      const heading = (time / 1000) * 0.09;
      const elapsedSeconds = elapsed / 1000;
      driftPosition.current.x = (driftPosition.current.x + Math.cos(heading) * 44 * elapsedSeconds) % 64;
      driftPosition.current.y = (driftPosition.current.y + Math.sin(heading) * 44 * elapsedSeconds) % 64;

      const hero = heroRef.current;
      if (hero) {
        hero.style.setProperty('--grid-x', `${current.x + driftPosition.current.x}px`);
        hero.style.setProperty('--grid-y', `${current.y + driftPosition.current.y}px`);
      }

      frameRef.current = requestAnimationFrame(animateGrid);
    };

    frameRef.current = requestAnimationFrame(animateGrid);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handlePointerMove = (event) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const offsetX = ((x / bounds.width) - 0.5) * -34;
    const offsetY = ((y / bounds.height) - 0.5) * -24;
    pointerTarget.current = { x: offsetX, y: offsetY };
    heroRef.current.style.setProperty('--pointer-x', `${x}px`);
    heroRef.current.style.setProperty('--pointer-y', `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="hero-canvas min-h-[calc(100svh+4px)] border-b-4 border-emerald-500 dark:border-emerald-400 flex flex-col justify-center items-center text-center w-full"
    >
      <div className="space-y-5 sm:space-y-6 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-12 flex flex-col items-center">
        <p className="hero-location text-[11px] sm:text-sm font-medium tracking-[0.14em] uppercase text-zinc-500 dark:text-zinc-400 px-2">
          <span>{t.location}</span>
          {localTime && (
            <>
              <span className="mx-2 text-emerald-500" aria-hidden="true">·</span>
              <span className="font-mono font-bold tabular-nums text-zinc-800 dark:text-zinc-100">
                {localTime}
              </span>
            </>
          )}
          <span className="mx-2 text-emerald-500" aria-hidden="true">·</span>
          <span className="text-emerald-600 dark:text-emerald-400">{t.availability}</span>
        </p>

        {/* Gran Título Nodal estilo OpenAI DevDay a pantalla completa */}
        <div className="w-full my-2 sm:my-3 px-2 sm:px-4">
          <NodalTitle />
        </div>

        {/* Titular y Perfil Centrado */}
        <div className="space-y-3 max-w-2xl mx-auto px-2 sm:px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-snug text-zinc-600 dark:text-zinc-300">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            {t.profile}
          </p>
        </div>

        {/* Botón Principal estilo Pill (como "Learn about OpenAI DevDay ↗") */}
        <div className="hero-actions pt-3 flex flex-wrap items-center justify-center">
          <a
            href="#projects"
            className="hero-action hero-action--primary inline-flex items-center gap-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md group cursor-pointer"
          >
            <span>{t.ctaProjects}</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#experience"
            className="hero-action inline-flex items-center rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-xs transition-all cursor-pointer"
          >
            {t.ctaExperience}
          </a>
          <a
            href="#contact"
            className="hero-action inline-flex items-center rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-xs transition-all cursor-pointer"
          >
            {t.ctaContact}
          </a>
        </div>

        {/* Social Links centrados */}
        <div className="flex items-center justify-center gap-5 pt-4 text-zinc-600 dark:text-zinc-400">
          <a
            href="https://github.com/marianmonda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/marianmonda/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <button
            type="button"
            onClick={onOpenModal}
            className="p-2.5 rounded-full hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
            aria-label="Email"
          >
            <Mail size={20} />
          </button>
        </div>
      </div>

      {/* Indicador lateral derecho de scroll con flecha estilo dibujada a mano */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          if (heroRef.current) {
            const navbarHeight = 68;
            const borderThickness = 4;
            const targetY = heroRef.current.offsetTop + heroRef.current.offsetHeight - borderThickness - navbarHeight;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }
        }}
        aria-label="Scroll down"
        className="hero-scroll-hint group flex flex-col items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer select-none"
      >
        <span className="font-mono text-xs sm:text-sm tracking-widest uppercase -rotate-6 transition-transform group-hover:rotate-0">
          scroll
        </span>
        <svg
          width="48"
          height="92"
          viewBox="0 0 42 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-16 sm:w-11 sm:h-20 text-emerald-600 dark:text-emerald-400 overflow-visible"
          aria-hidden="true"
        >
          {/* Trazo curvo con bucle estilo boceto a mano */}
          <path
            d="M22 3 C10 14, 7 32, 21 33 C32 34, 31 18, 20 21 C10 24, 15 48, 21 69"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Punta de la flecha dibujada a mano */}
          <path
            d="M11 58 C15 64, 19 69, 21 73 C24 67, 28 62, 32 57"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
