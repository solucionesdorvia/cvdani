// Lista de imágenes del showreel.
// Cada `src` es un archivo dentro de /public (Remotion lo sirve con staticFile).
//
// PARA AGREGAR LOS SCREENSHOTS DE LAS CUENTAS:
//   1. Poné los archivos en /public/reel-src/ (ej: aoa-instagram.jpg)
//   2. Agregá una entrada acá con su src y, opcional, un título.
//   3. Re-renderizá:  pnpm reel:render
//
// `pan` controla la dirección del movimiento Ken Burns.

export type ReelImage = {
  src: string;
  title?: string;
  subtitle?: string;
  pan?: "left" | "right" | "up" | "down" | "in" | "out";
};

export const reelImages: ReelImage[] = [
  {
    src: "daniela.jpg",
    title: "Daniela Visillac",
    subtitle: "Estratega de comunicación institucional",
    pan: "in",
  },
  {
    src: "daniela-2.jpg",
    title: "30+ años de trayectoria",
    subtitle: "Salud · género · políticas públicas",
    pan: "left",
  },
  // Capturas reales (AMM) — agregadas el 23/06
  {
    src: "reel-src/mundo-hospitalario-web.jpeg",
    title: "Mundo Hospitalario",
    subtitle: "Versión online de la revista institucional",
    pan: "in",
  },
  {
    src: "reel-src/newsletter-amm-1.jpeg",
    title: "Newsletter institucional",
    subtitle: "Noticias AMM · envío regular",
    pan: "down", // imagen alta → conviene paneo vertical (ajustar amplitud en render)
  },
  {
    src: "reel-src/newsletter-amm-2.jpeg",
    title: "Comunicación gremial",
    subtitle: "Campañas y novedades institucionales",
    pan: "down",
  },
  // 👇 Sumá acá los próximos (Instagram con seguidores visibles, congresos, libros):
  // { src: "reel-src/aoa-instagram.jpg", title: "1.5k → 24k", subtitle: "Asoc. Odontológica Argentina", pan: "up" },
  // { src: "reel-src/congreso-fopea.jpg", title: "Congresos", subtitle: "FOPEA · organización integral", pan: "out" },
];

// Configuración del video
export const reel = {
  fps: 30,
  width: 1920,
  height: 1080,
  secondsPerImage: 3, // duración de cada foto en pantalla
  crossfadeFrames: 18, // transición entre fotos
};
