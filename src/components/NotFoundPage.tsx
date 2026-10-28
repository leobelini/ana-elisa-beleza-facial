import * as React from 'react';
import { styled } from 'styled-components';
import { colors } from '../styles/theme';
import { MESSAGES, URLS } from '../constants';
import { Button } from './ui/Button';

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

const ServiceItem = styled.a`
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

const NotFoundPage: React.FC = () => {
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
        <ServiceItem href="/#servicos">Limpeza de Pele</ServiceItem>
        <ServiceItem href="/#servicos">Design de Sobrancelhas</ServiceItem>
        <ServiceItem href="/#servicos">Extensão de Cílios</ServiceItem>
        <ServiceItem href="/#servicos">Nanoblading</ServiceItem>
        <ServiceItem href="/#servicos">Lash Lift</ServiceItem>
        <ServiceItem href="/#servicos">Hidra Gloss</ServiceItem>
        <ServiceItem href="/#servicos">NanoLips</ServiceItem>
        <ServiceItem href="/#contato">Agendar Consulta</ServiceItem>
      </ServicesList>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
