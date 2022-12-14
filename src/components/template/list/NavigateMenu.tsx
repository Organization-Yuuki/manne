import { FC } from 'react'
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/Ai'
import { BiCategory, BiNotepad, BiStoreAlt } from 'react-icons/Bi'

import { MenuProps, MenuRow } from '../../parts/links/MenuRow'
import { globalTheme } from '../../../styles/layouts/global'

export const MenuList: FC = () => {
  const MENUS: MenuProps[] = [
    {
      url: 'https://~',
      icon: <AiFillHome color={globalTheme.colors.primaryColor} />,
      menuName: 'home',
    },
    {
      url: 'https://~',
      icon: <BiCategory color={globalTheme.colors.primaryColor} />,
      menuName: 'カテゴリー',
    },
    {
      url: 'https://~',
      icon: <AiOutlineShoppingCart color={globalTheme.colors.primaryColor} />,
      menuName: 'カート',
    },
    {
      url: 'https://~',
      icon: <BiNotepad color={globalTheme.colors.primaryColor} />,
      menuName: '取引履歴',
    },
    {
      url: 'https://~',
      icon: <BiStoreAlt color={globalTheme.colors.primaryColor} />,
      menuName: '出品',
    },
  ]

  return (
    <>
      {MENUS.map((menu) => {
        return (
          <MenuRow
            key={menu.menuName}
            url={menu.url}
            icon={menu.icon}
            menuName={menu.menuName}
          />
        )
      })}
    </>
  )
}
