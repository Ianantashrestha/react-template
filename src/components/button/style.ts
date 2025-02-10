import styled from '@emotion/styled'
export const StyleButtonWrapper = styled.div<any>`
  display: flex;
`
export const StyleButton = styled.button<any>`
  border-radius: ${(props) => props.radius || 4}px;
  border: 0px;
  width: ${(props) => (props?.width ? `${props?.width}px` : 'auto')};
  height: ${(props) => (props?.height ? props?.height : 35)}px;
  background: ${(props) => props.theme.colors[props.bg || 'primary']};
  padding: 0px 30px;
  font-size: 14px;
  color: ${(props) => props.theme.colors[props?.tc || 'white']};
  ${(props) => props.styleButton};
`
