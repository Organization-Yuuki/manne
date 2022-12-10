import { FC } from 'react'

import { MenuProps, MenuRow } from '../../parts/links/MenuRow'
import home from '../../../assets/images/sample_home.png'
import category from '../../../assets/images/sample_category.png'
import cart from '../../../assets/images/sample_shoppingCart.png'
import tradingHistory from '../../../assets/images/sample_tradingHistory.png'
import exhibit from '../../../assets/images/sample_exhibit.png'

type Menu = MenuProps[]

export const MenuList: FC = () => {
  const Menus: Menu = [
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

  return (
    <>
      {Menus.map((menu, index) => {
        return (
          <MenuRow
            key={menu.menuName + String(index)}
            url={menu.url}
            imgUrl={menu.imgUrl}
            menuName={menu.menuName}
          />
        )
      })}
    </>
  )
}
