import { Box } from "@chakra-ui/react"
import { useEffect } from 'react'
import { useStoreon } from 'storeon/react'

import { ProductsList } from './components/productList'
import { CartComponent } from './components/cart/cart'

export default function Home() {
  const { dispatch, data } = useStoreon<any, any>("data")
  const { dispatch: dispatchCurrency, currency } = useStoreon<any, any>("currency")
  const dispatchingData = () => {
    dispatch('fetch');
  }

  useEffect(() => {
    const i = setInterval(dispatchingData, 15000)
    return () => {
      clearInterval(i);
    }
  })

  return (
    <Box >
      <ProductsList data={data} />
      <CartComponent data={data} />
    </Box>
  )
}
