"use client";

// Layout padrão

/* diretiva use client, importante para por padrão renderiza do lado servidor.
   o style components, utiliza algumas funções que so pode ser usado do lado do cliente
   todo lugar que é criado componentes vamos ter que colocar o "use client" */ 

/* NEXT ofereçe as importações de fontes, 
   sem precisar de links externos*/

import { Search } from '@/components/search';
import'./globals.css'
import { DM_Sans } from "next/font/google";


const dmSans = DM_Sans({
  weight: ['300'], // pesos das forntes importadas
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Search/>
        {children}
      </body>
     
    </html>
  )
}      