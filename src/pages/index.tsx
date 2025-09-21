import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"

// Paleta de cores
const colors = {
  goldMain: "#C8A968",
  goldDark: "#A17C3C", 
  iceWhite: "#FAF8F6",
  graySecondary: "#8C8C8C",
  blackMain: "#1E1E1E",
}

// Styled Components
const Container = styled.div`
  background-color: ${colors.iceWhite};
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${colors.blackMain};
  line-height: 1.6;
`

// Navbar fixa
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(250, 248, 246, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 15px 0;
  border-bottom: 1px solid rgba(200, 169, 104, 0.2);
  transition: all 0.3s ease;
  
  &.scrolled {
    background: rgba(250, 248, 246, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${colors.goldMain};
  text-decoration: none;
  letter-spacing: 1px;
  
  &:hover {
    color: ${colors.goldDark};
  }
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  position: relative;
`

const NavLink = styled.a`
  color: ${colors.blackMain};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${colors.goldMain};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.goldMain};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.goldMain};
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(250, 248, 246, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(200, 169, 104, 0.2);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`

const MobileMenuList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const MobileNavLink = styled.a`
  color: ${colors.blackMain};
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid rgba(200, 169, 104, 0.1);
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.goldMain};
  }
`

const Header = styled.header`
  background: linear-gradient(135deg, ${colors.iceWhite} 0%, #ffffff 100%);
  padding: 140px 20px 80px;
  text-align: center;
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

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: ${colors.goldMain};
  margin-bottom: 20px;
  letter-spacing: 2px;
  position: relative;
  z-index: 2;
  
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
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Button = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  color: white;
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(200, 169, 104, 0.3);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(200, 169, 104, 0.4);
  }
`

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: ${colors.blackMain};
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: ${colors.goldMain};
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: white;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(200, 169, 104, 0.3);
`

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${colors.blackMain};
  
  h3 {
    color: ${colors.goldMain};
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 20px;
    color: ${colors.graySecondary};
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
`

const ServiceCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(200, 169, 104, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(200, 169, 104, 0.2);
  }
`

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
`

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: ${colors.blackMain};
  margin-bottom: 15px;
  font-weight: 500;
`

const ServiceDescription = styled.p`
  color: ${colors.graySecondary};
  line-height: 1.6;
  margin-bottom: 25px;
`

const ServiceButton = styled.button`
  background: transparent;
  border: 2px solid ${colors.goldMain};
  color: ${colors.goldMain};
  padding: 10px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.goldMain};
    color: white;
  }
`

const TestimonialsSection = styled.section`
  background: white;
  padding: 80px 20px;
  margin: 80px 0;
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

const AgendamentoSection = styled.section`
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
`

const AgendamentoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 30px;
`

const AgendamentoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
`

const WhatsAppButton = styled.a`
  display: inline-block;
  background: white;
  color: ${colors.goldMain};
  padding: 18px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '📱';
    margin-right: 10px;
  }
`

const Footer = styled.footer`
  background: ${colors.blackMain};
  color: white;
  padding: 60px 20px 30px;
  text-align: center;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`

const FooterSection = styled.div`
  h3 {
    color: ${colors.goldMain};
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: ${colors.graySecondary};
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: ${colors.goldMain};
        }
      }
    }
  }
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  
  a {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: ${colors.goldMain};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      background: ${colors.goldDark};
    }
  }
`

const Copyright = styled.div`
  border-top: 1px solid ${colors.graySecondary};
  padding-top: 30px;
  color: ${colors.graySecondary};
  font-size: 0.9rem;
`

// Dados dos serviços
const services = [
  {
    title: "Limpeza de Pele",
    description: "Tratamento profundo para remoção de impurezas e renovação celular, deixando sua pele limpa e radiante.",
    icon: "✨"
  },
  {
    title: "Design de Sobrancelhas",
    description: "Modelagem personalizada que valoriza o formato do seu rosto e realça o olhar de forma natural.",
    icon: "👁️"
  },
  {
    title: "Extensão de Cílios",
    description: "Técnica especializada para alongar e dar volume aos cílios, criando um olhar marcante e sedutor.",
    icon: "💫"
  },
  {
    title: "Peeling Facial",
    description: "Renovação celular através de técnicas avançadas para uma pele mais lisa, uniforme e rejuvenescida.",
    icon: "🌟"
  },
  {
    title: "Dermaplaning",
    description: "Esfoliação suave que remove células mortas e pelos faciais, proporcionando uma pele sedosa.",
    icon: "💎"
  }
]

const IndexPage: React.FC<PageProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Navbar */}
        <Navbar className={isScrolled ? 'scrolled' : ''}>
          <NavContainer>
            <NavLogo href="#home">Ana Elisa</NavLogo>
            <NavMenu>
              <NavItem>
                <NavLink href="#sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#servicos">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#depoimentos">Depoimentos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#agendamento">Contato</NavLink>
              </NavItem>
            </NavMenu>
            <MobileMenuButton onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </NavContainer>
          <MobileMenu isOpen={isMobileMenuOpen}>
            <MobileMenuList>
              <li>
                <MobileNavLink href="#sobre" onClick={closeMobileMenu}>Sobre</MobileNavLink>
              </li>
              <li>
                <MobileNavLink href="#servicos" onClick={closeMobileMenu}>Serviços</MobileNavLink>
              </li>
              <li>
                <MobileNavLink href="#depoimentos" onClick={closeMobileMenu}>Depoimentos</MobileNavLink>
              </li>
              <li>
                <MobileNavLink href="#agendamento" onClick={closeMobileMenu}>Contato</MobileNavLink>
              </li>
            </MobileMenuList>
          </MobileMenu>
        </Navbar>

      {/* Header / Banner */}
      <Header id="home">
        <Logo>Ana Elisa Beleza Facial</Logo>
        <Tagline>Beleza e cuidado que realçam sua essência</Tagline>
        <Button href="#agendamento">Agende seu horário</Button>
      </Header>

      {/* Sobre */}
      <Section id="sobre">
        <SectionTitle>Sobre</SectionTitle>
        <AboutContent>
          <ProfileImage>👩‍⚕️</ProfileImage>
          <AboutText>
            <h3>Ana Elisa - Esteticista Profissional</h3>
            <p>
              Com mais de 5 anos de experiência na área da estética facial, sou especializada em realçar 
              a beleza natural de cada cliente através de técnicas modernas e cuidado personalizado.
            </p>
            <p>
              Formada em Estética e Cosmética, com especializações em dermaplaning, design de sobrancelhas 
              e extensão de cílios. Minha missão é proporcionar não apenas tratamentos de qualidade, mas 
              uma experiência única de bem-estar e autoestima.
            </p>
            <p>
              Acredito que cada pessoa possui uma beleza única, e meu trabalho é realçar essa individualidade 
              através de cuidados específicos e resultados naturais.
            </p>
          </AboutText>
        </AboutContent>
      </Section>

      {/* Serviços */}
      <Section id="servicos">
        <SectionTitle>Serviços</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton>Saiba mais</ServiceButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      {/* Depoimentos */}
      <TestimonialsSection id="depoimentos">
        <Section>
          <SectionTitle style={{ color: colors.blackMain }}>Depoimentos</SectionTitle>
          <TestimonialCard>
            <TestimonialText>
              "Fiquei impressionada com o profissionalismo da Ana Elisa. O design de sobrancelhas ficou perfeito 
              e realmente valorizou meu olhar. Além disso, o ambiente é super acolhedor e relaxante. 
              Já sou cliente fiel!"
            </TestimonialText>
            <TestimonialAuthor>— Maria Silva</TestimonialAuthor>
          </TestimonialCard>
        </Section>
      </TestimonialsSection>

      {/* Agendamento */}
      <AgendamentoSection id="agendamento">
        <AgendamentoTitle>Pronta para realçar sua beleza?</AgendamentoTitle>
        <AgendamentoText>
          Agende seu horário e descubra como podemos realçar sua beleza natural
        </AgendamentoText>
        <WhatsAppButton href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário para um tratamento estético.">
          Agende pelo WhatsApp
        </WhatsAppButton>
      </AgendamentoSection>

      {/* Rodapé */}
      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>Navegação</h3>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#agendamento">Agendamento</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Contato</h3>
            <ul>
              <li>📱 (11) 99999-9999</li>
              <li>📧 contato@anaelisabeleza.com</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Horário de Funcionamento</h3>
            <ul>
              <li>Segunda à Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 15h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </FooterSection>
        </FooterContent>
        
        <SocialIcons>
          <a href="https://instagram.com/anaelisabeleza" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">📱</a>
        </SocialIcons>
        
        <Copyright>
          © 2024 Ana Elisa Beleza Facial. Todos os direitos reservados.
        </Copyright>
      </Footer>
    </Container>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Ana Elisa Beleza Facial - Estética e Cuidados Faciais</title>
    <meta name="description" content="Beleza e cuidado que realçam sua essência. Especializada em limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial e dermaplaning." />
    <meta name="keywords" content="estética facial, limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial, dermaplaning, beleza" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)