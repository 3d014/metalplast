'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation';
import { routing } from '@/i18n/routing';
import Image from 'next/image';
import { motion } from 'framer-motion';

const localeLabels: Record<string, string> = {
  bs: 'BS',
  en: 'EN',
  de: 'DE',
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(locale: string) {
    router.replace(pathname, { locale: locale as typeof routing.locales[number] });
  }

  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/metalplastLogo.jpg"
              alt="Metalplast Logo"
              width={40}
              height={40}
              className="rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-slate-900 hidden sm:inline">Metalplast</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '/', label: t('home') },
              { href: '/services', label: t('services') },
              { href: '/products', label: t('products') },
              { href: '/gallery', label: t('gallery') },
              { href: '/about', label: t('about') },
              { href: '/contact', label: t('contact') },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
              >
                <Link href={item.href} className="text-slate-700 hover:text-slate-900 font-medium transition">
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Locale switcher */}
            <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-1">
              {routing.locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLocale(locale)}
                  className="px-2 py-1 text-xs font-semibold rounded-md transition hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                >
                  {localeLabels[locale]}
                </button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition font-medium block"
              >
                {t('cta')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(false)}>{t('home')}</Link>
            <Link href="/services" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(false)}>{t('services')}</Link>
            <Link href="/products" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(false)}>{t('products')}</Link>
            <Link href="/gallery" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(false)}>{t('gallery')}</Link>
            <Link href="/about" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(false)}>{t('about')}</Link>
            <Link href="/contact" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
            <div className="flex items-center gap-2 px-4 py-2">
              {routing.locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => { switchLocale(locale); setIsOpen(false); }}
                  className="px-3 py-1 text-sm font-semibold border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-700 transition"
                >
                  {localeLabels[locale]}
                </button>
              ))}
            </div>
            <Link href="/contact" className="block w-full text-center bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition font-medium" onClick={() => setIsOpen(false)}>{t('cta')}</Link>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
