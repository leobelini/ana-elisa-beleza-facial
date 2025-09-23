import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { Instagram, MapPin, Navigation, PhoneCall } from 'lucide-react';
import { SEO_DEFAULTS, CONTACT_INFO, PHONE_NUMBER_FORMATTED } from '../constants';
import { H3, P } from './ui/Typography';

// Styled Components para Footer
const FooterContainer = styled.footer`
  background: ${colors.blackMain};
  color: white;
  padding: 60px 20px 30px;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div`
  flex: 1 1 250px;
  min-width: 300px;
  text-align: center;

  // h3 removido, usar Title3
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: ${colors.graySecondary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${colors.goldMain};
        }
      }
    }
  }

  // p removido, usar Paragraph
`;

const Copyright = styled.div`
  border-top: 1px solid ${colors.graySecondary};
  padding-top: 30px;
  color: ${colors.graySecondary};
  font-size: 0.9rem;
`;

const AddressSection = styled.div`
  text-align: center;

  // h4 removido, usar Title3
  .address-text {
    // será Paragraph
    text-align: center;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: ${colors.goldMain};
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.goldDark};
      transform: translateY(-2px);
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

// Interfaces
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links?: FooterLink[];
  content?: React.ReactNode[];
}

// Dados padrão do footer
const defaultSections: FooterSection[] = [
  {
    title: 'Navegação',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'Contato', href: '#agendamento' },
    ],
  },
  {
    title: 'Contato',
    content: [
      <a href="">
        <PhoneCall size={24} /> {PHONE_NUMBER_FORMATTED}
      </a>,
      <a href={CONTACT_INFO.instagramUrl} target="_blank">
        <Instagram size={24} /> {CONTACT_INFO.instagram}
      </a>,
    ],
  },
  {
    title: 'Horário de Funcionamento',
    content: ['Terça à Sexta: 9h às 18h'],
  },
];

const address = 'R. Jose Zini, 101, Pongaí - SP, 16660-077';

const Footer: React.FC = () => {
  // URLs para navegação
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <FooterContainer>
      <FooterContent>
        {defaultSections.map((section, index) => (
          <FooterSection key={index}>
            <H3 as="h3" style={{ marginBottom: 20 }}>
              {section.title}
            </H3>
            {section.links && (
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.content && (
              <div>
                {section.content.map((item, itemIndex) => (
                  <P as="div" key={itemIndex} style={{ marginBottom: 10 }}>
                    {item}
                  </P>
                ))}
              </div>
            )}
          </FooterSection>
        ))}

        {/* Seção do Endereço */}
        <FooterSection>
          <AddressSection>
            <H3
              as="h4"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                justifyContent: 'center',
                marginBottom: 15,
              }}
            >
              <MapPin size={20} />
              Nosso Endereço
            </H3>
            <P
              as="div"
              className="address-text"
              style={{
                color: colors.graySecondary,
                marginBottom: 15,
                fontSize: '0.95rem',
                lineHeight: 1.5,
              }}
            >
              {address}
            </P>
            <NavigationButtons>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir no Google Maps"
              >
                <Navigation size={16} />
                Google Maps
              </a>
            </NavigationButtons>
          </AddressSection>
        </FooterSection>
      </FooterContent>

      <Copyright>{SEO_DEFAULTS.copyright}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
