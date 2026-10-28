import React from 'react';
import { styled, css } from 'styled-components';
import { colors } from '../../styles/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp';

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asLink?: false;
    to?: never;
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps & {
  asLink: true;
  to: string;
  href?: never;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonAsA = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    asLink?: false;
    to?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsA;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 999px;
  padding: 14px 32px;
  border: none;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
  text-decoration: none;
  outline: none;
  min-width: 120px;
  min-height: 44px;
  user-select: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const variantStyles = {
  primary: css`
    background: ${colors.cocoa};
    color: ${colors.iceWhite};
    border: 1px solid ${colors.cocoa};
    &:hover {
      background: ${colors.rose};
      border-color: ${colors.rose};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${colors.blackMain};
    border: 1px solid ${colors.blackMain};
    &:hover {
      background: ${colors.blackMain};
      color: ${colors.iceWhite};
    }
  `,
  outline: css`
    background: transparent;
    color: ${colors.blackMain};
    border: 1px solid ${colors.goldMain};
    &:hover {
      background: ${colors.goldMain};
      color: ${colors.iceWhite};
    }
  `,
  whatsapp: css`
    background: #17703d;
    color: white;
    border: 1px solid #17703d;
    &:hover {
      background: #115a30;
      border-color: #115a30;
    }
  `,
};

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  ${buttonBase}
  ${({ $variant }) => variantStyles[$variant]}
`;

const StyledA = styled.a<{ $variant: ButtonVariant }>`
  ${buttonBase}
  ${({ $variant }) => variantStyles[$variant]}
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', children, ...rest } = props;

  if ('asLink' in props && props.asLink && 'to' in props && props.to) {
    // Link interno: repassar apenas props aceitos
    const { to, className } = rest as ButtonAsLink;
    return (
      <StyledA href={to} $variant={variant} className={className}>
        {children}
      </StyledA>
    );
  }
  if ('href' in props && props.href) {
    // Anchor
    const { href, className, ...aProps } = rest as ButtonAsA;
    return (
      <StyledA href={href} $variant={variant} className={className} {...aProps}>
        {children}
      </StyledA>
    );
  }
  // Button
  const { className, ...buttonProps } = rest as ButtonAsButton;
  return (
    <StyledButton $variant={variant} className={className} {...buttonProps}>
      {children}
    </StyledButton>
  );
};
