import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { colors, commonStyles } from "../styles/theme"

// Styled Components para Hero
const HeroContainer = styled.header`
  background: linear-gradient(135deg, ${colors.iceWhite} 0%, #ffffff 100%);
  padding: 140px 20px 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(200, 169, 104, 0.1) 0%, transparent 70%);
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  
  .gatsby-image-wrapper {
    border-radius: 20px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-5px);
    }
    
    img {
      border-radius: 20px !important;
    }
  }
  
  @media (max-width: 768px) {
    order: -1;
    min-height: 300px;
  }
`

const PlaceholderImage = styled.div`
  width: 400px;
  height: 500px;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 375px;
  }
`

const TextContent = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: ${colors.goldMain};
  margin-bottom: 20px;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Tagline = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${colors.blackMain};
  margin-bottom: 40px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const CTAButton = styled.a`
  ${commonStyles.button}
`

// Interfaces
interface HeroProps {
  title?: string
  tagline?: string
  ctaText?: string
  ctaLink?: string
  id?: string
}

// Componente Hero
const Hero: React.FC<HeroProps> = ({
  title = "Ana Elisa Beleza Facial",
  tagline = "Beleza e cuidado que realçam sua essência",
  ctaText = "Agende seu horário",
  ctaLink = "#agendamento",
  id = "home"
}) => {
  return (
    <HeroContainer id={id}>
      <HeroContent>
        <ImageContainer>
          <StaticImage
            src="../images/home/IMG_1455-Aprimorado-NR.jpg"
            alt="Ana Elisa - Profissional de Beleza Facial"
            placeholder="blurred"
            width={400}
            height={500}
            quality={95}
            formats={["auto", "webp", "avif"]}
            loading="eager"
          />
        </ImageContainer>
        <TextContent>
          <Logo>{title}</Logo>
          <Tagline>{tagline}</Tagline>
          <CTAButton href={ctaLink}>{ctaText}</CTAButton>
        </TextContent>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero