import react from 'react'

import { MenuProps } from '../../parts/links/MenuRow'
import home from '../../../assets/images/sample_home.png'
import category from '../../../assets/images/sample_category.png'
import cart from '../../../assets/images/sample_shoppingCart.png'
import tradingHistory from '../../../assets/images/sample_tradingHistory.png'
import exhibit from '../../../assets/images/sample_exhibit.png'

type Menus = MenuProps[]

export const MenuList: Menus = [
  {
    url: 'https://~',
    imgUrl: home,
    menuName: 'home',
  },
  {
    url: 'https://~',
    imgUrl: category,
    menuName: 'カテゴリー',
  },
  {
    url: 'https://~',
    imgUrl: cart,
    menuName: 'カート',
  },
  {
    url: 'https://~',
    imgUrl: tradingHistory,
    menuName: '取引履歴',
  },
  {
    url: 'https://~',
    imgUrl: exhibit,
    menuName: '出品',
  },
]
