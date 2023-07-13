import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

//Theme Provider
import { ThemeProvider } from 'styled-components'

//Theme
import { DefaultTheme } from './styles/themes/default.ts'

//Global Style
import { GlobalStyle } from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
