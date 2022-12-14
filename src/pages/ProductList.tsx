import { FC } from 'react'

import { CategoryRow } from '../components/parts/links/CategoryRow'
import { ProductRow } from '../components/parts/links/ProductRow'
import wallet from '../assets/images/sample_wallet.png'
import { MenuList } from '../components/template/list/NavigateMenu'

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
        imgUrl={'../assets/images/sample_icon.png'}
      />
      <MenuList />
      <ProductRow product={product} />
    </div>
  )
}
