import { LinkObject } from '../../vite-env'
import { Carousel} from 'react-bootstrap'
import Image from '../Image/Image'

type Props = {
    imgs: LinkObject[]
}

const ImgCarousel = ({imgs}: Props) => {
  return (
      <Carousel className='d-block h-30 w-30'>
        {imgs.map((img)=>(
            <Carousel.Item className='h-25' key={img._id}>
                <Image className='h-25' src={img.url} />
            </Carousel.Item>
        ))}
          
      </Carousel>
  )
}

export default ImgCarousel