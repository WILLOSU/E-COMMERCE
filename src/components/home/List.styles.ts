import { styled } from "styled-components";

export const InputTextContainer = styled.div`
    display: flex;
    flex-direction: column; /* Começa com coluna no mobile */
    align-items: center;
    justify-content: center;
    padding: 16px;

    > div {
        display: flex;
        justify-content: center;
        gap: 16px;
        width: 100%;  /* Para garantir que ocupe a largura disponível */
    }

    @media (min-width: ${props => props.theme.tableBreakpoint}) {
        flex-direction: row;  /* Para telas maiores, alinhando em linha */
        justify-content: space-between;
        padding: 16px 32px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 20px 160px;
    }
`;
