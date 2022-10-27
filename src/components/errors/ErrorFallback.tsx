import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  console.log('boundary error', error)
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
    </div>
  )
}
