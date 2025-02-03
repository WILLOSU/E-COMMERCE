import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import App from "./App"

import theme from "./src/components/auth/theme";
 

import "./firebase" // Isso inicializará o Firebase

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

