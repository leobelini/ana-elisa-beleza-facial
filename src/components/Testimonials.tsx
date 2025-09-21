import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { colors, commonStyles } from "../styles/theme"

// Styled Components para Testimonials
const TestimonialsContainer = styled.section`
  background: white;
  padding: 80px 20px;
  margin: 80px 0;
`

const TestimonialsSection = styled.div`
  ${commonStyles.section}
  padding: 0;
`

const SectionTitle = styled.h2`
  ${commonStyles.sectionTitle}
  color: ${colors.blackMain};
`

const TestimonialCard = styled.div<{ isVisible: boolean }>`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  background: ${colors.iceWhite};
  border-radius: 20px;
  position: relative;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: all 0.6s ease-in-out;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: ${colors.goldMain};
    position: absolute;
    top: 10px;
    left: 30px;
    opacity: ${props => props.isVisible ? 1 : 0};
    transition: opacity 0.8s ease-in-out 0.2s;
  }
`

const TestimonialText = styled.p<{ isVisible: boolean }>`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${colors.blackMain};
  margin-bottom: 30px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  font-style: italic;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '15px'});
  transition: all 0.5s ease-in-out 0.1s;
`

const TestimonialAuthor = styled.div<{ isVisible: boolean }>`
  color: ${colors.goldMain};
  font-weight: 500;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '10px'});
  transition: all 0.5s ease-in-out 0.3s;
`

const TestimonialsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? colors.goldMain : colors.graySecondary};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.goldMain};
  }
`

// Interfaces
export interface Testimonial {
  id: string
  text: string
  author: string
  rating?: number
  service?: string
  date?: string
}

interface TestimonialsProps {
  title?: string
  testimonials?: Testimonial[]
  id?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

// Query GraphQL
const testimonialsQuery = graphql`
  query TestimonialsQuery {
    allTestimonialsJson {
      nodes {
        id
        text
        author
        rating
        service
        date
      }
    }
  }
`

// Dados padrão dos depoimentos (fallback)
const defaultTestimonials: Testimonial[] = [
  {
    id: "default-1",
    text: "Fiquei impressionada com o profissionalismo da Ana Elisa. O design de sobrancelhas ficou perfeito e realmente valorizou meu olhar. Além disso, o ambiente é super acolhedor e relaxante. Já sou cliente fiel!",
    author: "Maria Silva"
  },
  {
    id: "default-2",
    text: "A limpeza de pele foi incrível! Minha pele ficou muito mais limpa e radiante. A Ana Elisa é muito cuidadosa e atenciosa durante todo o procedimento. Recomendo muito!",
    author: "Carla Santos"
  },
  {
    id: "default-3",
    text: "Excelente profissional! O dermaplaning deixou minha pele sedosa como nunca. O atendimento é personalizado e ela realmente se preocupa com o resultado. Voltarei sempre!",
    author: "Juliana Costa"
  }
]

// Componente Testimonials
const Testimonials: React.FC<TestimonialsProps> = ({
  title = "Depoimentos",
  id = "depoimentos",
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  // Buscar dados via GraphQL
  const data = useStaticQuery(testimonialsQuery)
  const graphqlTestimonials = data?.allTestimonialsJson?.nodes || []
  
  // Usar dados do GraphQL ou fallback para dados padrão
  const testimonials = graphqlTestimonials.length > 0 ? graphqlTestimonials : defaultTestimonials
  
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)

  // Função para trocar depoimento com animação
  const changeTestimonial = React.useCallback((newIndex: number) => {
    if (newIndex === currentTestimonial) return
    
    setIsVisible(false)
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentTestimonial(newIndex)
      setIsVisible(true)
      setIsTransitioning(false)
    }, 300)
  }, [currentTestimonial])

  React.useEffect(() => {
    if (autoPlay && testimonials.length > 1 && !isTransitioning) {
      const interval = setInterval(() => {
        const nextIndex = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
        changeTestimonial(nextIndex)
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, testimonials.length, currentTestimonial, isTransitioning, changeTestimonial])

  const goToTestimonial = (index: number) => {
    changeTestimonial(index)
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <TestimonialsContainer id={id}>
      <TestimonialsSection>
        <SectionTitle>{title}</SectionTitle>
        <TestimonialsCarousel>
          <TestimonialCard isVisible={isVisible}>
            <TestimonialText isVisible={isVisible}>
              {testimonials[currentTestimonial].text}
            </TestimonialText>
            <TestimonialAuthor isVisible={isVisible}>
              — {testimonials[currentTestimonial].author}
            </TestimonialAuthor>
          </TestimonialCard>
          
          {testimonials.length > 1 && (
            <CarouselDots>
              {testimonials.map((_: Testimonial, index: number) => (
                <Dot
                  key={index}
                  active={index === currentTestimonial}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </CarouselDots>
          )}
        </TestimonialsCarousel>
      </TestimonialsSection>
    </TestimonialsContainer>
  )
}

export default Testimonials