import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      black: string
      grey: {
        primary: string
        secondary: string
      }
      primaryColor: string
      secondaryColor: string
    }
    margin: {
      topToMobile: number
    }
  }
}
