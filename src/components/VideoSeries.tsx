"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { videoSeries } from "@/data/content";

function VideoCard({
  id,
  title,
  index,
}: {
  id: string;
  title: string;
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm"
    >
      <div className="relative aspect-video bg-ink">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir: ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform group-hover:scale-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium leading-snug">{title}</h3>
      </div>
    </motion.div>
  );
}

export function VideoSeries() {
  return (
    <section id="videos" className="mx-auto max-w-5xl px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {videoSeries.kicker}
        </p>
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          {videoSeries.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {videoSeries.desc}
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {videoSeries.videos.map((v, i) => (
          <VideoCard key={v.id} id={v.id} title={v.title} index={i} />
        ))}
      </div>

      <div className="mt-8">
        <a
          href={videoSeries.playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Ver la serie completa ({videoSeries.totalVideos} videos) en YouTube
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
