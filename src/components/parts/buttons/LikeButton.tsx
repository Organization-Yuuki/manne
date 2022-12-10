import clsx from 'clsx'
import { FC } from 'react'

import { likeButtonStyle } from '../../../styles/parts/button.style'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { globalTheme } from '../../../styles/layouts/global'

interface LikeButtonProps {
  isLike: boolean
  onClick: () => void
}

export const LikeButton: FC<LikeButtonProps> = ({ isLike, onClick }) => {
  return (
    <button onClick={onClick} css={[likeButtonStyle]} className={clsx('btn')}>
      <BsFillSuitHeartFill
        size="100%"
        color={isLike ? globalTheme.colors.red : globalTheme.colors.white}
      />
    </button>
  )
}
