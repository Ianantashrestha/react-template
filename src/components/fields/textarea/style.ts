import styled from '@emotion/styled'
export const StyleTextArea = styled.textarea<any>`
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  outline: none;
  &::placeholder {
    font-size: 12px;
    color: ${(props) => props.theme.colors.placeholder};
  }
  ${(props) => props.styleInput}
`
