import { FC, memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

import { commonIconStyle } from '../../../styles/parts/icon.style'
import { commonRowStyle } from '../../../styles/parts/row.style'

interface Props {
  url: string
  imgUrl: string
  categoryName: string
}

const BeforeMemoCategoryRow: FC<Props> = ({ url, imgUrl, categoryName }) => {
  return (
    <RouterLink to={url} css={commonRowStyle} className={clsx('category')}>
      <img src={imgUrl} alt={categoryName} css={commonIconStyle} />
      <span>{categoryName}</span>
    </RouterLink>
  )
}

export const CategoryRow: FC<Props> = memo(BeforeMemoCategoryRow)
CategoryRow.displayName = 'CategoryRow'
