import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './components/errors/ErrorFallback'
import { SocialButton } from './components/parts/buttons/SocialButton'

const App: FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* NOTE: 仮 */}
      <div style={{ padding: '10px' }}>
        <div className="App">Hello manne!!!!!</div>
        <br />
        <SocialButton type="google" />
        <br />
        <SocialButton type="facebook" />
        <br />
        <SocialButton type="apple" />
      </div>
    </ErrorBoundary>
  )
}

export default App
