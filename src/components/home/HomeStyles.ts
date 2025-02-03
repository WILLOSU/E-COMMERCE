/* ESTILOS FRAME 30 TELA HOME */

import { styled } from "styled-components"

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
    transform: scale(1.4);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}){
    padding: 20px 160px;
  }
  background-color: var(--bg-primary);

  .menu-icon {
    width: 60px;
    height: 60px;
  }

  .logo {
    width: 60px;
    height: 60px;
    gap: 7.14px;
    opacity: 1;
  }

  .text-audio {
    color: var(--shapes-dark);
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    text-decoration: none;
    gap: 40px;

    @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
      font-size: 24px;
    }
  }

  .avatar {
    width: 35px;
    height: 35px;
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    padding: 16px 32px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    .menu-icon, .logo, .avatar {
      opacity: 1;
    }
  }
`
/* END TELA HOME */

/********************************************/ 
/* ESTILOS FRAME 31 TELA HOME */

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
    gap: 8px;
  }

  .greeting-text {
    width: 177px;
    height: 20px;
    font-size: 20px;
    font-weight: 400;
    color: var(--text-dark);
    text-align: left;
  }

  .question-text {
    width: 326px;
    height: 64px;
    font-size: 24px;
    font-weight: 700;
    color: var(--text-dark);
    text-align: left;
    line-height: 24px;

    @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
      font-size: 28px;
    }
  }
`
/* END ESTILOS FRAME 31 HOME */

/********************************************/ 
/* ESTILOS DOS INPUTS TELA HOME */

export const TagHome = styled.header`
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
`

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
`

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #BABABA; 
  padding: 16px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--border-color);
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    
  }
`

export const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    
  }
`
/* END DOS INPUTS TELA HOME */

/********************************************/ 
/* ESTILOS LIST TELA HOME */

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  > div {
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 32px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
  
`

/* END LIST TELA HOME */




