'use client';

import { useRef, useState, useTransition } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';

interface ContactFormProps {
  labels: {
    formHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    successMessage: string;
    errorMessage: string;
  };
}

export default function ContactForm({ labels }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    });
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{labels.formHeading}</h2>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          {labels.successMessage}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {labels.errorMessage}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">{labels.nameLabel}</label>
          <input
            type="text"
            name="name"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:opacity-50"
            placeholder={labels.namePlaceholder}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">{labels.emailLabel}</label>
          <input
            type="email"
            name="email"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:opacity-50"
            placeholder={labels.emailPlaceholder}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">{labels.subjectLabel}</label>
          <input
            type="text"
            name="subject"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:opacity-50"
            placeholder={labels.subjectPlaceholder}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">{labels.messageLabel}</label>
          <textarea
            rows={5}
            name="message"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:opacity-50"
            placeholder={labels.messagePlaceholder}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? '...' : labels.send}
        </button>
      </form>
    </div>
  );
}
