import { FC } from 'react'
import { StyleSkeleton } from './style'
interface SkeletonProps {
  styleSkeleton?: string
  width?: number | string
  height?: number | string
  radius?: number | string
}
const Skeleton: FC<SkeletonProps> = (props) => {
  return <StyleSkeleton {...props} />
}

export default Skeleton
