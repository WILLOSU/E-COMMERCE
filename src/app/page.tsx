"use client"

//import Image from 'next/image'
import styles from './page.module.css'
import { FilterBar } from '@/components/filter-bar'
import { ProductsList } from '@/components/products-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Frame30Component, Frame31Component, List } from '@/components/home/Home'

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>

      <Frame30Component />
      <Frame31Component />
      <List />
      <FilterBar />
      <ProductsList/> 


        <FilterBar/>
        <ProductsList/>
      </main>
    </QueryClientProvider>
  )
}