import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setConfirmationMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      zip: formData.get('zip') as string,
      message: formData.get('message') as string,
      source: formData.get('source') as string,
      honeypot: formData.get('website') as string,
    };

    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact`;
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(data),
    }).catch(() => {
    });

    setTimeout(() => {
      setConfirmationMessage('Thanks — we received your request and will contact you shortly.');
      e.currentTarget.reset();
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-md lg:p-10">
      <h3 className="mb-6 text-2xl font-bold text-slate-900">
        Request Service
      </h3>

      {confirmationMessage && (
        <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 p-4">
          <p className="text-blue-900 text-sm">{confirmationMessage}</p>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="zip" className="mb-2 block text-sm font-semibold text-slate-700">
            Zip Code <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your zip code"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Additional details (optional)"
          ></textarea>
        </div>

        <div>
          <label htmlFor="source" className="mb-2 block text-sm font-semibold text-slate-700">
            How did you find us?
          </label>
          <select
            id="source"
            name="source"
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Select one (optional)</option>
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 px-8 py-3 text-base font-bold text-white transition hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed md:py-4 md:text-lg md:leading-normal leading-tight"
        >
          {isSubmitting ? 'Submitting...' : (
            <>
              <span className="md:hidden">Free Home Safety Check</span>
              <span className="hidden md:inline">Free Home Airflow & Safety Check</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
