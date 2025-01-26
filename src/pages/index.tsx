"use client"

import { FilterBar } from "@/components/Filter/FilterBar"
import { ProductsList } from "@/components/Products/ProductList"
import styled from "styled-components"
import Layout from "@/components/layout/Layout"

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <Layout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </Layout>
  )
}

