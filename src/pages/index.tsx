import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { Navbar, Hero, About, Services, Testimonials, Contact, Footer } from '../components';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { COMPANY_INFO, CONTACT_INFO } from '../constants';

// Container principal
const Container = styled.div`
  background-color: ${colors.iceWhite};
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${colors.blackMain};
  line-height: 1.6;
`;

// Componente principal da página
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container>
      {/* Navbar de navegação */}
      <Navbar />

      {/* Seção Hero/Banner */}
      <AnimatedSection direction="fade" duration={0.8}>
        <Hero />
      </AnimatedSection>

      {/* Seção Sobre */}
      <AnimatedSection direction="up" delay={0.2}>
        <About />
      </AnimatedSection>

      {/* Seção Serviços */}
      <AnimatedSection direction="up" delay={0.1}>
        <Services />
      </AnimatedSection>

      {/* Seção Depoimentos */}
      <AnimatedSection direction="left" delay={0.1}>
        <Testimonials />
      </AnimatedSection>

      {/* Seção Contato/Agendamento */}
      <AnimatedSection direction="up" delay={0.1}>
        <Contact />
      </AnimatedSection>

      {/* Rodapé */}
      <AnimatedSection direction="fade" delay={0.2}>
        <Footer />
      </AnimatedSection>
    </Container>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Ana Elisa Beleza Facial - Estética e Cuidados Faciais</title>
    <meta
      name="description"
      content="Beleza e cuidado que realçam sua essência. Especializada em limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial e dermaplaning."
    />
    <meta
      name="keywords"
      content="estética facial, limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial, dermaplaning, beleza"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Ana Elisa Cardoso" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ana Elisa Beleza Facial - Estética e Cuidados Faciais" />
    <meta
      property="og:description"
      content="Beleza e cuidado que realçam sua essência. Especializada em limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial e dermaplaning."
    />
    <meta property="og:url" content="https://anaelisabelezafacial.com.br" />
    <meta property="og:site_name" content="Ana Elisa Beleza Facial" />
    <meta property="og:locale" content="pt_BR" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ana Elisa Beleza Facial - Estética e Cuidados Faciais" />
    <meta
      name="twitter:description"
      content="Beleza e cuidado que realçam sua essência. Especializada em limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial e dermaplaning."
    />

    {/* Additional meta tags */}
    <meta name="theme-color" content="#C8A968" />
    <meta name="msapplication-TileColor" content="#C8A968" />

    {/* Schema.org structured data */}
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: COMPANY_INFO.name,
        description: COMPANY_INFO.description,
        url: COMPANY_INFO.siteUrl,
        logo: COMPANY_INFO.logoUrl,
        sameAs: [CONTACT_INFO.instagramUrl, CONTACT_INFO.whatsappUrl],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
        },
        telephone: '+55-14-99713-9783',
        priceRange: '$$',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços de Estética Facial',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Limpeza de Pele',
                description: 'Limpeza profunda e hidratação facial',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Design de Sobrancelhas',
                description: 'Modelagem e design personalizado de sobrancelhas',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Extensão de Cílios',
                description: 'Alongamento e volume para cílios naturais',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Peeling Facial',
                description: 'Renovação e rejuvenescimento da pele',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Dermaplaning',
                description: 'Esfoliação profunda com remoção de pelos faciais',
              },
            },
          ],
        },
      })}
    </script>
  </>
);
