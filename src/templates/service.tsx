import React from "react"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { colors, commonStyles } from "../styles/theme"
import { Helmet } from "react-helmet"

// Tipos TypeScript
interface ServicePageData {
  servicesJson: {
    id: string
    title: string
    shortDescription: string
    longDescription: string
    price: string
    duration: string
    benefits: string[]
    images: string[]
    category: string
    featured: boolean
  }
}

// Styled Components
const ServicePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  min-height: 100vh;
`

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

const ServiceTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.blackMain};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const ServiceSubtitle = styled.p`
  font-size: 1.3rem;
  color: ${colors.graySecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const ServiceInfo = styled.div`
  h2 {
    font-size: 2rem;
    color: ${colors.blackMain};
    margin-bottom: 20px;
    border-bottom: 3px solid ${colors.goldMain};
    padding-bottom: 10px;
    display: inline-block;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${colors.graySecondary};
    margin-bottom: 30px;
  }
`

const ServiceDetails = styled.div`
  background: ${colors.iceWhite};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${colors.goldMain};
`

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(200, 169, 104, 0.2);
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    font-weight: 600;
    color: ${colors.blackMain};
  }
  
  span:last-child {
    color: ${colors.goldMain};
    font-weight: 700;
    font-size: 1.1rem;
  }
`

const BenefitsList = styled.div`
  margin-top: 40px;
  
  h3 {
    font-size: 1.5rem;
    color: ${colors.blackMain};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    &::before {
      content: "✨";
      font-size: 1.2rem;
    }
  }
`

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
  
  &::before {
    content: "•";
    color: ${colors.goldMain};
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2px;
  }
  
  span {
    color: ${colors.graySecondary};
    line-height: 1.6;
  }
`

const CTASection = styled.div`
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  padding: 60px 40px;
  border-radius: 25px;
  text-align: center;
  color: white;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 700;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #25D366;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #20ba5a;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  }
  
  &::before {
    content: "💬";
    font-size: 1.2rem;
  }
`

const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${colors.goldMain};
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 40px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${colors.goldDark};
    transform: translateX(-5px);
  }
  
  &::before {
    content: "←";
    font-size: 1.2rem;
  }
`

// Componente principal
const ServicePage: React.FC<PageProps<ServicePageData>> = ({ data }) => {
  const service = data.servicesJson
  
  // Gerar URL do WhatsApp
  const whatsappMessage = `Olá! Gostaria de agendar o serviço: ${service.title}`
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`
  
  return (
    <>
      <Helmet>
        <title>{service.title} - Ana Elisa Beleza Facial</title>
        <meta name="description" content={service.shortDescription} />
        <meta name="keywords" content={`${service.title}, ${service.category}, estética facial, beleza, ${service.title.toLowerCase()}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${service.title} - Ana Elisa Beleza Facial`} />
        <meta property="og:description" content={service.shortDescription} />
        <meta property="og:url" content={`https://anaelisabelezafacial.com.br/servicos/${service.id}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} - Ana Elisa Beleza Facial`} />
        <meta name="twitter:description" content={service.shortDescription} />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.shortDescription,
            "provider": {
              "@type": "Organization",
              "name": "Ana Elisa Beleza Facial",
              "url": "https://anaelisabelezafacial.com.br"
            },
            "category": service.category,
            "offers": {
              "@type": "Offer",
              "price": service.price.replace('R$ ', '').replace(',', '.'),
              "priceCurrency": "BRL",
              "description": `${service.title} - ${service.duration}`
            }
          })}
        </script>
      </Helmet>
      
      <ServicePageContainer>
        <BackButton href="/#servicos">Voltar aos Serviços</BackButton>
        
        <ServiceHeader>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceSubtitle>{service.shortDescription}</ServiceSubtitle>
        </ServiceHeader>
        
        <ServiceContent>
          <ServiceInfo>
            <h2>Sobre o Tratamento</h2>
            <p>{service.longDescription}</p>
            
            <BenefitsList>
              <h3>Benefícios</h3>
              {service.benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  <span>{benefit}</span>
                </BenefitItem>
              ))}
            </BenefitsList>
          </ServiceInfo>
          
          <ServiceDetails>
            <DetailItem>
              <span>Preço</span>
              <span>{service.price}</span>
            </DetailItem>
            <DetailItem>
              <span>Duração</span>
              <span>{service.duration}</span>
            </DetailItem>
            <DetailItem>
              <span>Categoria</span>
              <span style={{ textTransform: 'capitalize' }}>{service.category}</span>
            </DetailItem>
          </ServiceDetails>
        </ServiceContent>
        
        <CTASection>
          <h3>Pronta para transformar sua beleza?</h3>
          <p>Agende seu horário agora mesmo e descubra o que nosso tratamento pode fazer por você.</p>
          <WhatsAppButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </CTASection>
      </ServicePageContainer>
    </>
  )
}

export const query = graphql`
  query ServicePageQuery($id: String!) {
    servicesJson(id: { eq: $id }) {
      id
      title
      shortDescription
      longDescription
      price
      duration
      benefits
      images
      category
      featured
    }
  }
`

export default ServicePage