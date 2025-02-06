import styled from '@emotion/styled'
export const StyleSvgWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  svg {
    width: ${(props) => props.size || 20}px;
    height: ${(props) => props.size || 20}px;
  }
`
