import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      black: string
      red: string
      grey: {
        primary: string
        secondary: string
      }
      primaryColor: string
      secondaryColor: string
      text: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        quinary: string
        senary: string
      }
    }
    margin: {
      topMain: number
    }
    height: {
      header: number
      footer: number
    }
  }
}
