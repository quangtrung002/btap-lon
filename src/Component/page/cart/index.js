import React, { memo, useContext } from 'react'
import { themeContextApp } from '../../../App'

import Notification from './notification'
import Container from "./carts"

import clsx from 'clsx'
import style from './carts.module.scss'


function Carts() {
  const [, , carts, setCarts] = useContext(themeContextApp)
  console.log(carts)

  return (
    <div className='container-fluid py-5' >
      <h1 className={clsx(style.title, style.firstLetter, "text-center fs-2 mb-3")}>giỏ hàng</h1>
      <Notification carts = {carts}/>
      <Container carts = {carts} />
    </div>
  )
}

export default memo(Carts)
