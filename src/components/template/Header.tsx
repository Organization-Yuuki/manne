import clsx from 'clsx'
import { FC, memo } from 'react'

import { useDiscloser } from '../../hooks/useDisclosur'
import { CONST_DATA } from '../../const'
import {
  headerNavStyle,
  headerStyle,
  headerTitleStyle,
  openBtnStyle,
} from '../../styles/layouts/header'

export const Header: FC = memo(() => {
  const { isOpen, handleToggle } = useDiscloser()

  return (
    <header css={headerStyle}>
      <div>
        <h1 css={headerTitleStyle}>{CONST_DATA.APP_TITLE}</h1>
        <nav css={headerNavStyle}>
          {/* TODO: PCメニュー */}
          <div
            css={openBtnStyle}
            className={clsx(isOpen && 'active')}
            onClick={handleToggle}
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
