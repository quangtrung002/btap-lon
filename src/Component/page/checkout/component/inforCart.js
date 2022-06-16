import React, { memo } from 'react'

import clsx from 'clsx'
import style from "../checkout.module.scss"

function InforCart({ carts }) {
  return (
    <div className={clsx(style.inforCarts, " bg-light px-5 py-4 mt-3")} id="#">
      <h1 className={clsx(style.firstLetter, style.title, "fw-bold")}>đơn hàng của bạn</h1>
      <h2 className={clsx(style.firstLetter, "fw-bold text-dark fs-6 my-3")}>sản phẩm</h2>
      {
        carts.map(obj => (
          <div className='d-flex flex-column' key={obj.id}>
            <img className={clsx(style.img)} src={obj.image} alt="loi" />
            <label className={clsx(style.name)}>{`${obj.name} x ${obj.amount}`}</label>
            <p className={clsx(style.color)}>
              <span className={clsx(style.firstLetter, "fw-bold me-1")}>Chọn màu:</span>
              <span>{obj.color}</span>
            </p>
            <p className={clsx(style.capacity)}>
              <span className={clsx(style.firstLetter, "fw-bold me-1")}>Chọn dung lượng:</span>
              <span>{obj.capacity}</span>
            </p>
          </div>
        ))
      }
      <div className='d-flex justify-content-between align-items-center mt-4'>
        <h1 className={clsx(style.firstLetter, "fw-bold fs-6")}>giao hàng</h1>
        <div className='d-flex flex-column gap-2'>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
            <label className={clsx(style.firstLetter, "form-check-label")} for="flexRadioDefault1">
              nhận máy tại cửa hàng
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className={clsx(style.firstLetter, "form-check-label")} for="flexRadioDefault2">
              nhận máy tại nhà
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(InforCart)
