"use client"

import { DefaultPageLayout } from '@/components/default-page-layout'
import { FilterBar } from '@/components/filter-bar'
import { Frame30Component } from '@/components/home/Frame30'
import { ProductsList } from '@/components/products-list'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function list() {

  return (
    <DefaultPageLayout>
      <PageWrapper>
      <Frame30Component />
        <FilterBar/>
        <ProductsList/>
      </PageWrapper>
    </DefaultPageLayout>
  )
}
