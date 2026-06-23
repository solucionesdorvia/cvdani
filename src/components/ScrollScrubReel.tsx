"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { showreel } from "@/data/content";

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number
) {
  const ir = img.width / img.height;
  const cr = cw / ch;
  let dw: number, dh: number;
  if (ir > cr) {
    dh = ch;
    dw = ch * ir;
  } else {
    dw = cw;
    dh = cw / ir;
  }
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
}

export function ScrollScrubReel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Caption fade/translate al avanzar
  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.55, 0.8], [40, 0]);

  // Precarga del manifest + frames
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/reel/manifest.json", { cache: "force-cache" });
        if (!res.ok) return;
        const { frames }: { frames: string[] } = await res.json();
        if (!frames?.length) return;
        const imgs = await Promise.all(
          frames.map(
            (src) =>
              new Promise<HTMLImageElement>((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
              })
          )
        );
        if (cancelled) return;
        framesRef.current = imgs;
        setReady(true);
      } catch {
        /* sin video todavía → se usa el fallback con el poster */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Tamaño del canvas según DPR
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(scrollYProgress.get());
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const drawFrame = (progress: number) => {
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    if (!canvas || !frames.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const idx = Math.min(
      frames.length - 1,
      Math.max(0, Math.round(progress * (frames.length - 1)))
    );
    drawCover(ctx, frames[idx], canvas.width, canvas.height);
  };

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (ready) drawFrame(p);
  });

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {ready ? (
          <canvas ref={canvasRef} className="h-full w-full" />
        ) : (
          // Fallback: poster fijo hasta que se renderice el video
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={showreel.poster}
            alt="Showreel"
            className="h-full w-full object-cover opacity-90"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        <motion.div
          style={{ y: captionY, opacity: ready ? captionOpacity : 1 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 p-8 md:p-16"
        >
          <p className="mx-auto max-w-4xl font-serif text-2xl leading-snug text-white md:text-4xl md:leading-tight">
            {showreel.caption}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
