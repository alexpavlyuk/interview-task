'use client'

import Link from 'next/link'
import { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonColor = 'blue' | 'green' | 'yellow' | 'red' | 'gray'

const colorVariants: Record<ButtonColor, string> = {
  blue: "bg-blue-500 text-white hover:bg-blue-600",
  green: "bg-green-500 text-white hover:bg-green-600", 
  yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
  red: "bg-red-500 text-white hover:bg-red-600",
  gray: "bg-gray-300 text-gray-800 hover:bg-gray-400",
}

const disabledStyles = "opacity-50 cursor-not-allowed hover:bg-current"

const baseStyles = "inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-sm"

const hoverAndFocusStyles = " transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-gray-500";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: ButtonColor
  href?: never
}

interface LinkProps {
  children: ReactNode
  color?: ButtonColor
  href: string
  disabled?: boolean
  onClick?: never
  type?: never
}

// Union type for AppButton props
type AppButtonProps = ButtonProps | LinkProps

export default function AppButton(props: AppButtonProps) {
  const { children, color = 'blue', disabled = false, ...otherProps } = props

  // Build CSS classes
  const colorClass = colorVariants[color]
  const disabledClass = disabled ? disabledStyles : hoverAndFocusStyles
  const className = `${baseStyles} ${colorClass} ${disabledClass}`.trim()

  if ('href' in props && props.href) {
    return (
      <Link 
        href={props.href}
        className={className}
        {...(disabled && { 
          onClick: (e) => e.preventDefault(),
          tabIndex: -1,
          'aria-disabled': true 
        })}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={className}
      disabled={disabled}
      {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
