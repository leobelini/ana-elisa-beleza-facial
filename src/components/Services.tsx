import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { colors, commonStyles } from '../styles/theme';
import { Button } from './ui/Button';
import { H2, H3, P } from './ui/Typography';

// Tipo para dados dos serviços
interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  images: string[];
  category: string;
  featured: boolean;
  fields: {
    slug: string;
  };
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

const ServiceCard = styled(Link)`
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
  width: 100%;
  height: 100%;
  object-fit: cover;
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

// Removido: ServiceButton

// Interfaces
export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Query GraphQL
const SERVICES_QUERY = graphql`
  query ServicesQuery {
    allServicesJson {
      nodes {
        id
        title
        shortDescription
        longDescription
        benefits
        images
        category
        featured
        fields {
          slug
        }
      }
    }
  }
`;

// Componente Services
const Services: React.FC = () => {
  const data = useStaticQuery(SERVICES_QUERY);
  const services: ServiceData[] = data.allServicesJson.nodes;

  return (
    <ServicesContainer id="servicos">
      <H2 as="h2">Serviços</H2>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id} to={`/servicos/${service.fields.slug}`}>
            <ServiceImageContainer>
              <ServiceImage
                src={service.images[0]}
                alt={service.title}
                onError={(e) => {
                  // Fallback para uma imagem padrão ou placeholder
                  e.currentTarget.style.display = 'none';
                }}
              />
            </ServiceImageContainer>
            <ServiceContent>
              <H3 as="h3" style={{ color: colors.blackMain, marginBottom: 15 }}>
                {service.title}
              </H3>
              <P>{service.shortDescription}</P>
              <Button
                asLink
                variant="secondary"
                to={`/servicos/${service.fields.slug}`}
                style={{ width: '100%', marginTop: 10 }}
              >
                Saiba mais
              </Button>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
