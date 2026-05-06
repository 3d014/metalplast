import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function About() {
  const t = await getTranslations('AboutPage');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-gray-800">{t('heading')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-4">{t('p1')}</p>
                <p className="text-lg text-gray-600 mb-4">{t('p2')}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-4">{t('missionHeading')}</h2>
                <p className="text-lg text-gray-600 mb-6">{t('missionText')}</p>
                <h2 className="text-3xl font-bold text-blue-600 mb-4">{t('visionHeading')}</h2>
                <p className="text-lg text-gray-600">{t('visionText')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
