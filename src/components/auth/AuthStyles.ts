import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: ${({ theme }) => `url(${theme.backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  /* Mobile First */
  width: 100%; /* Ajusta para 100% em dispositivos móveis */
  height: auto; /* Ajuste automático para não cortar conteúdo */
  padding: 20px; /* Padding uniforme em todos os lados para garantir margens iguais */
  box-sizing: border-box; /* Inclui o padding no cálculo da largura total */

  /* Media Query para Desktop */
  @media (min-width: 768px) {
    height: 100vh;
    padding: 40px; /* Padding maior em telas grandes */
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: #FFFF; 
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  color: #FFFF; 
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 326px; /* Manter o máximo de largura de 326px */
  margin: 0 auto; /* Centraliza o formulário */
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 15px;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  box-sizing: border-box;
  background-color: #FFFFFF;
  color: ${({ theme }) => theme.colors.text}; /* Garantindo que o texto tenha cor visível */

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  width: 100%;
  max-width: 326px;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

export const InputWithIcon = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  input {
    width: 100%;
    padding: 15px 15px 12px 45px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-sizing: border-box;
    background-color: #FFFFFF;
    color: ${({ theme }) => theme.colors.text}; /* Garantindo que o texto tenha cor visível */
  }

  .icon-wrapper {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.inputText};
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SignUpText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #FFFFFF;
  margin-top: 16px;
`;

export const SignUpLink = styled.span`
  color: #0ACF83;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPassword = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #FFFFFF;
  text-align: center;
  display: block;
  width: 100%;
  max-width: 326px;
  margin-top: -5px;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

