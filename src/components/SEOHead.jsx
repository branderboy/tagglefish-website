import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://tagglefish.com';
const SITE_NAME = 'TaggleFish';
const OG_IMAGE = `${DOMAIN}/og-image.jpg`;

/**
 * SEOHead renders all meta tags, canonical, OG, Twitter, and robots for a page.
 */
const SEOHead = ({ title, description, path, ogType = 'website' }) => {
  const canonical = `${DOMAIN}${path === '/' ? '' : path}`;
  const fullUrl = canonical;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default SEOHead;
