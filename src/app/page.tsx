'use client'

import Cards from "@/components/Cards";
import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import NavMenu from "@/components/NavMenu";
import PartnersView from "@/components/PartnersView";
import { Divider, Flex, Spacer, Text } from "@chakra-ui/react";
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
     <Text fontSize='4xl' alignSelf='center' mt='10' mb='4' fontWeight='bold'>A PARCERIA QUE SEU ESTABELECIMENTO PRECISA</Text>
     <Text fontSize='md' textAlign='center' mb='10'>Com associados espalhados em diferentes regiões, isso formenta o aumento do fluxo de clientes nos estabelecimentos parceiros. Quanto mais atrativo o desconto, maiores serão as chances do estabelecimento se destacar perante a concorrência e aumentar seu ticket médio de venda. A divulgação da empresatambém auxilia no conhecimento das marcas com seu público de interesse.</Text>
      <Cards />
      <Text fontSize='3xl' alignSelf='center' mt='10' mb='4' fontWeight='bold'>PARCEIROS</Text>
      <Text fontSize='md' textAlign='center' mb='8'>Veja alguns de nossos parceiros</Text>
     
      <PartnersView />
      
      <Dropdown title='Pra quem?'>
        Resposta
      </Dropdown>
      <Dropdown title='Como funciona?'>
        Resposta
      </Dropdown>
      <Dropdown title='Como beneficia seu estabelecimento?'>
        Resposta
      </Dropdown>
      <Divider />
     <Flex height='20'/>
   
    </Flex>
  );
}
