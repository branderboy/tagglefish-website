import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { FadeIn, Button, Container } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { IndustryPageSchema, FAQSchema } from '../components/JsonLd';
import seo, { contractorsFAQ } from '../seo';

const Contractors = () => (
  <div className="bg-slate-950 min-h-screen text-white pt-40 pb-20">
    <SEOHead {...seo.contractors} />
    <IndustryPageSchema name="Contractors" description={seo.contractors.description} path="/contractors" />
    <FAQSchema faqs={contractorsFAQ} />

    <Container>
      <FadeIn>
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-slate-800 mb-10 text-blue-400">
          <Icons.Wrench className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Local Contractors</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-12 max-w-5xl leading-none text-white uppercase">
          Losing Jobs Because You're Busy Doing Jobs.
        </h1>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <p className="text-2xl text-slate-400 font-light leading-relaxed border-l-2 border-slate-700 pl-8 mb-16">
              Homeowners call the first contractor who answers. If you're on a ladder or under a sink, that job is gone. Our <Link to="/services" className="text-teal-400 underline hover:text-teal-300">local SEO for contractors</Link> makes sure you never miss another lead.
            </p>
            <div className="space-y-12">
              <div className="bg-slate-900 p-10 border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">The Reality</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  You're great at your trade, but you can't always answer the phone. 78% of customers hire the first contractor who responds.
                </p>
              </div>
              <div className="bg-slate-900 p-10 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                <h2 className="text-xl font-bold text-teal-400 mb-4 uppercase tracking-wide">Our Solution</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We build systems that get you found and respond instantly so you never lose work because you were working. See <Link to="/how-it-works" className="text-teal-400 underline hover:text-teal-300">how the system works in 6 steps</Link>.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-black text-white mb-8 uppercase">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {contractorsFAQ.map((faq, i) => (
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

export default Contractors;
