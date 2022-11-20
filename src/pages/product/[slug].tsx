import Image from "next/image";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string,
    name: string,
    image_url: string,
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <h1>Loading...</h1>
    )
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com um ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert("Falha ao redirecionar ao checkout!")
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.image_url} alt={""} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button
          onClick={() => handleBuyProduct()}
          disabled={isCreatingCheckoutSession}
        >
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {

  const productId = params ? params.slug : ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        image_url: product.images[0],
        price: price.unit_amount ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100) : null,
        description: product.description,
        defaultPriceId: price.id
      }
    }
  }
}