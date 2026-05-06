import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    {
      id: 1,
      titleKey: 's1Title' as const,
      descKey: 's1Desc' as const,
      featureKeys: ['s1f1', 's1f2', 's1f3'] as const,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      titleKey: 's2Title' as const,
      descKey: 's2Desc' as const,
      featureKeys: ['s2f1', 's2f2', 's2f3'] as const,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 3,
      titleKey: 's3Title' as const,
      descKey: 's3Desc' as const,
      featureKeys: ['s3f1', 's3f2', 's3f3'] as const,
      color: 'from-emerald-500 to-cyan-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('heading')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.featureKeys.map((key) => (
                    <li key={key} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t(key)}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
                >
                  {t('learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
