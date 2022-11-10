import { nowDate } from './date'

/*
 * ロガー
 * 現在日時 + ログ名（任意） + ログ対象
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logger = (name?: string, ...args: any[]): undefined => {
  if (name !== undefined && name !== '') {
    console.log(`[ ${nowDate()} ]: ${name} ${JSON.stringify(args)}`)
    return undefined
  }
  console.log(`[ ${nowDate()} ]: ${JSON.stringify(args)}`)
  return undefined
}
