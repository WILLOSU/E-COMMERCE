"use client"

import { DefaultPageLayout } from '@/components/default-page-layout'
import { FilterBar } from '@/components/filter-bar'
import { Frame30Component } from '@/components/home/Frame30'
import { Frame31Component } from '@/components/home/Frame31'
import { Header } from '@/components/home/InputText'
import { ProductsList } from '@/components/products-list'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export default function List() {

  return (
    <DefaultPageLayout>
      <PageWrapper>
        <Frame30Component />
        <Frame31Component />
        <Header />
        <FilterBar/>
        <ProductsList/>
      </PageWrapper>
    </DefaultPageLayout>
  )
}
