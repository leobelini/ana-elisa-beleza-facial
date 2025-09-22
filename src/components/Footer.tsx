import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"
import { Instagram, MessageCircle, MapPin, Navigation } from "lucide-react"
import { SOCIAL_MEDIA, SEO_DEFAULTS, CONTACT_INFO } from "../constants"

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
`

const FooterSection = styled.div`
  flex: 1 1 250px;
  min-width: 300px;
  text-align: center;
  
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
  margin-bottom: 20px;
  
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

const AddressSection = styled.div`
  text-align: center;
  
  h4 {
    color: ${colors.goldMain};
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  
  .address-text {
    color: ${colors.graySecondary};
    margin-bottom: 15px;
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
  }
`

const NavigationButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: ${colors.goldMain};
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${colors.goldDark};
      transform: translateY(-2px);
    }
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
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
  icon: React.ReactElement
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
      "(14) 99713-9783",
      // "contato@anaelisabeleza.com",
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

// Dados do endereço
const address = {
  full: "R. Jose Zini, 101, Pongaí - SP, 16660-000",
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    icon: <Instagram size={24} />,
    url: CONTACT_INFO.instagramUrl
  },
  {
    platform: "WhatsApp",
    icon: <MessageCircle size={24} />,
    url: CONTACT_INFO.whatsappUrl
  }
]

// Componente Footer
const Footer: React.FC<FooterProps> = ({
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = SEO_DEFAULTS.copyright
}) => {
  // URLs para navegação
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address.full)}`

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
        
        {/* Seção do Endereço */}
        <FooterSection>
          <AddressSection>
            <h4>
              <MapPin size={20} />
              Nosso Endereço
            </h4>
            <div className="address-text">
              {address.full}
            </div>
            <NavigationButtons>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir no Google Maps"
              >
                <Navigation size={16} />
                Google Maps
              </a>
            </NavigationButtons>
          </AddressSection>
        </FooterSection>
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