'use client';

import { styled } from "styled-components";
import { DM_Mono } from 'next/font/google';

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
`;

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={dmMono.className}>{props.title || "Audio"}</Logo>
            {/* Adicione outros elementos ou filhos aqui */}
        </TagHeader>
    );
}
