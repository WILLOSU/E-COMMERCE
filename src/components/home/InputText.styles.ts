import styled from 'styled-components';

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 120px;
  }
`;

export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 2px solid transparent; /* Sem borda visível inicialmente */
  padding: 16px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--border-color);
  transition: border-color 0.3s ease-in-out; /* Animação suave */

  &:focus {
    border-color: var(--primary-color); /* Cor da borda ao focar */
    outline: none; /* Remove o contorno padrão do navegador */
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;


export const InputContainer = styled.div`
  position: relative;
  width: 352px;
 

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`;