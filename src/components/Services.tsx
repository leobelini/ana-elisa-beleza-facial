import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colors, commonStyles } from "../styles/theme"
import { ServiceData } from "./ServiceModal"

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
  cursor: pointer;
  
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
  margin-bottom: 20px;
`

const ServicePrice = styled.div`
  font-size: 1.1rem;
  color: ${colors.goldDark};
  font-weight: 600;
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
  id?: string
  onServiceClick?: (service: ServiceData) => void
}

// Mapeamento de ícones por categoria/título
const getServiceIcon = (title: string): string => {
  const iconMap: { [key: string]: string } = {
    'Limpeza de Pele': '✨',
    'Design de Sobrancelhas': '👁️',
    'Extensão de Cílios': '💫',
    'Peeling Facial': '🌟',
    'Dermaplaning': '�'
  }
  return iconMap[title] || '💅'
}

// Query GraphQL
const SERVICES_QUERY = graphql`
  query ServicesQuery {
    allServicesJson {
      nodes {
        id
        title
        shortDescription
        longDescription
        price
        duration
        benefits
        images
        category
        featured
      }
    }
  }
`

// Componente Services
const Services: React.FC<ServicesProps> = ({
  title = "Serviços",
  id = "servicos",
  onServiceClick
}) => {
  const data = useStaticQuery(SERVICES_QUERY)
  const services: ServiceData[] = data.allServicesJson.nodes

  const handleServiceClick = (service: ServiceData) => {
    if (onServiceClick) {
      onServiceClick(service)
    }
  }

  return (
    <ServicesContainer id={id}>
      <SectionTitle>{title}</SectionTitle>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id} onClick={() => handleServiceClick(service)}>
            <ServiceIcon>{getServiceIcon(service.title)}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.shortDescription}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
            <ServiceButton>
              Saiba mais
            </ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services