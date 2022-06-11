import React, { memo } from 'react'

import clsx from 'clsx'
import style from "./itemDes.module.scss"
import Header from './header'
import Image from './container/image'
import Heading from './container/heading'
import Description from './container/description'

function ItemDescription({ item, heading }) {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  backToTop()
  return (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ItemDescription)
