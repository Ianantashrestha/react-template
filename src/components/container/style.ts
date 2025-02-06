import styled from '@emotion/styled'
interface StyleContainerProps {
  contentWidth: number
}

export const StyleContainer = styled.div<StyleContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.contentWidth}%;
  margin: 0 auto;
`
