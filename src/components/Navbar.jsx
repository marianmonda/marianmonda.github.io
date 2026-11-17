import React, { useEffect, useState, useRef } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [isStuck, setIsStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsStuck(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 980) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header ref={headerRef} className={`site-bar ${isStuck || menuOpen ? 'is-stuck' : ''}`}>
      <nav className="site-bar__inner">
        {/* Logo / Identidad */}
        <a
          href="#"
          className="site-bar__brand"
          aria-label="Volver al inicio"
          onClick={() => setMenuOpen(false)}
        >
          marian.monda<span>()</span>
        </a>

        {/* Zona derecha de la barra */}
        <div className="site-bar__right">
          {/* 1. Marcadores (se ocultan primero al empezar a empequeñecer < 980px) */}
          <ul className="site-bar__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="site-bar__link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-bar__controls">
            {/* 2. Controles de Idioma, Tema y CV a la derecha del todo (se ocultan al final en ventana pequeña <= 600px) */}
            <div className="site-bar__quick-actions">
              {/* Botón Selector de Idioma ES / EN */}
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="site-bar__language"
                aria-label="Cambiar idioma / Switch language"
              >
                <span className={language === 'es' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                  ES
                </span>
                <span className="text-zinc-300 dark:text-zinc-700 mx-1">/</span>
                <span className={language === 'en' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                  EN
                </span>
              </button>

              {/* Botón Modo Claro / Oscuro */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="site-bar__theme"
                aria-label="Alternar modo oscuro"
              >
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
              </button>

              {/* Botón CV a la derecha del todo */}
              <a
                href="/MarianMonda_Resume.pdf"
                download
                className="site-bar__cv"
              >
                <span>{t.cv}</span>
                <Download size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Botón Menú Desplegable (oculto en escritorio >= 980px) */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="site-bar__theme site-bar__menu-btn"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="site-bar__dropdown">
          <ul className="site-bar__dropdown-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="site-bar__dropdown-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Controles en el desplegable (solo aparecen cuando se ocultan de la barra en <= 600px) */}
          <div className="site-bar__dropdown-controls">
            <a
              href="/MarianMonda_Resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="site-bar__cv flex-1 justify-center"
            >
              <span>{t.cv}</span>
              <Download size={15} aria-hidden="true" />
            </a>

            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="site-bar__language"
              aria-label="Cambiar idioma / Switch language"
            >
              <span className={language === 'es' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                ES
              </span>
              <span className="text-zinc-300 dark:text-zinc-700 mx-1">/</span>
              <span className={language === 'en' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                EN
              </span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="site-bar__theme"
              aria-label="Alternar modo oscuro"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
