import { css } from '@emotion/react'

const getHeaderHight = (): number => {
  const header = document.getElementsByTagName('header')
  return header[0].offsetHeight
}

export const mainStyle = css({
  padding: '20px 8px',
  marginTop: getHeaderHight(),
})
