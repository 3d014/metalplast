import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default async function Products() {
  const t = await getTranslations('ProductsPage');

  const products = [
    {
      name: t('p1Name'),
      desc: t('p1Desc'),
      features: [t('p1f1'), t('p1f2'), t('p1f3')],
    },
    {
      name: t('p2Name'),
      desc: t('p2Desc'),
      features: [t('p2f1'), t('p2f2'), t('p2f3')],
    },
    {
      name: t('p3Name'),
      desc: t('p3Desc'),
      features: [t('p3f1'), t('p3f2'), t('p3f3')],
    },
    {
      name: t('p4Name'),
      desc: t('p4Desc'),
      features: [t('p4f1'), t('p4f2'), t('p4f3')],
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
                <ProductCard
                  key={index}
                  name={product.name}
                  desc={product.desc}
                  features={product.features}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
