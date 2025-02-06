import { ReactNode, FC } from 'react'
import { StyleContainer } from './style'

interface ContainerProps {
  children: ReactNode
  contentWidth?: number
}

const Container: FC<ContainerProps> = ({ children, contentWidth = 95 }) => {
  return <StyleContainer contentWidth={contentWidth}>{children}</StyleContainer>
}

export default Container
