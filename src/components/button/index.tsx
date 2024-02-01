import React from 'react'

import './styles.scss'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: any,
  variant?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'cyberpunk',
  className
}) => {
  return (
    <button
      className={`app-button app-button--${variant} ${enu}`}
      onClick={onClick} >
      {children}
    </button>
  )
}