import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Products() {
  const t = await getTranslations('ProductsPage');

  const products = [
    {
      nameKey: 'p1Name' as const,
      descKey: 'p1Desc' as const,
      featureKeys: ['p1f1', 'p1f2', 'p1f3'] as const,
    },
    {
      nameKey: 'p2Name' as const,
      descKey: 'p2Desc' as const,
      featureKeys: ['p2f1', 'p2f2', 'p2f3'] as const,
    },
    {
      nameKey: 'p3Name' as const,
      descKey: 'p3Desc' as const,
      featureKeys: ['p3f1', 'p3f2', 'p3f3'] as const,
    },
    {
      nameKey: 'p4Name' as const,
      descKey: 'p4Desc' as const,
      featureKeys: ['p4f1', 'p4f2', 'p4f3'] as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{t('heading')}</h1>
            <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">{t(product.nameKey)}</h3>
                  <p className="text-gray-600 mb-4">{t(product.descKey)}</p>
                  <ul className="space-y-2">
                    {product.featureKeys.map((key) => (
                      <li key={key} className="text-gray-700 flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        {t(key)}
                      </li>
                    ))}
                  </ul>
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
