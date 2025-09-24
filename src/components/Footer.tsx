import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { Instagram, MapPin, PhoneCall, Heart } from 'lucide-react';
import {
  SEO_DEFAULTS,
  CONTACT_INFO,
  PHONE_NUMBER_FORMATTED,
  address,
  COMPANY_INFO,
  URLS,
  SOCIAL_MEDIA,
  generateServiceUrl,
} from '../constants';

// Styled Components para Footer
const FooterContainer = styled.footer`
  background: ${colors.blackMain};
  color: ${colors.iceWhite};
  border-top: 1px solid ${colors.goldMain};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px;

  @media (min-width: 640px) {
    padding: 48px 24px;
  }

  @media (min-width: 1024px) {
    padding: 48px 32px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.iceWhite};
  margin: 0;
`;

const BrandTitle = styled.h3`
  font-size: 1.5rem;
  font-family: serif;
  font-weight: 600;
  color: ${colors.goldMain};
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${colors.graySecondary};
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${colors.goldMain}40;
    border-radius: 50%;
    color: ${colors.goldMain};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.goldMain};
      color: ${colors.blackMain};
      transform: translateY(-2px);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    a {
      font-size: 0.875rem;
      color: ${colors.graySecondary};
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${colors.goldMain};
      }
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.875rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    color: ${colors.goldMain};
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;

  .primary {
    color: ${colors.iceWhite};
    font-weight: 500;
  }

  .secondary {
    font-size: 0.75rem;
    color: ${colors.graySecondary};
  }
`;

const WorkingHours = styled.div`
  font-size: 0.75rem;
  color: ${colors.graySecondary};
  line-height: 1.4;
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${colors.goldMain}60;
  margin-top: 32px;
  padding-top: 32px;
  text-align: center;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${colors.graySecondary};
  margin: 0;
`;

const MadeWithLove = styled.p`
  font-size: 0.875rem;
  color: ${colors.graySecondary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;

  .heart {
    color: ${colors.goldMain};
    width: 16px;
    height: 16px;
  }
`;

// Interface para dados do GraphQL
interface ServiceNode {
  id: string;
  title: string;
  shortDescription: string;
  featured: boolean;
  fields: {
    slug: string;
  };
}

interface FooterQueryData {
  allServicesJson: {
    nodes: ServiceNode[];
  };
}

// Query GraphQL para buscar serviços
const FOOTER_QUERY = graphql`
  query FooterQuery {
    allServicesJson {
      nodes {
        id
        title
        shortDescription
        featured
        fields {
          slug
        }
      }
    }
  }
`;

/**
 * Footer Component
 *
 * Footer do site com informações da empresa, serviços em destaque,
 * dados de contato e links para redes sociais.
 *
 * Utiliza dados dinâmicos do GraphQL para listar serviços e
 * constantes do sistema para informações da empresa.
 */
const Footer: React.FC = () => {
  // Busca dados dos serviços via GraphQL
  const data: FooterQueryData = useStaticQuery(FOOTER_QUERY);

  // Filtra apenas serviços em destaque para exibir no footer (máximo 5)
  const featuredServices = data.allServicesJson.nodes
    .filter((service) => service.featured)
    .slice(0, 5);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Brand Section */}
          <FooterSection>
            <BrandTitle>{COMPANY_INFO.author}</BrandTitle>
            <Description>{COMPANY_INFO.description}</Description>
            <SocialIcons>
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  title={social.platform}
                >
                  {social.platform === 'Instagram' ? <Instagram /> : <PhoneCall />}
                </a>
              ))}
            </SocialIcons>
          </FooterSection>

          {/* Services Section */}
          <FooterSection>
            <SectionTitle>Serviços</SectionTitle>
            <ServicesList>
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <a href={`/servicos/${service.fields.slug}`}>{service.title}</a>
                </li>
              ))}
              <li>
                <a href={URLS.contact}>Consultoria Personalizada</a>
              </li>
            </ServicesList>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection>
            <SectionTitle>Contato</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <PhoneCall />
                <ContactDetails>
                  <div className="primary">{PHONE_NUMBER_FORMATTED}</div>
                  <div className="secondary">WhatsApp disponível</div>
                </ContactDetails>
              </ContactItem>
              <ContactItem>
                <MapPin />
                <ContactDetails>
                  <div className="primary">
                    {address.split(',')[0]}, {address.split(',')[1]}
                  </div>
                  <div className="secondary">
                    {address.split(',')[2]} - {address.split(',')[3]}
                  </div>
                </ContactDetails>
              </ContactItem>
              <WorkingHours>Terça-Sexta: 9h às 18h</WorkingHours>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <BottomContent>
            <Copyright>{SEO_DEFAULTS.copyright}</Copyright>
            <MadeWithLove>
              Feito com <Heart className="heart" /> para realçar sua beleza
            </MadeWithLove>
          </BottomContent>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
