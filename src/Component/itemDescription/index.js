import React, { memo, useState } from 'react'

import clsx from 'clsx'
import style from "./itemDes.module.scss"
import Header from './header'
import Image from './container/image'
import Heading from './container/heading'
import Description from './container/description'
import Color from './container/color'
import Capacity from './container/capacity'
import Cart from './container/cart'
import Gift from './container/gift'
import { createContext } from 'react'

function ItemDescription({ item, heading }) {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  backToTop()

  const [inforItem, setInforItem] = useState([{
    id: item.id,
    image: item.image,
    name: item.name,
    price: item.price && item.oldprice
      ? item.price
      : item.price
        ? item.price
        : item.oldprice,
    amount: 1,
    color: item.color[0],
    capacity: item.capacity[0]

  }])
  return (
    <themeInforItem.Provider value={[inforItem, setInforItem]}>
      <div className={clsx(style.main)}>
        <Header
          item={item}
          heading={heading}
        />
        <div className={clsx(style.container)}>
          <div className='container'>
            <div className="row">
              <Image srcImg={item.image} />
              <div className={clsx("col-md-12 col-lg-6")}>
                <Heading heading={item.name} />
                <Description item={item} />
                <Color item={item} />
                <Capacity item={item} />
                <Cart item={item} />
                <Gift />
              </div>
            </div>
          </div>
        </div>
      </div>
    </themeInforItem.Provider>
  )
}


export const themeInforItem = createContext()
export default memo(ItemDescription)
