import React from 'react'

import { CONST_DATA } from '../../../const'
import { footerStyle, footerTitleStyle } from '../../../styles/layouts/footer'

export const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div>
        <h1 css={footerTitleStyle}>{CONST_DATA.APP_TITLE}</h1>
      </div>
    </footer>
  )
}
