import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Star, Award, Users, Clock } from 'lucide-react';
import { colors, commonStyles } from '../styles/theme';
import { yearsOfExperience } from '../constants';

// Dados de conquistas
const achievements = [
  {
    icon: Users,
    title: 'Mais de 500 Clientes',
    description: 'Satisfeitas ao longo dos anos',
    color: 'text-primary',
  },
  {
    icon: Star,
    title: '5 Estrelas',
    description: 'Avaliação média dos clientes',
    color: 'text-primary',
  },
  {
    icon: Award,
    title: `${yearsOfExperience} Anos de Experiência`,
    description: 'Especialização em estética',
    color: 'text-primary',
  },
  {
    icon: Clock,
    title: 'Especialista em Cílios',
    description: 'Desde 2020',
    color: 'text-primary',
  },
];

// Styled Components para About
const AboutContainer = styled.div`
  /* Removido padding e background - agora controlado pelo SectionWrapper */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(200, 169, 104, 0.3);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 35px 60px rgba(200, 169, 104, 0.4);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 600px;
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

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(200, 169, 104, 0.2) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  bottom: -32px;
  right: -32px;
  background: ${colors.iceWhite};
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  text-align: center;

  @media (max-width: 768px) {
    bottom: -16px;
    right: -16px;
    padding: 16px;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.goldMain};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${colors.graySecondary};
  margin-top: 4px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  color: ${colors.blackMain};
  line-height: 1.1;

  .highlight {
    color: ${colors.goldMain};
  }
`;

const TitleDivider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  border-radius: 2px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${colors.graySecondary};

  strong {
    color: ${colors.blackMain};
  }

  &.highlight {
    font-style: italic;
    color: ${colors.goldMain};
    position: relative;
    padding-left: 24px;

    &::before {
      content: '"';
      position: absolute;
      left: 0;
      top: -8px;
      font-size: 2rem;
      color: ${colors.goldMain};
      opacity: 0.5;
    }
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled.div`
  padding: 16px;
  background: rgba(200, 169, 104, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(200, 169, 104, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(200, 169, 104, 0.1);
    box-shadow: 0 10px 25px rgba(200, 169, 104, 0.2);
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: ${colors.goldMain};
  flex-shrink: 0;
`;

const AchievementContent = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.blackMain};
  margin: 0 0 4px 0;
`;

const AchievementDescription = styled.p`
  font-size: 0.75rem;
  color: ${colors.graySecondary};
  margin: 0;
  line-height: 1.4;
`;

const About = () => {
  return (
    <AboutContainer id="sobre">
      <Container>
        <AboutContent>
          {/* Image Section */}
          <ImageSection>
            <ProfileImageContainer>
              <StaticImage
                src="../images/home/IMG_5396-Enhanced-NR.jpg"
                alt="Ana Elisa - Esteticista Profissional"
                placeholder="blurred"
                layout="constrained"
                width={600}
                height={600}
                quality={95}
                formats={['auto', 'webp', 'avif']}
                objectFit="cover"
                objectPosition="center"
              />
            </ProfileImageContainer>

            {/* Floating card */}
            <FloatingCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Clientes Satisfeitas</StatLabel>
            </FloatingCard>
          </ImageSection>

          {/* Content Section */}
          <ContentSection>
            <TitleSection>
              <MainTitle>
                Sobre <span className="highlight">Ana Elisa</span>
              </MainTitle>
              <TitleDivider />
            </TitleSection>

            <TextContent>
              <StyledParagraph>
                Com mais de {yearsOfExperience} anos de experiência na área da estética, sou{' '}
                <strong>Bacharel em Estética</strong> (formada em 2018) e apaixonada por cuidar e
                elevar a autoestima desde muito jovem.
              </StyledParagraph>

              <StyledParagraph>
                Minha missão sempre foi oferecer o que há de melhor e mais atual no universo da
                beleza, unindo técnica, delicadeza e resultados que encantam.
              </StyledParagraph>

              <StyledParagraph>
                Em 2020, encontrei na{' '}
                <strong style={{ color: colors.goldMain }}>extensão de cílios</strong> minha grande
                especialidade. Desde então, me dedico a aperfeiçoar cada detalhe para entregar não
                apenas variedade de modelos, mas também uma durabilidade incrível e um acabamento
                que valoriza a beleza natural de cada cliente.
              </StyledParagraph>

              <StyledParagraph className="highlight">
                Será um prazer cuidar de você, proporcionando um atendimento exclusivo e serviços
                que realçam sua beleza com um toque elegante e natural.
              </StyledParagraph>
            </TextContent>

            {/* Achievements Grid */}
            <AchievementsGrid>
              {achievements.map((achievement, index) => (
                <AchievementCard key={index}>
                  <IconWrapper>
                    <achievement.icon size={24} />
                  </IconWrapper>
                  <AchievementContent>
                    <AchievementTitle>{achievement.title}</AchievementTitle>
                    <AchievementDescription>{achievement.description}</AchievementDescription>
                  </AchievementContent>
                </AchievementCard>
              ))}
            </AchievementsGrid>
          </ContentSection>
        </AboutContent>
      </Container>
    </AboutContainer>
  );
};

export default About;
