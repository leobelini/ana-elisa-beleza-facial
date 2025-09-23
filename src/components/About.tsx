import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { colors, commonStyles } from "../styles/theme"

// Styled Components para About
const AboutContainer = styled.section`
  ${commonStyles.section}
`

const SectionTitle = styled.h2`
  ${commonStyles.sectionTitle}
`

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
`

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
`

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.blackMain};
  
  h3 {
    color: ${colors.goldMain};
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 20px;
    color: ${colors.graySecondary};
  }
`

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>Sobre</SectionTitle>
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
              borderRadius: "50%",
            }}
          />
        </ProfileImage>
        <AboutText>
          <h3>Ana Elisa Cardoso - Esteticista Profissional</h3>
          <p>
              Com mais de 7 anos de experiência na área da estética, sou Bacharel em Estética (formanda em 2018) e apaixonada por cuidar e elevar a autoestima desde muito jovem. Minha missão sempre foi oferecer o que há de melhor e mais atual no universo da beleza, unindo técnica, delicadeza e resultados que encantam.

          </p>
          <p>
            Em 2020, encontrei na extensão de cílios minha grande especialidade. Desde então, me dedico a aperfeiçoar cada detalhe para entregar não apenas variedade de modelos, mas também uma durabilidade incrível e um acabamento que valoriza a beleza natural de cada cliente.
          </p>
          <p>
            Será um prazer cuidar de você, proporcionando um atendimento exclusivo e serviços que realçam sua beleza com um toque elegante e natural.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}

export default About