'use-client'
import { Card, CardBody, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

export default function PartnersView() {
 

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    <Card mt='10' ml='4' _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Card mt='10' ml='4' _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Card mt='10' ml='4' _hover={{
      bgColor:'#48BB78',
      color: 'white',
     
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Card mt='10' ml='4' _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    </SimpleGrid>
    

    
    
  )
}
