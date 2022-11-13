import clsx from 'clsx'
import { FC, memo, useCallback, useState } from 'react'

import { CONST_DATA } from '../../const'
import {
  headerNavStyle,
  headerStyle,
  headerTitleStyle,
  openBtnStyle,
} from '../../styles/layouts/header'

export const Header: FC = memo(() => {
  // TODO: useDisclosureを使おう
  const [isOpen, setIsOpen] = useState(false)

  const onClickOpenMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <header css={headerStyle}>
      <div>
        <h1 css={headerTitleStyle}>{CONST_DATA.APP_TITLE}</h1>
        <nav css={headerNavStyle}>
          {/* TODO: PCメニュー */}
          <div
            css={openBtnStyle}
            className={clsx(isOpen && 'active')}
            onClick={onClickOpenMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
