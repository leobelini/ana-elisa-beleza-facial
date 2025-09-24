import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

interface SectionDividerProps {
  variant?: 'subtle' | 'decorative';
}

const DividerContainer = styled.div<{ variant: 'subtle' | 'decorative' }>`
  position: relative;
  padding: ${({ variant }) => (variant === 'decorative' ? '40px 0' : '20px 0')};
  background: ${({ variant }) => (variant === 'decorative' ? colors.iceWhite : 'transparent')};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ variant }) => (variant === 'decorative' ? '120px' : '60px')};
    height: ${({ variant }) => (variant === 'decorative' ? '3px' : '1px')};
    background: ${({ variant }) =>
      variant === 'decorative'
        ? `linear-gradient(90deg, transparent 0%, ${colors.goldMain} 50%, transparent 100%)`
        : colors.divider};
  }

  ${({ variant }) =>
    variant === 'decorative' &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: ${colors.goldMain};
      border-radius: 50%;
      border: 2px solid ${colors.softWhite};
    }
  `}
`;

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'subtle' }) => {
  return <DividerContainer variant={variant} />;
};
