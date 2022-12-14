import { FC, ReactNode } from 'react'

import { Footer } from '../components/template/layouts/Footer'
import { Header } from '../components/template/layouts/Header'
import { Main } from '../components/template/layouts/Main'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
