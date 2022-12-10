import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

import { commonIconStyle } from '../../../styles/parts/icon.style'
import { commonRowStyle } from '../../../styles/parts/row.style'

export interface MenuProps {
  url: string
  imgUrl: string
  menuName: string
}

const BeforMenuRow: FC<MenuProps> = ({ url, imgUrl, menuName }) => {
  return (
    <RouterLink to={url} css={commonRowStyle} className={clsx('menu')}>
      <img src={imgUrl} alt={menuName} css={commonIconStyle} />
      <span>{menuName}</span>
    </RouterLink>
  )
}

export const MenuRow: FC<MenuProps> = BeforMenuRow
MenuRow.displayName = 'MenuRow'
