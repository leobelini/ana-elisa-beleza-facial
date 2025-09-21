import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"
import { MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./ui/WhatsAppButton"

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

const ContactInfo = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

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

// Componente Contact
const Contact: React.FC<ContactProps> = ({
  title = "Pronta para realçar sua beleza?",
  description = "Agende seu horário e descubra como podemos realçar sua beleza natural",
  whatsappNumber = "5514997139783",
  whatsappMessage = "Olá! Gostaria de agendar um horário para um tratamento estético.",
  id = "agendamento"
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

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
      </ContactButtonsContainer>
    </ContactContainer>
  )
}

export default Contact