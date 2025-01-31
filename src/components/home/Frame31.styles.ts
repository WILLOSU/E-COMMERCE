import { styled } from "styled-components";


export const Frame31 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: var(--bg-primary);

    .layout {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;  /* Espaço entre os textos */
    }

    /* Texto "Hi, Andrea" */
    .greeting-text {
        width: 177px;
        height: 20px;
        font-size: 16px;  /* Tamanho do texto */
        font-weight: 400;
        color: var(--text-dark);  /* Cor do texto, pode ajustar conforme necessário */
        text-align: left;
    }

    /* Texto "What are you looking for today?" */
    .question-text {
        width: 326px;
        height: 64px;
        font-size: 24px;
        font-weight: 700;
        color: var(--text-dark);
        text-align: left;
        line-height: 24px;  /* Ajuste para melhorar a legibilidade */
    }

    /* Responsividade para telas maiores */
    @media (min-width: ${props => props.theme.tableBreakpoint}) {
        .greeting-text {
            font-size: 20px;  /* Ajuste do tamanho da fonte em telas maiores */
        }

        .question-text {
            font-size: 18px;  /* Ajuste do tamanho da fonte em telas maiores */
        }
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 20px 160px;
    }
`;
