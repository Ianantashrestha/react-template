import styled from '@emotion/styled'

export const StyleInput = styled.input<any>`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  text-indent: 10px;
  padding: 0px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  outline: none;
  font-size: 14px;
  &::placeholder {
    font-size: 12px;
    color: ${(props) => props.theme.colors.placeholder};
    font-family: Poppins;
  }
  ${(props) => props.styleInput}
`
