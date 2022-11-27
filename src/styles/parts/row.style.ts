import { css, SerializedStyles, Theme } from '@emotion/react'

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
