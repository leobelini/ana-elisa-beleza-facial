import styled, { css } from "styled-components"
import { colors } from "../../styles/theme"

// Títulos principais
export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.goldMain};
  letter-spacing: 1.5px;
  margin-bottom: 24px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.blackMain};
  letter-spacing: 1px;
  margin-bottom: 20px;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const H3 = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${colors.goldMain};
  margin-bottom: 16px;
  line-height: 1.2;
`

// Parágrafos
export const P = styled.p`
  font-size: 1.1rem;
  color: ${colors.graySecondary};
  line-height: 1.8;
  margin-bottom: 18px;
`

// Texto pequeno
export const Small = styled.small`
  font-size: 0.95rem;
  color: ${colors.graySecondary};
`

// Destaque dourado
export const Span = styled.span`
  color: ${colors.goldMain};
  font-weight: 600;
`

// Utilitário para texto customizado
export const CustomSpan = styled.span<{
  size?: string
  color?: string
  weight?: string | number
  align?: string
}>`
  ${({ size, color, weight, align }) => css`
    font-size: ${size || "1rem"};
    color: ${color || colors.blackMain};
    font-weight: ${weight || 400};
    text-align: ${align || "left"};
  `}
`
