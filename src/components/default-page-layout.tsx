"use client"


import { styled } from "styled-components"

export const DefaultPageLayout = styled.div`
    padding: 12px 24px;
    min-height: 100vh;
    

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 34px 540px;
    }
`