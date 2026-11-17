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
    about: {
      number: '01.',
      title: 'Sobre mí',
      photoPlaceholder: 'Pon tu foto en public/profile.jpg',
      paragraphs: [
        'Estudiante de Ingeniería Informática en Almería apasionado por crear software sólido, escalable y bien diseñado.',
        'Disfruto trabajando tanto en el backend como en el frontend, desarrollando desde plataformas full-stack y microservicios hasta integraciones con Inteligencia Artificial.',
      ],
    },
    experience: {
      number: '02.',
      title: 'Experiencia',
      role: 'Buscando Prácticas Profesionales / Desarrollador Junior',
      location: 'Almería / Remoto / Híbrido',
      duration: 'Disponibilidad inmediata',
      description:
        'Actualmente en búsqueda activa de una oportunidad para incorporarme a un equipo de desarrollo de software. Con muchas ganas de aportar valor, aplicar mis conocimientos técnicos y continuar aprendiendo en proyectos reales.',
      tags: [
        'Desarrollo Full Stack',
        'Frontend & Backend',
        'Trabajo en Equipo',
        'Ganas de Aprender',
        'Disponibilidad Inmediata',
      ],
      // [Temporalmente guardado]
      // previousRole: 'Beca D-UAL',
      // previousDuration: '1 año',
      // previousDescription: 'Prácticas de 1 año desarrollando y manteniendo soluciones de software con metodologías ágiles.',
    },
    projects: {
      number: '03.',
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
      number: '04.',
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
      number: '05. ¿Hablamos?',
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
      orSeparator: 'o',
      copyEmail: 'Copiar correo',
      copied: '¡Copiado!',
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
      cv: 'Resumé',
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
    about: {
      number: '01.',
      title: 'About Me',
      photoPlaceholder: 'Place your photo in public/profile.jpg',
      paragraphs: [
        'Computer Engineering student in Almería passionate about building solid, scalable, and well-crafted software.',
        'I enjoy working across both backend and frontend, developing everything from full-stack platforms and microservices to Artificial Intelligence integrations.',
      ],
    },
    experience: {
      number: '02.',
      title: 'Experience',
      role: 'Seeking Software Engineering Internships / Junior Roles',
      location: 'Almería / Remote / Hybrid',
      duration: 'Immediate Start',
      description:
        'Currently actively seeking an opportunity to join a software development team. Eager to contribute value, apply my technical skills, and continue growing through real-world projects.',
      tags: [
        'Full Stack Development',
        'Frontend & Backend',
        'Team Player',
        'Fast Learner',
        'Immediate Availability',
      ],
      // [Temporarily saved]
      // previousRole: 'D-UAL Fellowship',
      // previousDuration: '1 year',
      // previousDescription: '1-year internship developing and maintaining software solutions using agile methodologies.',
    },
    projects: {
      number: '03.',
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
      number: '04.',
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
      number: "05. What's Next?",
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
      orSeparator: 'or',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      successTitle: 'Message sent successfully!',
      successDesc: 'Thank you for reaching out. I have received your message and will reply to your email as soon as possible.',
      errorTitle: 'Submission error',
      errorDesc: 'Could not send the message at this time. Please try again or write directly to my email address.',
      close: 'Close',
      sendAnother: 'Send another message',
    },
  },
};

