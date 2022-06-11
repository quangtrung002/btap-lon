import React, { memo } from 'react'
import { Link } from "react-router-dom"

import clsx from 'clsx'
import style from "./itemDes.module.scss"

function Header({item, heading}) {
  return (
    <div className={clsx(style.header, 'bg-light py-3')}>
        <div className='container'>
          <div className="row">
            <div className='d-flex align-items-center gap-1'>
              <Link className={clsx(style.firstLetter)} to="/">trang chủ</Link>
              <span>/</span>
              <Link className={clsx(style.firstLetter)} to={`/${heading}`}>{heading}</Link>
              <span>/</span>
              <h1 className={clsx(style.firstLetter)}>{item.name}</h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default memo(Header)
