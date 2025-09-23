import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"
import { MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./ui/WhatsAppButton"
import { MESSAGES, generateWhatsAppUrl } from "../constants"

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

const Contact: React.FC = () => {
  const whatsappUrl = generateWhatsAppUrl(MESSAGES.whatsapp.default)

  return (
    <ContactContainer>
      <ContactTitle>Pronta para realçar sua beleza?</ContactTitle>
      <ContactText>Agende seu horário e descubra como podemos realçar sua beleza natural</ContactText>
      <ContactButtonsContainer>
        <WhatsAppButton 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
          {MESSAGES.cta.scheduleWhatsApp}
        </WhatsAppButton>
      </ContactButtonsContainer>
    </ContactContainer>
  )
}

export default Contact