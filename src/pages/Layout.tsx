import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>ヘッダー</header>
      {children}
      <footer>フッター</footer>
    </>
  )
}
