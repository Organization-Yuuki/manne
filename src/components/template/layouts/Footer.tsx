import { FC } from 'react'

import { CONST_DATA } from '../../../const'
import {
  footerCopyrightStyle,
  footerStyle,
  footerTitleStyle,
} from '../../../styles/layouts/footer'
import { Head } from '../../parts/texts/Head'

export const Footer: FC = () => {
  return (
    <footer css={footerStyle}>
      <Head level={2} css={footerTitleStyle}>
        {CONST_DATA.APP_TITLE}
      </Head>
      <p css={footerCopyrightStyle}>&copy;manne Inc.</p>
    </footer>
  )
}
