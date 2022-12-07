// 商品
export interface Product {
  id: string
  title: string
  price: number
  is_sold: boolean
  buy_user?: string
  content?: string
  sellerId: string
}

// 商品画像
export interface ProductImage {
  id: string
  productId: number
  image_url: string
}
