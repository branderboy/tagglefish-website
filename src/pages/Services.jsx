import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { FadeIn, Button, Container, SectionHeader } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { ServiceListSchema, FAQSchema } from '../components/JsonLd';
import seo, { servicesFAQ } from '../seo';

const services = [
  {
    name: 'ReadySite',
    cat: 'WEBSITE SETUP',
    description: "If customers don't understand your site in 5 seconds, they leave.",
    points: ['What you do is immediately clear', 'It works properly on phones', 'Calling or contacting you is obvious'],
    note: 'This is the starting point. Nothing else works without it.',
  },
  {
    name: 'LocalFind',
    cat: 'SHOW UP IN LOCAL SEARCH',
    description: "People search for services near them. If you don't show up, the job goes to someone else.",
    points: ['You show up on Google and Maps', 'Your site matches what Google shows', 'You compete in your local area'],
    note: 'This is how customers find you.',
  },
  {
    name: 'FirstReply',
    cat: 'INSTANT LEAD RESPONSE',
    description: 'The first business to respond usually wins.',
    points: ['Instant replies to new leads', 'Missed calls that turn into follow-ups', "Automatic responses so jobs don't die"],
    note: 'This stops money from slipping through the cracks.',
  },
  {
    name: 'ClearView',
    cat: "SEE WHAT'S WORKING",
    description: "If you don't know what's working, you can't fix what's not.",
    points: ['Where you rank locally', 'How many leads came in', 'How fast they were answered'],
    note: 'No confusing reports. Just the basics that matter.',
  },
  {
    name: 'SiteCare',
    cat: 'ONGOING SUPPORT',
    description: 'Things need upkeep.',
    points: ['Small updates', 'Fixes', 'Help when something breaks'],
    note: 'So nothing quietly falls apart.',
  },
];

const ServicesPage = () => (
  <div className="bg-slate-950 min-h-screen text-white pt-32 pb-20">
    <SEOHead {...seo.services} />
    <ServiceListSchema
      services={services.map((s) => ({ name: s.name, description: s.description }))}
    />
    <FAQSchema faqs={servicesFAQ} />

    <Container>
      <FadeIn>
        <SectionHeader light subtitle="Our Products" title="SERVICES" as="h1" />
        <p className="text-xl text-slate-400 max-w-2xl mb-16 leading-relaxed">
          We help local businesses get found, get contacted, and stop missing jobs. Whether you run a{' '}
          <Link to="/cannabis" className="text-green-400 underline hover:text-green-300">cannabis dispensary</Link>, a{' '}
          <Link to="/contractors" className="text-blue-400 underline hover:text-blue-300">contracting business</Link>, or a{' '}
          <Link to="/restaurants" className="text-orange-400 underline hover:text-orange-300">restaurant</Link> — these products work together to turn search traffic into revenue.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-10 hover:border-teal-500 transition-colors group">
              <div className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-2">{service.cat}</div>
              <h2 className="text-3xl font-black text-white mb-4">Product: {service.name}</h2>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <Icons.CheckCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-800 text-xs font-bold uppercase tracking-wide text-slate-500">
                {service.note}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 border-t border-slate-800 pt-20">
          <div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase">Why These Work Together</h2>
            <p className="text-slate-400 mb-6">
              Most businesses buy pieces. A site from one place. SEO from another. A tool they forget to check. That's why customers leak. <Link to="/how-it-works" className="text-teal-400 underline hover:text-teal-300">See our 6-step system</Link> for how all the pieces connect.
            </p>
            <ul className="space-y-4">
              {['People find you', 'They contact you', 'You respond fast', "You know what's happening"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-bold">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-10 border-l-4 border-rose-500">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Who This Is For</h2>
            <div className="space-y-4">
              {['Local businesses losing jobs to competitors', 'Owners tired of guessing', 'Businesses ready to stop missing customers'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <Icons.Users className="w-5 h-5 text-rose-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 border-t border-slate-800 pt-20">
          <h2 className="text-3xl font-black text-white mb-10 uppercase">Frequently Asked Questions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesFAQ.map((faq, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-black text-white mb-6 uppercase">Next Step</h2>
          <p className="text-slate-400 mb-8">
            Don't let another customer slip away. <Link to="/deal" className="text-teal-400 underline hover:text-teal-300">See the lifetime deal pricing</Link> or apply directly.
          </p>
          <Button to="/apply" variant="primary" className="py-6 px-12 text-lg">Claim Lifetime Deal</Button>
        </div>
      </FadeIn>
    </Container>
  </div>
);

export default ServicesPage;
