import { styled } from "styled-components";

// Estilos para o Frame30 com lógica mobile first
export const Frame30 = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 12px 16px;
     

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        transform: scale(1.4); /* Aumenta 1.5x o tamanho original */
    }
    

    // utilizei theme 
    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
    background-color: var(--bg-primary);

    /* Menu Variant (ícone de menu) */
    .menu-icon {
        width: 60px;
        height: 60px;
        
        
        
    }

    /* Logo (ícone do logo) */
    .logo {
        width: 60;
        height: 60px;
        gap: 7.14px;
        opacity: 1;
    }

    /* TextAudio */
    .text-audio {
        color: var(--shapes-dark);  /* Use uma variável de cor aqui, se definida */
        font-weight: 400;
        font-size: 25px;
        line-height: 100%;
        text-decoration: none;
        gap: 40px;
    }
    

    /* Avatar */
    .avatar {
        width: 35px;
        height: 35px;
        opacity: 1;
    }

    /* Responsividade para telas maiores (desktop) */
    @media (min-width: ${props => props.theme.tableBreakpoint}) {
        padding: 16px 32px;
    }

    /* Outras melhorias ou ajustes para telas maiores */
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        .menu-icon, .logo, .avatar {
            opacity: 1;
        }
    }
`
