'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productImages } from '@/lib/images';

interface FeatureItem {
  iconPath: string;
  titleKey: 'feature1Title' | 'feature2Title' | 'feature3Title';
  descKey: 'feature1Desc' | 'feature2Desc' | 'feature3Desc';
}

const features: FeatureItem[] = [
  {
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    titleKey: 'feature1Title',
    descKey: 'feature1Desc',
  },
  {
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    titleKey: 'feature2Title',
    descKey: 'feature2Desc',
  },
  {
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    titleKey: 'feature3Title',
    descKey: 'feature3Desc',
  },
];

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
};

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-96 md:h-[500px] order-2 md:order-1 rounded-3xl overflow-hidden"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={productImages.production.src}
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('heading')}
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t('p1')}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('p2')}</p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.titleKey}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">{t(feature.titleKey)}</h3>
                    <p className="mt-1 text-slate-600">{t(feature.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                {t('cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
