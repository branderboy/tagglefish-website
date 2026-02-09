import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { FadeIn, Button, Section, Container, SectionHeader } from '../components/ui';
import SEOHead from '../components/SEOHead';
import { OrganizationSchema, WebSiteSchema, WebPageSchema } from '../components/JsonLd';
import seo from '../seo';

const Homepage = () => (
  <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden">
    <SEOHead {...seo.home} />
    <OrganizationSchema />
    <WebSiteSchema />
    <WebPageSchema name="TaggleFish Home" description={seo.home.description} path="/" />

    {/* HERO */}
    <Section className="min-h-screen flex items-center pt-32 pb-20 relative">
      <div className="absolute top-0 right-0 w-[80vw] h-[100vh] bg-gradient-to-b from-slate-900 to-slate-950 -z-10 border-l border-slate-800 opacity-80"></div>
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]"></div>

      <Container>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative z-20">
            <FadeIn className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-teal-500/30 bg-teal-950/30 text-teal-400 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse shadow-[0_0_10px_#14b8a6]"></div>
                System Active
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-8 text-white">
                MORE CALLS. <br />
                FASTER RESPONSES. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 relative">
                  FEWER MISSED JOBS.
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-6">
                Everything you need to stop customers from slipping through the cracks.
              </h2>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light mb-10">
                We help customers find you in local search, land on a website that makes sense, get an instant response when they reach out, and see what's working without guessing. Explore our{' '}
                <Link to="/services" className="text-teal-400 underline hover:text-teal-300">full suite of services</Link> or{' '}
                <Link to="/how-it-works" className="text-teal-400 underline hover:text-teal-300">see how our system works</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button to="/deal" variant="primary">Claim Your Lifetime Deal</Button>
                <Button to="/apply" variant="secondary">Apply Now</Button>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
            <FadeIn delay={200} className="w-full h-full flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-rose-500/20 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                <div className="absolute inset-0 border border-slate-800 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-[15%] border border-dashed border-slate-700/50 rounded-full animate-spin-reverse"></div>
                <div className="absolute inset-[30%] border border-slate-800 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 m-auto w-40 h-40 bg-slate-900/90 backdrop-blur-xl rounded-full border border-slate-700 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.3)] z-20">
                  <div className="text-5xl font-black text-white tracking-tighter">TF</div>
                  <div className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mt-1">System Active</div>
                  <div className="absolute inset-0 rounded-full border-2 border-teal-500/20 animate-ping"></div>
                </div>
                <div className="absolute top-[10%] right-0 z-30 animate-[bounce_3s_infinite]">
                  <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-lg shadow-xl w-48 border-l-4 border-l-rose-500">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-500/20 rounded text-rose-400"><Icons.Mail className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold">New Lead</div>
                        <div className="text-xs font-bold text-white">HVAC Inquiry</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[20%] left-0 z-30 animate-[bounce_4s_infinite]">
                  <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-lg shadow-xl w-48 border-l-4 border-l-teal-500">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-500/20 rounded text-teal-400"><Icons.TrendingUp className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold">Google Maps</div>
                        <div className="text-xs font-bold text-white">Rank #1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[10%] right-[10%] z-30 animate-[bounce_5s_infinite]">
                  <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    <div className="text-xs font-bold text-slate-300">AI Agent Responding...</div>
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
                  <path d="M250 250 L380 100" stroke="url(#lineGrad)" strokeWidth="1" />
                  <path d="M250 250 L100 380" stroke="url(#lineGrad)" strokeWidth="1" />
                  <path d="M250 250 L350 420" stroke="url(#lineGrad)" strokeWidth="1" />
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0f766e" stopOpacity="0" />
                      <stop offset="50%" stopColor="#0f766e" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>

    {/* INDUSTRY SELECTION */}
    <Section bg="dark" className="py-20 border-y border-slate-900">
      <Container>
        <SectionHeader light subtitle="Select Market" title="CHOOSE YOUR INDUSTRY" align="center" />
        <div className="grid md:grid-cols-3 gap-0 border border-slate-800 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {[
            { to: '/cannabis', icon: Icons.Leaf, title: 'Cannabis', desc: 'Dispensaries & Brands. Ads are restricted. Organic search is your entire strategy.', hover: 'group-hover:text-green-400' },
            { to: '/contractors', icon: Icons.Wrench, title: 'Contractors', desc: "HVAC, Plumbing, Trades. You're on the job. We make sure leads are answered fast.", hover: 'group-hover:text-blue-400' },
            { to: '/restaurants', icon: Icons.Utensils, title: 'Restaurants', desc: 'Food & Bev. Stop paying 30% to platforms. Get diners directly.', hover: 'group-hover:text-orange-400' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="group relative p-12 bg-slate-950 hover:bg-slate-900 transition-colors duration-500 cursor-pointer text-center block">
              <div className="mb-8 flex justify-center">
                <item.icon className={`w-12 h-12 text-slate-600 ${item.hover} transition-colors duration-500`} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm px-4">{item.desc}</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">View Solutions</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>

    {/* WHAT WE DO */}
    <Section className="bg-slate-950 py-20">
      <Container>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <SectionHeader light subtitle="Capabilities" title="WHAT WE DO" />
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We don't do "marketing". We build infrastructure. Every piece of the system has a single job: revenue. See all <Link to="/services" className="text-teal-400 underline hover:text-teal-300">our services</Link> or check our <Link to="/deal" className="text-teal-400 underline hover:text-teal-300">lifetime deal</Link>.
              </p>
              <Button to="/services" variant="secondary">View Services</Button>
            </div>
          </div>
          <div className="lg:col-span-8 grid gap-8">
            {[
              { title: 'Website Build', problem: "If you don't have a real website, you're invisible.", solution: 'We build fast, mobile-first sites designed to generate calls, orders, and inquiries.' },
              { title: 'Local SEO + Google Business', problem: "If your site and Google Profile don't align, you don't rank.", solution: 'We fix that so you show up for service-plus-city searches.' },
              { title: 'Lead Automation', problem: 'If leads wait, leads leave.', solution: 'We install instant response and follow-up so jobs don\'t die in voicemail.' },
              { title: 'War Room Dashboard', problem: "If you can't see it, you can't scale it.", solution: 'We give you a clear dashboard with rankings, leads, reviews, and alerts.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-10 border border-slate-800 bg-slate-900/50 hover:border-teal-500 transition-colors group">
                  <h3 className="text-3xl font-black text-white mb-4 uppercase">{item.title}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-rose-500 mb-2">The Problem</div>
                      <p className="text-slate-400 text-sm">{item.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-teal-500 mb-2">Our Solution</div>
                      <p className="text-white text-sm font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

export default Homepage;
