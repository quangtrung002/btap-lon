import React from 'react'
import Slider from './slider'
import clsx from 'clsx'
import style from "./home.module.scss"
import Search from './search'
import Item from './item'
import { data } from '../../../data'

export default function Home() {
  return (
    <div className={clsx(style.main)}>
      <Slider />
      <div className={clsx(style.container)}>
        <div className="container overflow-hidden">
          <Item 
          heading = "iPhone"
          items = {data.iphone}
          button = "xem tất cả iPhone"
          path = "/iphone"
          />
          <Item 
          heading = "iPad"
          items = {data.ipad}
          button = "xem tất cả iPad"
          path = "/ipad"
          />
          <Item 
          heading = "mac"
          items = {data.mac}
          button = "xem tất cả mac"
          path = "/mac"
          />
          <Item 
          heading = "airpods"
          items = {data.airpods}
          button = "xem tất cả airpods"
          path = "/am-thanh"
          />
          <Item 
          heading = "watch"
          items = {data.watch}
          button = "xem tất cả watch"
          path = "/apple-watch"
          />
          <Item 
          heading = "phụ kiện"
          items = {data.accessory}
          button = "xem tất cả phụ kiện"
          path = "/phu-kien"
          />
        </div>
      </div>
      <Search />
    </div>
  )
}
