import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, Button, Container, SectionHeader } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { WebPageSchema } from '../components/JsonLd';
import seo from '../seo';

const steps = [
  { step: '01', title: 'We Build Conversion Pages', text: "We don't build one homepage and call it done. We build pages for every service you offer and every area you serve." },
  { step: '02', title: 'We Get You Ranking', text: 'Pages are useless if nobody finds them. We optimize your Google Business Profile and build the local SEO signals.' },
  { step: '03', title: 'Leads Start Coming In', text: 'Your pages rank. Your Google profile shows up. Customers find you. They call. They fill out forms.' },
  { step: '04', title: 'We Respond Instantly', text: 'The moment a lead comes in, they get a response. Not later. Now. We install instant response and follow-up.' },
  { step: '05', title: 'You See Everything', text: 'No monthly PDFs. No guessing. You get a live dashboard showing rankings, leads, reviews, and performance.' },
  { step: '06', title: 'You Close The Deal', text: "By the time you talk to the lead, they're engaged and informed. You're not cold-calling. You're closing." },
];

const HowItWorks = () => (
  <div className="bg-slate-950 min-h-screen text-white pt-32 pb-20">
    <SEOHead {...seo.howItWorks} />
    <WebPageSchema name="How TaggleFish Works" description={seo.howItWorks.description} path="/how-it-works" />

    <Container>
      <SectionHeader light subtitle="The Blueprint" title="IT'S NOT MARKETING. IT'S A SYSTEM." as="h1" />
      <div className="max-w-4xl mb-20">
        <p className="text-2xl text-slate-400 font-light leading-relaxed">
          Most agencies build a website and wish you luck. We build a complete local customer acquisition system that generates leads, responds instantly, and keeps your pipeline full. Browse our <Link to="/services" className="text-teal-400 underline hover:text-teal-300">full list of services</Link> to see each tool in detail.
        </p>
      </div>
      <div className="space-y-0">
        {steps.map((item, i) => (
          <FadeIn key={i}>
            <div className="grid md:grid-cols-12 gap-12 py-16 border-t border-slate-800 hover:bg-slate-900/30 transition-colors">
              <div className="md:col-span-2"><div className="text-6xl font-black text-slate-800">{item.step}</div></div>
              <div className="md:col-span-4"><h2 className="text-3xl font-black text-white uppercase tracking-tight">{item.title}</h2></div>
              <div className="md:col-span-6"><p className="text-lg text-slate-400 leading-relaxed font-light">{item.text}</p></div>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mt-20 pt-20 border-t border-slate-800 text-center">
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Ready to install this system in your business? <Link to="/deal" className="text-teal-400 underline hover:text-teal-300">See the lifetime deal</Link> or apply directly below.
        </p>
        <Button to="/apply" variant="primary" className="py-6 px-16 text-lg">Apply Now</Button>
      </div>
    </Container>
  </div>
);

export default HowItWorks;
