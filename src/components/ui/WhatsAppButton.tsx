import styled from "styled-components"
import { colors } from "../../styles/theme"


export const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: white;
  color: ${colors.goldMain};
  padding: 18px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  gap: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`
