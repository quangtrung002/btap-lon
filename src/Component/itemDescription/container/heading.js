import React, { memo } from 'react'

import clsx from 'clsx'
import style from "../itemDes.module.scss"

function Heading({ heading }) {
  return (
    <div className={clsx(style.heading, "pt-5 pb-1")}>
      <h1 className='fs-3 fw-bold'>{heading}</h1>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center gap-2'>
          <div className={clsx(style.star)}>
            {Array.from({ length: 5 }).map((item, index) => (
              <span key={index}><i class="bi bi-star-fill fs-6"></i></span>
            ))}
          </div>
          <p className={clsx(style.firstLetter, style.comment, style.titleDes)}>đánh giá</p>
          <p className={clsx(style.titleDes, 'ms-3')}>
            {`${Math.floor(Math.random() * 100)} đánh giá`}
          </p>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <span>
            <i className={clsx(style.titleDes, "bi bi-plus-circle")}></i>
          </span>
          <p className={clsx(style.firstLetter, style.titleDes)}>so sánh</p>
        </div>
      </div>
    </div>
  )
}

export default memo(Heading)
