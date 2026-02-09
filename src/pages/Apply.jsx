import React, { useState } from 'react';
import { Button, Container } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { WebPageSchema } from '../components/JsonLd';
import seo from '../seo';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_replace_this_with_your_link';

const Apply = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ business: '', website: '', challenge: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Form Captured:', formData);
      window.location.href = STRIPE_PAYMENT_LINK;
    }, 1500);
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      <SEOHead {...seo.apply} />
      <WebPageSchema name="Apply to TaggleFish" description={seo.apply.description} path="/apply" />

      <Container>
        <div className="max-w-3xl mx-auto bg-white p-12 md:p-20 relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 uppercase mb-4">Start Generating Revenue on Autopilot.</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Turn local search traffic into booked jobs without adding to your workload. Let's build your custom acquisition system today.
            </p>
          </div>
          <div className="border-t-4 border-rose-500 pt-8">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Business Name</label>
                  <input
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full border-b-2 border-slate-200 py-4 text-xl font-bold text-slate-900 focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="Enter name..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Website</label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full border-b-2 border-slate-200 py-4 text-xl font-bold text-slate-900 focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="https://"
                  />
                </div>
                <div className="pt-8 text-right">
                  <Button onClick={() => setStep(2)} variant="dark">Next Step</Button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Biggest Challenge</label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows="3"
                    className="w-full border-b-2 border-slate-200 py-4 text-xl font-bold text-slate-900 focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="What's holding you back?"
                  />
                </div>
                <div className="pt-8 flex justify-between">
                  <button onClick={() => setStep(1)} className="text-slate-400 font-bold uppercase text-xs">Back</button>
                  <Button onClick={handleFinalSubmit} variant="dark" isLoading={isSubmitting}>Proceed to Payment</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Apply;
