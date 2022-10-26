import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

interface RouterError {
  data: unknown
  status: number
  statusText?: string
  message?: string
}

export const ErrorPage: FC = () => {
  const error = useRouteError() as RouterError
  console.log('routing error', error)

  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} </i>
        <i>{error.statusText ?? error.message}</i>
      </p>
    </div>
  )
}
