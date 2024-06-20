'use-client'
import { Box, Card, CardBody, SimpleGrid, Text, Image } from '@chakra-ui/react';
import React from 'react'

export default function PartnersView() {
 

  return (
    <SimpleGrid display='flex' flexDir={['column', 'row']} justifyContent='center' spacing={4} mb='20' templateColumns='repeat(auto-fill, minmax(200px, 1fr))' alignItems='center'>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} maxHeight={150} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
        <Image src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png' borderRadius={8} objectFit='contain'  alt='amaz' />
     </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} maxHeight={150} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}  >
        <Image src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepagefe/26c9324913c021677768c36975d635ef.png' width={200} borderRadius={8} objectFit='contain'  alt='shope' />
    </Card>
    <Card mt='10' align='center' justify='center' cursor='pointer' maxWidth={200} height={150} _hover={{
      bgColor:'#48BB78',
      color: 'white'
    }}>
       <Image src='https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/57/e5/60/57e560e5-f9d9-9f0c-6010-07d70860ff6e/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'  borderRadius={8} objectFit='contain'  alt='shope' />
     
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
