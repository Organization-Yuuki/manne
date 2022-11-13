import { isEmpty, isNil } from 'lodash'
import { FC, ReactNode } from 'react'

interface Props {
  label: string
  children: ReactNode
  errorMsg?: string | undefined
}

export type FieldWrapperPassThroughProps = Omit<Props, 'children'>

export const FieldWrapper: FC<Props> = ({ label, children, errorMsg }) => {
  return (
    <div>
      <label>
        {label}
        <div>{children}</div>
      </label>
      {!isNil(errorMsg) && !isEmpty(errorMsg) && <div>{errorMsg}</div>}
    </div>
  )
}
