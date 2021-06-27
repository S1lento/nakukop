import { ChakraProvider } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from 'react'
import { useStoreon } from 'storeon/react'
import axios from "axios"

import { store } from "./store/store"
import { ProductsList } from './components/productList'
import { CartComponent } from './components/cart'
interface State {
  counter: number
}

export default function Home() {
  const { dispatch, data } = useStoreon<any, any>("data")

  const dispatchingData = () => {
    dispatch('fetch');
  }

  useEffect(() => {
    const i = setInterval(dispatchingData, 1000)
    return () => {
      clearInterval(i);
    }
  })

  return (
    <div >
      <ProductsList data={data} />
      <CartComponent data={null} />
    </div>
  )
}
