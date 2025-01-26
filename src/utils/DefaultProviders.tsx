"use client"

// precisa ser renderizado do lado do cliente
// Provider criado , contém todos os componentes do React  que abrigam a aplicação

"use client"

import { FilterContextProvider } from "@/contexts/FilterContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from '@/styles/Theme'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

