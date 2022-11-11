// 商品
export interface Product {
  id: number
  user_id: number
  title: string
  price: string
  is_sold: boolean
  buy_user?: number
  content?: string
}

// 商品画像
export interface ProductImage {
  product_id: number
  image_url: string
}
