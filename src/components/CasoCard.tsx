"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import type { Caso } from "@/data/content";

function CasoModal({ caso, onClose }: { caso: Caso; onClose: () => void }) {
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
      className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-card p-6 md:rounded-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold leading-tight">
              {caso.cliente}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
              {caso.rol}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{caso.resumen}</p>

        <ul className="mt-5 space-y-2 text-sm">
          {caso.resultados.map((r) => (
            <li key={r} className="flex gap-2.5">
              <span className="mt-0.5 text-accent">→</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>

        {caso.links && caso.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
            {caso.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-soft"
              >
                {l.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CasoCard({ caso, index }: { caso: Caso; index: number }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
      >
        <h3 className="font-serif text-base font-semibold leading-snug">{caso.cliente}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
          {caso.rol}
        </p>

        <ul className="mt-3 flex-1 space-y-1 text-sm text-ink-soft">
          {caso.resultados.slice(0, 3).map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-accent">·</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Ver detalle
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </motion.button>

      {mounted &&
        open &&
        createPortal(<CasoModal caso={caso} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}
