import React, { memo } from 'react'

import clsx from 'clsx'
import style from './carts.module.scss'

function Carts() {
  return (
    <div className='container' >
      <h1 className={clsx(style.title, style.firstLetter, "text-center fs-2")}>giỏ hàng</h1>
      <div className="row">

      </div>
    </div>
  )
}

export default memo(Carts)
