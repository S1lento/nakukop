import React from 'react';
import {
  SimpleGrid,
  Text,
} from "@chakra-ui/react"

export const CartHeader = () => {
  return <SimpleGrid style={{ paddingBottom: 10 }} gridAutoColumns="min-content" columns={4} spacing="40px">
    <Text>Наименование товара и описание</Text>
    <Text>Количество</Text>
    <Text>Цена</Text>
  </SimpleGrid>
};