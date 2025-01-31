"use client"


// tem um componente do react pra abrigar a aplicação 

import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode                   //    
}

const theme = {                          // objeto tema da nossa aplicação!!
    desktopBreakpoint: "968px",
    tableBreakpoint: "768px",
}
                               // desustrurei o props e peguei o children                                                           
export function DefaultProviders({ children } : DefaultProvidersProps){
    const client = new QueryClient();
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}> {/* este usei para responsividade */}
                    {children}                
                </ThemeProvider>              {/* páginas que vão receber       */}                     
            </FilterContextProvider>
        </QueryClientProvider>
    )
}

