import { FC } from 'react'

import { CategoryRow } from '../components/parts/links/CategoryRow'
import { ProductRow } from '../components/parts/links/ProductRow'
import { MenuRow } from '../components/parts/links/MenuRow'
import sample from '../assets/images/sample_icon.png'
import wallet from '../assets/images/sample_wallet.png'
import home from '../assets/images/sample_home.png'
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
        imgUrl={sample}
      />
      <MenuList />
      <ProductRow product={product} />
    </div>
  )
}
