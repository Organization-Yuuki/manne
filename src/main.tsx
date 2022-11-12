import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Global, ThemeProvider } from '@emotion/react'

import App from './App'
import { globalStyle, globalTheme } from './styles/layouts/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={globalTheme}>
    <RecoilRoot>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </ThemeProvider>
)
