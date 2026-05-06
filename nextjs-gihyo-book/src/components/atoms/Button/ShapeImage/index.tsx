import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ShepeImageProps = ImageProps & { shape?: ImageShape}

//circleなら円形に
const ImageWithShape = Styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};`

/**
 * シェイプイメージ
 */
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...iamgeProps } = props

  return <ImageWithShape shape={shape} {...iamgeProps}  />
}

export default ShapeImage