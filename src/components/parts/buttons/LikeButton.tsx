import clsx from 'clsx'
import { FC } from 'react'

import { likeButtonStyle } from '../../../styles/parts/button.style'
import { BsFillSuitHeartFill } from 'react-icons/bs'

interface LikeButtonProps {
  onClick: () => void
}

export const LikeButton: FC<LikeButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} css={[likeButtonStyle]} className={clsx('btn')}>
      <BsFillSuitHeartFill/>
    </button>
  )
}
