import { css, SerializedStyles, Theme, useTheme } from '@emotion/react'
import isEmpty from 'lodash/isEmpty'
import dummy from '../../assets/images/dummy_img.svg'

export const commonRowStyle = (theme: Theme): SerializedStyles =>
  css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 0 10px 20px',
    textDecoration: 'none',
    gap: '10px',
    borderBottom: `1px solid ${theme.colors.grey.primary}`,

    '&.category': {
      '& > span': {
        color: theme.colors.text.secondary,
        fontSize: '14px',
      },
    },
  })

export const productRowStyle = (img = '') => {
  const theme = useTheme()
  return css({
    display: 'block',
    width: '42.5%',
    height: '250px',
    textDecoration: 'none',
    border: `1px solid ${theme.colors.grey.primary}`,
    borderRadius: '10%',

    '.product': {
      '&_img': {
        display: 'block',
        background: !isEmpty(img) ? `url(${img})` : `url(${dummy})`,
        backgroundSize: 'cover',
        width: 'auto',
        height: '165px',
        borderRadius: '10% 10% 0 0',
      },
      '&_sentence': {
        padding: '10px 5px 30px',
        '&_heading': {
          fontSize: '12px',
          color: 'black',
          marginBottom: '10px',
        },
        '&_text': {
          textAlign: 'right',
          color: theme.colors.text.secondary,
        },
      },
    },
  })
}
