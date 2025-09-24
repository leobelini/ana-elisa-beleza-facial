import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { colors, commonStyles } from '../styles/theme';
import { yearsOfExperience } from '../constants';

// Styled Components para Testimonials
const TestimonialsContainer = styled.div`
  /* Removido padding e background - agora controlado pelo SectionWrapper */
`;

const TestimonialsSection = styled.div`
  ${commonStyles.section}
  padding: 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.blackMain};
  margin-bottom: 16px;
  line-height: 1.2;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const TitleHighlight = styled.span`
  color: ${colors.goldMain};
`;

const TitleUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, ${colors.goldMain}, ${colors.goldDark});
  border-radius: 2px;
  margin: 0 auto 16px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${colors.graySecondary};
  max-width: 512px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(200, 169, 104, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: rgba(200, 169, 104, 0.3);
  line-height: 1;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.div<{ $filled: boolean }>`
  width: 16px;
  height: 16px;
  color: ${(props) => (props.$filled ? '#fbbf24' : '#d1d5db')};

  &::before {
    content: '★';
    font-size: 16px;
  }
`;

const TestimonialText = styled.blockquote`
  font-size: 1rem;
  line-height: 1.6;
  color: ${colors.graySecondary};
  margin-bottom: 16px;
  font-style: italic;

  &::before {
    content: '"';
  }

  &::after {
    content: '"';
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 2rem;
  border-top: 1px solid rgba(200, 169, 104, 0.1);
`;

const AuthorAvatar = styled.div`
  font-size: 1.5rem;
  line-height: 1;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 600;
  color: ${colors.blackMain};
  font-size: 0.875rem;
`;

const ServiceName = styled.div`
  font-size: 0.75rem;
  color: ${colors.graySecondary};
`;

const StatsSection = styled.div`
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.goldMain};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${colors.graySecondary};
`;

// Interfaces
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating: number;
  service: string;
  avatar: string;
  date?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
  id?: string;
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
`;

// Dados das estatísticas
const stats = [
  {
    number: '500+',
    label: 'Clientes Atendidas',
  },
  {
    number: `${yearsOfExperience} +`,
    label: 'Anos de Experiência',
  },
  {
    number: '98%',
    label: 'Satisfação',
  },
  {
    number: '24h',
    label: 'Resposta WhatsApp',
  },
];

// Dados padrão dos depoimentos (fallback)
const defaultTestimonials: Testimonial[] = [
  {
    id: 'default-1',
    text: 'Fiquei impressionada com o profissionalismo da Ana Elisa. O design de sobrancelhas ficou perfeito e realmente valorizou meu olhar. Além disso, o ambiente é super acolhedor e relaxante. Já sou cliente fiel!',
    author: 'Maria Silva',
    rating: 5,
    service: 'Design de Sobrancelhas',
    avatar: '👩🏻',
  },
  {
    id: 'default-2',
    text: 'A limpeza de pele foi incrível! Minha pele ficou muito mais limpa e radiante. A Ana Elisa é muito cuidadosa e atenciosa durante todo o procedimento. Recomendo muito!',
    author: 'Carla Santos',
    rating: 5,
    service: 'Limpeza de Pele',
    avatar: '👩🏽',
  },
  {
    id: 'default-3',
    text: 'Excelente profissional! O dermaplaning deixou minha pele sedosa como nunca. O atendimento é personalizado e ela realmente se preocupa com o resultado. Voltarei sempre!',
    author: 'Juliana Costa',
    rating: 5,
    service: 'Dermaplaning',
    avatar: '👩🏼',
  },
  {
    id: 'default-4',
    text: 'A extensão de cílios ficou perfeita! Durou exatamente o tempo prometido e o resultado foi muito natural. Recomendo de olhos fechados!',
    author: 'Ana Beatriz',
    rating: 5,
    service: 'Extensão de Cílios',
    avatar: '👩🏻‍🦱',
  },
  {
    id: 'default-5',
    text: 'O lash lift superou minhas expectativas! Meus cílios ficaram curvados e definidos de forma natural. Amei o resultado!',
    author: 'Fernanda Lima',
    rating: 5,
    service: 'Lash Lift',
    avatar: '👩🏾',
  },
  {
    id: 'default-6',
    text: 'O hidra gloss deixou meus lábios incríveis! Hidratação profunda e um brilho natural que durou dias. Voltarei em breve!',
    author: 'Roberta Mendes',
    rating: 5,
    service: 'Hidra Gloss',
    avatar: '👱🏻‍♀️',
  },
];

// Componente Testimonials
const Testimonials: React.FC<TestimonialsProps> = () => {
  // Buscar dados via GraphQL
  const data = useStaticQuery(testimonialsQuery);
  const graphqlTestimonials = data?.allTestimonialsJson?.nodes || [];

  // Usar dados do GraphQL ou fallback para dados padrão
  const testimonials = graphqlTestimonials.length > 0 ? graphqlTestimonials : defaultTestimonials;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <TestimonialsContainer id="depoimentos">
      <TestimonialsSection>
        {/* Header */}
        <SectionHeader>
          <SectionTitle>
            O que dizem nossas <TitleHighlight>clientes</TitleHighlight>
          </SectionTitle>
          <TitleUnderline />
          <SectionSubtitle>
            A satisfação das nossas clientes é nossa maior recompensa. Veja alguns depoimentos de
            quem confia em nosso trabalho.
          </SectionSubtitle>
        </SectionHeader>

        {/* Testimonials Grid */}
        <TestimonialsGrid>
          {testimonials.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <CardHeader>
                <QuoteIcon>"</QuoteIcon>
                <RatingContainer>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} $filled={i < testimonial.rating} />
                  ))}
                </RatingContainer>
              </CardHeader>

              <TestimonialText>{testimonial.text}</TestimonialText>

              <AuthorSection>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <ServiceName>{testimonial.service}</ServiceName>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>

        {/* Bottom Stats */}
        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsSection>
      </TestimonialsSection>
    </TestimonialsContainer>
  );
};

export default Testimonials;
