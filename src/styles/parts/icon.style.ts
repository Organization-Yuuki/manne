import { css, SerializedStyles } from '@emotion/react'

export const commonIconStyle = (): SerializedStyles =>
  css({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
  })
