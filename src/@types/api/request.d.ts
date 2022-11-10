/*

  NOTE: API呼び出し時のリクエストパラメーター

*/

export interface UserLoginRequest {
  email: string
  password: string
}

export interface UserRegisterRequest {
  email: string
  password: string
  username: string
}
