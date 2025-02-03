import "styled-components"

declare module "styled-components" {
  
  export interface DefaultTheme {
    colors: {
      inputBackground: Interpolation<FastOmit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>>
      primary: string
      background: string
      text: string
      inputBorder: string
      inputText: string
    }
    fonts: {
      main: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
    }
    spacing: {
      small: string
      medium: string
      large: string
    }
    borderRadius: string
  }
}

