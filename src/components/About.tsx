import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { colors, commonStyles } from '../styles/theme';
import { H2, H3, P } from './ui/Typography';

// Styled Components para About
const AboutContainer = styled.section`
  ${commonStyles.section}
`;

// SectionTitle removido, usar Title2

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(200, 169, 104, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const AboutText = styled.div``;

const About = () => {
  return (
    <AboutContainer id="sobre">
      <H2 as="h2">Sobre</H2>
      <AboutContent>
        <ProfileImage>
          <StaticImage
            src="../images/home/IMG_5396-Enhanced-NR.jpg"
            alt="Ana Elisa - Esteticista Profissional"
            placeholder="blurred"
            layout="constrained"
            width={300}
            height={300}
            objectFit="cover"
            objectPosition="center"
            style={{
              borderRadius: '50%',
            }}
          />
        </ProfileImage>
        <AboutText>
          <H3 as="h3">Ana Elisa Cardoso - Esteticista Profissional</H3>
          <P>
            Com mais de 7 anos de experiência na área da estética, sou Bacharel em Estética
            (formanda em 2018) e apaixonada por cuidar e elevar a autoestima desde muito jovem.
            Minha missão sempre foi oferecer o que há de melhor e mais atual no universo da beleza,
            unindo técnica, delicadeza e resultados que encantam.
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
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
