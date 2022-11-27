import { FC, ReactNode } from 'react'
import { mainStyle } from '../../../styles/layouts/main'

interface Props {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  return <main css={mainStyle}>{children}</main>
}
