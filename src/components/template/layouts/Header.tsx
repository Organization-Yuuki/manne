import clsx from 'clsx'
import { FC, memo } from 'react'

import { Head } from '../../parts/texts/Head'
import { CONST_DATA } from '../../../const'
// TODO: useDisclosure
import { useDiscloser } from '../../../hooks/useDisclosur'
import {
  headerNavStyle,
  headerStyle,
  openBtnStyle,
} from '../../../styles/layouts/header'

export const Header: FC = memo(() => {
  // TODO: useDisclosure
  const { isOpen, handleToggle } = useDiscloser()

  return (
    <header css={headerStyle}>
      <div>
        <Head level={1}>{CONST_DATA.APP_TITLE}</Head>
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
