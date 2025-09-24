import styled from 'styled-components';
import { colors } from '../../styles/theme';

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
`;

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
`;

export const H3 = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${colors.goldMain};
  margin-bottom: 16px;
  line-height: 1.2;
`;

// Parágrafos
export const P = styled.p`
  font-size: 1.1rem;
  color: ${colors.graySecondary};
  line-height: 1.8;
  margin-bottom: 18px;
`;
