import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Cards() {
  return (
    <SimpleGrid display='flex' justifyContent='center' spacing={4} mb='12' templateColumns='repeat(auto-fill, minmax(200px, 1fr))' alignItems='center' >
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text textAlign='center'fontWeight='bold'>AUMENTE O FLUXO DE CLIENTES.</Text>
      </CardBody>
    </Card>
    <Card mt='10' ml='4'align='center' justify='center'maxWidth={200} cursor='pointer' _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody  >
        <Text textAlign='center'fontWeight='bold'>FAÇA PARTE DO MAIOR CLUBE.</Text>
      </CardBody>
    </Card>
    <Card mt='10' ml='4' align='center' justify='center' maxWidth={200} cursor='pointer' textAlign='center'fontWeight='bold' _hover={{
      bgColor:'#48BB78',
      color: 'white',
     
    }}>
      <CardBody>
        <Text>QUERO SER PARCEIRO</Text>
      </CardBody>
    </Card>
    <Card mt='10' ml='4' align='center' maxWidth={200} justify='center' cursor='pointer' _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
      <CardBody>
        <Text textAlign='center'fontWeight='bold'>DIVULGUE SEU ESTABELECIMENTO.</Text>
      </CardBody>
    </Card>
    </SimpleGrid>
  )
}


