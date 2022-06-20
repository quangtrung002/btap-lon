import React, { useState } from 'react'

import clsx from 'clsx'
import style from "./order.module.scss"

function InforOrder({ order, checked, setChecked }) {

  const handlePrice = num => {
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
  }

  const resultTotalPrice = order.sold.reduce((initValue, obj) => {
    return initValue + Number(obj.price.split(".").join(""))
  }, 0)


  return (
    <div className={clsx(style.infor, "d-none justify-content-center align-items-center", { [style.unCheck]: checked })}>
      <div className={clsx(style.wrap, "pb-5 pt-3 px-3")}>
        <div className='d-flex justify-content-between gap-5'>
          <div>
            <p className='d-flex align-items-center gap-2'>
              <label className={clsx(style.label, 'fw-bold')}>Đơn vị:</label>
              <span className={clsx(style.span)}>Công ty TNHH ShopDunk</span>
            </p>
            <p className='d-flex align-items-center gap-2'>
              <label className={clsx(style.label, 'fw-bold')}>Địa chỉ:</label>
              <span className={clsx(style.span)}>Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam</span>
            </p>
          </div>
          <p className='d-flex align-items-center gap-2'>
            <label className={clsx(style.label, 'fw-bold')}>Mã hóa đơn: </label>
            <span className={clsx(style.span)}>{order.id}</span>
          </p>
        </div>
        <h1 className='text-center fs-4 fw-bold text-uppercase mb-4 mt-4'>thông tin đơn hàng</h1>
        <div>
          <p className='d-flex gap-2 align-items-center'>
            <label className={clsx(style.label, style.firstLetter, "fw-bold")}>họ tên người mua hàng:</label>
            <span className={clsx(style.span, "text-capitalize")}>{order.name}</span>
          </p>
          <p className='d-flex gap-2 align-items-center'>
            <label className={clsx(style.label, style.firstLetter, "fw-bold")}>địa chỉ:</label>
            <span className={clsx(style.span, "text-capitalize")}>{order.address}</span>
          </p>
          <p className='d-flex gap-2 align-items-center'>
            <label className={clsx(style.label, style.firstLetter, "fw-bold")}>số điện thoại:</label>
            <span className={clsx(style.span, "text-capitalize")}>{order.phone}</span>
          </p>
          <p className='d-flex gap-2 align-items-center'>
            <label className={clsx(style.label, style.firstLetter, "fw-bold")}>email:</label>
            <span className={clsx(style.span)}>{order.email}</span>
          </p>
        </div>
        <table class="table table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>mã đơn hàng</th>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>tên sản phẩm</th>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>màu sắc</th>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>dung lượng</th>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>ngày mua</th>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>số lượng</th>
              <th scope="col" className={clsx(style.label, 'text-center text-capitalize')}>giá tiền</th>
            </tr>
          </thead>
          <tbody>
            {order.sold.map(item => (
              <tr key={item.idProduct}>
                <td className={clsx(style.span, "text-center")}>{item.idProduct}</td>
                <td className={clsx(style.span, "text-center")}>{item.nameProduct}</td>
                <td className={clsx(style.span, "text-center")}>{item.color}</td>
                <td className={clsx(style.span, "text-center")}>{item.capacity}</td>
                <td className={clsx(style.span, "text-center")}>{item.dayBuy}</td>
                <td className={clsx(style.span, "text-center")}>{item.amount}</td>
                <td className={clsx(style.span, "text-center")}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-end gap-2'>
          <label className={clsx(style.label, style.firstLetter, "fw-bold")}>tổng tiền</label>
          <span className={clsx(style.totalPrice, "fw-bold fs-6")}>{handlePrice(resultTotalPrice.toString())}đ</span>
        </div>
        <div className='d-flex justify-content-end mt-5'>
          <button
            className='btn btn-primary text-uppercase'
            onClick={() => setChecked(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default InforOrder
