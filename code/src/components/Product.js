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
          <h1>This is your product</h1>
          <h2>{scanned}</h2>
        </div>
      )}
      {scanned.status === 0 && <h1 className="not-found">{scanned.status_verbose}</h1>}
    </>
  )
}

