import { createSlice } from '@reduxjs/toolkit'

export const food = createSlice({
  name: 'food',
  initialState: {
    all: {}
  },
  reducers: {
    setProductInformation: (state, action) => {
      state.all = action.payload
    }
  }
})

export const fetchProduct = (code) => {
  return (dispatch) => {
    console.log(`Code: ${code}`)
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(food.actions.setProductInformation(json))
        console.log('setProductInformation' + food.action.setProductInformation)
      })
  }
}