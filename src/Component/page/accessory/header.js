import React, { memo } from 'react'

import style from "./accessory.module.scss"
import clsx from 'clsx'

function Header({ heading, img }) {
  return (
    <section>
      <h1 className={clsx(style.heading,style.firstLetter, "text-center pb-4")}>{heading}</h1>
      <img className={clsx(style.img, 'mb-4')} src={img} alt="ảnh lỗi" />
    </section>
  )
}

export default memo(Header)
