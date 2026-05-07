'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productImages, type ImageAsset } from '@/lib/images';

interface Service {
  id: number;
  titleKey: 's1Title' | 's2Title' | 's3Title';
  descKey: 's1Desc' | 's2Desc' | 's3Desc';
  featureKeys: readonly string[];
  image: ImageAsset;
}

const services: Service[] = [
  {
    id: 1,
    titleKey: 's1Title',
    descKey: 's1Desc',
    featureKeys: ['s1f1', 's1f2', 's1f3'],
    image: productImages.windows,
  },
  {
    id: 2,
    titleKey: 's2Title',
    descKey: 's2Desc',
    featureKeys: ['s2f1', 's2f2', 's2f3'],
    image: productImages.doors,
  },
  {
    id: 3,
    titleKey: 's3Title',
    descKey: 's3Desc',
    featureKeys: ['s3f1', 's3f2', 's3f3'],
    image: productImages.fences,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function ServicesSection() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('heading')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.featureKeys.map((key) => (
                    <li key={key} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t(key as Parameters<typeof t>[0])}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/services"
                    className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
                  >
                    {t('learnMore')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
