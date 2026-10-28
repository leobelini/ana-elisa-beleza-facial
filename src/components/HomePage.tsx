import * as React from 'react';
import { styled } from 'styled-components';
import { colors } from '../styles/theme';
import { Navbar, Hero, About, Services, Testimonials, Contact, Footer } from '.';
import type { SiteImage } from './Hero';
import type { ServiceData } from './Services';

// Container principal
const Container = styled.div`
  background-color: ${colors.iceWhite};
  min-height: 100vh;
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

      <main>
        {/* Seção Hero/Banner */}
        <Hero image={heroImage} />

        {/* Seção Sobre */}
        <About image={aboutImage} />

        {/* Seção Serviços */}
        <Services services={services} />

        {/* Seção Depoimentos */}
        <Testimonials />

        {/* Seção Contato/Agendamento */}
        <Contact />
      </main>

      {/* Rodapé */}
      <Footer />
    </Container>
  );
};

export default HomePage;
