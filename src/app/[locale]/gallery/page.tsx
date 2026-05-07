import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';

export default async function GalleryPage() {
  const t = await getTranslations('GalleryPage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-slate-900 mb-4">{t('heading')}</h1>
              <p className="text-xl text-slate-600 max-w-2xl">{t('subtitle')}</p>
            </div>
            <GalleryGrid closeLabel={t('close')} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
