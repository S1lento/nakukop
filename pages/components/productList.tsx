import React from 'react';
import { useStoreon } from 'storeon/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
  Flex,
  Button,
  Text
} from "@chakra-ui/react"

export const ProductsList = ({ data }) => {
  const { dispatch, addToCart } = useStoreon<any, any>("cart")
  return <Box>
    {Array.isArray(data) &&
      data.length > 0 &&
      data.map(accordionItem => {
        return <Accordion
          allowMultiple
          key={accordionItem.id}
        >
          <AccordionItem isDisabled={accordionItem.isDisabled}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {`${accordionItem.name} ${accordionItem.products.length}`}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderedList>
                {accordionItem.products.map(product => {
                  return <ListItem key={product.id}>
                    <Flex justifyContent='space-between' style={{ padding: 10, width: '100%' }}>
                      <Text>{product.name}</Text>
                      <Box>
                        <span style={{ marginRight: 20 }}>{`${product.price} р /шт`}</span>
                        <Button onClick={() => dispatch('add', product)}>Добавить в корзину</Button>
                      </Box>
                    </Flex>
                  </ListItem>
                })}
              </OrderedList>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      })}
  </Box>
};