'use client'

import Cards from "@/components/Cards";
import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import NavMenu from "@/components/NavMenu";
import PartnersView from "@/components/PartnersView";
import { Divider, Flex, Text } from "@chakra-ui/react";
import Image from 'next/image'


export default function Home() {
  return (
    <Flex flexDir='column' px='10'  justify='center' width='80%'>
     {/* <Image
      src={banner}
      alt='Dan Abramov'
      width={1400}
      height={800}
      style={{
        position: 'absolute',
        zIndex:-1,
        left:0,
        right:0,
      }}
     
    /> */}
     <NavMenu />
    
      <Form />
     <Divider />
     <Text fontSize='4xl' alignSelf='center' my='10' fontWeight='bold'>A PARCERIA QUE SEU ESTABELECIMENTO PRECISA</Text>
      <Cards />
      
      <PartnersView />

      <Dropdown title='Pergunta?'>
        Resposta
      </Dropdown>
      <Dropdown title='Pergunta?'>
        Resposta
      </Dropdown>
      <Dropdown title='Pergunta?'>
        Resposta
      </Dropdown>
    </Flex>
  );
}
