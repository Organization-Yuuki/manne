import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { Head } from '../parts/texts/Head'

export const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  console.log('boundary error', error)
  return (
    <div>
      <Head level={2}>エラーが発生しました。</Head>
      <pre>{error.message}</pre>
    </div>
  )
}
