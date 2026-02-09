import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://tagglefish.com';

/* ------------------------------------------------------------------ */
/*  Global schemas — rendered on every page                           */
/* ------------------------------------------------------------------ */

export const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TaggleFish',
        url: DOMAIN,
        email: 'hello@tagglefish.com',
        description:
          'TaggleFish builds digital systems that help local businesses get found in search, respond to leads instantly, and stop missing customers.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Washington',
          addressRegion: 'DC',
          addressCountry: 'US',
        },
        sameAs: [],
      })}
    </script>
  </Helmet>
);

export const WebSiteSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TaggleFish',
        url: DOMAIN,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${DOMAIN}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      })}
    </script>
  </Helmet>
);

/* ------------------------------------------------------------------ */
/*  Per-page schemas                                                  */
/* ------------------------------------------------------------------ */

export const WebPageSchema = ({ name, description, path }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url: `${DOMAIN}${path}`,
        isPartOf: { '@type': 'WebSite', url: DOMAIN },
      })}
    </script>
  </Helmet>
);

export const AboutPageSchema = ({ description }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About TaggleFish',
        description,
        url: `${DOMAIN}/about`,
        isPartOf: { '@type': 'WebSite', url: DOMAIN },
      })}
    </script>
  </Helmet>
);

export const ContactPageSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact TaggleFish',
        description:
          'Get in touch with TaggleFish for local business digital growth systems.',
        url: `${DOMAIN}/reach-us`,
        isPartOf: { '@type': 'WebSite', url: DOMAIN },
      })}
    </script>
  </Helmet>
);

export const ServiceListSchema = ({ services }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'TaggleFish Services',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Service',
            name: s.name,
            description: s.description,
            provider: {
              '@type': 'Organization',
              name: 'TaggleFish',
              url: DOMAIN,
            },
          },
        })),
      })}
    </script>
  </Helmet>
);

export const OfferProductSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'TaggleFish Lifetime Deal — Complete Local Business System',
        description:
          'Website, local SEO, lead automation, dashboard analytics, and ongoing support for local businesses.',
        brand: { '@type': 'Organization', name: 'TaggleFish' },
        offers: {
          '@type': 'Offer',
          price: '2450',
          priceCurrency: 'USD',
          availability: 'https://schema.org/LimitedAvailability',
          url: `${DOMAIN}/deal`,
          description:
            '$2,450 one-time setup + $99/mo support. Website, local SEO, lead response, and dashboard included.',
        },
      })}
    </script>
  </Helmet>
);

export const IndustryPageSchema = ({ name, description, path }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url: `${DOMAIN}${path}`,
        isPartOf: { '@type': 'WebSite', url: DOMAIN },
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `TaggleFish for ${name}`,
        description,
        provider: {
          '@type': 'Organization',
          name: 'TaggleFish',
          url: DOMAIN,
          email: 'hello@tagglefish.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Washington',
            addressRegion: 'DC',
            addressCountry: 'US',
          },
        },
        areaServed: { '@type': 'Country', name: 'US' },
        serviceType: 'Digital Marketing',
      })}
    </script>
  </Helmet>
);

export const FAQSchema = ({ faqs }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      })}
    </script>
  </Helmet>
);
