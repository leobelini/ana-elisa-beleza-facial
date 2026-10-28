import { styled, css } from 'styled-components';
import { colors, fonts } from '../../styles/theme';

// Títulos principais
export const H1 = styled.h1`
  font-family: ${fonts.display};
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400;
  color: ${colors.blackMain};
  letter-spacing: -0.01em;
  margin-bottom: 24px;
  line-height: 0.98;
`;

export const H2 = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 400;
  color: ${colors.blackMain};
  margin-bottom: 20px;
  line-height: 1.05;
`;

export const H3 = styled.h3`
  font-family: ${fonts.display};
  font-size: 1.9rem;
  font-weight: 400;
  color: ${colors.blackMain};
  margin-bottom: 16px;
  line-height: 1.15;
`;

// Parágrafos
export const P = styled.p`
  font-size: 1.05rem;
  color: ${colors.graySecondary};
  line-height: 1.75;
  margin-bottom: 18px;
  max-width: 62ch;
`;

// Texto pequeno
export const Small = styled.small`
  font-size: 0.95rem;
  color: ${colors.graySecondary};
`;

// Destaque dourado
export const Span = styled.span`
  color: ${colors.goldMain};
  font-weight: 600;
`;

// Utilitário para texto customizado
export const CustomSpan = styled.span<{
  size?: string;
  color?: string;
  weight?: string | number;
  align?: string;
}>`
  ${({ size, color, weight, align }) => css`
    font-size: ${size || '1rem'};
    color: ${color || colors.blackMain};
    font-weight: ${weight || 400};
    text-align: ${align || 'left'};
  `}
`;
