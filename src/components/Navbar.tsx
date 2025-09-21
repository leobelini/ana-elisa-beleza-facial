import * as React from "react"
import styled from "styled-components"
import { colors } from "../styles/theme"
import { Menu, X } from "lucide-react"

// Styled Components para Navbar
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(250, 248, 246, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 15px 0;
  border-bottom: 1px solid rgba(200, 169, 104, 0.2);
  transition: all 0.3s ease;
  
  &.scrolled {
    background: rgba(250, 248, 246, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${colors.goldMain};
  text-decoration: none;
  letter-spacing: 1px;
  
  &:hover {
    color: ${colors.goldDark};
  }
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  position: relative;
`

const NavLink = styled.a`
  color: ${colors.blackMain};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${colors.goldMain};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.goldMain};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.goldMain};
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(250, 248, 246, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(200, 169, 104, 0.2);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`

const MobileMenuList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const MobileNavLink = styled.a`
  color: ${colors.blackMain};
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid rgba(200, 169, 104, 0.1);
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.goldMain};
  }
`

// Interfaces
interface NavbarProps {
  className?: string
}

interface MenuItem {
  label: string
  href: string
}

// Componente Navbar
const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Menu items
  const menuItems: MenuItem[] = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#agendamento" }
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <NavbarContainer className={`${className || ''} ${isScrolled ? 'scrolled' : ''}`}>
      <NavContainer>
        <NavLogo href="#home">Ana Elisa</NavLogo>
        <NavMenu>
          {menuItems.map((item) => (
            <NavItem key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavItem>
          ))}
        </NavMenu>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuList>
          {menuItems.map((item) => (
            <li key={item.href}>
              <MobileNavLink href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </MobileNavLink>
            </li>
          ))}
        </MobileMenuList>
      </MobileMenu>
    </NavbarContainer>
  )
}

export default Navbar