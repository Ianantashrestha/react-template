import { FC, ReactNode } from 'react'
import { StyleButton, StyleButtonWrapper } from './style'
import theme from '@utils/theme'
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  title: string
  width?: number
  height?: number
  bg?: keyof typeof theme.colors
  tc?: keyof typeof theme.colors
  radius?: number
  styleButton?: string
  leftComponent?: ReactNode
  rightComponent?: ReactNode
}
const Button: FC<ButtonProps> = ({
  type = 'button',
  title,
  leftComponent,
  rightComponent,
  ...restProps
}) => {
  return (
    <StyleButtonWrapper>
      <StyleButton type={type} {...restProps}>
        {leftComponent && leftComponent}
        {title}
        {rightComponent && rightComponent}
      </StyleButton>
    </StyleButtonWrapper>
  )
}

export default Button
