import styled from '@emotion/styled'

export const StyleFormWrapper = styled.div<any>`
  ${(props) => props.styleWrapper}
`
export const StyleErrorMessage = styled.p<any>`
  font-size: 12px;
  color: ${(props) => props.theme.colors.danger};
`
export const StyleLabel = styled.label<any>`
  ${(props) => props.styleLabel}
`
export const StyleInput = styled.input<any>`
  &::placeholder {
    font-size: 12px;
  }
  ${(props) => props.styleInput}
`

export const StyleTextArea = styled.textarea<any>`
  &::placeholder {
    font-size: 12px;
  }
  ${(props) => props.styleInput}
`

export const StyleDropDownWrapper = styled.div`
  border: 1px solid #333;
`
