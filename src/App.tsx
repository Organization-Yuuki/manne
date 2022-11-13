import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, Route, Routes } from 'react-router-dom'

import { ErrorFallback } from './components/errors/ErrorFallback'
import { Layout } from './pages/Layout'
import { Auth } from './pages/Auth'
import { ProductList } from './pages/ProductList'
import { User } from './pages/User'
import { ErrorPage } from './components/errors/ErrorPage'

const LayoutWrapper: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

const App: FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<ProductList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
