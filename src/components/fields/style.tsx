import styled from '@emotion/styled'

export const StyleFormWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;
  .ql-editor {
    min-height: 200px;
  }
  ${(props) => props.styleWrapper}
`
export const StyleErrorMessage = styled.p<any>`
  font-size: 12px;
  color: ${(props) => props.theme.colors.danger};
`
export const StylePlaceholder = styled.p<any>`
  font-size: 12px;
  color: ${(props) => props.theme.colors.placeholder};
`

export const StyleLabel = styled.label<any>`
  ${(props) => props.styleLabel}
`
