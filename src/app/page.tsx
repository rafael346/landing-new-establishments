'use client'

import Form from "@/components/Form";
import NavMenu from "@/components/NavMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <NavMenu />
      <Form />
    
    </main>
  );
}
