import * as React from 'react';
import styled from 'styled-components';
import { colors, commonStyles } from '../../styles/theme';

interface SectionWrapperProps {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = styled.section<{ variant: 'light' | 'dark' }>`
  ${({ variant }) => (variant === 'light' ? commonStyles.sectionLight : commonStyles.sectionDark)}
  position: relative;

  /* Sombra sutil para destacar a seção */
  ${({ variant }) =>
    variant === 'dark' &&
    `
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.02);
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${colors.divider} 20%,
      ${colors.divider} 80%,
      transparent 100%
    );
  }

  /* Efeito de transição suave */
  transition: all 0.3s ease;
`;

const ContentContainer = styled.div`
  ${commonStyles.sectionContainer}
`;

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  variant = 'light',
  children,
  className,
}) => {
  return (
    <SectionContainer variant={variant} className={className}>
      <ContentContainer>{children}</ContentContainer>
    </SectionContainer>
  );
};
