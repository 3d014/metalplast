'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/lib/images';

interface GalleryGridProps {
  closeLabel: string;
}

export default function GalleryGrid({ closeLabel }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null)),
    [],
  );

  const next = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, i) => (
          <motion.button
            key={image.src}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
              <p className="w-full text-white text-sm font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.alt}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition z-10"
              onClick={close}
              aria-label={closeLabel}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 transition z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={activeIndex}
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-white text-center mt-3 text-sm opacity-80">
                {galleryImages[activeIndex].alt}
              </p>
            </motion.div>

            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 transition z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
