"use client";

import Image from "next/image";
import { useState } from "react";

interface PhotoGalleryProps {
  images: readonly [string, ...string[]];
  title: string;
}

export const PhotoGallery = ({ images, title }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);

  return (
    <section aria-label="Fotos del alojamiento" className="space-y-3">
      <Image
        src={images[index]}
        alt={`Imagen placeholder ${index + 1} de ${title}`}
        width={800}
        height={600}
        className="aspect-[4/3] w-full rounded-2xl bg-zinc-100 object-cover md:max-h-[480px]"
      />
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
          className="min-h-11 rounded-xl border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Anterior
        </button>
        <p role="status" className="text-sm">{index + 1} de {images.length}</p>
        <button
          type="button"
          disabled={index === images.length - 1}
          onClick={() => setIndex((current) => Math.min(images.length - 1, current + 1))}
          className="min-h-11 rounded-xl border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
