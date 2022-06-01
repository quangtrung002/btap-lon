import React from 'react'
import Slider from './slider'
import clsx from 'clsx'
import style from "./home.module.scss"
import Search from './search'
import Item from './item'

export default function Home() {
  return (
    <div className={clsx(style.main)}>
      <Slider />
      <div className={clsx(style.container)}>
        <div className="container overflow-hidden">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Search />
    </div>
  )
}
