import { LinkObject } from '../../vite-env'
import { Carousel, Image} from 'react-bootstrap'

type Props = {
    imgs: LinkObject[]
}

const ImgCarousel = ({imgs}: Props) => {
  return (
    <Carousel className="text-center" style={{ minHeight: "30vh", maxHeight: "30vh" }}>
        {imgs.map((img)=>(
            <Carousel.Item className='h-25' key={img._id}>
            <Image src={img.url} style={{ maxHeight: "30vh" }} thumbnail />
            </Carousel.Item>
        ))}
          
      </Carousel>
  )
}

export default ImgCarousel