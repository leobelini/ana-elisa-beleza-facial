import * as React from 'react';
import { styled, keyframes } from 'styled-components';
import { colors, fonts } from '../styles/theme';
import { Button } from './ui/Button';

export interface SiteImage {
  src: string;
  width: number;
  height: number;
}

const HeroContainer = styled.header`
  background: ${colors.blush};
  padding: 150px 24px 110px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 110px 20px 72px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 72px;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Name = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.graySecondary};
  margin-bottom: 28px;
`;

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const Headline = styled.h1`
  font-family: ${fonts.display};
  font-size: clamp(3.2rem, 8.4vw, 7rem);
  font-weight: 400;
  line-height: 0.96;
  letter-spacing: -0.015em;
  color: ${colors.blackMain};
  margin-bottom: 36px;
  animation: ${rise} 0.9s ease-out both;
`;

const Lead = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${colors.graySecondary};
  max-width: 44ch;
  margin-bottom: 40px;
  animation: ${rise} 0.9s ease-out 0.15s both;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  animation: ${rise} 0.9s ease-out 0.3s both;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;

    a {
      width: 100%;
    }
  }
`;

const Frame = styled.div`
  position: relative;
  justify-self: end;
  width: min(100%, 400px);

  &::before {
    content: '';
    position: absolute;
    inset: 18px -18px -18px 18px;
    border: 1px solid ${colors.goldMain};
    border-radius: 999px 999px 0 0;
  }

  img {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 999px 999px 0 0;
  }

  @media (max-width: 900px) {
    justify-self: start;
    width: calc(100% - 18px);

    img {
      aspect-ratio: 4 / 3;
      object-position: center 25%;
    }
  }

  @media (max-width: 560px) {
    max-width: 400px;

    img {
      aspect-ratio: 4 / 5;
      object-position: center;
    }
  }
`;

const Hero: React.FC<{ image: SiteImage }> = ({ image }) => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <div>
          <Name>Ana Elisa Cardoso, estética facial</Name>
          <Headline>Beleza autêntica é a arte de realçar a sua essência.</Headline>
          <Lead>
            Cílios, sobrancelhas, lábios e pele tratados com técnica e delicadeza, para um resultado
            que parece ser seu desde sempre.
          </Lead>
          <Actions>
            <Button href="#agendamento" variant="primary">
              Agende seu horário
            </Button>
            <Button href="#servicos" variant="secondary">
              Ver tratamentos
            </Button>
          </Actions>
        </div>
        <Frame>
          <img
            src={image.src}
            alt="Ana Elisa - Profissional de Beleza Facial"
            width={image.width}
            height={image.height}
            loading="eager"
            fetchPriority="high"
          />
        </Frame>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
