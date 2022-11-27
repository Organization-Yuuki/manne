import React from 'react'

import { CONST_DATA } from '../../../const'
import {
  footerCopyrightStyle,
  footerStyle,
  footerTitleStyle,
} from '../../../styles/layouts/footer'

export const Footer = () => {
  return (
    <footer css={footerStyle}>
      <h1 css={footerTitleStyle}>{CONST_DATA.APP_TITLE}</h1>
      <p css={footerCopyrightStyle}>&copy;manne inc.</p>
    </footer>
  )
}
