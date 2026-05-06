'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <motion.div
            className="relative h-96 md:h-auto order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-10"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden flex items-center justify-center border-2 border-slate-300">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-slate-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-slate-500">{t('imageAlt')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('heading')}
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t('p1')}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('p2')}</p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                  title: t('feature1Title'),
                  desc: t('feature1Desc'),
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: t('feature2Title'),
                  desc: t('feature2Desc'),
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: t('feature3Title'),
                  desc: t('feature3Desc'),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-slate-600">{item.desc}</p>
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
