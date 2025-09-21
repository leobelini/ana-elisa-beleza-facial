import * as React from "react"
import styled from "styled-components"
import { colors, commonStyles } from "../styles/theme"

// Styled Components para Services
const ServicesContainer = styled.section`
  ${commonStyles.section}
`

const SectionTitle = styled.h2`
  ${commonStyles.sectionTitle}
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

// Interfaces
export interface Service {
  title: string
  description: string
  icon: string
}

interface ServicesProps {
  title?: string
  services?: Service[]
  id?: string
  onServiceClick?: (service: Service) => void
}

// Dados padrão dos serviços
const defaultServices: Service[] = [
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

// Componente Services
const Services: React.FC<ServicesProps> = ({
  title = "Serviços",
  services = defaultServices,
  id = "servicos",
  onServiceClick
}) => {
  const handleServiceClick = (service: Service) => {
    if (onServiceClick) {
      onServiceClick(service)
    }
  }

  return (
    <ServicesContainer id={id}>
      <SectionTitle>{title}</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceButton onClick={() => handleServiceClick(service)}>
              Saiba mais
            </ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services