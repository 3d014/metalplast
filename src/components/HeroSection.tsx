import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('heading1')}<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t('heading2')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 text-center"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition text-center"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-700">
            <div>
              <p className="text-3xl font-bold text-blue-400">{t('stat1Value')}</p>
              <p className="text-slate-400">{t('stat1Label')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">{t('stat2Value')}</p>
              <p className="text-slate-400">{t('stat2Label')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">{t('stat3Value')}</p>
              <p className="text-slate-400">{t('stat3Label')}</p>
            </div>
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="relative h-96 md:h-full hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-600">
            <Image
              src="/metalplastLogo.jpg"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 0px, 50vw"
              loading="eager"
              priority
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
