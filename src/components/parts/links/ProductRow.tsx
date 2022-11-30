import { FC, memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

import { productRowStyle } from '../../../styles/parts/row.style'

interface Props {
  product: {
    url: string
    imgUrl: string
    name: string
    price: string
  }
}

const BeforeMemoProductRow: FC<Props> = ({ product }) => {
  const { url, imgUrl, name, price } = product

  return (
    <RouterLink
      to={url}
      className={clsx('product')}
      css={productRowStyle(imgUrl)}
    >
      <div className={clsx('product_img')}></div>
      <div className={clsx('product_sentence')}>
        <h3 className={clsx('product_sentence_headding')}>{name}</h3>
        <p className={clsx('product_sentence_text')}>¥{price}</p>
      </div>
    </RouterLink>
  )
}

export const ProductRow: FC<Props> = memo(BeforeMemoProductRow)
ProductRow.displayName = 'ProductRow'