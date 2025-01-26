"use client"

import styled from "styled-components"
import { PrimaryInputWSearchIcon } from "../common/Input"
import { CartControl } from "../shoppingCart/CartControl"
import { ChevronLeft } from '@/components/icons/ChevronIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { useFilter } from "@/hooks/UseFilter"


interface HeaderProps {
   
  }


// <          Search   carrinho
const TagPage = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 65px 24px;
    width: 375px;  
    height: 44px;
    left: -1px; 
    background-color: var(--bg-secondary); 

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 95px; 
    }




@media (min-width: ${ props => props.theme.desktopBreakpoint}px) {
        padding: 65px 48px;
        > div {
            gap: 40px;  /* Aumenta o espaçamento entre os itens */
        }
    }

    /* Para telas maiores que 1024px (desktops) */
    @media (min-width: 1024px) {
        padding: 65px 72px;
        > div {
            gap: 95px;  /* Aumenta mais ainda o espaçamento */
        }
    }
`;


// lupa
const TagHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px; 
    width: 326px;  
    height: 45px;  
    position: absolute;
    top: 114px;     
    left: 24px;
    gap: 12px;     
    background-color: var(--bg-secondary); 
    box-sizing: border-box; 
    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
       
    }
`

const Text = styled.span`
  font-size: 26px; 
  color: var(--text-primary);
  margin: 0 12px; 
  font-weight: 700;
 
/* Ajuste do tamanho da fonte para telas maiores */
@media (min-width: ${ props => props.theme.desktopBreakpoint}) {
        font-size: 28px; /* Aumenta o tamanho da fonte para tablets */
    }

    @media (min-width: 1024px) {
        font-size: 32px; /* Aumenta ainda mais o tamanho da fonte para desktops */
    }
`;


export function Header(props : HeaderProps){
  const {setSearch, search} = useFilter();

  return (
    <>
      <TagPage>
        <div>
          <HomeIcon /> <ChevronLeft />

          <Text>Search</Text>
          <CartControl />
        </div>
      </TagPage>
      <TagHeader>
        <div>
          <PrimaryInputWSearchIcon 
             value={search}
             handleChange={setSearch}          
          placeholder="Search headphone" />
        </div>
      </TagHeader>
    </>
  )
}

