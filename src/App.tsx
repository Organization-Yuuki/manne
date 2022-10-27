import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import { ErrorFallback } from './components/errors/ErrorFallback'

const App: FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="App">Hello manne!!!!!</div>
    </ErrorBoundary>
  )
}

export default App
