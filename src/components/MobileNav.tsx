"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data/content";

const items = [
  { href: "#sobre", label: "Sobre mí" },
  { href: "#casos", label: "Casos" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#videos", label: "Videos" },
  { href: "#experiencia", label: "Trayectoria" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div className="fixed inset-0 z-[80] flex flex-col bg-bg px-6 pb-10 pt-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-semibold">Daniela Visillac</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex flex-col">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-serif text-2xl font-semibold tracking-tight transition-colors active:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white"
            >
              Escribir un email
            </a>
            <a
              href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
              onClick={() => setOpen(false)}
              className="rounded-full border border-line px-6 py-3.5 text-center text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </div>
  );
}
