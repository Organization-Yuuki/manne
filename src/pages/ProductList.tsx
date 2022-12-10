import { FC } from 'react'

import { CategoryRow } from '../components/parts/links/CategoryRow'
import { ProductRow } from '../components/parts/links/ProductRow'
import sample from '../assets/images/sample_icon.png'
import wallet from '../assets/images/sample_wallet.png'
import { LikeButton } from '../components/parts/buttons/LikeButton'

export const ProductList: FC = () => {
  // ダミーデータ
  const product = {
    url: '/auth',
    imgUrl: wallet,
    name: '猫ちゃん黄色アンティーク手染め財布',
    price: '3000',
  }

  return (
    <div>
      <CategoryRow
        url="/auth"
        categoryName="カテゴリー名を挿入"
        imgUrl={sample}
      />
      <LikeButton/>
      <ProductRow product={product} />
    </div>
  )
}
