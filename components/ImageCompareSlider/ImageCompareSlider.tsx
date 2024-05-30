import { forwardRef, Ref } from 'react'
import clsx from 'clsx'
import { ReactCompareSlider, ReactCompareSliderImage, UseReactCompareSliderRefReturn } from 'react-compare-slider'

type ImageWithDimensions = {
  url: string;
  dimensions: {
    width: number;
    height: number;
  }
}

type Props = {
  image1?: ImageWithDimensions;
  image2?: ImageWithDimensions;
  className?: string;
}

export const ImageCompareSlider = forwardRef((
  { 
    image1 = { url: "https://placehold.co/600x400", dimensions: { width: 600, height: 600 } }, 
    image2 = { url: "https://placehold.co/600x400", dimensions: { width: 600, height: 600 } }, 
    className, 
  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div className={clsx("", className)} ref={ref}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={image1?.url} />}
        itemTwo={<ReactCompareSliderImage src={image2?.url} />}
      />
    </div>
  )
})

export default ImageCompareSlider