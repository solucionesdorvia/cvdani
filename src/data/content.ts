// Contenido del portfolio de Daniela Visillac.
// Editá acá los textos sin tocar el diseño.

export const profile = {
  name: "Daniela Visillac",
  role: "Estratega de Comunicación Institucional",
  tagline:
    "Más de 30 años transformando la identidad de organizaciones en un activo estratégico.",
  intro:
    "Licenciada en Ciencias de la Comunicación y Editora (UBA). Diseño y consolido departamentos de comunicación con una visión 360°, posicionando organismos en la agenda pública. Especializada en salud, género, educación de posgrado y políticas públicas.",
  location: "Ciudad de Buenos Aires, Argentina",
  email: "danielavisillac@gmail.com",
  phone: "+54 9 11 4044 4734",
  // Reemplazar por la foto profesional en /public/daniela.jpg
  photo: "/daniela-2.jpg",
  available: true,
  availableText: "Disponible para nuevos proyectos",
  specialties: [
    "Salud",
    "Género y diversidades",
    "Políticas públicas",
    "Redes sociales",
    "Producción editorial",
  ],
  cvUrl: "/cv-daniela-visillac.pdf",
};

// Video destacado a pantalla completa (showreel). Poné el archivo en
// /public/showreel.mp4 y opcionalmente un poster en /public/showreel-poster.jpg
export const showreel = {
  src: "/showreel.mp4",
  poster: "/daniela-2.jpg",
  caption: "Comunicación que conecta, posiciona y construye comunidad.",
};

export const metrics = [
  {
    to: 24,
    suffix: "k",
    label: "Seguidores en Instagram",
    detail: "Crecimiento orgánico desde 1.500 — Asoc. Odontológica Argentina.",
  },
  {
    to: 30,
    suffix: "+",
    label: "Años de experiencia",
    detail: "En comunicación institucional y gestión de contenidos.",
  },
  {
    to: 10,
    suffix: "+",
    label: "Instituciones",
    detail: "Asociaciones médicas, fundaciones, ONGs y editoriales.",
  },
  {
    to: 360,
    suffix: "°",
    label: "Visión estratégica",
    detail: "De la identidad institucional a la narrativa digital.",
  },
];

export const services = [
  {
    title: "Estrategia de comunicación",
    desc: "Diseño de departamentos y planes de comunicación institucional con visión integral.",
  },
  {
    title: "Gestión de redes sociales",
    desc: "Crecimiento orgánico de comunidades, contenidos y narrativas digitales.",
  },
  {
    title: "Producción editorial",
    desc: "Libros, documentos técnicos, newsletters y publicaciones digitales y en papel.",
  },
  {
    title: "Relaciones institucionales",
    desc: "Alianzas con actores gubernamentales, sector salud y referentes clave.",
  },
  {
    title: "Organización de eventos",
    desc: "Congresos nacionales e internacionales, jornadas y capacitaciones.",
  },
  {
    title: "Periodismo en salud",
    desc: "Redacción especializada con una sólida agenda de contactos del sector.",
  },
];

// Casos destacados — placeholders para los videos/imágenes que envíe Daniela.
// Poné el archivo en /public/casos/ y referencialo en `media`.
export type Caso = {
  cliente: string;
  rol: string;
  resumen: string;
  resultados: string[];
  media?: { type: "image" | "video"; src: string };
  links?: { label: string; href: string }[];
};

export const casos: Caso[] = [
  {
    cliente: "Asociación Odontológica Argentina",
    rol: "Comunicación y redes sociales · 2020 – presente",
    resumen:
      "Desarrollo integral de Instagram y redes sociales con foco en el área educativa.",
    resultados: [
      "Crecimiento de 1.500 a 24.000 seguidores",
      "Estrategia de contenidos educativos",
      "Newsletter y organización de eventos",
    ],
    // media: { type: "video", src: "/casos/aoa.mp4" },
  },
  {
    cliente: "Asociación de Médicos Municipales (CABA)",
    rol: "Coordinadora del Depto. de Comunicación · 1993 – 2026",
    resumen:
      "Creación y desarrollo del Departamento de Comunicación de la entidad médico-gremial más importante de la Argentina, con equipos grandes a cargo.",
    resultados: [
      "Revista Mundo Hospitalario: +30 años de continuidad y su versión online",
      "Instagram: casi +1000% orgánico en 3 años (1.500 → 13.000+)",
      "Editorial institucional con más de 20 libros publicados",
      "Jornada de Prevención del Riesgo Legal de la Praxis Médica (hoy referente)",
      "Coordinación del vínculo con 32 filiales hospitalarias",
    ],
    links: [
      {
        label: "Mundo Hospitalario",
        href: "https://www.medmun.org.ar/mundohospitalario/",
      },
      {
        label: "Newsletter",
        href: "https://vp.mydplr.com/d3400c9d67476df8bf1c83ff997c1c1e",
      },
      {
        label: "Newsletter II",
        href: "https://sm.pemres.net/preview/link/uelbOoRREGsVxwjVMcwEtoyRsdRGAEdjmho",
      },
    ],
  },
  {
    cliente: "FOPEA — Foro de Periodismo Argentino",
    rol: "Organización integral de congresos · 2010 – 2021",
    resumen:
      "A cargo de la organización del Congreso Nacional e Internacional de FOPEA y del Congreso de Periodismo Digital (Córdoba).",
    resultados: [
      "Coordinación de equipos de trabajo",
      "Reuniones con directivos y disertantes",
      "Redacción de documentos",
    ],
  },
];

// Galería de trabajos reales — mockups que se abren en grande (lightbox).
// Para sumar: poné la imagen en /public/reel-src/ y agregá una entrada.
export type Work = {
  title: string;
  client: string;
  type: "web" | "email" | "social";
  src: string;
  href?: string;
};

export const gallery: Work[] = [
  {
    title: "Mundo Hospitalario online",
    client: "Asociación de Médicos Municipales",
    type: "web",
    src: "/reel-src/mundo-hospitalario-web.jpeg",
    href: "https://www.medmun.org.ar/mundohospitalario/",
  },
  {
    title: "Newsletter institucional",
    client: "Noticias AMM",
    type: "email",
    src: "/reel-src/newsletter-amm-1.jpeg",
    href: "https://vp.mydplr.com/d3400c9d67476df8bf1c83ff997c1c1e",
  },
  {
    title: "Campaña gremial",
    client: "Comunicación AMM",
    type: "email",
    src: "/reel-src/newsletter-amm-2.jpeg",
    href: "https://sm.pemres.net/preview/link/uelbOoRREGsVxwjVMcwEtoyRsdRGAEdjmho",
  },
];

export type Experiencia = {
  cargo: string;
  org: string;
  periodo: string;
  desc: string;
};

export const experiencia: Experiencia[] = [
  {
    cargo: "Coordinadora del Departamento de Comunicación",
    org: "Asociación de Médicos Municipales de la Ciudad de Buenos Aires",
    periodo: "Dic 1993 – Mar 2026",
    desc: "Creación y desarrollo del Departamento de Comunicación de la entidad médico-gremial más importante del país. Revista Mundo Hospitalario por +30 años (y su versión online), editorial institucional con +20 libros, Instagram con crecimiento orgánico de casi 1000%, newsletters, congresos y desarrollo del área cultural. Posicionamiento de la institución y sus dirigentes en la agenda pública. Coordinación del vínculo con 32 filiales hospitalarias y actores gubernamentales, educativos y del sector salud.",
  },
  {
    cargo: "Profesional de comunicación y redes sociales",
    org: "Asociación Odontológica Argentina",
    periodo: "Mar 2020 – Presente",
    desc: "Desarrollo de Instagram y redes (1.500 → 24.000 seguidores) con foco educativo. Newsletter y organización de eventos.",
  },
  {
    cargo: "Redes sociales y comunicación",
    org: "Confederación Odontológica de la República Argentina",
    periodo: "Jun 2012 – Actualidad",
    desc: "Gestión de redes, asesoría y capacitación a dirigentes, newsletter y gestión del sitio web.",
  },
  {
    cargo: "Especialista en comunicaciones",
    org: "Asociación de Médicos de la Actividad Privada (AMAP)",
    periodo: "Jun 2010 – Presente",
    desc: "Coordinación de contenidos y sitio web. Producción ejecutiva de programa de radio institucional. Canal de YouTube y redes. Asesoría a dirigentes.",
  },
  {
    cargo: "Redacción de notas sobre salud",
    org: "Federación Médica de la Capital Federal (Femécfa)",
    periodo: "Mar 2010 – May 2022",
    desc: "Redes sociales, administración web y redacción de notas sobre salud y prevención.",
  },
  {
    cargo: "Miembro del Consejo Directivo",
    org: "Fundación por una Salud Pública para Todos",
    periodo: "May 2006 – May 2017",
    desc: "Secretaria del Consejo Directivo. Coordinación de programas de capacitación en prevención de la salud. Redacción y edición de material. E-learning.",
  },
];

// Serie de videos producida para YouTube/redes (Asociación de Médicos Municipales).
export const videoSeries = {
  kicker: "Producción audiovisual",
  title: "Responsabilidad Profesional Médica",
  desc: "Creación de una serie de videos sobre temáticas específicas para YouTube y redes sociales: guion, producción y edición. Recomendaciones jurídico-legales breves para el ejercicio de la medicina, junto al Dr. Vadim Mischanchuk.",
  playlistUrl:
    "https://www.youtube.com/playlist?list=PLWV9rwI8tD_dZQRLEwooq6vx3FJMEML2e",
  channelUrl: "https://www.youtube.com/@asociaciondemedicosmunicip2759",
  totalVideos: 9,
  videos: [
    { id: "rgoauC1lJKU", title: "Consentimiento informado" },
    { id: "usLIwavYDBY", title: "Telemedicina" },
    { id: "aS_kOLW_Zy8", title: "Muerte digna" },
    { id: "zvSYL2vUsRw", title: "Urgencias psiquiátricas" },
    { id: "6_20FLRaYCo", title: "Historia clínica electrónica" },
    { id: "n0PEO6oaFnc", title: "Subregistro de actos médicos" },
  ],
};

export const educacion = [
  {
    titulo: "Lic. en Ciencias de la Comunicación",
    inst: "Universidad de Buenos Aires — Facultad de Ciencias Sociales",
    periodo: "1986 – 1991",
  },
  {
    titulo: "Editora",
    inst: "Universidad de Buenos Aires — Facultad de Filosofía y Letras",
    periodo: "2010 – 2017",
  },
  {
    titulo: "Redes Sociales y Narrativas Digitales (FLACSO)",
    inst: "Estrategias de Comunicación y Gestión de Contenidos",
    periodo: "2019",
  },
  {
    titulo: "Creación de Contenido Multimedia con IA (UNTREF)",
    inst: "Herramientas de Inteligencia Artificial para Redes",
    periodo: "2026 (en curso)",
  },
];
