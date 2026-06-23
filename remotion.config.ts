import { Config } from "@remotion/cli/config";

// Frames del showreel en JPEG de alta calidad para el scroll-scrub.
Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(82);
Config.overrideWebpackConfig((c) => c);
