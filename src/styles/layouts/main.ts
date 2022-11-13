import { css, SerializedStyles, Theme } from '@emotion/react'

export const mainStyle = ({ height }: Theme): SerializedStyles =>
  css({
    padding: '20px 8px',
    marginTop: height.header,
  })
