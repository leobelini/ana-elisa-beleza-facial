import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
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

const ImageContainer = styled(motion.div)`
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

const TextContent = styled(motion.div)`
  text-align: center;
`

const Logo = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 300;
  color: ${colors.goldMain};
  margin-bottom: 20px;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const Tagline = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${colors.blackMain};
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${colors.goldMain}, transparent);
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const CTAButton = styled(motion.a)`
  ${commonStyles.button}
`

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

// Componente Hero
const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Logo 
            variants={itemVariants}
            transition={{ duration: 0.8 }}
          >
           Ana Elisa Cardoso Beleza Facial
          </Logo>
          <Tagline 
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🦋 Beleza autêntica, a arte de realçar sua essência.
          </Tagline>
          <CTAButton 
            href="#agendamento"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Agende seu horário
          </CTAButton>
        </TextContent>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
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
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero