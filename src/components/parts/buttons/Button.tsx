import clsx from 'clsx'
import { FC } from 'react'
import { commonButtonStyle } from '../../../styles/parts/button.style'

interface ButtonProps {
  children: string
  // childrenはプロパティ。stringはchildrenの型になる。
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={[commonButtonStyle()]}
      className={clsx('btn')}
    >
      {children}
    </button>
  )
}
