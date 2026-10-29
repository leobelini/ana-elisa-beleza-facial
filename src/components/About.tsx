import * as React from 'react';
import { styled } from 'styled-components';
import { colors, commonStyles, fonts } from '../styles/theme';
import type { SiteImage } from './Hero';
import { H2, P } from './ui/Typography';
import { CAREER_START_YEAR, getYearsOfExperience } from '../constants';

const AboutContainer = styled.section`
  ${commonStyles.section}
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 88px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Portrait = styled.figure`
  position: relative;
  margin: 0;

  &::after {
    content: '';
    position: absolute;
    inset: -14px 14px 14px -14px;
    border: 1px solid ${colors.goldMain};
    z-index: -1;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    img {
      aspect-ratio: 16 / 10;
      object-position: center 20%;
    }
  }

  @media (max-width: 560px) {
    img {
      aspect-ratio: 1 / 1;
      object-position: center;
    }
  }
`;

const Lead = styled.p`
  font-family: ${fonts.display};
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.25;
  color: ${colors.blackMain};
  margin-bottom: 32px;
  max-width: 28ch;
`;

const About: React.FC<{ image: SiteImage }> = ({ image }) => {
  // Valor do build no SSR; atualizado no cliente para refletir o ano atual
  const [years, setYears] = React.useState(getYearsOfExperience);
  React.useEffect(() => setYears(getYearsOfExperience()), []);

  return (
    <AboutContainer id="sobre">
      <AboutContent>
        <Portrait>
          <img
            src={image.src}
            alt="Ana Elisa Cardoso, esteticista em Pongaí-SP"
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        </Portrait>
        <div>
          <H2 as="h2">Quem cuida de você</H2>
          <Lead>Mais de {years} anos unindo técnica, delicadeza e resultado natural.</Lead>
          <P>
            Com mais de {years} anos de experiência na área da estética, sou Bacharel em Estética
            (formada em {CAREER_START_YEAR}) e apaixonada por cuidar e elevar a autoestima desde
            muito jovem. Minha missão sempre foi oferecer o que há de melhor e mais atual no
            universo da beleza, unindo técnica, delicadeza e resultados que encantam.
          </P>
          <P>
            Em 2020, encontrei na extensão de cílios minha grande especialidade. Desde então, me
            dedico a aperfeiçoar cada detalhe para entregar não apenas variedade de modelos, mas
            também uma durabilidade incrível e um acabamento que valoriza a beleza natural de cada
            cliente.
          </P>
          <P>
            Será um prazer cuidar de você, proporcionando um atendimento exclusivo e serviços que
            realçam sua beleza com um toque elegante e natural.
          </P>
        </div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
