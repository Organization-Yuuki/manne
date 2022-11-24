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
    topMain: 22,
  },
  height: {
    header: 70,
  },
}

// TODO: Googlefont適用
export const globalStyle = css`
  ${emotionReset}
  html {
    font-family: '游ゴシック体‘, YuGothic, ‘游ゴシック’, ‘Yu Gothic’, sans-serif';
  }
`
