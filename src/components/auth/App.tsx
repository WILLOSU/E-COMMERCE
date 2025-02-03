import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthScreen } from "./AuthScreen";
import theme from "@/components/auth/theme";  // Corrigido para o caminho correto

import { signIn, signUp } from "@/components/auth/auth";

interface AppProps {
  onLoginSuccess: () => void;
}

const App: React.FC<AppProps> = ({ onLoginSuccess }) => {
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (email: string, password: string) => {
    setError("");

    console.log("Autenticação iniciada...");

    try {
      if (authType === "login") {
        console.log(`Tentando login com email: ${email}`);
        await signIn(email, password);
        console.log("Login realizado com sucesso.");
        
        // Salvar o token (você pode ajustar isso conforme sua implementação)
        localStorage.setItem('userToken', 'some-token-value');
        
        // Chamar onLoginSuccess após um login bem-sucedido
        onLoginSuccess();
      } else {
        console.log(`Tentando cadastro com email: ${email}`);
        await signUp(email, password);
        console.log("Cadastro realizado com sucesso.");
        
        // Opcionalmente, você pode fazer login automaticamente após o cadastro
        // Se fizer isso, você também deve chamar onLoginSuccess aqui
        // onLoginSuccess();
      }
    } catch (err) {
      console.error("Erro ao autenticar:", err);
      setError("Erro ao realizar a autenticação. Tente novamente.");
    }
  };

  const switchAuthType = () => {
    setAuthType(authType === "login" ? "signup" : "login");
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthScreen
        type={authType}
        onSubmit={handleSubmit}
        onSwitchAuth={switchAuthType}
        error={error}
      />
    </ThemeProvider>
  );
};

export default App;