/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { Input } from './Input'
import { Box, Button, Flex, Img, Stack, Text, Image } from '@chakra-ui/react'



import banner from '../../../public/next.svg'




export default function Form() {

  

  

  return (
    <Flex align='center' flexDir='column' justify='center'>
      <Text fontSize={['medium','large','x-large']} textAlign='center' cursor='pointer' mb={['5','10']} color='white' >Cadastre-se e saiba como proporcionar experiências incríveis.</Text>
      <Flex
        width='90%'
        flexDir={['column','row']}
        borderRadius={8}
      >
        <Flex flexDir={['column']} maxWidth={['100%','50%']} align='center' mr={['0','5']}>
          <Text fontSize={['large','x-large']} textAlign='center' cursor='pointer'  mb={['5','10']} color='black' fontWeight='bold' >AUMENTE O FLUXO DE CLIENTES EM SEU ESTABELECIMENTO.</Text>
          <Text fontSize={['small','large']} color='black' textAlign={['center','justify']}  mb={['5','10']} width={['80%']}>Disponibilize descontos exclusivos e ganhe um maior fluxo de pessoas em seu estabelecimento, gerando economia e uma experiencia fantastica aos nossos associados.</Text>
        </Flex>
        

        {/* */}
      </Flex>
      
    </Flex>
  )
}
