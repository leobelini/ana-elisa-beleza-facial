import React, { useState, useEffect } from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import { colors, commonStyles } from "../styles/theme";
import { Helmet } from "react-helmet";
import { MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { Navbar } from "../components";

// Tipos TypeScript
interface ServiceDetail {
  key: string;
  value: string;
}

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

interface ServicePageData {
  servicesJson: {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    benefits: string[];
    images: string[];
    category: string;
    featured: boolean;
    details: ServiceDetail[];
    variations?: ServiceVariation[];
    complements?: ServiceComplement[];
  };
}

// Styled Components
const ServicePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 60px;
  min-height: 100vh;
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ServiceTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.blackMain};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ServiceSubtitle = styled.p`
  font-size: 1.3rem;
  color: ${colors.graySecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

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
  h2 {
    font-size: 2rem;
    color: ${colors.blackMain};
    margin-bottom: 20px;
    border-bottom: 3px solid ${colors.goldMain};
    padding-bottom: 10px;
    display: inline-block;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${colors.graySecondary};
    margin-bottom: 30px;
  }
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
  background: ${colors.iceWhite};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

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

const CarouselSlide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const Indicator = styled.button<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.isActive ? colors.goldMain : colors.graySecondary};
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
`;

// Modal Components
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
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
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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

const NavigationButton = styled.button<{ direction: "left" | "right" }>`
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

  h3 {
    font-size: 1.5rem;
    color: ${colors.blackMain};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: "✨";
      font-size: 1.2rem;
    }
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;

  &::before {
    content: "•";
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
  background: linear-gradient(
    135deg,
    ${colors.goldMain} 0%,
    ${colors.goldDark} 100%
  );
  padding: 60px 40px;
  border-radius: 25px;
  text-align: center;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`;

const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${colors.goldMain};
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 40px;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.goldDark};
    transform: translateX(-5px);
  }

  &::before {
    content: "←";
    font-size: 1.2rem;
  }
`;

// Componentes para Variações e Complementos
const VariationsSection = styled.div`
  margin-top: 60px;

  h3 {
    font-size: 1.8rem;
    color: ${colors.blackMain};
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: "🎨";
      font-size: 1.5rem;
    }
  }
`;

const ComplementsSection = styled.div`

  h3 {
    font-size: 1.8rem;
    color: ${colors.blackMain};
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: "➕";
      font-size: 1.5rem;
    }
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.div`
  background: ${colors.iceWhite};
  border-radius: 15px;
  padding: 25px;
  border-left: 4px solid ${colors.goldMain};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
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
    content: "⏱️";
    margin-right: 5px;
  }
`;

// Componente principal
const ServicePage: React.FC<PageProps<ServicePageData>> = ({ data }) => {
  const service = data.servicesJson;

  // Estado para controle do modal de imagem
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Estado para controle do carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gerar URL do WhatsApp
  const whatsappMessage = `Olá! Gostaria de agendar o serviço: ${service.title}`;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      } else if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Previne scroll do body
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, currentImageIndex, service.images]);

  return (
    <>
      <Helmet>
        <title>{service.title} - Ana Elisa Beleza Facial</title>
        <meta name="description" content={service.shortDescription} />
        <meta
          name="keywords"
          content={`${service.title}, ${
            service.category
          }, estética facial, beleza, ${service.title.toLowerCase()}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${service.title} - Ana Elisa Beleza Facial`}
        />
        <meta property="og:description" content={service.shortDescription} />
        <meta
          property="og:url"
          content={`https://anaelisabelezafacial.com.br/servicos/${service.id}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${service.title} - Ana Elisa Beleza Facial`}
        />
        <meta name="twitter:description" content={service.shortDescription} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.shortDescription,
            provider: {
              "@type": "Organization",
              name: "Ana Elisa Beleza Facial",
              url: "https://anaelisabelezafacial.com.br",
            },
            category: service.category,
            offers: {
              "@type": "Offer",
              description: `${service.title} - ${service.details}`,
            },
          })}
        </script>
      </Helmet>

      <ServicePageContainer>
        <Navbar />

        <BackButton href="/#servicos">Voltar aos Serviços</BackButton>

        <ServiceHeader>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceSubtitle>{service.shortDescription}</ServiceSubtitle>
        </ServiceHeader>

        <ServiceContent>
          <ServiceInfo>
            <h2>Sobre o Tratamento</h2>
            <p>{service.longDescription}</p>

            <BenefitsList>
              <h3>Benefícios</h3>
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
                {service.images.map((image, index) => (
                  <CarouselSlide key={index} isActive={index === currentSlide}>
                    <GalleryImage
                      src={image}
                      alt={`${service.title} - Imagem ${index + 1}`}
                      onClick={() => openModal(index)}
                      onError={(e) => {
                        // Fallback: ocultar imagem se não carregar
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </CarouselSlide>
                ))}

                {service.images.length > 1 && (
                  <>
                    <ImageCounter>
                      {currentSlide + 1} / {service.images.length}
                    </ImageCounter>

                    <CarouselControls>
                      <CarouselButton
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                      >
                        <ChevronLeft size={20} />
                      </CarouselButton>

                      <CarouselButton
                        onClick={nextSlide}
                        disabled={currentSlide === service.images.length - 1}
                      >
                        <ChevronRight size={20} />
                      </CarouselButton>
                    </CarouselControls>
                  </>
                )}
              </CarouselContainer>

              {service.images.length > 1 && (
                <CarouselIndicators>
                  {service.images.map((_, index) => (
                    <Indicator
                      key={index}
                      isActive={index === currentSlide}
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
                <h3>Variações Disponíveis</h3>
                <OptionsGrid>
                  {service.variations.map((variation) => (
                    <OptionCard key={variation.id}>
                      <OptionHeader>
                        <OptionName>{variation.name}</OptionName>
                      </OptionHeader>
                      <OptionDescription>
                        {variation.description}
                      </OptionDescription>
                    </OptionCard>
                  ))}
                </OptionsGrid>
              </VariationsSection>
            )}

            {/* Seção de Complementos */}
            {service.complements && service.complements.length > 0 && (
              <ComplementsSection>
                <h3>Serviços similares</h3>
                <OptionsGrid>
                  {service.complements.map((complement) => (
                    <OptionCard key={complement.id}>
                      <OptionHeader>
                        <OptionName>{complement.name}</OptionName>
                      </OptionHeader>
                      <OptionDescription>
                        {complement.description}
                      </OptionDescription>
                      
                    </OptionCard>
                  ))}
                </OptionsGrid>
              </ComplementsSection>
            )}
        </ServiceDetails>

        <CTASection>
          <h3>Pronta para transformar sua beleza?</h3>
          <p>
            Agende seu horário agora mesmo e descubra o que nosso tratamento
            pode fazer por você.
          </p>
          <WhatsAppButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </CTASection>

        {/* Modal de Imagem */}
        <ModalOverlay isOpen={isModalOpen} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {service.images && service.images[currentImageIndex] && (
              <>
                <ModalImage
                  src={service.images[currentImageIndex]}
                  alt={`${service.title} - Imagem ${currentImageIndex + 1}`}
                />

                <CloseButton onClick={closeModal}>
                  <X size={24} />
                </CloseButton>

                {service.images.length > 1 && (
                  <>
                    {currentImageIndex > 0 && (
                      <NavigationButton
                        direction="left"
                        onClick={goToPreviousImage}
                      >
                        <ChevronLeft size={24} />
                      </NavigationButton>
                    )}

                    {currentImageIndex < service.images.length - 1 && (
                      <NavigationButton
                        direction="right"
                        onClick={goToNextImage}
                      >
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
      </ServicePageContainer>
    </>
  );
};

export const query = graphql`
  query ServicePageQuery($id: String!) {
    servicesJson(id: { eq: $id }) {
      id
      title
      shortDescription
      longDescription
      benefits
      images
      category
      featured
      details {
        key
        value
      }
      variations {
        id
        name
        description
      }
      complements {
        id
        name
        description
      }
    }
  }
`;

export default ServicePage;
