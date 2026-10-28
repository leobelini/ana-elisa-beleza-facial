import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { SiteImage } from '../components/Hero';

const serviceImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/services/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export const optimize = async (
  image: ImageMetadata,
  width: number,
  height?: number,
): Promise<SiteImage> => {
  const result = await getImage({
    src: image,
    width,
    height,
    format: 'webp',
    quality: 90,
    fit: 'cover',
  });
  return {
    src: result.src,
    width: Number(result.attributes.width ?? width),
    height: Number(result.attributes.height ?? height ?? width),
  };
};

/** Resolve um caminho do services.json ("/images/services/x.jpg") para a imagem otimizada. */
export const getServiceImage = async (
  imagePath: string,
  width: number,
  height: number,
): Promise<SiteImage | null> => {
  const name = imagePath.split('/').pop()?.split('.')[0];
  if (!name) return null;
  const entry = Object.entries(serviceImages).find(([file]) => file.includes(`/${name}.`));
  return entry ? optimize(entry[1].default, width, height) : null;
};
