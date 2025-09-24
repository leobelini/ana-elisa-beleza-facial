import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { colors, commonStyles } from '../styles/theme';
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
  background: ${colors.iceWhite};
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const HeaderDivider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, ${colors.goldMain}, ${colors.goldDark});
  border-radius: 2px;
  margin: 16px auto;
`;

const HeaderDescription = styled.p`
  font-size: 1.125rem;
  color: ${colors.graySecondary};
  max-width: 512px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(Link)<{ featured?: boolean }>`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(200, 169, 104, 0.15);
    text-decoration: none;
    color: inherit;
  }

  ${(props) =>
    props.featured &&
    `
    border: 2px solid ${colors.goldMain};
    border-opacity: 0.5;
  `}
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ServiceImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 256px;
  overflow: hidden;
`;

const ServiceGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
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
  transition: transform 0.5s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
`;

const IconContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${colors.goldMain};
  }
`;

const ServiceContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ServiceButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  padding: 8px 16px;
  margin-top: 16px;
  background: transparent;
  color: ${colors.goldMain};
  border: 1px solid ${colors.goldMain};
  border-radius: 6px;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.goldMain};
    color: white;
    transform: translateY(-1px);
  }

  svg {
    margin-left: 6px;
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;

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
    allFile(
      filter: {
        sourceInstanceName: { in: ["images", "static-images"] }
        extension: { in: ["jpg", "jpeg", "png", "webp"] }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            width: 400
            height: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 95
          )
        }
      }
    }
  }
`;

// Componente Services
const Services: React.FC = () => {
  const data = useStaticQuery(SERVICES_QUERY);
  const services: ServiceData[] = data.allServicesJson.nodes;
  const images = data.allFile.nodes;

  // Função para encontrar a imagem correspondente
  const getServiceImage = (imagePath: string) => {
    const imageNode = images.find((img: any) =>
      img.relativePath.includes(imagePath.split('/').pop()?.split('.')[0] || ''),
    );
    return imageNode?.childImageSharp?.gatsbyImageData ? getImage(imageNode) : null;
  };

  return (
    <ServicesContainer id="servicos">
      <HeaderContainer>
        <H2 as="h2" style={{ marginBottom: 0 }}>
          Nossos <span style={{ color: colors.goldMain }}>Serviços</span>
        </H2>
        <HeaderDivider />
        <HeaderDescription>
          Descubra nossos tratamentos especializados, desenvolvidos para realçar sua beleza natural
          com técnicas avançadas e cuidado personalizado.
        </HeaderDescription>
      </HeaderContainer>

      <ServicesGrid>
        {services.map((service) => {
          const image = getServiceImage(service.images[0]);

          return (
            <ServiceCard
              key={service.id}
              to={`/servicos/${service.fields.slug}`}
              featured={service.featured}
            >
              {service.featured && <FeaturedBadge>Especialidade</FeaturedBadge>}

              <ServiceImageContainer>
                {image ? (
                  <ServiceGatsbyImage image={image} alt={service.title} />
                ) : (
                  <ServiceImagePlaceholder>{service.title}</ServiceImagePlaceholder>
                )}
                <ImageOverlay />
                {/* Icon placeholder - pode ser adicionado no futuro */}
                {/* <IconContainer>
                  <service.icon />
                </IconContainer> */}
              </ServiceImageContainer>

              <ServiceContent>
                <ServiceHeader>
                  <H3 as="h3" style={{ color: colors.blackMain, margin: 0, fontSize: '1.25rem' }}>
                    {service.title}
                  </H3>
                  <P
                    style={{
                      color: colors.graySecondary,
                      margin: 0,
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {service.shortDescription}
                  </P>
                </ServiceHeader>

                <ServiceButton>
                  Detalhes
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </ServiceButton>
              </ServiceContent>
            </ServiceCard>
          );
        })}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
