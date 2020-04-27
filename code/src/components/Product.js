import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const Product = ({ className }) => {

  const scanned = useSelector((state) => state.products.product)

  if (!scanned) return null

  return (
    <>
      {scanned.product && scanned.status === 1 && (
        <ProductInfo className={className}>
          <div>
            {scanned.product.nutriscore_data.is_cheese === 0 ? <h2>It's not cheese 😞</h2> : <h2>It's cheese! 🧀</h2>}
            <h3>{scanned.product.product_name}</h3>
            <h4>Brand: {scanned.product.brands}</h4>
          </div>
          {scanned.product.image_url && <ProductImage src={scanned.product.image_url} alt={scanned.product.product_name} />}
        </ProductInfo>
      )}
      {scanned.status === 0 && <h2>{scanned.status_verbose}</h2>}
    </>
  )
}

const ProductInfo = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2 {
margin-top: 0;
font-size: 22px;
}

h3 {
font-size: 18px;
}

h4{
font-size: 18px;
}
  }
`
const ProductImage = styled.img`
  height: 70%;
  border: 3px solid #000;
  border-radius: 12px;
`

