import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('servicesTitle'),
    description: t('servicesDescription'),
    openGraph: { title: t('servicesTitle'), description: t('servicesDescription') },
  };
}

export default async function Services() {
  const t = await getTranslations('ServicesPage');

  const services = [
    { titleKey: 's1Title' as const, descKey: 's1Desc' as const },
    { titleKey: 's2Title' as const, descKey: 's2Desc' as const },
    { titleKey: 's3Title' as const, descKey: 's3Desc' as const },
    { titleKey: 's4Title' as const, descKey: 's4Desc' as const },
    { titleKey: 's5Title' as const, descKey: 's5Desc' as const },
    { titleKey: 's6Title' as const, descKey: 's6Desc' as const },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{t('heading')}</h1>
            <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{t(service.titleKey)}</h3>
                  <p className="text-gray-600">{t(service.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
