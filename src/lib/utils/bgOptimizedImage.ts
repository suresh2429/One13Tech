
import { getImage } from "astro:assets";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const images = import.meta.glob(
  "/src/assets/images/**/*.{jpeg,jpg,png,svg,gif}",
);

const bgOptimizedImage = async (
  src: string,
  format?: "auto" | "avif" | "jpeg" | "png" | "svg" | "webp",
) => {
  if (!src) return "";

  // External images should be used directly.
  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  // First, check whether the image is inside src/assets/images.
  const assetPath = `/src/assets${normalizedSrc}`;
  const imageLoader = images[assetPath];

  if (imageLoader) {
    try {
      const imageModule = (await imageLoader()) as any;

      const optimizedImage = await getImage({
        src: imageModule.default,
        format,
      });

      return optimizedImage.src;
    } catch (error) {
      console.error(`Failed to optimize image: ${src}`, error);
      return "";
    }
  }

  // Images inside public/ are served directly and should not use getImage().
  const publicImagePath = resolve(
    process.cwd(),
    "public",
    normalizedSrc.replace(/^\/+/, ""),
  );

  if (existsSync(publicImagePath)) {
    return normalizedSrc;
  }

  console.error(
    `Image not found - ${src}. Checked src/assets/images and public.`,
  );

  return "";
};

export default bgOptimizedImage;
