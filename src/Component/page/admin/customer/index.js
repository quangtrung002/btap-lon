import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import clsx from "clsx"
import style from "./customer.module.scss"

function Customer() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const [customer, setCusTomer] = useState(JSON.parse(localStorage.getItem("customer")))
  const cloneCustomer = JSON.parse(localStorage.getItem("customer"))
  const refInputFind = useRef()

  const handleFindCustomer = (payloadValue) => {
    const newArray = cloneCustomer.filter(obj =>
      obj.id.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
      || obj.name.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
      || obj.phone.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
      || obj.address.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
      || obj.email.toString().toLowerCase().includes(payloadValue.toString().toLowerCase())
    )
    setCusTomer(newArray)
    refInputFind.current.value = ""
  }
  return (
    <div className={clsx(style.customer, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>quản lý khách hàng</h1>
      <div className='d-flex justify-content-between mb-4'>
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
        <button className={clsx(style.reset)} onClick={() => setCusTomer(JSON.parse(localStorage.getItem("customer")))}>
          <i class="bi bi-arrow-repeat fs-4"></i>
        </button>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center text-capitalize'>mã user</th>
            <th scope="col" className='text-center text-capitalize'>họ tên</th>
            <th scope="col" className='text-center text-capitalize'>số điện thoại</th>
            <th scope="col" className='text-center text-capitalize'>địa chỉ</th>
            <th scope="col" className='text-center text-capitalize'>email</th>
            <th scope="col" className='text-center text-capitalize'>đã mua</th>
          </tr>
        </thead>
        <tbody>
          {customer.length === 0
            ? <tr>
              <td colSpan="6" className='fw-bold fs-6 text-center'>Không tìm thấy người dùng</td>
            </tr>
            : customer.map(obj => {
              const sold = obj.sold.reduce((initValue, item) => initValue + item.amount, 0)
              return (
                <tr key={obj.id}>
                  <td className={clsx(style.label)}>{obj.id}</td>
                  <td className={clsx(style.label)}>{obj.name}</td>
                  <td className={clsx(style.label)}>{obj.phone}</td>
                  <td className={clsx(style.label)}>{obj.address}</td>
                  <td className={clsx(style.label)}>{obj.email}</td>
                  <td className={clsx(style.label)}>{sold}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default memo(Customer)
