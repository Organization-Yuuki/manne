import { FC, ReactNode } from 'react'
import { Header } from '../components/template/Header'
import { Main } from '../components/template/Main'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <footer>フッター</footer>
    </>
  )
}
