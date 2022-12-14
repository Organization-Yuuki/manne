import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

import { commonRowStyle } from '../../../styles/parts/row.style'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'

export interface MenuProps {
  url: string
  icon: EmotionJSX.Element
  menuName: string
}

const BeforeMenuRow: FC<MenuProps> = ({ url, icon, menuName }) => {
  return (
    <RouterLink to={url} css={commonRowStyle} className={clsx('menu')}>
      <>
        {icon}
        <span>{menuName}</span>
      </>
    </RouterLink>
  )
}

export const MenuRow: FC<MenuProps> = BeforeMenuRow
MenuRow.displayName = 'MenuRow'
