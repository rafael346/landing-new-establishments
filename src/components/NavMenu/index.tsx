'use client'

import React, { ReactNode } from 'react'
import styles from './styles.module.scss';
import { Flex, Text } from '@chakra-ui/react';

export default function NavMenu() {
  return (
    <Flex my={[6,12]} justifyContent={['center']}color='black' fontSize={['small', 'medium','large','x-large']} fontWeight='bold'>
      <a>
      <Text mx={[2, 10]} cursor='pointer' justifySelf='right' >LOGO</Text>
    </a>
    <a>
      <Text mx={[2, 10]}cursor='pointer'  >SOBRE</Text>
    </a>
    <a>
      <Text mx={[2, 10]}cursor='pointer' >DUVIDAS</Text>
    </a>
    <a>
      <Text mx={[2, 10]}cursor='pointer' >PARCEIROS</Text>
    </a>
    </Flex>
  )
}
