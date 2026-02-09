/**
 * Centralized SEO data for every route.
 * Each entry contains: title, description, path, ogType, and jsonLdTypes.
 */

const seo = {
  home: {
    title: 'TaggleFish | Local Business Digital Systems — Get Found, Get Leads, Get Revenue',
    description:
      'TaggleFish builds digital systems that help local businesses get found in search, respond to leads instantly, and stop missing customers. Cannabis, contractors, restaurants.',
    path: '/',
    ogType: 'website',
  },
  services: {
    title: 'Digital Marketing Services for Local Businesses | TaggleFish',
    description:
      'Website setup, local SEO, lead automation, and dashboard analytics. TaggleFish services help local businesses get found, respond fast, and close more jobs.',
    path: '/services',
    ogType: 'website',
  },
  howItWorks: {
    title: 'How TaggleFish Works | 6-Step Local Business Growth System',
    description:
      'From conversion pages to instant lead response to a live dashboard — see how TaggleFish builds complete local customer acquisition systems in 6 steps.',
    path: '/how-it-works',
    ogType: 'website',
  },
  deal: {
    title: 'Lifetime Deal — $2,450 Complete Local Business System | TaggleFish',
    description:
      'Get a website that converts, local SEO, instant lead response, and a live dashboard for $2,450 + $99/mo support. Limited availability.',
    path: '/deal',
    ogType: 'website',
  },
  apply: {
    title: 'Apply — Start Your Local Business Growth System | TaggleFish',
    description:
      'Apply to get your custom local business acquisition system from TaggleFish. Websites, SEO, lead automation, and dashboards that generate revenue.',
    path: '/apply',
    ogType: 'website',
  },
  about: {
    title: 'About TaggleFish | Bottom-of-Funnel Digital Systems for Local Business',
    description:
      'TaggleFish captures demand that already exists. No vanity metrics — we focus on customers actively searching for your service and turn intent into revenue.',
    path: '/about',
    ogType: 'website',
  },
  cannabis: {
    title: 'Cannabis Dispensary SEO & Digital Marketing | TaggleFish',
    description:
      'Cannabis businesses cannot run ads. TaggleFish helps dispensaries rank in local search, convert organic traffic, and build direct customer relationships.',
    path: '/cannabis',
    ogType: 'website',
  },
  contractors: {
    title: 'Contractor SEO & Lead Generation | HVAC, Plumbing, Trades | TaggleFish',
    description:
      'Contractors miss jobs because they are busy doing jobs. TaggleFish gets you found locally and responds to leads instantly so you never lose work.',
    path: '/contractors',
    ogType: 'website',
  },
  restaurants: {
    title: 'Restaurant SEO & Direct Order Systems | TaggleFish',
    description:
      'Stop paying 30% to delivery platforms. TaggleFish helps restaurants get found on Google and Maps so orders and reservations come directly to you.',
    path: '/restaurants',
    ogType: 'website',
  },
  reachUs: {
    title: 'Contact TaggleFish | Get in Touch for Local Business Growth',
    description:
      'Have a question? Ready to start? Reach TaggleFish directly. Email hello@tagglefish.com or send a message. Based in Washington, DC — serving clients nationwide.',
    path: '/reach-us',
    ogType: 'website',
  },
};

export default seo;

/* FAQ data for Services and Industry pages */

export const servicesFAQ = [
  {
    q: 'What services does TaggleFish offer?',
    a: 'We provide website setup (ReadySite), local SEO (LocalFind), instant lead response (FirstReply), analytics dashboard (ClearView), and ongoing support (SiteCare) — all designed to help local businesses get found and convert leads.',
  },
  {
    q: 'How does TaggleFish help local businesses get more customers?',
    a: 'We build a complete system: your website converts visitors, local SEO gets you found in search, automated responses capture leads instantly, and a live dashboard shows what is working.',
  },
  {
    q: 'Do I need all five services?',
    a: 'The services work best together because each solves a different part of the customer acquisition problem. A great website means nothing if nobody finds it, and traffic means nothing if leads go unanswered.',
  },
  {
    q: 'How is TaggleFish different from a marketing agency?',
    a: 'We don\'t do marketing — we build infrastructure. Every component has one job: turn search intent into revenue. No vanity metrics, no fluff, just systems that produce results.',
  },
];

export const cannabisFAQ = [
  {
    q: 'Why is SEO critical for cannabis businesses?',
    a: 'Cannabis businesses face advertising restrictions on major platforms. Organic search and Google Maps are your primary growth channels for reaching local customers.',
  },
  {
    q: 'How does TaggleFish help dispensaries rank locally?',
    a: 'We optimize your Google Business Profile, build service-area landing pages, and create the local SEO signals that help you show up for searches like "dispensary near me."',
  },
  {
    q: 'Can cannabis businesses advertise on Google?',
    a: 'Most paid advertising is restricted for cannabis. That makes organic search your entire strategy — ranking on Google Maps and local results is how customers find you.',
  },
  {
    q: 'What results can a cannabis business expect from TaggleFish?',
    a: 'Higher local search rankings, more organic website traffic, and direct customer relationships instead of dependence on third-party platforms.',
  },
];

export const contractorsFAQ = [
  {
    q: 'Why do contractors lose leads?',
    a: 'Most contractors are on the job when customers call. 78% of homeowners hire the first contractor who responds — if you can\'t answer, the job goes to someone else.',
  },
  {
    q: 'How does TaggleFish help contractors get more jobs?',
    a: 'We build a system that gets you found in local search and responds to leads instantly with automation, so you never miss a job because you were working.',
  },
  {
    q: 'What kind of contractors does TaggleFish work with?',
    a: 'We work with HVAC, plumbing, electrical, roofing, landscaping, and other local trade businesses that depend on local search for new customers.',
  },
  {
    q: 'Do I need a new website to work with TaggleFish?',
    a: 'We build conversion-focused websites as part of our system. If your current site is not generating calls and inquiries, we replace it with one that does.',
  },
];

export const restaurantsFAQ = [
  {
    q: 'How can restaurants stop paying 30% to delivery platforms?',
    a: 'By ranking in Google Search and Maps for queries like "thai food near me," customers find and order from you directly instead of through third-party apps.',
  },
  {
    q: 'Does TaggleFish build online ordering systems?',
    a: 'We focus on getting diners to find you directly through search. We build websites that make ordering and reservations simple without third-party fees.',
  },
  {
    q: 'How does local SEO help restaurants?',
    a: 'When someone searches for food near them, Google shows local results. We optimize your presence so you appear at the top, driving direct traffic and orders.',
  },
  {
    q: 'What is the ROI of direct orders vs platform orders?',
    a: 'Platform commissions of 15-30% eat into your margins. Direct orders through your own website keep that revenue with you, improving profitability on every order.',
  },
];
