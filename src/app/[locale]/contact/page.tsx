import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Contact() {
  const t = await getTranslations('ContactPage');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{t('heading')}</h1>
            <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('formHeading')}</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('nameLabel')}</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('emailLabel')}</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('subjectLabel')}</label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder={t('subjectPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('messageLabel')}</label>
                    <textarea
                      rows={5}
                      name="message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder={t('messagePlaceholder')}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    {t('send')}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('infoHeading')}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{t('addressTitle')}</h3>
                    <p className="text-gray-600">{t('addressValue')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{t('emailTitle')}</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@metalplast.ba" className="hover:text-blue-600">
                        info@metalplast.ba
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{t('phoneTitle')}</h3>
                    <p className="text-gray-600">
                      <a href="tel:+38761152357" className="hover:text-blue-600">
                        +387 61 152 357
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{t('hoursTitle')}</h3>
                    <p className="text-gray-600">{t('hoursWeekday')}</p>
                    <p className="text-gray-600">{t('hoursSat')}</p>
                    <p className="text-gray-600">{t('hoursSun')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
