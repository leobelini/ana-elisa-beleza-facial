import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"

// Styled Components para Footer
const FooterContainer = styled.footer`
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
  
  p {
    color: ${colors.graySecondary};
    margin-bottom: 10px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${colors.goldMain};
    border-radius: 50%;
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

// Interfaces
interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links?: FooterLink[]
  content?: string[]
}

interface SocialLink {
  platform: string
  icon: string
  url: string
}

interface FooterProps {
  sections?: FooterSection[]
  socialLinks?: SocialLink[]
  copyright?: string
}

// Dados padrão do footer
const defaultSections: FooterSection[] = [
  {
    title: "Navegação",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#agendamento" }
    ]
  },
  {
    title: "Contato",
    content: [
      "📱 (11) 99999-9999",
      "📧 contato@anaelisabeleza.com",
      "📍 São Paulo, SP"
    ]
  },
  {
    title: "Horário de Funcionamento",
    content: [
      "Segunda à Sexta: 9h às 18h",
      "Sábado: 9h às 15h",
      "Domingo: Fechado"
    ]
  }
]

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    icon: "📷",
    url: "https://instagram.com/anaelisabeleza"
  },
  {
    platform: "WhatsApp",
    icon: "📱",
    url: "https://wa.me/5511999999999"
  }
]

// Componente Footer
const Footer: React.FC<FooterProps> = ({
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Ana Elisa Beleza Facial. Todos os direitos reservados."
}) => {
  return (
    <FooterContainer>
      <FooterContent>
        {sections.map((section, index) => (
          <FooterSection key={index}>
            <h3>{section.title}</h3>
            {section.links && (
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.content && (
              <div>
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex}>{item}</p>
                ))}
              </div>
            )}
          </FooterSection>
        ))}
      </FooterContent>
      
      <SocialIcons>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.platform}
          >
            {social.icon}
          </a>
        ))}
      </SocialIcons>
      
      <Copyright>
        {copyright}
      </Copyright>
    </FooterContainer>
  )
}

export default Footer