import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
  Flex
} from "@chakra-ui/react"

export const ProductsList = ({ data }) => {
  return Array.isArray(data) &&
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
                if (!product) return;
                return <ListItem key={product.id}>
                  <Flex justifyContent='space-between' style={{ padding: 10, borderBottom: '1px solid black', width: '100%' }}>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                  </Flex>

                </ListItem>
              })}
            </OrderedList>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    })
};