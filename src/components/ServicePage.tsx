import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { colors } from '../styles/theme';
import { MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import Navbar from './ui/Navbar';
import { H1, H2, H3, P } from './ui/Typography';
import { MESSAGES, generateServiceWhatsAppUrl } from '../constants';
import type { SiteImage } from './Hero';

interface ServiceVariation {
  id: string;
  name: string;
  description: string;
}

interface ServiceComplement {
  id: string;
  name: string;
  description: string;
}

export interface ServicePageService {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  images: string[];
  category: string;
  featured: boolean;
  variations?: ServiceVariation[];
  complements?: ServiceComplement[];
}

interface ServicePageProps {
  service: ServicePageService;
  /** Imagens já otimizadas, na mesma ordem de service.images (null = sem arquivo) */
  images: Array<SiteImage | null>;
}

// Styled Components
const ServicePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
  min-height: 100vh;
`;

const ServiceHeader = styled.div`
  text-align: left;
  margin-bottom: 72px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${colors.goldMain};
`;

// ServiceTitle e ServiceSubtitle removidos, usar Typography

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ServiceInfo = styled.div`
  // h2 e p removidos, usar Typography
`;

const ServiceDetails = styled.div`
  padding: 40px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

const ServiceGallery = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 600px;
  position: relative;
  background: ${colors.blush};
  overflow: hidden;

  @media (max-width: 968px) {
    margin-top: 30px;
    height: 400px;
    min-height: 400px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
`;

const CarouselSlide = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${(props) => (props.$isActive ? 'all' : 'none')};
  z-index: ${(props) => (props.$isActive ? 5 : 1)};
`;

const GalleryImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  pointer-events: none;
  z-index: 10; /* Acima dos slides para que os botões funcionem */
`;

const CarouselButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: all;
  color: ${colors.goldMain};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
`;

const Indicator = styled.button<{ $isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.$isActive ? colors.goldMain : colors.graySecondary)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.goldMain};
    transform: scale(1.2);
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 15;
  pointer-events: none;
`;

// Modal Components
const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const ModalImagePlaceholder = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  min-height: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavigationButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${(props) => props.direction}: -80px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    ${(props) => props.direction}: -50px;
    padding: 12px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    ${(props) => props.direction}: -40px;
    padding: 10px;
    font-size: 1.2rem;
  }
`;

const ModalImageCounter = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 20px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(200, 169, 104, 0.2);

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: ${colors.blackMain};
  }

  span:last-child {
    color: ${colors.goldMain};
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const BenefitsList = styled.div`
  margin-top: 40px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;

  &::before {
    content: '•';
    color: ${colors.goldMain};
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2px;
  }

  span {
    color: ${colors.graySecondary};
    line-height: 1.6;
  }
`;

const CTASection = styled.div`
  background: ${colors.cocoa};
  padding: 80px 40px;
  text-align: left;
  color: white;
`;

const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${colors.blackMain};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 40px;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.rose};
    transform: translateX(-5px);
  }

  &::before {
    content: '←';
    font-size: 1.2rem;
  }
`;

// Componentes para Variações e Complementos
const VariationsSection = styled.div`
  margin-top: 60px;
`;

const ComplementsSection = styled.div``;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.div`
  background: transparent;
  padding: 24px 0;
  border-top: 1px solid ${colors.goldMain};
`;

const OptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const OptionName = styled.h4`
  font-size: 1.3rem;
  color: ${colors.blackMain};
  font-weight: 600;
  margin: 0;
  flex: 1;
`;

const OptionPrice = styled.span`
  color: ${colors.goldMain};
  font-weight: 700;
  font-size: 1.1rem;
  white-space: nowrap;
  margin-left: 15px;
`;

const OptionDescription = styled.p`
  color: ${colors.graySecondary};
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
`;

const OptionDuration = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: ${colors.graySecondary};

  &::before {
    content: '⏱️';
    margin-right: 5px;
  }
`;

// Componente principal
const ServicePage: React.FC<ServicePageProps> = ({ service, images }) => {
  // Estado para controle do modal de imagem
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Estado para controle do carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gerar URL do WhatsApp
  const whatsappUrl = generateServiceWhatsAppUrl(service.title);

  const getServiceImage = (index: number) => images[index] ?? null;

  // Funções do modal
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    if (service.images && currentImageIndex < service.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Funções do carousel
  const nextSlide = () => {
    if (service.images && currentSlide < service.images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        goToNextImage();
      } else if (event.key === 'ArrowLeft') {
        goToPreviousImage();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Previne scroll do body
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, currentImageIndex, service.images]);

  return (
    <>
      <ServicePageContainer>
        <Navbar />

        <BackButton href="/#servicos">Voltar aos Serviços</BackButton>

        <ServiceHeader>
          <H1 as="h1" style={{ marginBottom: 20 }}>
            {service.title}
          </H1>
          <H2
            as="p"
            style={{
              color: colors.graySecondary,
              maxWidth: 560,
              margin: 0,
              fontSize: '1.5rem',
              lineHeight: 1.4,
            }}
          >
            {service.shortDescription}
          </H2>
        </ServiceHeader>

        <ServiceContent>
          <ServiceInfo>
            <H2
              as="h2"
              style={{
                borderBottom: `3px solid ${colors.goldMain}`,
                paddingBottom: 10,
                display: 'inline-block',
                marginBottom: 20,
              }}
            >
              Sobre o Tratamento
            </H2>
            <P style={{ marginBottom: 30 }}>{service.longDescription}</P>

            <BenefitsList>
              <H3
                as="h3"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <span role="img" aria-label="benefícios">
                  ✨
                </span>{' '}
                Benefícios
              </H3>
              {service.benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  <span>{benefit}</span>
                </BenefitItem>
              ))}
            </BenefitsList>
          </ServiceInfo>

          {service.images && service.images.length > 0 && (
            <ServiceGallery>
              <CarouselContainer>
                {service.images.map((_, index) => {
                  const image = getServiceImage(index);
                  return (
                    <CarouselSlide key={index} $isActive={index === currentSlide}>
                      {image ? (
                        <GalleryImageWrapper
                          onClick={() => {
                            openModal(index);
                          }}
                        >
                          <GalleryImage
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt={`${service.title} - Imagem ${index + 1}`}
                          />
                        </GalleryImageWrapper>
                      ) : (
                        <GalleryImagePlaceholder onClick={() => openModal(index)}>
                          {service.title}
                        </GalleryImagePlaceholder>
                      )}
                    </CarouselSlide>
                  );
                })}

                {/* Controles do carousel - apenas se houver múltiplas imagens */}
                {service.images.length > 1 && (
                  <CarouselControls>
                    {currentSlide > 0 && (
                      <CarouselButton onClick={prevSlide}>
                        <ChevronLeft size={20} />
                      </CarouselButton>
                    )}
                    <div style={{ flex: 1 }} /> {/* Spacer */}
                    {currentSlide < service.images.length - 1 && (
                      <CarouselButton onClick={nextSlide}>
                        <ChevronRight size={20} />
                      </CarouselButton>
                    )}
                  </CarouselControls>
                )}

                {/* Contador de imagens */}
                {service.images.length > 1 && (
                  <ImageCounter>
                    {currentSlide + 1} / {service.images.length}
                  </ImageCounter>
                )}
              </CarouselContainer>

              {service.images.length > 1 && (
                <CarouselIndicators>
                  {service.images.map((_, index) => (
                    <Indicator
                      key={index}
                      $isActive={index === currentSlide}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </CarouselIndicators>
              )}
            </ServiceGallery>
          )}
        </ServiceContent>

        <ServiceDetails>
          {/* Seção de Variações */}
          {service.variations && service.variations.length > 0 && (
            <VariationsSection>
              <H3
                as="h3"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 30,
                }}
              >
                <span role="img" aria-label="variações">
                  🎨
                </span>{' '}
                Variações Disponíveis
              </H3>
              <OptionsGrid>
                {service.variations.map((variation) => (
                  <OptionCard key={variation.id}>
                    <OptionHeader>
                      <OptionName>{variation.name}</OptionName>
                    </OptionHeader>
                    <P as="div" style={{ margin: 0, fontSize: '0.95rem' }}>
                      {variation.description}
                    </P>
                  </OptionCard>
                ))}
              </OptionsGrid>
            </VariationsSection>
          )}

          {/* Seção de Complementos */}
          {service.complements && service.complements.length > 0 && (
            <ComplementsSection>
              <H3
                as="h3"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 30,
                }}
              >
                <span role="img" aria-label="complementos">
                  ➕
                </span>{' '}
                Serviços similares
              </H3>
              <OptionsGrid>
                {service.complements.map((complement) => (
                  <OptionCard key={complement.id}>
                    <OptionHeader>
                      <OptionName>{complement.name}</OptionName>
                    </OptionHeader>
                    <P as="div" style={{ margin: 0, fontSize: '0.95rem' }}>
                      {complement.description}
                    </P>
                  </OptionCard>
                ))}
              </OptionsGrid>
            </ComplementsSection>
          )}
        </ServiceDetails>

        <CTASection>
          <H3
            as="h3"
            style={{
              fontSize: '2rem',
              marginBottom: 20,
              color: 'white',
            }}
          >
            Vamos cuidar do seu olhar?
          </H3>
          <P as="p" style={{ color: 'white', opacity: 0.9, marginBottom: 30 }}>
            Agende seu horário agora mesmo e descubra o que nosso tratamento pode fazer por você.
          </P>
          <Button href={whatsappUrl} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            {MESSAGES.cta.scheduleWhatsApp}
          </Button>
        </CTASection>
      </ServicePageContainer>

      {/* Modal de Imagem - Movido para fora do container */}
      <ModalOverlay $isOpen={isModalOpen} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {service.images && service.images[currentImageIndex] && (
            <>
              {(() => {
                const image = getServiceImage(currentImageIndex);
                return image ? (
                  <ModalImage
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`${service.title} - Imagem ${currentImageIndex + 1}`}
                  />
                ) : (
                  <ModalImagePlaceholder>{service.title}</ModalImagePlaceholder>
                );
              })()}

              <CloseButton onClick={closeModal}>
                <X size={24} />
              </CloseButton>

              {service.images.length > 1 && (
                <>
                  {currentImageIndex > 0 && (
                    <NavigationButton direction="left" onClick={goToPreviousImage}>
                      <ChevronLeft size={24} />
                    </NavigationButton>
                  )}

                  {currentImageIndex < service.images.length - 1 && (
                    <NavigationButton direction="right" onClick={goToNextImage}>
                      <ChevronRight size={24} />
                    </NavigationButton>
                  )}

                  <ModalImageCounter>
                    {currentImageIndex + 1} de {service.images.length}
                  </ModalImageCounter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ServicePage;
