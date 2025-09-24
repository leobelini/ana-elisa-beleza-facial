import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/theme';
import { Link, GatsbyLinkProps } from 'gatsby';

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
} & Omit<GatsbyLinkProps<any>, 'to'>;

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
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 25px;
  padding: 12px 28px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
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
    background: ${colors.goldMain};
    color: white;
    border: 2px solid ${colors.goldMain};
    &:hover {
      background: ${colors.goldDark};
      border-color: ${colors.goldDark};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${colors.goldMain};
    border: 2px solid ${colors.goldMain};
    &:hover {
      background: ${colors.goldMain};
      color: white;
    }
  `,
  outline: css`
    background: transparent;
    color: ${colors.blackMain};
    border: 2px solid ${colors.goldMain};
    &:hover {
      background: ${colors.iceWhite};
      color: ${colors.goldMain};
    }
  `,
  whatsapp: css`
    background: #25d366;
    color: white;
    border: 2px solid #25d366;
    &:hover {
      background: #1ebe5d;
      border-color: #1ebe5d;
    }
  `,
};

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  ${buttonBase}
  ${({ $variant }) => variantStyles[$variant]}
`;

const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`
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
    // Gatsby Link: repassar apenas props aceitos
    const { to, className } = rest as ButtonAsLink;
    return (
      <StyledLink to={to} $variant={variant} className={className}>
        {children}
      </StyledLink>
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
