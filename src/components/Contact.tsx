import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"
import { MessageCircle } from "lucide-react"

// Styled Components para Contact
const ContactContainer = styled.section`
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
`

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 30px;
`

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ContactButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: white;
  color: ${colors.goldMain};
  padding: 18px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  gap: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`

// const EmailButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   background: transparent;
//   color: white;
//   border: 2px solid white;
//   padding: 16px 40px;
//   border-radius: 30px;
//   text-decoration: none;
//   font-weight: 600;
//   font-size: 1.1rem;
//   transition: all 0.3s ease;
//   gap: 10px;
  
//   &:hover {
//     background: white;
//     color: ${colors.goldMain};
//     transform: translateY(-2px);
//   }
// `

const ContactInfo = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

// const InfoCard = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   padding: 30px;
//   border-radius: 15px;
//   backdrop-filter: blur(10px);
  
//   h3 {
//     font-size: 1.2rem;
//     margin-bottom: 15px;
//     color: white;
//   }
  
//   p {
//     opacity: 0.9;
//     margin-bottom: 8px;
    
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
// `

// Interfaces
interface ContactInfo {
  title: string
  items: string[]
}

interface ContactProps {
  title?: string
  description?: string
  whatsappNumber?: string
  whatsappMessage?: string
  email?: string
  contactInfo?: ContactInfo[]
  id?: string
}

// Dados padrão de contato
// const defaultContactInfo: ContactInfo[] = [
//   {
//     title: "Contato",
//     items: [
//       "(14) 99713-9783",
//       "contato@anaelisabeleza.com",
//       "São Paulo, SP"
//     ]
//   },
//   {
//     title: "Horário de Funcionamento",
//     items: [
//       "Segunda à Sexta: 9h às 18h",
//       "Sábado: 9h às 15h",
//       "Domingo: Fechado"
//     ]
//   }
// ]

// Componente Contact
const Contact: React.FC<ContactProps> = ({
  title = "Pronta para realçar sua beleza?",
  description = "Agende seu horário e descubra como podemos realçar sua beleza natural",
  whatsappNumber = "5511999999999",
  whatsappMessage = "Olá! Gostaria de agendar um horário para um tratamento estético.",
  // email = "contato@anaelisabeleza.com",
  // contactInfo = defaultContactInfo,
  id = "agendamento"
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  // const emailUrl = `mailto:${email}?subject=${encodeURIComponent("Agendamento - Ana Elisa Beleza Facial")}`

  return (
    <ContactContainer id={id}>
      <ContactTitle>{title}</ContactTitle>
      <ContactText>{description}</ContactText>
      
      <ContactButtonsContainer>
        <WhatsAppButton 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
          Agende pelo WhatsApp
        </WhatsAppButton>
        
        {/* <EmailButton 
          href={emailUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={20} />
          Enviar E-mail
        </EmailButton> */}
      </ContactButtonsContainer>
    </ContactContainer>
  )
}

export default Contact