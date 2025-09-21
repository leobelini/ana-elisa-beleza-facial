import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '../styles/theme'

// Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

// Overlay do modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
`

// Container do modal
const ModalContainer = styled(motion.div)`
  background: ${colors.iceWhite};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    margin: 20px 0;
    max-height: calc(100vh - 40px);
  }
`

// Botão de fechar
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${colors.goldMain};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${colors.goldDark};
    transform: scale(1.1);
  }
`

// Header do modal
const ModalHeader = styled.div`
  padding: 40px 40px 20px 40px;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 30px 20px 15px 20px;
  }
`

// Título
const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.blackMain};
  margin: 0 0 10px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

// Preço e duração
const PriceInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

const Price = styled.span`
  font-size: 1.5rem;
  color: ${colors.goldDark};
  font-weight: 600;
`

const Duration = styled.span`
  font-size: 1rem;
  color: ${colors.graySecondary};
  padding: 8px 16px;
  background: #f8f8f8;
  border-radius: 20px;
`

// Descrição curta
const ShortDescription = styled.p`
  font-size: 1.1rem;
  color: ${colors.graySecondary};
  margin: 0;
  font-style: italic;
`

// Corpo do modal
const ModalBody = styled.div`
  padding: 0 40px 40px 40px;

  @media (max-width: 768px) {
    padding: 0 20px 30px 20px;
  }
`

// Container de imagens
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 30px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

// Imagem
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

// Descrição longa
const LongDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${colors.blackMain};
  margin-bottom: 30px;
`

// Lista de benefícios
const BenefitsSection = styled.div`
  margin-bottom: 30px;
`

const BenefitsTitle = styled.h3`
  font-size: 1.3rem;
  color: ${colors.blackMain};
  margin-bottom: 15px;
  font-weight: 600;
`

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const BenefitItem = styled.li`
  padding: 8px 0;
  color: ${colors.blackMain};
  position: relative;
  padding-left: 25px;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${colors.goldDark};
    font-weight: bold;
    font-size: 1.1rem;
  }
`

// Botão de agendamento
const BookButton = styled.button`
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(200, 169, 104, 0.3);
  }
`

// Interface do serviço
export interface ServiceData {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  price: string
  duration: string
  benefits: string[]
  images: string[]
  category: string
  featured: boolean
}

// Props do modal
interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceData | null
}

// Componente Modal
const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  // Handler para agendamento
  const handleBooking = () => {
    if (service) {
      const message = `Olá! Gostaria de agendar o serviço: ${service.title}`
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  // Handler para fechar ao clicar no overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          <ModalContainer
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CloseButton onClick={onClose}>
              ×
            </CloseButton>

            <ModalHeader>
              <Title>{service.title}</Title>
              <PriceInfo>
                <Price>{service.price}</Price>
                <Duration>{service.duration}</Duration>
              </PriceInfo>
              <ShortDescription>{service.shortDescription}</ShortDescription>
            </ModalHeader>

            <ModalBody>
              {/* Imagens do serviço */}
              <ImageContainer>
                {service.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${service.title} - ${index + 1}`}
                    onError={(e) => {
                      // Fallback para imagem não encontrada
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI1MCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjBGMEYwIi8+Cjx0ZXh0IHg9IjEyNSIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOEM4QzhDIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlbSBkaXNwb27DrXZlbCBlbSBicmV2ZTwvdGV4dD4KPC9zdmc+'
                    }}
                  />
                ))}
              </ImageContainer>

              {/* Descrição detalhada */}
              <LongDescription>{service.longDescription}</LongDescription>

              {/* Benefícios */}
              <BenefitsSection>
                <BenefitsTitle>Benefícios:</BenefitsTitle>
                <BenefitsList>
                  {service.benefits.map((benefit, index) => (
                    <BenefitItem key={index}>{benefit}</BenefitItem>
                  ))}
                </BenefitsList>
              </BenefitsSection>

              {/* Botão de agendamento */}
              <BookButton onClick={handleBooking}>
                Agendar pelo WhatsApp
              </BookButton>
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  )
}

export default ServiceModal