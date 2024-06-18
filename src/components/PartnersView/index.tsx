'use-client'
import { Card, CardBody, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

export default function PartnersView() {
 

  return (
    <SimpleGrid display='flex' flexDir={['column', 'row']} justifyContent='center' spacing={4} mb='20' templateColumns='repeat(auto-fill, minmax(200px, 1fr))' alignItems='center'>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} _hover={{
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
