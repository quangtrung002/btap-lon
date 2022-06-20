import React, { memo, useState, useRef, useEffect } from 'react'

import clsx from 'clsx'
import style from "./order.module.scss"
import InforOrder from './inforOrder'

function Order() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("customer")))
  const [indexInfor, setIndexInfor] = useState(0)
  const [checked, setChecked] = useState(false)
  const [key, setKey] = useState(0)
  const cloneOrder = JSON.parse(localStorage.getItem("customer"))
  const refInputFind = useRef()

  let categorys = []
  cloneOrder.forEach(obj => {
    categorys.push(...obj.sold.map(item => item.category.toLowerCase()))
  })

  const handleSelectCategory = (payloadValue) => {
    let newArray = []
    if (payloadValue.toLowerCase() === "danh mục") {
      setOrder(cloneOrder)
    }
    else {
      cloneOrder.forEach(obj => {
        obj.sold.map(item => {
          if (payloadValue.toLowerCase() === item.category.toLowerCase()) {
            newArray.push({
              ...obj,
              sold: [item]
            })
          }
        })
      })
      setOrder(newArray)
    }
  }

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
            ...obj,
            sold: [item]
          })
        }
      })
    })
    setOrder(newArray)
    refInputFind.current.value = ""
  }

  return (
    <div className={clsx(style.order, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>quản lý đơn hàng</h1>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <select
          className={clsx(style.selectCategory, style.firstLetter, "form-select")}
          aria-label="Default select example"
          onChange={e => handleSelectCategory(e.target.value)}
        >
          {["Danh mục", ... new Set(categorys)].map((category, index) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <div className="d-flex gap-3">
          <div className='d-flex justify-content-start gap-2'>
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
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center text-capitalize'>mã đơn hàng</th>
            <th scope="col" className='text-center text-capitalize'>tên sản phẩm</th>
            <th scope="col" className='text-center text-capitalize'>màu sắc</th>
            <th scope="col" className='text-center text-capitalize'>dung lượng</th>
            <th scope="col" className='text-center text-capitalize'>ngày mua</th>
            <th scope="col" className='text-center text-capitalize'>số lượng</th>
            <th scope="col" className='text-center text-capitalize'>chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {order.map((obj, key) => {
            return (
              <>
                {obj.sold.map(item => (
                  <tr key={item.idProduct}>
                    <td className={clsx(style.label)}>{item.idProduct}</td>
                    <td className={clsx(style.label)}>{item.nameProduct}</td>
                    <td className={clsx(style.label)}>{item.color}</td>
                    <td className={clsx(style.label)}>{item.capacity}</td>
                    <td className={clsx(style.label)}>{item.dayBuy}</td>
                    <td className={clsx(style.label)}>{item.amount}</td>
                    <td className={clsx(style.label)}>
                      <i
                        className={clsx(style.btnInforOrder, "bi bi-pencil-square")}
                        onClick={() => { setChecked(true); setKey(key) }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </>
            )
          })}
        </tbody>
      </table>
      <InforOrder
        order={order[key]}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  )
}

export default memo(Order)
