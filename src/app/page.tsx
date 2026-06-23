import {
  profile,
  metrics,
  services,
  casos,
  experiencia,
  educacion,
} from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CasoCard } from "@/components/CasoCard";
import { VideoSeries } from "@/components/VideoSeries";
import { Gallery } from "@/components/Gallery";
import { MobileNav } from "@/components/MobileNav";
import { MobileCTABar } from "@/components/MobileCTABar";

const nav = [
  { href: "#sobre", label: "Sobre mí" },
  { href: "#casos", label: "Casos" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#videos", label: "Videos" },
  { href: "#experiencia", label: "Trayectoria" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          Daniela Visillac
        </a>
        <nav className="hidden gap-7 text-sm text-ink-soft md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-soft md:inline-flex"
        >
          Contactar
        </a>
        <MobileNav />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-10 pb-20 md:pt-24">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div className="order-2 rise md:order-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {profile.role}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#casos"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Ver casos destacados
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Trabajemos juntos
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              Descargar CV
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </a>
          </div>
        </div>
        <div className="order-1 rise md:order-2" style={{ animationDelay: "0.15s" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-line bg-bg-soft shadow-sm md:aspect-[3/4] md:max-w-xs">
            {/* Reemplazá /public/daniela.jpg por la foto profesional */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="border-y border-line bg-bg-soft">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden px-6 md:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.1} className="px-2 py-10 text-center">
            <div className="font-serif text-3xl font-semibold text-accent md:text-4xl">
              <Counter to={m.to} suffix={m.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium">{m.label}</div>
            <p className="mt-1 text-xs leading-snug text-ink-soft">{m.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {kicker}
      </p>
      <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-14">
      <SectionTitle kicker="Sobre mí" title="Comunicar para posicionar" />
      <div className="grid gap-8 text-lg leading-relaxed text-ink-soft md:grid-cols-2">
        <Reveal>
          <p>
            Soy una profesional de la comunicación con más de veinte años de experiencia
            en instituciones intermedias. Mi visión estratégica no solo se focaliza en
            comunicar, sino en posicionar organismos en la agenda pública.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p>
            He diseñado y consolidado departamentos de comunicación desde una visión
            360°, transformando la identidad institucional en un activo estratégico. Soy
            periodista especializada en salud, con una sólida agenda de contactos, y en
            los últimos años focalicé en temas de género, equidad y diversidades.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Casos() {
  return (
    <section id="casos" className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <SectionTitle kicker="Casos destacados" title="Cuentas que gestioné" />
        <div className="grid gap-6 md:grid-cols-3">
          {casos.map((c, i) => (
            <CasoCard key={c.cliente} caso={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-14">
      <SectionTitle kicker="Trayectoria" title="Más de tres décadas" />
      <div className="border-l border-line pl-6 md:pl-8">
        {experiencia.map((e, i) => (
          <Reveal key={e.cargo + e.org} delay={i * 0.05}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg md:-left-[39px]" />
              <p className="text-sm font-medium text-accent">{e.periodo}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold">{e.cargo}</h3>
              <p className="text-sm font-medium text-ink-soft">{e.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {e.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-14">
        <Reveal>
          <h3 className="mb-6 font-serif text-2xl font-semibold">Formación</h3>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {educacion.map((ed, i) => (
            <Reveal key={ed.titulo} delay={i * 0.08}>
              <div className="rounded-xl border border-line bg-card p-5">
                <p className="text-xs font-medium text-accent">{ed.periodo}</p>
                <h4 className="mt-1 font-medium">{ed.titulo}</h4>
                <p className="text-sm text-ink-soft">{ed.inst}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <SectionTitle kicker="Servicios" title="En qué puedo ayudarte" />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/40">
                <span className="font-serif text-2xl font-semibold text-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Contacto
        </p>
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight md:text-5xl">
          Hablemos de tu próximo proyecto de comunicación.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
          >
            {profile.email}
          </a>
          <a
            href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
            className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-6 text-sm text-ink-soft">{profile.location}</p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="font-serif text-lg font-semibold text-ink">
              Daniela Visillac
            </span>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Estratega de comunicación institucional. {profile.location}.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-ink-soft">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-accent">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft transition-colors hover:text-accent"
            >
              Descargar CV (PDF)
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-ink-soft">
          © 2026 Daniela Visillac · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Sobre />
        <Casos />
        <Gallery />
        <VideoSeries />
        <Experiencia />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
      <div className="h-16 md:hidden" />
      <MobileCTABar />
    </>
  );
}
