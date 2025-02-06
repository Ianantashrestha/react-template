import { FC, ReactNode } from 'react'
import { StyleSvgWrapper } from './style'
import icons from '@assets'
interface SvgProps {
  size?: number
  svg: keyof typeof icons
}
const Svg: FC<SvgProps> = ({ svg, ...restProps }) => {
  return (
    <StyleSvgWrapper
      dangerouslySetInnerHTML={{ __html: icons[svg] }}
      {...restProps}
    />
  )
}

export default Svg
