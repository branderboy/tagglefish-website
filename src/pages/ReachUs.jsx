import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { Button, Container, FadeIn } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { ContactPageSchema } from '../components/JsonLd';
import seo from '../seo';

const ReachUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      console.log('Contact Form Submitted:', formData);
    }, 1500);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-32 pb-20">
      <SEOHead {...seo.reachUs} />
      <ContactPageSchema />

      <Container>
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4 text-teal-400">
                <span className="w-12 h-[2px] bg-teal-400"></span>
                Contact
              </p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-6">GET IN TOUCH</h1>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                Have a question before you commit? Need to discuss your situation? We're here. You can also{' '}
                <Link to="/deal" className="text-teal-400 underline hover:text-teal-300">view our lifetime deal</Link> or{' '}
                <Link to="/apply" className="text-teal-400 underline hover:text-teal-300">apply directly</Link>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 border border-slate-800">
              <div className="p-12 bg-slate-900">
                <h2 className="text-3xl font-black text-white mb-8 uppercase">Contact Information</h2>
                <p className="text-lg text-slate-400 mb-12">
                  Have a question before you secure your deal? Need to discuss a partnership? We're here.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-500">
                      <Icons.Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email</div>
                      <div className="text-xl font-bold text-white">hello@tagglefish.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-950 border border-slate-800 flex items-center justify-center text-rose-500">
                      <Icons.MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">HQ</div>
                      <div className="text-xl font-bold text-white">Washington, DC</div>
                      <div className="text-sm text-slate-500">Serving clients nationwide</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12">
                <h2 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">Send a Message</h2>
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icons.CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Message Sent</h3>
                    <p className="text-slate-400">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 py-3 px-4 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</label>
                      <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 py-3 px-4 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Your email" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-slate-950 border border-slate-800 py-3 px-4 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="How can we help?" />
                    </div>
                    <Button variant="secondary" className="w-full" onClick={handleSubmit} isLoading={status === 'submitting'}>Send Message</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default ReachUs;
