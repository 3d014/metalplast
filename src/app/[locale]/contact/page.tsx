import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

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
              <ContactForm
                labels={{
                  formHeading: t('formHeading'),
                  nameLabel: t('nameLabel'),
                  namePlaceholder: t('namePlaceholder'),
                  emailLabel: t('emailLabel'),
                  emailPlaceholder: t('emailPlaceholder'),
                  subjectLabel: t('subjectLabel'),
                  subjectPlaceholder: t('subjectPlaceholder'),
                  messageLabel: t('messageLabel'),
                  messagePlaceholder: t('messagePlaceholder'),
                  send: t('send'),
                  successMessage: t('successMessage'),
                  errorMessage: t('errorMessage'),
                }}
              />

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

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.6801872585734!2d18.782621799999998!3d44.868805099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c0e9e990ab319%3A0xf0b72d9039bf7423!2sMetalplast!5e0!3m2!1shr!2sba!4v1778126659523!5m2!1shr!2sba"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1778126760622!6m8!1m7!1sHxnntwwdjHS1WC6RcKM1Ug!2m2!1d44.86889193566919!2d18.78262387608827!3f187.71239!4f0!5f0.7820865974627469"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="accelerometer; gyroscope"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
