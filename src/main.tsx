import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)
