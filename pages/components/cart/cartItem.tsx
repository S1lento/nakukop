import React from 'react';

import {
  Box,
  SimpleGrid,
  Input,
  Text,
  Flex,
  Button
} from "@chakra-ui/react"

export const CartItem = ({ title, amount, price }) => {
  return <SimpleGrid style={{ paddingTop: 10, borderTop: '1px solid #ddd' }} columns={4} spacing="40px">
    <Box>{title}</Box>
    <Box>
      <Box>
        <Flex alignItems="center" >
          <Input style={{ marginBottom: 10 }} width={100} />
          <Text style={{ color: '#888', fontSize: 16, paddingBottom: 10, paddingLeft: 10 }}>/шт</Text>
        </Flex>

        <Box style={{ border: '1px dotted orange', width: 'fit-content', padding: 5 }}>
          <Text style={{ lineHeight: 3 }} whiteSpace={'nowrap'}>Количество ограничено</Text>
        </Box>
      </Box>
    </Box>
    <Box>
      <Text>{price}</Text>
    </Box>
    <Box>
      <Button>Удалить</Button>
    </Box>
  </SimpleGrid>
};