import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { FadeIn, Button, Container } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { IndustryPageSchema, FAQSchema } from '../components/JsonLd';
import seo, { restaurantsFAQ } from '../seo';

const Restaurants = () => (
  <div className="bg-slate-950 min-h-screen text-white pt-40 pb-20">
    <SEOHead {...seo.restaurants} />
    <IndustryPageSchema name="Restaurants" description={seo.restaurants.description} path="/restaurants" />
    <FAQSchema faqs={restaurantsFAQ} />

    <Container>
      <FadeIn>
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-slate-800 mb-10 text-orange-400">
          <Icons.Utensils className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Restaurants</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-12 max-w-5xl leading-none text-white uppercase">
          Stop Paying 30% for Customers Who Were Already Looking for You.
        </h1>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <p className="text-2xl text-slate-400 font-light leading-relaxed border-l-2 border-slate-700 pl-8 mb-16">
              Third-party platforms insert themselves between you and your customer, then charge you for it. Our <Link to="/services" className="text-teal-400 underline hover:text-teal-300">restaurant SEO and direct order systems</Link> cut out the middleman.
            </p>
            <div className="space-y-12">
              <div className="bg-slate-900 p-10 border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">The Reality</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  You're giving away margin to platforms that didn't earn it. A customer searches "thai food near me" and finds you on DoorDash.
                </p>
              </div>
              <div className="bg-slate-900 p-10 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                <h2 className="text-xl font-bold text-teal-400 mb-4 uppercase tracking-wide">Our Solution</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We help diners find you directly through Google search and Maps, so orders and reservations come to you, not through a middleman. See <Link to="/how-it-works" className="text-teal-400 underline hover:text-teal-300">how the full system works</Link>.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-black text-white mb-8 uppercase">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {restaurantsFAQ.map((faq, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 p-8">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <Button to="/deal" variant="primary">See the Lifetime Deal</Button>
              <Button to="/apply" variant="secondary">Apply Now</Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  </div>
);

export default Restaurants;
