import { FC } from 'react'
import { SocialButton } from '../components/parts/buttons/SocialButton'

export const Auth: FC = () => {
  return (
    <div>
      <SocialButton soType="apple" />
      <SocialButton soType="facebook" />
      <SocialButton soType="google" />
    </div>
  )
}
