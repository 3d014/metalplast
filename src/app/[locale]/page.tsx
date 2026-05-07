import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import ServicesSection from '@/components/ServicesSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
  };
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Metalplast',
  description: 'Proizvodnja i instalacija PVC i aluminijumskih prozora, vrata i ograda.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://metalplast.ba',
  telephone: '+38761152357',
  email: 'info@metalplast.ba',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suljagića Sokak 17',
    addressLocality: 'Brčko',
    postalCode: '76100',
    addressCountry: 'BA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.8688051,
    longitude: 18.7826218,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  image: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://metalplast.ba'}/metalplastLogo.jpg`,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
