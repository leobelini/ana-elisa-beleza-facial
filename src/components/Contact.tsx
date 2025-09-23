import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"
import { MessageCircle } from "lucide-react"
import { Button } from "./ui/Button"
import { MESSAGES, generateWhatsAppUrl } from "../constants"
import { H2, P } from "./ui/Typography"

// Styled Components para Contact
const ContactContainer = styled.section`
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
`

// ContactTitle e ContactText removidos, usar Typography

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
    <ContactContainer id="agendamento">
      <H2 as="h2" style={{ color: 'white', fontWeight: 300, marginBottom: 30 }}>Pronta para realçar sua beleza?</H2>
      <P as="p" style={{ color: 'white', opacity: 0.9, marginBottom: 40, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
        Agende seu horário e descubra como podemos realçar sua beleza natural
      </P>
      <ContactButtonsContainer>
        <Button 
          href={whatsappUrl}
          variant="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
          {MESSAGES.cta.scheduleWhatsApp}
        </Button>
      </ContactButtonsContainer>
    </ContactContainer>
  )
}

export default Contact