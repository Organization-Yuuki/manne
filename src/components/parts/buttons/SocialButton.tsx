import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

import { SocialTypes } from '../../../@types'
import { commonButtonStyle } from '../../../styles/buttons/common'
import { Spinner } from '../loadings/Spinner'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  soType: SocialTypes
  isLoading?: boolean
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

const BeforeMemoSocialButton: FC<SocialButtonProps> = forwardRef<
  HTMLButtonElement,
  SocialButtonProps
>(({ soType, className = '', isLoading = false, ...props }, ref) => {
  return (
    <button
      ref={ref}
      css={[commonButtonStyle(soType)]}
      className={clsx('so-btn', `so-btn_${soType}`, className)}
      {...props}
    >
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          {SocialMap[soType].icon}
          <span>{SocialMap[soType].msg}</span>
        </>
      )}
    </button>
  )
})

BeforeMemoSocialButton.displayName = 'SocialButton'

export const SocialButton = memo(BeforeMemoSocialButton)
