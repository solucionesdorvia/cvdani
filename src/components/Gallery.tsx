"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { gallery, type Work } from "@/data/content";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-line bg-bg-soft px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      {children}
    </div>
  );
}

function Card({ work, index, onOpen }: { work: Work; index: number; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group block text-left"
    >
      <BrowserFrame>
        <div className="relative h-52 overflow-hidden bg-bg-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={work.src}
            alt={work.title}
            className="absolute left-0 top-0 w-full transition-transform duration-[3500ms] ease-linear group-hover:-translate-y-[calc(100%-13rem)]"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            Abrir ↗
          </span>
        </div>
      </BrowserFrame>
      <div className="mt-3 px-1">
        <h3 className="font-serif text-base font-semibold leading-snug">{work.title}</h3>
        <p className="text-sm text-ink-soft">{work.client}</p>
      </div>
    </motion.button>
  );
}

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-ink/80 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col overflow-hidden">
        <div className="flex items-center justify-between gap-4 pb-3 text-white">
          <div>
            <p className="font-serif text-lg font-semibold">{work.title}</p>
            <p className="text-sm text-white/70">{work.client}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto rounded-xl bg-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={work.src} alt={work.title} className="w-full" />
        </div>

        {work.href && (
          <div className="pt-3 text-center" onClick={(e) => e.stopPropagation()}>
            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Ver en vivo ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="trabajos" className="mx-auto max-w-5xl px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Trabajos
        </p>
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Mirá ejemplos reales
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((w, i) => (
          <Card key={w.src} work={w} index={i} onOpen={() => setOpenIndex(i)} />
        ))}
      </div>

      {mounted &&
        openIndex !== null &&
        createPortal(
          <Lightbox work={gallery[openIndex]} onClose={() => setOpenIndex(null)} />,
          document.body
        )}
    </section>
  );
}
