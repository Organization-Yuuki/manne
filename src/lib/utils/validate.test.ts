import { describe, expect, it } from 'vitest'
import { isValidPhoneNumber } from './validate'

describe('isValidPhoneNumber', () => {
  it('undefinedの時falseを返す', () => {
    const isValid = isValidPhoneNumber(undefined)

    expect(isValid).toBe(false)
  })
})
