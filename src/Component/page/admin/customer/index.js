import React, { memo, useState } from 'react'

import clsx from "clsx"
import style from "./customer.module.scss"

function Customer() {
  const [customer, setCusTomer] = useState(JSON.parse(localStorage.getItem("customer")))
  console.log(customer)

  return (
    <div className={clsx(style.customer, "py-3")}>
      <h1 className={clsx(style.heading, " mb-3 fs-4 text-center fw-bold text-uppercase")}>quản lý khách hàng</h1>
      <div className='d-flex justify-content-end gap-2 mb-3'>
        <input placeholder='Search ...' className={clsx(style.firstLetter, style.input)} />
        <button className={clsx(style.firstLetter, style.btnFind)}>tìm kiếm</button>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center'>STT</th>
            <th scope="col" className='text-center'>Name</th>
            <th scope="col" className='text-center'>Phone</th>
            <th scope="col" className='text-center'>Address</th>
            <th scope="col" className='text-center'>Email</th>
            <th scope="col" className='text-center'>Đã mua</th>
          </tr>
        </thead>
        <tbody>
          {customer.map(obj => {
            const sold = obj.sold.reduce((initValue, item) => initValue + item.amount ,0)
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
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Customer)
