import { FC } from 'react'
import { StyleErrorMessage } from './style'
interface ErrorMessageProps {
  message: string
}
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <StyleErrorMessage>{message}</StyleErrorMessage>
}

export default ErrorMessage
