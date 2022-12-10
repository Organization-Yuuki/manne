import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

import { commonRowStyle } from '../../../styles/parts/row.style'
import { menuIconStyle } from '../../../styles/parts/icon.style'

export interface MenuProps {
  url: string
  imgUrl: string
  menuName: string
}

const BeforMenuRow: FC<MenuProps> = ({ url, imgUrl, menuName }) => {
  return (
    <RouterLink to={url} css={commonRowStyle} className={clsx('menu')}>
      <img src={imgUrl} alt={menuName} css={menuIconStyle} />
      <span>{menuName}</span>
    </RouterLink>
  )
}

export const MenuRow: FC<MenuProps> = BeforMenuRow
MenuRow.displayName = 'MenuRow'
