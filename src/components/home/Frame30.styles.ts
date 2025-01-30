import { styled } from "styled-components";

// Estilos para o Frame30 com lógica mobile first
export const Frame30 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    background-color: var(--bg-primary);

    /* Menu Variant (ícone de menu) */
    .menu-icon {
        width: 20px;
        height: 20px;
        opacity: 1;
    }

    /* Logo (ícone do logo) */
    .logo {
        width: 83.33px;
        height: 25px;
        gap: 7.14px;
        opacity: 1;
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
