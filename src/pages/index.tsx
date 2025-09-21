import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import { colors } from "../styles/theme"
import {
  Navbar,
  Hero,
  About,
  Services,
  Testimonials,
  Contact,
  Footer,
  type Service
} from "../components"

// Container principal
const Container = styled.div`
  background-color: ${colors.iceWhite};
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${colors.blackMain};
  line-height: 1.6;
`

// Componente principal da página
const IndexPage: React.FC<PageProps> = () => {
  // Handler para cliques nos serviços
  const handleServiceClick = (service: Service) => {
    console.log('Serviço clicado:', service.title)
    // Aqui você pode adicionar lógica como abrir um modal, redirecionar, etc.
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Navbar de navegação */}
        <Navbar />

        {/* Seção Hero/Banner */}
        <Hero />

        {/* Seção Sobre */}
        <About />

        {/* Seção Serviços */}
        <Services onServiceClick={handleServiceClick} />

        {/* Seção Depoimentos */}
        <Testimonials />

        {/* Seção Contato/Agendamento */}
        <Contact />

        {/* Rodapé */}
        <Footer />
      </Container>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Ana Elisa Beleza Facial - Estética e Cuidados Faciais</title>
    <meta name="description" content="Beleza e cuidado que realçam sua essência. Especializada em limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial e dermaplaning." />
    <meta name="keywords" content="estética facial, limpeza de pele, design de sobrancelhas, extensão de cílios, peeling facial, dermaplaning, beleza" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)