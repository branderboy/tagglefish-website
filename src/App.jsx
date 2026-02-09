import React, { useEffect } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Icons from './components/Icons';
import { Button, Container } from './components/ui';
import { OrganizationSchema, WebSiteSchema } from './components/JsonLd';

import Homepage from './pages/Home';
import ServicesPage from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import DealPage from './pages/Deal';
import Apply from './pages/Apply';
import About from './pages/About';
import ReachUs from './pages/ReachUs';
import Cannabis from './pages/Cannabis';
import Contractors from './pages/Contractors';
import Restaurants from './pages/Restaurants';

/* ------------------------------------------------------------------ */
/*  Scroll-to-top on route change                                     */
/* ------------------------------------------------------------------ */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* ------------------------------------------------------------------ */
/*  Mobile Menu                                                       */
/* ------------------------------------------------------------------ */
const MobileMenu = ({ open, onClose }) => {
  if (!open) return null;
  const nav = (to) => () => onClose();
  return (
    <div className="fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center space-y-6 text-white p-8 overflow-y-auto">
      <button onClick={onClose} className="absolute top-6 right-6"><Icons.X /></button>
      <NavLink to="/" onClick={nav('/')} className="text-xl font-black uppercase tracking-tight hover:text-rose-500">Home</NavLink>
      <div className="h-px w-12 bg-slate-800 my-2"></div>
      <NavLink to="/services" onClick={nav('/services')} className="text-xl font-black uppercase tracking-tight hover:text-rose-500">All Services</NavLink>
      <NavLink to="/cannabis" onClick={nav('/cannabis')} className="text-lg font-bold text-slate-400 hover:text-rose-500">Cannabis</NavLink>
      <NavLink to="/contractors" onClick={nav('/contractors')} className="text-lg font-bold text-slate-400 hover:text-rose-500">Contractors</NavLink>
      <NavLink to="/restaurants" onClick={nav('/restaurants')} className="text-lg font-bold text-slate-400 hover:text-rose-500">Restaurants</NavLink>
      <div className="h-px w-12 bg-slate-800 my-2"></div>
      <NavLink to="/how-it-works" onClick={nav('/how-it-works')} className="text-xl font-black uppercase tracking-tight hover:text-rose-500">How It Works</NavLink>
      <NavLink to="/deal" onClick={nav('/deal')} className="text-xl font-black uppercase tracking-tight hover:text-rose-500">Deal</NavLink>
      <NavLink to="/about" onClick={nav('/about')} className="text-xl font-black uppercase tracking-tight hover:text-rose-500">About</NavLink>
      <NavLink to="/reach-us" onClick={nav('/reach-us')} className="text-xl font-black uppercase tracking-tight hover:text-rose-500">Reach Us</NavLink>
      <NavLink to="/apply" onClick={nav('/apply')} className="text-xl font-black uppercase tracking-tight text-rose-500">Get in Touch</NavLink>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  App Layout                                                        */
/* ------------------------------------------------------------------ */
const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="font-sans antialiased selection:bg-rose-500 selection:text-white bg-slate-950">
      <ScrollToTop />
      <OrganizationSchema />
      <WebSiteSchema />

      {/* ---- NAVIGATION ---- */}
      <nav className="fixed w-full z-50 py-6 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-slate-950 flex items-center justify-center rounded-sm font-bold">TF</div>
            TAGGLEFISH.
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-rose-500' : 'hover:text-rose-500 transition-colors'}>Home</NavLink>

            {/* Services dropdown */}
            <div className="relative group">
              <NavLink to="/services" className={({ isActive }) => `flex items-center gap-1 py-6 transition-colors ${isActive ? 'text-rose-500' : 'hover:text-rose-500'}`}>
                Services <Icons.ChevronDown className="w-4 h-4" />
              </NavLink>
              <div className="absolute top-full left-0 w-56 bg-slate-900 border border-slate-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 flex flex-col">
                <NavLink to="/services" className="text-left px-6 py-4 hover:bg-slate-800 hover:text-rose-500 border-b border-slate-800 transition-colors block">Overview</NavLink>
                <NavLink to="/cannabis" className="text-left px-6 py-4 hover:bg-slate-800 hover:text-rose-500 border-b border-slate-800 transition-colors block">Cannabis</NavLink>
                <NavLink to="/contractors" className="text-left px-6 py-4 hover:bg-slate-800 hover:text-rose-500 border-b border-slate-800 transition-colors block">Contractors</NavLink>
                <NavLink to="/restaurants" className="text-left px-6 py-4 hover:bg-slate-800 hover:text-rose-500 transition-colors block">Restaurants</NavLink>
              </div>
            </div>

            <NavLink to="/how-it-works" className={({ isActive }) => isActive ? 'text-rose-500' : 'hover:text-rose-500 transition-colors'}>How It Works</NavLink>
            <NavLink to="/deal" className={({ isActive }) => isActive ? 'text-rose-500' : 'hover:text-rose-500 transition-colors'}>Deal</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-rose-500' : 'hover:text-rose-500 transition-colors'}>About</NavLink>
            <NavLink to="/reach-us" className={({ isActive }) => isActive ? 'text-rose-500' : 'hover:text-rose-500 transition-colors'}>Reach Us</NavLink>

            <Button to="/apply" variant="primary" className="py-2 px-6 text-xs">Get in Touch</Button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* ---- PAGE CONTENT ---- */}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/deal" element={<DealPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/reach-us" element={<ReachUs />} />
          <Route path="/cannabis" element={<Cannabis />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className="bg-black text-white py-20 border-t border-slate-900 relative z-10">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Services</div>
              <div className="flex flex-col gap-2">
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">All Services</Link>
                <Link to="/cannabis" className="text-slate-400 hover:text-white text-sm transition-colors">Cannabis SEO</Link>
                <Link to="/contractors" className="text-slate-400 hover:text-white text-sm transition-colors">Contractor Lead Gen</Link>
                <Link to="/restaurants" className="text-slate-400 hover:text-white text-sm transition-colors">Restaurant Direct Orders</Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company</div>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About</Link>
                <Link to="/how-it-works" className="text-slate-400 hover:text-white text-sm transition-colors">How It Works</Link>
                <Link to="/deal" className="text-slate-400 hover:text-white text-sm transition-colors">Lifetime Deal</Link>
                <Link to="/reach-us" className="text-slate-400 hover:text-white text-sm transition-colors">Reach Us</Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Get Started</div>
              <div className="flex flex-col gap-2">
                <Link to="/apply" className="text-slate-400 hover:text-white text-sm transition-colors">Apply Now</Link>
                <a href="mailto:hello@tagglefish.com" className="text-slate-400 hover:text-white text-sm transition-colors">hello@tagglefish.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-slate-900 pt-12">
            <div><h2 className="text-[8vw] leading-none font-black text-slate-800 select-none">TAGGLEFISH</h2></div>
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Contact</div>
              <div className="text-xl font-bold">hello@tagglefish.com</div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
