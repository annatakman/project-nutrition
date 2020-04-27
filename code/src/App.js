import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ScanBarcode } from "components/ScanBarcode"
import { Product } from 'components/Product'
import { products } from './reducers/products'
import styled from 'styled-components/macro'

const reducer = combineReducers({
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <h1>Is this Cheese?</h1>
        <ProductContainer />
        <ScanBarcode />
      </MainContainer>
    </Provider>
  )
}

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 90vh;
  background-color: #F9E586;
  border: 3px #000 solid;
  border-radius: 16px;

  h1{
    margin: 0;
    font-size: 30px;
  }

  @media (min-width: 700px){
    width: 600px;
  }

`
const ProductContainer = styled(Product)`
height: 60%;
`
