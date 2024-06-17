'use client'

import Cards from "@/components/Cards";
import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import NavMenu from "@/components/NavMenu";
import PartnersView from "@/components/PartnersView";
import { Divider } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <NavMenu />
    
      <Form />
     
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
    </main>
  );
}
