import { Composition } from "remotion";
import { ShowreelComposition, totalDuration } from "./ShowreelComposition";
import { reel } from "./images";

export function RemotionRoot() {
  return (
    <Composition
      id="Showreel"
      component={ShowreelComposition}
      durationInFrames={totalDuration}
      fps={reel.fps}
      width={reel.width}
      height={reel.height}
    />
  );
}
