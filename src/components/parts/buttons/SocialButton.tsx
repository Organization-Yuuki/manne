import clsx from 'clsx'
import { FC } from 'react'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

import { SocialTypes } from '../../../@types'
import { commonButtonStyle } from '../../../styles/buttons/common'

interface Props {
  type: SocialTypes
}

const SocialMap = {
  google: {
    icon: <FcGoogle />,
    msg: 'Sign in with Google',
  },
  facebook: {
    icon: <BsFacebook />,
    msg: 'Sign in with Facebook',
  },
  apple: {
    icon: <BsApple />,
    msg: 'Sign in with Apple',
  },
}

export const SocialButton: FC<Props> = ({ type }) => {
  return (
    <button
      css={[commonButtonStyle({ soType: type })]}
      className={clsx('so-btn', `so-btn_${type}`)}
    >
      {SocialMap[type].icon}
      <span>{SocialMap[type].msg}</span>
    </button>
  )
}
