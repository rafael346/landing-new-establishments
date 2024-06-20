'use-client'
import { Box, Card, CardBody, SimpleGrid, Text, Image } from '@chakra-ui/react';
import React from 'react'

export default function PartnersView() {
 

  return (
    <SimpleGrid display='flex' flexDir={['column', 'row']} justifyContent='center' spacing={4} mb='20' templateColumns='repeat(auto-fill, minmax(200px, 1fr))' alignItems='center'>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} maxHeight={150} >
        <Image src='https://r2.cashtech.company/stores%2F02ejcHyfYenZeunK3jpI.png' borderRadius={8} objectFit='contain'  alt='amaz' />
     </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} maxHeight={150}   >
        <Image src='https://r2.cashtech.company/stores%2F0SNTBEPTuTm4Sd9nSnGU.png' width={200} borderRadius={8} objectFit='contain'  alt='shope' />
    </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} >
       <Image src='https://r2.cashtech.company/stores%2F0Zo5GaFa55dJmL82QcNF.png'  borderRadius={8} objectFit='contain'  alt='shope' />
    </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} >
    <Image src='https://r2.cashtech.company/stores%2F1RO2D0XCXqzVrKjVnJuz.png'  borderRadius={8} objectFit='contain'  alt='shope' />
    </Card>
    </SimpleGrid>
    

    
    
  )
}
