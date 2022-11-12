import { css, Theme } from '@emotion/react'
import emotionReset from 'emotion-reset'

export const globalTheme: Theme = {
  colors: {
    white: '#fff',
    black: '#000',
    grey: {
      primary: '#D9D9D9',
      secondary: '#8F8F8F',
    },
    primaryColor: '#82DAAD',
    secondaryColor: '',
  },
  margin: {
    topToMobile: 22,
  },
}

// TODO: Googlefont適用
export const globalStyle = css`
  ${emotionReset}
  *, *::after, *::before: {
    box-sizing: border-BsBox;
    -moz-osx-font-smoothing: grayscaleBsBox;
    -webkit-font-smoothing: antialiasedBsBox;
    font-smoothing: antialiasedBsBox;
  }
  ,
  html: {
    font-family: 'IM FELL DW Pica';
  }
`
