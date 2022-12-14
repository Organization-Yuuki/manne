import { ChangeEvent, FC, useState } from 'react'

import { Button } from '../components/parts/buttons/Button'
import { SocialButton } from '../components/parts/buttons/SocialButton'
import { InputField } from '../components/template/forms/InputField'
import { Head } from '../components/parts/texts/Head'
import { isValidPhoneNumber } from '../lib/utils/validate'

export const Auth: FC = () => {
  const [count, setCount] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState(0)

  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = isValidPhoneNumber(e.target.value)
    if (!isValid) {
      alert('電話番号の形式が正しくありません。')
    }
    setPhoneNumber(Number(e.target.value))
  }

  return (
    <div>
      <SocialButton soType="apple" />
      <SocialButton soType="facebook" />
      <SocialButton soType="google" />
      <br />
      <div style={{ padding: '30px' }}>
        <InputField
          label="電話番号"
          type="number"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
        />
      </div>
      <Button onClick={() => setCount(count + 1)}>Login</Button>
      <br />
      <Head level={1}>Headたぐ</Head>
    </div>
  )
}
