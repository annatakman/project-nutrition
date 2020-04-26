import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {

  const scanned = useSelector((state) => state.products.product)
  console.log('SCAN', scanned.product)

  if (!scanned) return null

  return (
    <>
      {scanned.product && scanned.status == 1 && (
        <div>

          <h1>This is cheese {scanned.product.nutriscore_data.is_cheese}</h1>
          <h2>{scanned.product.product_name}</h2>
          <h2>Brand: {scanned.product.brands}</h2>
          <img src={scanned.product.image_url} />
        </div>
      )}
      {scanned.status === 0 && <h1 className="not-found">{scanned.status_verbose}</h1>}
    </>
  )
}

