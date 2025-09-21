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

// Interfaces
interface AboutProps {
  title?: string
  name?: string
  description?: string[]
  profileIcon?: string
  id?: string
}

// Componente About
const About: React.FC<AboutProps> = ({
  title = "Sobre",
  name = "Ana Elisa - Esteticista Profissional",
  description = [
    "Com mais de 5 anos de experiência na área da estética facial, sou especializada em realçar a beleza natural de cada cliente através de técnicas modernas e cuidado personalizado.",
    "Formada em Estética e Cosmética, com especializações em dermaplaning, design de sobrancelhas e extensão de cílios. Minha missão é proporcionar não apenas tratamentos de qualidade, mas uma experiência única de bem-estar e autoestima.",
    "Acredito que cada pessoa possui uma beleza única, e meu trabalho é realçar essa individualidade através de cuidados específicos e resultados naturais."
  ],
  profileIcon = "👩‍⚕️",
  id = "sobre"
}) => {
  return (
    <AboutContainer id={id}>
      <SectionTitle>{title}</SectionTitle>
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
          <h3>{name}</h3>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}

export default About