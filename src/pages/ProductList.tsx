import { FC } from 'react'

import { CategoryRow } from '../components/parts/links/CategoryRow'
import sample from '../assets/images/sample_icon.png'

export const ProductList: FC = () => {
  return (
    <div>
      <CategoryRow
        url="/auth"
        categoryName="カテゴリー名を挿入"
        imgUrl={sample}
      />
    </div>
  )
}
