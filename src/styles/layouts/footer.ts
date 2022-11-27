import { css, SerializedStyles, Theme } from '@emotion/react'

export const footerStyle = ({ height }: Theme): SerializedStyles =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
    height: height.footer,
    backgroundColor: '#82DAAD',
    textAlign: 'center',
  })

export const footerTitleStyle = css({
  fontSize: '25px',
  textShadow: '1px 2px 3px #808080',
  fontWeight: 'normal',
})

export const footerCopyrightStyle = css({
  fontSize: '5px',
})
