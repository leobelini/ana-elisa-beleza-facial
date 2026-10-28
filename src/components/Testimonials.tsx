import * as React from 'react';
import { styled } from 'styled-components';
import testimonialsData from '../data/testimonials.json';
import { colors, fonts } from '../styles/theme';

// Styled Components para Testimonials
const TestimonialsContainer = styled.section`
  background: ${colors.cocoa};
  color: ${colors.iceWhite};
  padding: 120px 24px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const TestimonialsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 400;
  color: ${colors.iceWhite};
  margin-bottom: 56px;
`;

const TestimonialCard = styled.figure<{ $isVisible: boolean }>`
  margin: 0;
  max-width: 900px;
  min-height: 260px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? '0' : '12px')});
  transition: all 0.45s ease-in-out;
`;

const TestimonialText = styled.blockquote`
  font-family: ${fonts.display};
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  line-height: 1.3;
  color: ${colors.iceWhite};
  margin: 0 0 32px;
`;

const TestimonialAuthor = styled.figcaption`
  color: #d8b574;
  font-weight: 500;
`;

const TestimonialsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${(props) => (props.$active ? '40px' : '16px')};
  height: 3px;
  border: none;
  padding: 0;
  background: ${(props) => (props.$active ? '#d8b574' : 'rgba(251, 247, 244, 0.35)')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d8b574;
  }
`;

// Interfaces
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating?: number;
  service?: string;
  date?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
  id?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// Query GraphQL

// Dados padrão dos depoimentos (fallback)
const defaultTestimonials: Testimonial[] = [
  {
    id: 'default-1',
    text: 'Fiquei impressionada com o profissionalismo da Ana Elisa. O design de sobrancelhas ficou perfeito e realmente valorizou meu olhar. Além disso, o ambiente é super acolhedor e relaxante. Já sou cliente fiel!',
    author: 'Maria Silva',
  },
  {
    id: 'default-2',
    text: 'A limpeza de pele foi incrível! Minha pele ficou muito mais limpa e radiante. A Ana Elisa é muito cuidadosa e atenciosa durante todo o procedimento. Recomendo muito!',
    author: 'Carla Santos',
  },
  {
    id: 'default-3',
    text: 'Excelente profissional! O dermaplaning deixou minha pele sedosa como nunca. O atendimento é personalizado e ela realmente se preocupa com o resultado. Voltarei sempre!',
    author: 'Juliana Costa',
  },
];

// Componente Testimonials
const Testimonials: React.FC<TestimonialsProps> = ({ autoPlayInterval = 5000 }) => {
  // Usar dados do JSON ou fallback para dados padrão
  const testimonials: Testimonial[] =
    testimonialsData.length > 0 ? testimonialsData : defaultTestimonials;

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  // Função para trocar depoimento com animação
  const changeTestimonial = React.useCallback(
    (newIndex: number) => {
      if (newIndex === currentTestimonial) return;

      setIsVisible(false);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentTestimonial(newIndex);
        setIsVisible(true);
        setIsTransitioning(false);
      }, 300);
    },
    [currentTestimonial],
  );

  React.useEffect(() => {
    if (testimonials.length > 1 && !isTransitioning) {
      const interval = setInterval(() => {
        const nextIndex =
          currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
        changeTestimonial(nextIndex);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [
    autoPlayInterval,
    testimonials.length,
    currentTestimonial,
    isTransitioning,
    changeTestimonial,
  ]);

  const goToTestimonial = (index: number) => {
    changeTestimonial(index);
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <TestimonialsContainer id="depoimentos">
      <TestimonialsSection>
        <SectionTitle>O que dizem as clientes</SectionTitle>
        <TestimonialsCarousel>
          <TestimonialCard $isVisible={isVisible}>
            <TestimonialText>{testimonials[currentTestimonial].text}</TestimonialText>
            <TestimonialAuthor>{testimonials[currentTestimonial].author}</TestimonialAuthor>
          </TestimonialCard>

          {testimonials.length > 1 && (
            <CarouselDots>
              {testimonials.map((_: Testimonial, index: number) => (
                <Dot
                  key={index}
                  $active={index === currentTestimonial}
                  aria-label={`Depoimento ${index + 1}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </CarouselDots>
          )}
        </TestimonialsCarousel>
      </TestimonialsSection>
    </TestimonialsContainer>
  );
};

export default Testimonials;
