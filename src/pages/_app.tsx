import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/styles/Theme'
import { DefaultProviders } from "@/utils/DefaultProviders"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultProviders>
        <GlobalStyle />
        <Component {...pageProps} />
      </DefaultProviders>
    </ThemeProvider>
  )
}

export default MyApp

