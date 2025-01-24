"use client"

import styled from "styled-components"
import { DM_Mono } from "next/font/google"
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"
import { ChevronLeft } from "./icons/chevron-left"
import { HomeIcon } from "./icons/home-icon"

const dmMono = DM_Mono({
  weight: ["400"],
  subsets: ["latin"],
})

interface SearchProps {
  title?: string
  isFirstScreen: boolean
  onIconClick?: () => void
}

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
`

const TagBar = styled.div`
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
 
`;


export function Search({ isFirstScreen, onIconClick }: SearchProps) {
  return (
    <>
      <TagPage>
        <div>
          {isFirstScreen ? <HomeIcon /> : <ChevronLeft onClick={onIconClick} />}

          <Text>Search</Text>
          <CartControl />
        </div>
      </TagPage>
      <TagBar>
        <div>
          <PrimaryInputWSearchIcon placeholder="Search headphone" />
        </div>
      </TagBar>
    </>
  )
}

