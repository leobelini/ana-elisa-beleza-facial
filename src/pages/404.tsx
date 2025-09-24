import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { COMPANY_INFO, MESSAGES, URLS, generatePageTitle } from '../constants';
import { Button } from '../components/ui/Button';

// Styled Components
const NotFoundContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${colors.iceWhite} 0%, #ffffff 100%);
  padding: 40px 20px;
  text-align: center;
`;

const ErrorNumber = styled.h1`
  font-size: 8rem;
  font-weight: 300;
  color: ${colors.goldMain};
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${colors.blackMain};
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: ${colors.graySecondary};
  max-width: 600px;
  line-height: 1.6;
  margin: 30px 0 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 20px 0 30px;
  }
`;

const BeautyIcon = styled.div`
  font-size: 4rem;
  margin: 20px 0;
  color: ${colors.goldMain};
  opacity: 0.7;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const ServicesList = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`;

const ServicesTitle = styled.h3`
  color: ${colors.blackMain};
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const ServiceItem = styled(Link)`
  display: block;
  color: ${colors.graySecondary};
  text-decoration: none;
  padding: 8px 0;
  border-bottom: 1px solid ${colors.iceWhite};
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${colors.goldMain};
    padding-left: 10px;
  }
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFoundContainer>
      <BeautyIcon>✨</BeautyIcon>
      <ErrorNumber>404</ErrorNumber>
      <ErrorTitle>Página não encontrada</ErrorTitle>
      <ErrorMessage>
        {MESSAGES.errors.pageNotFound}
        {MESSAGES.errors.pageNotFoundSubtitle}
      </ErrorMessage>

      <ActionContainer>
        <Button asLink variant="primary" to={URLS.home}>
          {MESSAGES.cta.backHome}
        </Button>
        <Button asLink variant="secondary" to="/#servicos">
          {MESSAGES.cta.viewServices}
        </Button>
      </ActionContainer>

      <ServicesList>
        <ServicesTitle>Nossos Serviços</ServicesTitle>
        <ServiceItem to="/#servicos">Limpeza de Pele</ServiceItem>
        <ServiceItem to="/#servicos">Design de Sobrancelhas</ServiceItem>
        <ServiceItem to="/#servicos">Extensão de Cílios</ServiceItem>
        <ServiceItem to="/#servicos">Nanoblading</ServiceItem>
        <ServiceItem to="/#servicos">Lash Lift</ServiceItem>
        <ServiceItem to="/#servicos">Hidra Gloss</ServiceItem>
        <ServiceItem to="/#servicos">NanoLips</ServiceItem>
        <ServiceItem to="/#contato">Agendar Consulta</ServiceItem>
      </ServicesList>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>{generatePageTitle('Página não encontrada')}</title>
    <meta
      name="description"
      content="Página não encontrada. Volte ao início para descobrir nossos serviços de estética facial."
    />
    <meta
      name="keywords"
      content={`erro 404, página não encontrada, ${COMPANY_INFO.name}, estética facial`}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={generatePageTitle('Página não encontrada')} />
    <meta
      property="og:description"
      content="Página não encontrada. Volte ao início para descobrir nossos serviços de estética facial."
    />
    <meta property="og:url" content={`${COMPANY_INFO.siteUrl}/404`} />
    <meta property="og:site_name" content={COMPANY_INFO.name} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={generatePageTitle('Página não encontrada')} />
    <meta
      name="twitter:description"
      content="Página não encontrada. Volte ao início para descobrir nossos serviços de estética facial."
    />

    {/* Robots */}
    <meta name="robots" content="noindex, nofollow" />
  </>
);
