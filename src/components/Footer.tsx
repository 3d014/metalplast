import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Metalplast</span>
            </div>
            <p className="text-slate-400 mb-4">{t('companyDesc')}</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-blue-400 transition">
                  {nav('services')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-blue-400 transition">
                  {nav('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 transition">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-blue-400 transition">
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('servicesTitle')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-blue-400 transition">
                  {t('s1')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-blue-400 transition">
                  {t('s2')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-blue-400 transition">
                  {t('s3')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-blue-400 transition">
                  {t('s4')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('contactTitle')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">{t('emailLabel')}</p>
                <a href="mailto:info@metalplast.ba" className="text-blue-400 hover:text-blue-300 transition">
                  info@metalplast.ba
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">{t('phoneLabel')}</p>
                <a href="tel:+38761152357" className="text-blue-400 hover:text-blue-300 transition">
                  +387 61 152 357
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">{t('workingHoursLabel')}</p>
                <p className="text-slate-300">{t('workingDays')}</p>
                <p className="text-slate-300">{t('workingTime')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Metalplast. {t('copyright')}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition text-sm">
              {t('privacy')}
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition text-sm">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
