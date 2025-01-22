'use client';

import { styled } from "styled-components";
import { DM_Mono } from 'next/font/google';
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const dmMono = DM_Mono({
    weight: ['400'],
    subsets: ['latin']
});

interface HeaderProps {
    title?: string;
}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
     


    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

const Logo = styled.a` /* âncora da logo */
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    text-decoration: none;
`;

//
export function Header(props: HeaderProps) {
    //const {setSearch, search} = useFilter();
    return (
        <TagHeader>
            <Logo className={dmMono.className} href="/">{props.title || "Audio"}</Logo>
           <div>
            <PrimaryInputWSearchIcon 
           // value={search} 
           // handleChange={setSearch}
            placeholder="Search headphone"/>
            <CartControl/>
           </div>
        </TagHeader>
    );
}
