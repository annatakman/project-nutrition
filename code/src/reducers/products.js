import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: {
    product: {}
  },
  reducers: {
    setProductInformation: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProduct = (code) => {
  return (dispatch) => {
    console.log(`Code: ${code}`)
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        dispatch(products.actions.setProductInformation(json))
      })
  }
}