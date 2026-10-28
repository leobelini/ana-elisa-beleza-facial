import * as React from 'react';
import { styled } from 'styled-components';
import { MessageCircle } from 'lucide-react';
import { colors, fonts } from '../styles/theme';
import { Button } from './ui/Button';
import {
  ADDRESS,
  CONTACT_INFO,
  MESSAGES,
  PHONE_NUMBER_FORMATTED,
  generateWhatsAppUrl,
} from '../constants';

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
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 88px;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Details = styled.dl`
  border-top: 1px solid ${colors.blackMain};

  div {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 16px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(42, 26, 24, 0.2);
  }

  dt {
    color: ${colors.graySecondary};
  }

  dd {
    margin: 0;
    font-family: ${fonts.display};
    font-size: 1.5rem;
    line-height: 1.25;
    color: ${colors.blackMain};
    overflow-wrap: anywhere;
  }

  a {
    display: inline-block;
    padding: 8px 0;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${colors.goldMain};
  }

  a:hover {
    color: ${colors.rose};
  }
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
        <div>
          <Statement>Vamos cuidar do seu olhar?</Statement>
          <Text>
            Escolha o tratamento e me chame no WhatsApp. Respondo com os horários disponíveis e tiro
            qualquer dúvida antes de você marcar.
          </Text>
          <Button href={whatsappUrl} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            {MESSAGES.cta.scheduleWhatsApp}
          </Button>
        </div>
        <Details>
          <div>
            <dt>Atendimento</dt>
            <dd>Terça a sábado, das 9h às 18h</dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {PHONE_NUMBER_FORMATTED}
              </a>
            </dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">
                {CONTACT_INFO.instagram}
              </a>
            </dd>
          </div>
          <div>
            <dt>Endereço</dt>
            <dd>
              {ADDRESS.street}, {ADDRESS.locality} - {ADDRESS.region}
            </dd>
          </div>
        </Details>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
