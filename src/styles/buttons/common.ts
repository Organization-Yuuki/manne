import { css, SerializedStyles } from '@emotion/react'
import { CSSProperties } from 'react'

import { SocialTypes } from '../../@types'

const SocialStyleMap: { [k in SocialTypes]: CSSProperties } = {
  google: {
    color: '#808080',
    backgroundColor: '#fff',
    boxShadow: '1px 3px 3px rgba(0, 0, 0, .4)',
  },
  facebook: {
    color: '#fff',
    backgroundColor: '#1877F2',
  },
  apple: {
    color: '#fff',
    backgroundColor: '#000',
    fontWeight: 'normal',
  },
}

interface Props {
  soType: SocialTypes
}

export const commonButtonStyle = ({ soType }: Props): SerializedStyles =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    minWidth: '345px',
    border: 'none',
    borderRadius: '10px',

    '&.so-btn': {
      justifyContent: 'flex-start',
      gap: '0 15px',
      fontWeight: 'bold',
      fontSize: '20px',

      [`&_${soType}`]: {
        ...SocialStyleMap[soType],
      },
    },
  })
