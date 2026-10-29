import * as React from 'react';
import { styled } from 'styled-components';
import { colors, fonts } from '../styles/theme';
import { Instagram, Navigation, PhoneCall } from 'lucide-react';
import {
  ADDRESS,
  SEO_DEFAULTS,
  CONTACT_INFO,
  MAPS_URL,
  PHONE_NUMBER_FORMATTED,
} from '../constants';

const GOLD_LIGHT = '#d8b574';

const FooterContainer = styled.footer`
  background: ${colors.cocoa};
  color: ${colors.onDark};
  padding: 88px 24px 32px;

  @media (max-width: 768px) {
    padding: 64px 20px 28px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto 64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1.3fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1.3fr;
    gap: 32px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;

    > :last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin-bottom: 48px;
  }
`;

const Column = styled.div`
  h3 {
    font-family: ${fonts.display};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${GOLD_LIGHT};
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    color: ${colors.onDark};
    text-decoration: none;
    transition: color 0.25s ease;

    &:hover {
      color: ${GOLD_LIGHT};
    }

    svg {
      flex-shrink: 0;
    }
  }
`;

const MapsLink = styled.a`
  && {
    padding: 10px 18px;
    border: 1px solid ${GOLD_LIGHT};
    border-radius: 999px;
    color: ${GOLD_LIGHT};
    font-size: 0.9rem;
    font-weight: 500;

    &:hover {
      background: ${GOLD_LIGHT};
      color: ${colors.cocoa};
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgba(251, 247, 244, 0.2);
  padding-top: 28px;
  font-size: 0.9rem;
`;

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Agendar', href: '#agendamento' },
];

const address = `${ADDRESS.street} - ${ADDRESS.neighborhood}, ${ADDRESS.locality} - ${ADDRESS.region}, ${ADDRESS.postalCode}`;

const Footer: React.FC = () => {
  const googleMapsUrl = MAPS_URL;

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <h3>Navegação</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={`/${link.href}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </Column>

        <Column>
          <h3>Contato</h3>
          <ul>
            <li>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <PhoneCall size={20} />
                {PHONE_NUMBER_FORMATTED}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                {CONTACT_INFO.instagram}
              </a>
            </li>
          </ul>
        </Column>

        <Column>
          <h3>Endereço</h3>
          <p>{address}</p>
          <MapsLink
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir no Google Maps"
          >
            <Navigation size={16} />
            Abrir no Google Maps
          </MapsLink>
        </Column>
      </FooterContent>

      <Copyright>{SEO_DEFAULTS.copyright}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
