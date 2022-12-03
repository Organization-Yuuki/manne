import { css, SerializedStyles, Theme } from '@emotion/react'

export const headerStyle = ({ height }: Theme): SerializedStyles =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    position: 'fixed',
    top: '0',
    width: '100%',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
    height: height.header,

    '& > div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px 5px',
      boxSizing: 'border-box',
    },
  })

export const headerNavStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const openBtnStyle = ({ colors }: Theme): SerializedStyles =>
  css({
    position: 'relative',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    borderRadius: '5px',

    '&:hover': {
      backgroundColor: colors.grey.primary,
    },

    '& > span': {
      display: 'inline-block',
      transition: 'all 0.3s',
      position: 'absolute',
      left: '14px',
      height: '3px',
      borderRadius: '2px',
      background: colors.black,
      width: '50%',

      '&:nth-of-type(1)': {
        top: '15px',
      },
      '&:nth-of-type(2)': {
        top: '23px',
      },
      '&:nth-of-type(3)': {
        top: '31px',
      },
    },

    '&.active': {
      '& > span': {
        '&:nth-of-type(1)': {
          top: '18px',
          left: '18px',
          transform: 'translateY(6px) rotate(-45deg)',
          width: '30%',
        },
        '&:nth-of-type(2)': {
          opacity: 0,
        },
        '&:nth-of-type(3)': {
          top: '30px',
          left: '18px',
          transform: 'translateY(-6px) rotate(45deg)',
          width: '30%',
        },
      },
    },
  })
