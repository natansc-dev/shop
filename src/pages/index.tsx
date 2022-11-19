import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home";
import shirt01Img from '../assets/shirts/shirt01.svg'
import shirt02Img from '../assets/shirts/shirt02.svg'
import shirt03Img from '../assets/shirts/shirt03.svg'
import shirt04Img from '../assets/shirts/shirt04.svg'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt01Img} width={520} height={480} alt={""} />

        <footer>
          <strong>
            Camiseta X
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt02Img} width={520} height={480} alt={""} />

        <footer>
          <strong>
            Camiseta Y
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt03Img} width={520} height={480} alt={""} />

        <footer>
          <strong>
            Camiseta Z
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt04Img} width={520} height={480} alt={""} />

        <footer>
          <strong>
            Camiseta W
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
