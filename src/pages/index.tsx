import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import shirt01Img from '../assets/shirts/shirt01.svg'
import shirt02Img from '../assets/shirts/shirt02.svg'
import shirt03Img from '../assets/shirts/shirt03.svg'
import shirt04Img from '../assets/shirts/shirt04.svg'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt01Img} width={520} height={480} alt={""} />

        <footer>
          <strong>
            Camiseta X
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt02Img} width={520} height={480} alt={""} />

        <footer>
          <strong>
            Camiseta Y
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
