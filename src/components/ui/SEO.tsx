import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
          image
          author
          twitterUsername
          social {
            instagram
            whatsapp
          }
        }
      }
    }
  `);

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    keywords: keywords || site.siteMetadata.keywords,
    image: `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`,
    url: `${site.siteMetadata.siteUrl}${url || ``}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={title ? `%s - Ana Elisa Cardoso Beleza Facial` : undefined}
    >
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={site.siteMetadata.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Ana Elisa Beleza Facial" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {site.siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
      )}

      {/* Additional meta tags */}
      <meta name="theme-color" content="#C8A968" />
      <meta name="msapplication-TileColor" content="#C8A968" />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Language */}
      <html lang="pt-BR" />

      {children}
    </Helmet>
  );
};

export default SEO;
