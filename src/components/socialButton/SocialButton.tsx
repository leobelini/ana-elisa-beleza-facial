import * as React from 'react'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    'target' | 'rel' | 'type'
  > {}

export const SocialButton = ({ children, className, ...props }: Props) => {
  return (
    <a
      target="_blank"
      type="button"
      rel="noopener noreferrer"
      className={`${className} transition duration-700 ease-in-out p-4 text-lg rounded-3xl w-full md:w-96 my-3`}
      {...props}
    >
      {children}
    </a>
  )
}
