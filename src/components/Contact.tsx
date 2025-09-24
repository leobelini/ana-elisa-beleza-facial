import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { colors } from '../styles/theme';
import { MessageCircle, Calendar, Phone, Mail, MapPin, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import {
  MESSAGES,
  generateWhatsAppUrl,
  CONTACT_INFO,
  PHONE_NUMBER_FORMATTED,
  address,
} from '../constants';
import { H2, P } from './ui/Typography';

// Styled Components para Contact
const ContactContainer = styled.div`
  /* Removido padding e background - agora controlado pelo SectionWrapper */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const HeaderTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.blackMain};
  margin-bottom: 16px;

  span {
    color: ${colors.goldMain};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  border-radius: 2px;
  margin: 0 auto 16px;
`;

const HeaderDescription = styled.p`
  font-size: 1.125rem;
  color: ${colors.graySecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactCard = styled(Card)`
  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactCardContent = styled.div`
  padding: 24px;
  display: flex;
  align-items: start;
  gap: 16px;
`;

const IconWrapper = styled.div`
  background: ${colors.goldMain}1a;
  padding: 12px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ContactCardInfo = styled.div`
  flex: 1;
`;

const ContactCardTitle = styled.h3`
  font-weight: 600;
  color: ${colors.blackMain};
  margin-bottom: 4px;
`;

const ContactCardDetail = styled.p`
  color: ${colors.graySecondary};
  margin-bottom: 12px;
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MainCTA = styled(Card)`
  background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
  overflow: hidden;
`;

const MainCTAContent = styled.div`
  padding: 32px;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CTADescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const WhiteButton = styled(Button)`
  background: white !important;
  color: ${colors.goldMain} !important;
  border: 2px solid white !important;

  &:hover {
    background: rgba(255, 255, 255, 0.9) !important;
    color: ${colors.goldDark} !important;
  }
`;

const OutlineButton = styled(Button)`
  background: transparent !important;
  color: white !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;

  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
  }
`;

const ServicesReminder = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
`;

const ServicesTitle = styled.h4`
  font-weight: 600;
  color: ${colors.blackMain};
  margin-bottom: 16px;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${colors.graySecondary};
`;

const ServiceBullet = styled.div`
  width: 8px;
  height: 8px;
  background: ${colors.goldMain};
  border-radius: 50%;
  margin-right: 12px;
`;

const SocialProof = styled.div`
  text-align: center;
  padding: 24px;
  background: rgba(140, 140, 140, 0.1);
  border-radius: 16px;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
`;

const StarIcon = styled(Star)`
  width: 16px;
  height: 16px;
  fill: #fbbf24;
  color: #fbbf24;
`;

const SocialProofText = styled.p`
  font-size: 0.875rem;
  color: ${colors.graySecondary};

  strong {
    color: ${colors.blackMain};
  }
`;

// Dados de contato
const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone/WhatsApp',
    detail: PHONE_NUMBER_FORMATTED,
    href: CONTACT_INFO.whatsappUrl,
    action: 'Ligar agora',
  },
  {
    icon: MapPin,
    title: 'Localização',
    detail: address,
    href: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
    action: 'Ver localização',
  },
];

// Query GraphQL para buscar serviços
const CONTACT_SERVICES_QUERY = graphql`
  query ContactServicesQuery {
    allServicesJson {
      nodes {
        id
        title
        shortDescription
      }
    }
  }
`;

// Interface para os dados dos serviços
interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
}

const Contact: React.FC = () => {
  const data = useStaticQuery(CONTACT_SERVICES_QUERY);
  const services: ServiceData[] = data.allServicesJson.nodes;
  const whatsappUrl = generateWhatsAppUrl(MESSAGES.whatsapp.default);

  return (
    <ContactContainer id="contato">
      <Container>
        {/* Header */}
        <Header>
          <HeaderTitle>
            Entre em <span>Contato</span>
          </HeaderTitle>
          <Divider />
          <HeaderDescription>
            Pronta para realçar sua beleza? Entre em contato e agende seu horário. Respondo
            rapidamente no WhatsApp!
          </HeaderDescription>
        </Header>

        <GridContainer>
          {/* Contact Info */}
          <ContactInfoSection>
            {contactInfo.map((info, index) => (
              <ContactCard key={index}>
                <ContactCardContent>
                  <IconWrapper>
                    <info.icon size={24} color={colors.goldMain} />
                  </IconWrapper>
                  <ContactCardInfo>
                    <ContactCardTitle>{info.title}</ContactCardTitle>
                    <ContactCardDetail>{info.detail}</ContactCardDetail>
                    <Button
                      variant="outline"
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.action}
                    </Button>
                  </ContactCardInfo>
                </ContactCardContent>
              </ContactCard>
            ))}
          </ContactInfoSection>

          {/* CTA Section */}
          <CTASection>
            {/* Main CTA */}
            <MainCTA>
              <MainCTAContent>
                <CTATitle>Pronta para sua transformação?</CTATitle>
                <CTADescription>
                  Agende seu horário agora e descubra como realçar sua beleza natural com técnicas
                  especializadas.
                </CTADescription>

                <CTAButtons>
                  <WhiteButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    WhatsApp
                  </WhiteButton>
                </CTAButtons>
              </MainCTAContent>
            </MainCTA>

            {/* Services Reminder */}
            <ServicesReminder>
              <ServicesTitle>Nossos Serviços:</ServicesTitle>
              <ServicesList>
                {services.map((service, index) => (
                  <ServiceItem key={service.id}>
                    <ServiceBullet />
                    {service.title}
                  </ServiceItem>
                ))}
              </ServicesList>
            </ServicesReminder>

            {/* Social Proof */}
            <SocialProof>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </Stars>
              <SocialProofText>
                <strong>500+ clientes</strong> confiam em nosso trabalho
              </SocialProofText>
            </SocialProof>
          </CTASection>
        </GridContainer>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
