import * as React from "react"
import styled from "styled-components"
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

const TestimonialCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  background: ${colors.iceWhite};
  border-radius: 20px;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: ${colors.goldMain};
    position: absolute;
    top: 10px;
    left: 30px;
  }
`

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${colors.blackMain};
  margin-bottom: 30px;
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  color: ${colors.goldMain};
  font-weight: 500;
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
  text: string
  author: string
  rating?: number
}

interface TestimonialsProps {
  title?: string
  testimonials?: Testimonial[]
  id?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

// Dados padrão dos depoimentos
const defaultTestimonials: Testimonial[] = [
  {
    text: "Fiquei impressionada com o profissionalismo da Ana Elisa. O design de sobrancelhas ficou perfeito e realmente valorizou meu olhar. Além disso, o ambiente é super acolhedor e relaxante. Já sou cliente fiel!",
    author: "Maria Silva"
  },
  {
    text: "A limpeza de pele foi incrível! Minha pele ficou muito mais limpa e radiante. A Ana Elisa é muito cuidadosa e atenciosa durante todo o procedimento. Recomendo muito!",
    author: "Carla Santos"
  },
  {
    text: "Excelente profissional! O dermaplaning deixou minha pele sedosa como nunca. O atendimento é personalizado e ela realmente se preocupa com o resultado. Voltarei sempre!",
    author: "Juliana Costa"
  }
]

// Componente Testimonials
const Testimonials: React.FC<TestimonialsProps> = ({
  title = "Depoimentos",
  testimonials = defaultTestimonials,
  id = "depoimentos",
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  React.useEffect(() => {
    if (autoPlay && testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        )
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <TestimonialsContainer id={id}>
      <TestimonialsSection>
        <SectionTitle>{title}</SectionTitle>
        <TestimonialsCarousel>
          <TestimonialCard>
            <TestimonialText>
              {testimonials[currentTestimonial].text}
            </TestimonialText>
            <TestimonialAuthor>
              — {testimonials[currentTestimonial].author}
            </TestimonialAuthor>
          </TestimonialCard>
          
          {testimonials.length > 1 && (
            <CarouselDots>
              {testimonials.map((_, index) => (
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