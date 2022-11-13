import { FC } from 'react'
import { SocialButton } from '../components/parts/buttons/SocialButton'
import { InputField } from '../components/template/forms/InputField'

export const Auth: FC = () => {
  return (
    <div>
      <SocialButton soType="apple" />
      <SocialButton soType="facebook" />
      <SocialButton soType="google" />
      <br />
      <InputField label="test" />
    </div>
  )
}
