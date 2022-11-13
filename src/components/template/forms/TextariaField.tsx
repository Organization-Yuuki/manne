import { FC, TextareaHTMLAttributes } from 'react'

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from '../../parts/forms/FieldWrapper'

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    FieldWrapperPassThroughProps {}

export const TextareaField: FC<Props> = ({ label, errorMsg, ...props }) => {
  return (
    <FieldWrapper label={label} errorMsg={errorMsg}>
      <textarea {...props} />
    </FieldWrapper>
  )
}
