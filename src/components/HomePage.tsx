import * as React from 'react';
import { styled } from 'styled-components';
import { colors } from '../styles/theme';
import { Navbar, Hero, About, Services, Testimonials, Contact, Footer } from '.';
import type { SiteImage } from './Hero';
import type { ServiceData } from './Services';
import { AnimatedSection } from './ui/AnimatedSection';

// Container principal
const Container = styled.div`
  background-color: ${colors.iceWhite};
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${colors.blackMain};
  line-height: 1.6;
`;

// Componente principal da página
interface HomePageProps {
  heroImage: SiteImage;
  aboutImage: SiteImage;
  services: ServiceData[];
}

const HomePage: React.FC<HomePageProps> = ({ heroImage, aboutImage, services }) => {
  return (
    <Container>
      {/* Navbar de navegação */}
      <Navbar />

      {/* Seção Hero/Banner */}
      <AnimatedSection direction="fade" duration={0.8}>
        <Hero image={heroImage} />
      </AnimatedSection>

      {/* Seção Sobre */}
      <AnimatedSection direction="up" delay={0.2}>
        <About image={aboutImage} />
      </AnimatedSection>

      {/* Seção Serviços */}
      <AnimatedSection direction="up" delay={0.1}>
        <Services services={services} />
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

export default HomePage;
