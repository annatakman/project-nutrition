import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import { BarcodeScanner } from 'components/BarcodeScanner'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const handleScan = (code) => {
    // console.log('Got barcode', code)
    setShowScanner(false)
    dispatch(fetchProduct(code))
  }

  return (
    <>
      {!showScanner && (
        <button type='button' onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={handleScan} />
      )}
    </>
  )
}