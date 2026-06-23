import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { reel, reelImages, type ReelImage } from "./images";

const durationPerImage = reel.secondsPerImage * reel.fps;

function panTransform(pan: ReelImage["pan"], t: number) {
  // t va de 0 a 1 a lo largo de la toma
  const scale = interpolate(t, [0, 1], [1.08, 1.22]);
  let x = 0;
  let y = 0;
  const amp = 40;
  switch (pan) {
    case "left":
      x = interpolate(t, [0, 1], [amp, -amp]);
      break;
    case "right":
      x = interpolate(t, [0, 1], [-amp, amp]);
      break;
    case "up":
      y = interpolate(t, [0, 1], [amp, -amp]);
      break;
    case "down":
      y = interpolate(t, [0, 1], [-amp, amp]);
      break;
    case "out":
      return { scale: interpolate(t, [0, 1], [1.25, 1.05]), x: 0, y: 0 };
    case "in":
    default:
      break;
  }
  return { scale, x, y };
}

function Slide({ image, index }: { image: ReelImage; index: number }) {
  const frame = useCurrentFrame();
  const local = frame - index * (durationPerImage - reel.crossfadeFrames);
  const t = interpolate(local, [0, durationPerImage], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(
    local,
    [0, reel.crossfadeFrames, durationPerImage - reel.crossfadeFrames, durationPerImage],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const { scale, x, y } = panTransform(image.pan, t);
  const titleY = interpolate(local, [reel.crossfadeFrames, reel.crossfadeFrames + 20], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <AbsoluteFill style={{ transform: `scale(${scale}) translate(${x}px, ${y}px)` }}>
        <Img
          src={staticFile(image.src)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 45%)",
        }}
      />
      {(image.title || image.subtitle) && (
        <AbsoluteFill
          style={{
            justifyContent: "flex-end",
            padding: 90,
            transform: `translateY(${titleY}px)`,
          }}
        >
          {image.title && (
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 92,
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.02,
              }}
            >
              {image.title}
            </div>
          )}
          {image.subtitle && (
            <div
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: 36,
                color: "#f1e4dc",
                marginTop: 18,
                letterSpacing: 0.5,
              }}
            >
              {image.subtitle}
            </div>
          )}
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
}

export function ShowreelComposition() {
  return (
    <AbsoluteFill style={{ backgroundColor: "#211c17" }}>
      {reelImages.map((image, i) => (
        <Sequence
          key={i}
          from={i * (durationPerImage - reel.crossfadeFrames)}
          durationInFrames={durationPerImage}
        >
          <Slide image={image} index={i} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}

export const totalDuration =
  reelImages.length * (durationPerImage - reel.crossfadeFrames) +
  reel.crossfadeFrames;
