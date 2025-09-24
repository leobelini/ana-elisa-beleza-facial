import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

const CardWrapper = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardContent = styled.div`
  padding: 0;
`;

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardComponent extends React.FC<CardProps> {
  Content: React.FC<{ children: React.ReactNode; className?: string }>;
}

export const Card: CardComponent = ({ children, className }) => {
  return <CardWrapper className={className}>{children}</CardWrapper>;
};

Card.Content = CardContent;
