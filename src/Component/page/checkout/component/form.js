import React, { memo, useCallback } from 'react'

import clsx from 'clsx'
import style from "../checkout.module.scss"

function Form({ carts }) {
  const handlePrice = useCallback((num) => {
    let resultPrice = ""
    if (num.length % 3 === 0) {
      for (let i = 1; i <= num.length / 3; i++) {
        resultPrice = resultPrice + num.slice((i - 1) * 3, i * 3).toString() + "."
      }
    }
    else {
      const surplus = num.length % 3
      resultPrice += num.slice(0, surplus) + "."
      for (let i = 1; i < num.length / 3; i++) {
        resultPrice = resultPrice + num.slice((i - 1) * 3 + surplus, i * 3 + surplus).toString() + "."
      }
    }
    return resultPrice.substring(0, resultPrice.length - 1)
  }, [])

  const handleTotalPrice = useCallback((carts) => {
    const total = carts.reduce((initValue, obj) => initValue + obj.totalPrice, 0)
    return handlePrice(total.toString())
  }, [carts])

  return (
    <>
      <div className={clsx(style.form, "px-5 py-4 mt-3")}>
        <h1 className={clsx(style.firstLetter, style.title, "fw-bold")}>thông tin đơn hàng</h1>
        <div className='mt-3'>
          <div class="mb-3">
            <label for="formGroupExampleInput" className={clsx(style.label, "form-label fw-bold")}>Họ và tên</label>
            <input type="text" class="form-control" required="required" id="formGroupExampleInput" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" className={clsx(style.label, "form-label fw-bold")}>Địa chỉ, phường, quận</label>
            <input type="text" class="form-control" required="required" id="formGroupExampleInput2" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" className={clsx(style.label, "form-label fw-bold")}>Tỉnh/ thành phố</label>
            <input type="text" class="form-control" required="required" id="formGroupExampleInput" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" className={clsx(style.label, "form-label fw-bold")}>Số điện thoại</label>
            <input type="text" class="form-control" required="required" id="formGroupExampleInput2" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className={clsx(style.label, "form-label fw-bold")}>Email</label>
            <input type="email" class="form-control" required="required" id="exampleFormControlInput1" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" className={clsx(style.label, "form-label fw-bold")}>Ghi chú</label>
            <textarea class="form-control" required="required" id="exampleFormControlTextarea1" rows="3" placeholder='Ghi chú về đơn hàng chúng tôi cần biết?'></textarea>
          </div>
        </div>
      </div>
      <div className={clsx(style.totalPrice, "d-flex justify-content-between  py-4 px-5 mt-3")}>
        <label className={clsx(style.firstLetter, style.label, " fs-6 fw-bold")}>tổng tiền:</label>
        <span className={clsx(style.price, "fs-6 fw-bold")}>
          {`${handleTotalPrice(carts)}đ`}
        </span>
      </div>
    </>
  )
}

export default memo(Form)
