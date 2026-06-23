"use client";

import { profile } from "@/data/content";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-line bg-bg/95 px-4 py-3 backdrop-blur md:hidden">
      <a
        href={`mailto:${profile.email}`}
        className="flex-1 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Escribir
      </a>
      <a
        href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
        className="flex-1 rounded-full border border-line px-4 py-3 text-center text-sm font-semibold"
      >
        WhatsApp
      </a>
    </div>
  );
}
