export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
      cv: 'CV',
    },
    hero: {
      location: 'Almería, España',
      availability: 'Buscando prácticas',
      statusBadge: 'En búsqueda activa de prácticas profesionales',
      englishBadge: 'Inglés C1 Aptis',
      greeting: 'Hola, soy',
      name: 'Marian Monda.',
      headline: 'Computer Engineering Student | Junior Developer.',
      profile:
        'Estudiante de Ingeniería Informática con sólida base técnica y pasión por el desarrollo de software. Inglés avanzado (C1 Aptis). En búsqueda activa de prácticas profesionales para aplicar mis conocimientos.',
      ctaProjects: 'Ver proyectos',
      ctaExperience: 'Experiencia',
      ctaContact: 'Contacto',
    },
    experience: {
      number: '01.',
      title: 'Experiencia',
      role: 'Beca D-UAL',
      location: 'Almería',
      duration: '1 año',
      description:
        'Prácticas de 1 año desarrollando y manteniendo soluciones de software con metodologías ágiles.',
      tags: [
        'Desarrollo de Software',
        'Metodologías Ágiles (Scrum)',
        'Mantenimiento y Evolución de Sistemas',
      ],
    },
    projects: {
      number: '02.',
      title: 'Proyectos',
      items: [
        {
          title: 'Learnio',
          description:
            'LMS completo con paneles personalizados, foros y evaluación automática. Motor de ejecución de código en sandbox y arquitectura de microservicios.',
          tags: ['C#', 'ASP.NET Core', 'React', 'Docker', 'SignalR'],
          github: 'https://github.com/marianmonda',
          demo: null,
        },
        {
          title: 'SAD-UAL',
          description:
            'Rediseño full-stack del portal de reservas de instalaciones deportivas universitarias.',
          tags: ['Spring Boot', 'Angular', 'Node.js', 'Docker'],
          github: 'https://github.com/marianmonda',
          demo: null,
        },
        {
          title: 'CasaCabodeGata',
          description:
            'Plataforma web a medida para gestión de reservas de cliente real.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
          github: 'https://github.com/marianmonda',
          demo: null,
        },
      ],
    },
    skills: {
      number: '03.',
      title: 'Lo que uso para construir',
      categories: [
        {
          title: 'Lenguajes',
          skills: ['JavaScript', 'Python', 'C#', 'PHP', 'SQL'],
        },
        {
          title: 'Frameworks',
          skills: ['React', 'Angular', 'ASP.NET Core', 'Spring Boot', 'Node.js'],
        },
        {
          title: 'Bases de datos',
          skills: ['MySQL', 'PostgreSQL'],
        },
        {
          title: 'Herramientas',
          skills: ['Docker', 'Git & GitHub', 'Vite', 'Linux'],
        },
        {
          title: 'AI/ML',
          skills: ['LLM APIs', 'RAG', 'Embeddings vectoriales', 'Búsqueda semántica', 'Fine-tuning'],
        },
      ],
    },
    footer: {
      number: '04. ¿Hablamos?',
      title: 'Ponerse en contacto',
      description:
        'En búsqueda activa de prácticas profesionales. Si tienes una propuesta, una consulta técnica o simplemente quieres conectar, estaré encantado de hablar.',
      ctaButton: 'Enviar mensaje',
      copyright: 'Marian Monda. Estudiante de Ingeniería Informática | Desarrollador Junior.',
    },
    contactModal: {
      title: 'Envíame un mensaje',
      description:
        '¿Tienes una propuesta de prácticas, un proyecto o alguna consulta? Rellena este formulario y te responderé lo antes posible.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre o el de tu empresa',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Propuesta de prácticas / Colaboración / Consulta...',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame brevemente en qué puedo ayudarte...',
      submitButton: 'Enviar mensaje',
      submitting: 'Enviando...',
      copyEmail: 'Copiar email',
      copied: '¡Copiado!',
      directEmailText: 'O si prefieres escribir directamente:',
      successTitle: '¡Mensaje enviado con éxito!',
      successDesc: 'Gracias por ponerte en contacto. He recibido tu mensaje y te responderé a tu correo lo antes posible.',
      errorTitle: 'Error al enviar',
      errorDesc: 'No se pudo enviar el mensaje en este momento. Por favor, inténtalo de nuevo o escríbeme directamente a mi correo.',
      close: 'Cerrar',
      sendAnother: 'Enviar otro mensaje',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      cv: 'Resume',
    },
    hero: {
      location: 'Almeria, Spain',
      availability: 'Open to internships',
      statusBadge: 'Actively seeking software engineering internships',
      englishBadge: 'English C1 Aptis',
      greeting: 'Hi, I am',
      name: 'Marian Monda.',
      headline: 'Computer Engineering Student | Junior Developer.',
      profile:
        'Computer Engineering Student with a strong technical foundation and a passion for software development. Advanced English (C1 Aptis). Actively seeking professional internships to apply and expand my expertise.',
      ctaProjects: 'View Projects',
      ctaExperience: 'Experience',
      ctaContact: 'Contact',
    },
    experience: {
      number: '01.',
      title: 'Experience',
      role: 'D-UAL Fellowship',
      location: 'Almería',
      duration: '1 year',
      description:
        '1-year internship developing and maintaining software solutions using agile methodologies.',
      tags: [
        'Software Development',
        'Agile Methodologies (Scrum)',
        'System Maintenance & Evolution',
      ],
    },
    projects: {
      number: '02.',
      title: 'Projects',
      items: [
        {
          title: 'Learnio',
          description:
            'Comprehensive LMS featuring custom dashboards, discussion forums, and automated grading. Built with a sandboxed code execution engine and microservices architecture.',
          tags: ['C#', 'ASP.NET Core', 'React', 'Docker', 'SignalR'],
          github: 'https://github.com/marianmonda',
          demo: null,
        },
        {
          title: 'SAD-UAL',
          description:
            'Full-stack redesign of the university sports facility reservation portal.',
          tags: ['Spring Boot', 'Angular', 'Node.js', 'Docker'],
          github: 'https://github.com/marianmonda',
          demo: null,
        },
        {
          title: 'CasaCabodeGata',
          description:
            'Custom web platform for reservation and booking management for a real-world client.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
          github: 'https://github.com/marianmonda',
          demo: null,
        },
      ],
    },
    skills: {
      number: '03.',
      title: 'What I build with',
      categories: [
        {
          title: 'Languages',
          skills: ['JavaScript', 'Python', 'C#', 'PHP', 'SQL'],
        },
        {
          title: 'Frameworks',
          skills: ['React', 'Angular', 'ASP.NET Core', 'Spring Boot', 'Node.js'],
        },
        {
          title: 'Databases',
          skills: ['MySQL', 'PostgreSQL'],
        },
        {
          title: 'Tools',
          skills: ['Docker', 'Git & GitHub', 'Vite', 'Linux'],
        },
        {
          title: 'AI/ML',
          skills: ['LLM APIs', 'RAG', 'Vector embeddings', 'Semantic search', 'Fine-tuning'],
        },
      ],
    },
    footer: {
      number: "04. What's Next?",
      title: 'Get In Touch',
      description:
        'Actively seeking professional internships. Whether you have an opportunity, a technical question, or just want to connect, feel free to reach out.',
      ctaButton: 'Send Message',
      copyright: 'Marian Monda. Computer Engineering Student | Junior Developer.',
    },
    contactModal: {
      title: 'Send me a message',
      description:
        'Have an internship opportunity, a project, or a question? Fill out this form and I will get back to you as soon as possible.',
      nameLabel: 'Full name',
      namePlaceholder: 'Your name or company',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Internship opportunity / Collaboration / Question...',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly tell me what you need or want to discuss...',
      submitButton: 'Send message',
      submitting: 'Sending...',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      directEmailText: 'Or if you prefer to email directly:',
      successTitle: 'Message sent successfully!',
      successDesc: 'Thank you for reaching out. I have received your message and will reply to your email as soon as possible.',
      errorTitle: 'Submission error',
      errorDesc: 'Could not send the message at this time. Please try again or write directly to my email address.',
      close: 'Close',
      sendAnother: 'Send another message',
    },
  },
};

