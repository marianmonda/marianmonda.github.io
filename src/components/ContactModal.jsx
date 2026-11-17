import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, Send, Check, Copy, Loader2, AlertCircle } from 'lucide-react';

const CONTACT_EMAIL = 'marianimonda@gmail.com';
const WEB3FORMS_ACCESS_KEY = 'c3674512-48cf-4b3f-9ed2-11f2f3d9954c';

export default function ContactModal({ isOpen, onClose, t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `[Portfolio] Mensaje de ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: `${formData.name.trim()} (Portfolio)`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || t.errorDesc);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.errorDesc);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 transition-all">
        {/* Botón cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {status !== 'success' ? (
          <div>
            {/* Cabecera */}
            <div className="mb-6 space-y-2 pr-8">
              <h3
                id="contact-modal-title"
                className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
              >
                {t.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Alerta de error si falla el envío */}
            {status === 'error' && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 flex items-start gap-3 text-red-700 dark:text-red-300 text-xs leading-relaxed animate-in fade-in duration-200">
                <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                <div className="flex-1">
                  <p className="font-semibold">{t.errorTitle}</p>
                  <p className="mt-0.5">{errorMessage || t.errorDesc}</p>
                </div>
              </div>
            )}

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo oculto Honeypot contra spam de Web3Forms */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    {t.nameLabel} <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    disabled={status === 'loading'}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all disabled:opacity-60"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    {t.emailLabel} <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    disabled={status === 'loading'}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  {t.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  disabled={status === 'loading'}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all disabled:opacity-60"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  {t.messageLabel} <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  disabled={status === 'loading'}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all resize-y disabled:opacity-60"
                />
              </div>

              {/* Botón de envío */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {t.submitButton}
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-xs font-mono transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>{t.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Acceso directo inferior */}
            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span>{t.directEmailText}</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-zinc-900 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={13} />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        ) : (
          /* Vista de éxito cuando el mensaje se envía correctamente */
          <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800 shadow-sm">
              <Check size={28} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t.successTitle}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
              {t.successDesc}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {t.sendAnother}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
