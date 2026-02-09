import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { FadeIn, Button, Container } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { OfferProductSchema } from '../components/JsonLd';
import seo from '../seo';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_replace_this_with_your_link';

const DealPage = () => (
  <div className="bg-slate-950 min-h-screen text-white pt-32 pb-20">
    <SEOHead {...seo.deal} />
    <OfferProductSchema />

    <Container>
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-rose-500/30 bg-rose-950/30 text-rose-400 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm mb-8">
            Limited Availability
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
            Most Local Businesses Don't Have a Lead Problem.
          </h1>
          <p className="text-2xl text-rose-500 font-bold uppercase tracking-widest">
            They have a leak problem.
          </p>
          <div className="mt-12 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            <p className="mb-4">People search. They click. They reach the first business that responds.</p>
            <p>
              If that's not you, the job goes to someone else. This applies to{' '}
              <Link to="/cannabis" className="text-green-400 underline hover:text-green-300">cannabis dispensaries</Link>,{' '}
              <Link to="/contractors" className="text-blue-400 underline hover:text-blue-300">local contractors</Link>, and{' '}
              <Link to="/restaurants" className="text-orange-400 underline hover:text-orange-300">restaurants</Link> alike.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-2xl font-black text-white mb-8 uppercase">Why This Happens</h2>
            <ul className="space-y-6">
              {[
                "The website doesn't convert",
                "You don't show up locally",
                'Leads sit too long',
                "Follow-up doesn't happen",
                "You don't know what's working",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300">
                  <Icons.X className="w-6 h-6 text-rose-500 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-slate-900 border-l-4 border-rose-500 text-slate-400 italic">
              Fixing one doesn't fix the rest. See how <Link to="/how-it-works" className="text-teal-400 underline hover:text-teal-300">our 6-step system</Link> solves all five at once.
            </div>
          </div>
          <div className="bg-slate-900 p-10 border border-slate-800">
            <h2 className="text-2xl font-black text-white mb-8 uppercase">What We Install</h2>
            <div className="space-y-8">
              {[
                { title: 'Website That Converts', price: '$1,200', desc: 'Built so Google can rank it and customers can contact you.' },
                { title: 'Local Search Visibility', price: '$600', desc: 'So you show up when people search for your service.' },
                { title: 'Lead Response + Follow-Up', price: '$450', desc: "Instant replies and follow-up so jobs don't die." },
                { title: 'Visibility and Control', price: '$350', desc: 'See rankings, leads, and response speed without guessing.' },
                { title: 'Support', price: '$99', desc: 'Edits, fixes, and help when needed.' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                  <div>
                    <div className="font-bold text-white uppercase tracking-wide text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </div>
                  <div className="text-slate-400 font-mono text-sm shrink-0">{item.price}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-6">
              See full details for each product on our <Link to="/services" className="text-teal-400 underline hover:text-teal-300">services page</Link>.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-900 border border-teal-500/30 p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-rose-500"></div>
          <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-2">Total If Paid Separately</h2>
          <div className="text-3xl font-black text-slate-500 line-through mb-12">$2,699</div>

          <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-4">Our Offer</h2>
          <div className="text-6xl md:text-8xl font-black text-white mb-2">$2,450</div>
          <div className="text-teal-400 font-bold uppercase tracking-wide mb-8">+ Support: $99/mo</div>

          <p className="text-slate-400 mb-10 max-w-md mx-auto">We install everything together so nothing breaks. No add-ons. No piecing things together.</p>

          <Button to={STRIPE_PAYMENT_LINK} external variant="primary" className="w-full md:w-auto text-lg py-6">
            Claim Lifetime Deal
          </Button>
        </div>

        <div className="mt-20 text-center border-t border-slate-800 pt-16">
          <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-8">Who This Is For</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Local businesses losing jobs', 'Owners tired of guessing', 'Ready to stop missing customers'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <Icons.CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="uppercase text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/apply" variant="secondary">Apply Now</Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  </div>
);

export default DealPage;
