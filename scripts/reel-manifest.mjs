// Genera /public/reel/manifest.json listando los frames renderizados por Remotion,
// que el componente de scroll-scrub precarga y dibuja según el scroll.
import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "public", "reel");

const frames = readdirSync(dir)
  .filter((f) => /\.(jpe?g|png)$/i.test(f) && f !== "manifest.json")
  .sort()
  .map((f) => `/reel/${f}`);

if (frames.length === 0) {
  console.error("⚠️  No se encontraron frames en /public/reel");
  process.exit(1);
}

writeFileSync(
  join(dir, "manifest.json"),
  JSON.stringify({ frames }, null, 2)
);

console.log(`✅ manifest.json con ${frames.length} frames`);
