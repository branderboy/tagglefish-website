import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeader, FadeIn, Button } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { AboutPageSchema } from '../components/JsonLd';
import seo from '../seo';

const About = () => (
  <div className="bg-slate-950 min-h-screen text-white pt-32 pb-20">
    <SEOHead {...seo.about} />
    <AboutPageSchema description={seo.about.description} />

    <Container>
      <SectionHeader light subtitle="Philosophy" title="BUILT FOR THE BOTTOM OF THE FUNNEL" as="h1" />
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <FadeIn>
            <p className="text-2xl text-slate-400 font-light leading-relaxed mb-12">
              TaggleFish exists for one reason: to help local businesses capture demand that already exists. We build the digital infrastructure — not brand awareness campaigns. Check out <Link to="/services" className="text-teal-400 underline hover:text-teal-300">our services</Link> to see every tool we deploy.
            </p>
            <div className="space-y-12">
              <div className="pl-8 border-l-2 border-rose-500">
                <h2 className="text-white font-bold uppercase tracking-widest mb-2">No Vanity Metrics</h2>
                <p className="text-slate-400">
                  We don't run awareness campaigns. We focus on customers who are actively searching for your service right now. Learn <Link to="/how-it-works" className="text-teal-400 underline hover:text-teal-300">how our system works</Link>.
                </p>
              </div>
              <div className="pl-8 border-l-2 border-teal-500">
                <h2 className="text-white font-bold uppercase tracking-widest mb-2">Intent to Revenue</h2>
                <p className="text-slate-400">
                  Everything we build is designed to turn search intent into calls, orders, and revenue. That's why we offer a <Link to="/deal" className="text-teal-400 underline hover:text-teal-300">complete system at one price</Link> instead of selling pieces.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  </div>
);

export default About;
