import { FC } from 'react'
import { commonButtonStyle } from '../../../styles/buttons/common'

interface ButtonProps {
  children: string
  // childrenはプロパティ。stringはchildrenの型になる。
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} css={[commonButtonStyle()]}>
      {children}
    </button>
  )
}
