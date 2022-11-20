import Link from "next/link";
import { SuccessContainer, ImageContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Sucesso!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}