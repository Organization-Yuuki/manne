import clsx from 'clsx'
import { FC } from 'react'
import { commonButtonStyle } from '../../../styles/parts/button.style'

interface LikeButtonProps {
  children: string
  // childrenはプロパティ。stringはchildrenの型になる。
  onClick: () => void
}

export const LikeButton: FC<LikeButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={[commonButtonStyle()]}
      className={clsx('btn')}
    >
      <img src = '../../../assets/images/sample_like.png'/>
      {children}
    </button>
  )
}
