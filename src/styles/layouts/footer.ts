import { css, SerializedStyles, Theme } from '@emotion/react'

export const footerStyle = ({ margin, height }: Theme): SerializedStyles =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    position: 'fixed',
    top: '0',
    width: '100%',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
    height: height.footer,

    '& > div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px 5px',
      boxSizing: 'border-box',
    },
  })

export const footerTitleStyle = css({
  fontSize: '25px',
})
