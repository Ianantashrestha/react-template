import styled from '@emotion/styled'
export const StyleSkeleton = styled.div<any>`
  width: ${({ width }: any) =>
    typeof width === 'string'
      ? width
      : typeof width === 'number'
        ? `${width}px`
        : '100%'};
  height: ${({ height }: any) =>
    typeof height === 'string'
      ? height
      : typeof height === 'number'
        ? `${height}px`
        : 'auto'};
  background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
  background-size: 350px;
  animation: animation 2.5s infinite;
  border-radius: ${({ radius }: any) =>
    typeof radius === 'string'
      ? radius
      : typeof radius === 'number'
        ? `${radius}px`
        : 'auto'};
  ${(props) => props.styleSkeleton}
  @keyframes animation {
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 270px;
    }
  }
`
