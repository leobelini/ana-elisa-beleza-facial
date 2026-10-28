import * as React from 'react';
import { styled } from 'styled-components';
import { MessageCircle } from 'lucide-react';
import { colors, fonts } from '../styles/theme';
import { Button } from './ui/Button';
import { MESSAGES, generateWhatsAppUrl } from '../constants';

const ContactContainer = styled.section`
  background: ${colors.blush};
  padding: 130px 24px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Statement = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2.8rem, 7.5vw, 6rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.01em;
  color: ${colors.blackMain};
  max-width: 14ch;
  margin-bottom: 36px;
`;

const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${colors.graySecondary};
  max-width: 46ch;
  margin-bottom: 40px;
`;

const Contact: React.FC = () => {
  const whatsappUrl = generateWhatsAppUrl(MESSAGES.whatsapp.default);

  return (
    <ContactContainer id="agendamento">
      <ContactContent>
        <Statement>Vamos cuidar do seu olhar?</Statement>
        <Text>
          Escolha o tratamento e me chame no WhatsApp. Respondo com os horários disponíveis e tiro
          qualquer dúvida antes de você marcar.
        </Text>
        <Button href={whatsappUrl} variant="whatsapp" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
          {MESSAGES.cta.scheduleWhatsApp}
        </Button>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
