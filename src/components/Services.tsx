import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { colors, commonStyles } from "../styles/theme"

// Tipo para dados dos serviços
interface ServiceData {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  price: string
  duration: string
  benefits: string[]
  images: string[]
  category: string
  featured: boolean
  fields: {
    slug: string
  }
}

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

const ServiceCard = styled(Link)`
  background: white;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(200, 169, 104, 0.1);
  text-decoration: none;
  color: inherit;
  display: block;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(200, 169, 104, 0.2);
    text-decoration: none;
    color: inherit;
  }
`

const ServiceImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`

const ServiceContent = styled.div`
  padding: 40px 30px;
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
        fields {
          slug
        }
      }
    }
  }
`

// Componente Services
const Services: React.FC<ServicesProps> = ({
  title = "Serviços",
  id = "servicos"
}) => {
  const data = useStaticQuery(SERVICES_QUERY)
  const services: ServiceData[] = data.allServicesJson.nodes

  return (
    <ServicesContainer id={id}>
      <SectionTitle>{title}</SectionTitle>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id} to={`/servicos/${service.fields.slug}`}>
            <ServiceImageContainer>
              <ServiceImage 
                src={service.images[0]} 
                alt={service.title}
                onError={(e) => {
                  // Fallback para uma imagem padrão ou placeholder
                  e.currentTarget.style.display = 'none';
                }}
              />
            </ServiceImageContainer>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.shortDescription}</ServiceDescription>
              <ServicePrice>{service.price}</ServicePrice>
              <ServiceButton>
                Saiba mais
              </ServiceButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services