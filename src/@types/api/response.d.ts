import { Product } from '../features/product'
import { User } from '../features/user'
import { ApiError } from './error'

/*

  NOTE: API呼び出し時のレスポンスパラメーター

*/

export interface UserDetailResponse extends ApiError {
  user: User
}

export interface UsersResponse extends ApiError {
  users: User[]
}

export interface ProductDetailResponse extends ApiError {
  product: Product
}

export interface ProductsResponse extends ApiError {
  products: Product[]
}
