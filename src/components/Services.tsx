import * as React from 'react';
import { styled } from 'styled-components';
import { ArrowUpRight } from 'lucide-react';
import { colors, commonStyles, fonts } from '../styles/theme';
import type { SiteImage } from './Hero';
import { H2, P } from './ui/Typography';

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

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: end;
  margin-bottom: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  border-top: 1px solid ${colors.blackMain};
`;

const Thumb = styled.span`
  display: block;
  width: 0;
  height: 88px;
  overflow: hidden;
  opacity: 0;
  transition:
    width 0.45s ease,
    opacity 0.45s ease;

  img {
    display: block;
    width: 168px;
    height: 88px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
    opacity: 1;

    img {
      width: 72px;
      height: 72px;
    }
  }
`;

const Row = styled.a`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.3fr) auto auto;
  align-items: center;
  gap: 32px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(42, 26, 24, 0.2);
  color: inherit;
  text-decoration: none;
  transition: padding-left 0.35s ease;

  &:hover,
  &:focus-visible {
    padding-left: 16px;
  }

  &:hover ${Thumb}, &:focus-visible ${Thumb} {
    width: 168px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr) auto auto;
    gap: 16px;
    padding: 22px 0;
  }
`;

const Name = styled.span`
  font-family: ${fonts.display};
  font-size: clamp(1.9rem, 3.6vw, 2.8rem);
  line-height: 1.05;
  color: ${colors.blackMain};
`;

const Description = styled.span`
  color: ${colors.graySecondary};
  line-height: 1.55;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Arrow = styled.span`
  display: inline-flex;
  color: ${colors.goldDark};
  transition: transform 0.3s ease;

  ${Row}:hover & {
    transform: translate(3px, -3px);
  }
`;

const Services: React.FC<{ services: ServiceData[] }> = ({ services }) => {
  return (
    <ServicesContainer id="servicos">
      <Header>
        <H2 as="h2" style={{ marginBottom: 0 }}>
          Tratamentos
        </H2>
        <P style={{ marginBottom: 0 }}>
          Cada atendimento começa por entender o seu rosto e termina com um resultado que respeita o
          que já é seu.
        </P>
      </Header>
      <Menu>
        {services.map((service) => (
          <li key={service.id}>
            <Row href={`/servicos/${service.slug}/`}>
              <Name>{service.title}</Name>
              <Description>{service.shortDescription}</Description>
              <Thumb aria-hidden="true">
                {service.image && (
                  <img
                    src={service.image.src}
                    width={service.image.width}
                    height={service.image.height}
                    alt=""
                    loading="lazy"
                  />
                )}
              </Thumb>
              <Arrow>
                <ArrowUpRight size={26} strokeWidth={1.25} />
              </Arrow>
            </Row>
          </li>
        ))}
      </Menu>
    </ServicesContainer>
  );
};

export default Services;
