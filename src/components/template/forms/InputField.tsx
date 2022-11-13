import { FC, InputHTMLAttributes } from 'react'

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from '../../parts/forms/FieldWrapper'

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    FieldWrapperPassThroughProps {}

export const InputField: FC<Props> = ({ label, errorMsg, ...props }) => {
  return (
    <FieldWrapper label={label} errorMsg={errorMsg}>
      <input {...props} />
    </FieldWrapper>
  )
}
