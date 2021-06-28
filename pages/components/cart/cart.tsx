import React from 'react';
import { CartItem } from './cartItem'
import { CartHeader } from './cartHeader'
import {
  Box
} from "@chakra-ui/react"
import { useStoreon } from 'storeon/react'

export const CartComponent = ({ data }) => {
  const { addToCart } = useStoreon<any, any>("cart")
  console.log(addToCart, 'cart');

  return <Box style={{ padding: 20 }}>
    <CartHeader />
    <CartItem
      title={addToCart?.name}
      amount={addToCart?.amount}
      price={addToCart?.price}
    />
  </Box>

};