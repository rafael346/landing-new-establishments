'use client'

import React, { ReactNode } from 'react'
import styles from './styles.module.scss';
import { Flex, Text } from '@chakra-ui/react';

export default function NavMenu() {
  return (
    <Flex my='12' justify='center'>
      <span>LOGO AQUI</span>
    <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold' >SOBRE</Text>
    </a>
    <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold'>DUVIDAS</Text>
    </a>
    <a>
      <Text fontSize='xl' mx='10' cursor='pointer' fontWeight='bold'>PARCEIROS</Text>
    </a>
    </Flex>
  )
}
