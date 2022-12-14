import { FC, useState } from 'react'

import { Button } from '../components/parts/buttons/Button'
import { SocialButton } from '../components/parts/buttons/SocialButton'
import { InputField } from '../components/template/forms/InputField'
import { Head } from '../components/parts/texts/Head'

export const Auth: FC = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      <SocialButton soType="apple" />
      <SocialButton soType="facebook" />
      <SocialButton soType="google" />
      <br />
      <InputField label="test" />
      <Button onClick={() => setCount(count + 1)}>Login</Button>
      <br />
      <Head level={1}>Headたぐ</Head>
    </div>
  )
}
