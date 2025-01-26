import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --border-radius: 12px;
    --logo-color: #5D5D6D;
    --bg-primary: #F0F0F5;
    --bg-secondary: #ffffff;
    --text-dark: #BABABA;
    --text-dark2:#000000;
    --delete-color: #52EA5A;
    --buttom-color: #00c853;
    --shapes-dark:#09090A;
    --shapes: #DCE2E6;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

export default GlobalStyle



