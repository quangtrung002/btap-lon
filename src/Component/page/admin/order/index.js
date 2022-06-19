import React, { memo, useState, useRef, useEffect } from 'react'

import clsx from 'clsx'
import style from "./order.module.scss"

function Order() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("customer")))
  const cloneOrder = JSON.parse(localStorage.getItem("customer"))
  const refInputFind = useRef()

  const handleFindCustomer = (payloadValue) => {
    let newArray = []
    cloneOrder.forEach(obj => {
      obj.sold.map(item => {
        if (obj.id.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
          || item.nameProduct.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
          || item.color.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
          || item.capacity.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
          || item.dayBuy.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
          || item.amount.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())) {
          newArray.push({
            ... obj,
            sold : [item]
          })
        }
      })
    })
    setOrder(newArray)
    refInputFind.current.value = ""
  }
  return (
    <div className={clsx(style.order, "py-3")}>
      <h1 className={clsx(style.heading, " mb-3 fs-4 text-center fw-bold text-uppercase")}>quản lý đơn hàng</h1>
      <div className='d-flex justify-content-between mb-3'>
        <div className='d-flex justify-content-start gap-2 mb-3'>
          <input
            className={clsx(style.firstLetter, style.input)}
            placeholder='Search ...'
            ref={refInputFind}
          />
          <button
            className={clsx(style.firstLetter, style.btnFind)}
            onClick={() => handleFindCustomer(refInputFind.current.value)}
          >
            tìm kiếm
          </button>
        </div>
        <button
          className={clsx(style.reset)}
          onClick={() => setOrder(JSON.parse(localStorage.getItem("customer")))}
        >
          <i class="bi bi-arrow-repeat fs-4"></i>
        </button>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center text-capitalize'>mã user</th>
            <th scope="col" className='text-center text-capitalize'>tên sản phẩm</th>
            <th scope="col" className='text-center text-capitalize'>màu sắc</th>
            <th scope="col" className='text-center text-capitalize'>dung lượng</th>
            <th scope="col" className='text-center text-capitalize'>ngày mua</th>
            <th scope="col" className='text-center text-capitalize'>số lượng</th>
            <th scope="col" className='text-center text-capitalize'>chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {order.map(obj => {
            return (
              <>
                {obj.sold.map((item, index) => (
                  <tr key={index}>
                    <td className={clsx(style.label)}>{obj.id}</td>
                    <td className={clsx(style.label)}>{item.nameProduct}</td>
                    <td className={clsx(style.label)}>{item.color}</td>
                    <td className={clsx(style.label)}>{item.capacity}</td>
                    <td className={clsx(style.label)}>{item.dayBuy}</td>
                    <td className={clsx(style.label)}>{item.amount}</td>
                    <td className={clsx(style.label)}>
                      <i class="bi bi-pencil-square"></i>
                    </td>
                  </tr>
                ))}
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Order)
