import { isNil } from 'lodash'

// - 36文字以内
// - 数字
// - null or undefinedじゃない
export const isValidPhoneNumber = (
  inputPhoneNumber: string | number | undefined
): boolean => {
  if (isNil(inputPhoneNumber)) return false
  return true
}
