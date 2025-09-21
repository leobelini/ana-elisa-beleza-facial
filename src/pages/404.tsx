import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import { colors, commonStyles } from "../styles/theme"

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
`

const ErrorNumber = styled.h1`
  font-size: 8rem;
  font-weight: 300;
  color: ${colors.goldMain};
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${colors.blackMain};
  margin: 20px 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

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
`

const BeautyIcon = styled.div`
  font-size: 4rem;
  margin: 20px 0;
  color: ${colors.goldMain};
  opacity: 0.7;
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`

const PrimaryButton = styled(Link)`
  ${commonStyles.button}
  background: ${colors.goldMain};
  color: white;
  text-decoration: none;
  border: 2px solid ${colors.goldMain};
  
  &:hover {
    background: ${colors.goldDark};
    border-color: ${colors.goldDark};
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled(Link)`
  ${commonStyles.button}
  background: transparent;
  color: ${colors.goldMain};
  text-decoration: none;
  border: 2px solid ${colors.goldMain};
  
  &:hover {
    background: ${colors.goldMain};
    color: white;
    transform: translateY(-2px);
  }
`

const ServicesList = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`

const ServicesTitle = styled.h3`
  color: ${colors.blackMain};
  font-size: 1.3rem;
  margin-bottom: 20px;
`

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
`

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFoundContainer>
      <BeautyIcon>✨</BeautyIcon>
      <ErrorNumber>404</ErrorNumber>
      <ErrorTitle>Página não encontrada</ErrorTitle>
      <ErrorMessage>
        Ops! Parece que você se perdeu em nossa jornada de beleza. 
        A página que você está procurando não existe ou foi movida para outro local.
        Que tal explorar nossos serviços de estética facial?
      </ErrorMessage>
      
      <ActionContainer>
        <PrimaryButton to="/">
          Voltar ao Início
        </PrimaryButton>
        <SecondaryButton to="/#servicos">
          Ver Serviços
        </SecondaryButton>
      </ActionContainer>
      
      <ServicesList>
        <ServicesTitle>Nossos Serviços Principais</ServicesTitle>
        <ServiceItem to="/#servicos">Limpeza de Pele</ServiceItem>
        <ServiceItem to="/#servicos">Design de Sobrancelhas</ServiceItem>
        <ServiceItem to="/#servicos">Extensão de Cílios</ServiceItem>
        <ServiceItem to="/#servicos">Peeling Facial</ServiceItem>
        <ServiceItem to="/#servicos">Dermaplaning</ServiceItem>
        <ServiceItem to="/#contato">Agendar Consulta</ServiceItem>
      </ServicesList>
    </NotFoundContainer>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <>
    <title>Página não encontrada - Ana Elisa Beleza Facial</title>
    <meta name="description" content="Página não encontrada. Volte ao início para descobrir nossos serviços de estética facial." />
    <meta name="keywords" content="erro 404, página não encontrada, Ana Elisa Beleza Facial, estética facial" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Página não encontrada - Ana Elisa Beleza Facial" />
    <meta property="og:description" content="Página não encontrada. Volte ao início para descobrir nossos serviços de estética facial." />
    <meta property="og:url" content="https://anaelisabelezafacial.com.br/404" />
    <meta property="og:site_name" content="Ana Elisa Beleza Facial" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Página não encontrada - Ana Elisa Beleza Facial" />
    <meta name="twitter:description" content="Página não encontrada. Volte ao início para descobrir nossos serviços de estética facial." />
    
    {/* Robots */}
    <meta name="robots" content="noindex, nofollow" />
  </>
)
