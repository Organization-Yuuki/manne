import clsx from 'clsx'
import { FC } from 'react'

import { likeButtonStyle } from '../../../styles/parts/button.style'
import likeImage from '../../../assets/images/sample_like.png'

interface LikeButtonProps {
  onClick: () => void
}

export const LikeButton: FC<LikeButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} css={[likeButtonStyle()]} className={clsx('btn')}>
      <img src={likeImage} />
    </button>
  )
}
