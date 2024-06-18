'use client'

import React, { ReactNode } from 'react'
import styles from './styles.module.scss';
import { Flex, Text } from '@chakra-ui/react';

export default function NavMenu() {
  return (
    <Flex my='12' justifyContent='right'>
      <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold' color='white'justifySelf='right' mr='80' >LOGO CLIENTE</Text>
    </a>
    <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold' color='white' >SOBRE</Text>
    </a>
    <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold' color='white'>DUVIDAS</Text>
    </a>
    <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold' color='white'>PARCEIROS</Text>
    </a>
    </Flex>
  )
}
