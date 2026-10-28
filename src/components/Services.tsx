import * as React from 'react';
import type { SiteImage } from './Hero';
import { styled } from 'styled-components';
import { colors, commonStyles } from '../styles/theme';
import { Button } from './ui/Button';
import { H2, H3, P } from './ui/Typography';

// Tipo para dados dos serviços
export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  images: string[];
  category: string;
  featured: boolean;
  slug: string;
  image: SiteImage | null;
}

// Styled Components para Services
const ServicesContainer = styled.section`
  ${commonStyles.section}
`;

// SectionTitle removido, usar Title2

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const ServiceCard = styled.a`
  background: white;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(200, 169, 104, 0.1);
  text-decoration: none;
  color: inherit;
  display: block;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(200, 169, 104, 0.2);
    text-decoration: none;
    color: inherit;
  }
`;

const ServiceImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ServiceImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 40px 30px;
`;

// ServiceTitle e ServiceDescription removidos, usar Title3 e Paragraph

const ServicePrice = styled.div`
  font-size: 1.1rem;
  color: ${colors.goldDark};
  font-weight: 600;
  margin-bottom: 25px;
`;

const ServiceButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 24px;
  margin-top: 15px;
  background: transparent;
  color: ${colors.goldMain};
  border: 2px solid ${colors.goldMain};
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.goldMain};
    color: white;
    transform: translateY(-2px);
  }
`;

// Interfaces
export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Componente Services
const Services: React.FC<{ services: ServiceData[] }> = ({ services }) => {
  return (
    <ServicesContainer id="servicos">
      <H2 as="h2">Serviços</H2>
      <ServicesGrid>
        {services.map((service) => {
          const image = service.image;

          return (
            <ServiceCard key={service.id} href={`/servicos/${service.slug}`}>
              <ServiceImageContainer>
                {image ? (
                  <ServiceImage
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={service.title}
                    loading="lazy"
                  />
                ) : (
                  <ServiceImagePlaceholder>{service.title}</ServiceImagePlaceholder>
                )}
              </ServiceImageContainer>
              <ServiceContent>
                <H3 as="h3" style={{ color: colors.blackMain, marginBottom: 15 }}>
                  {service.title}
                </H3>
                <P>{service.shortDescription}</P>
                <ServiceButton>Saiba mais</ServiceButton>
              </ServiceContent>
            </ServiceCard>
          );
        })}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
