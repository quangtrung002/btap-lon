import React, { createContext, memo, useState } from 'react'
import { data } from '../../../data'

import style from "./accessory.module.scss"
import clsx from 'clsx'
import Header from './header'
import Filter from './filter'
import Content from './content'


function Accessory() {
  const [accessory, setAccessory] = useState(data.accessory)

  const img = 'https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/05/Banner-Phu-Kien-summer_Danh-muc-PC.png'
  
  return (
    <themeAccessory.Provider value={[accessory, setAccessory]}>
      <div className={clsx(style.main, "pt-4 pb-5")}>
        <div className={clsx('container')}>
          <Header heading="phụ kiện" img={img} />
          <Filter />
          <Content accessory = {accessory}/>
        </div>
      </div>
    </themeAccessory.Provider>
  )
}

export const themeAccessory = createContext()
export default memo(Accessory)
