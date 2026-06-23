import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniela Visillac — Estratega de Comunicación Institucional",
  description:
    "Más de 30 años en comunicación institucional, redes sociales y producción editorial. Especializada en salud, género y políticas públicas.",
  keywords: [
    "comunicación institucional",
    "estratega de comunicación",
    "redes sociales",
    "producción editorial",
    "comunicación en salud",
    "Daniela Visillac",
    "Buenos Aires",
  ],
  authors: [{ name: "Daniela Visillac" }],
  openGraph: {
    title: "Daniela Visillac — Estratega de Comunicación Institucional",
    description:
      "Más de 30 años transformando la identidad de organizaciones en un activo estratégico.",
    type: "website",
    locale: "es_AR",
    siteName: "Daniela Visillac",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniela Visillac — Estratega de Comunicación Institucional",
    description:
      "Más de 30 años transformando la identidad de organizaciones en un activo estratégico.",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${inter.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
