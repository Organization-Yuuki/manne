import { isNil } from 'lodash'

// - 10文字以上36文字以内
// - 数字
// - null or undefinedじゃない
export const isValidPhoneNumber = (
  phoneNumber: string | number | undefined
): boolean => {
  if (isNil(phoneNumber)) return false
  const length = phoneNumber.toString().length
  const isValidLength = length >= 10 && length <= 36
  if (!isValidLength) return false
  if (typeof phoneNumber === 'string') return false
  return true
}
