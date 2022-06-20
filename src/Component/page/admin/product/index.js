import React, { memo, useEffect, useState } from 'react'

import clsx from "clsx"
import style from "./product.module.scss"

function Product() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const [product, setProduct] = useState(() => {
    const getProdcut = JSON.parse(localStorage.getItem("data"))
    let newArray = [...getProdcut.accessory, ...getProdcut.iphone, ...getProdcut.ipad, ...getProdcut.watch, ...getProdcut.mac, ...getProdcut.airpods]
    return newArray
  })

  return (
    <div className={clsx(style.product, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>quản lý sản phẩm</h1>
      <div className={clsx("d-flex justify-content-between mb-4")}>
        <div className='d-flex gap-2'>
          <input
            type="text"
            placeholder='Search ...'
            className={clsx(style.inputFind, "ps-2")}
          />
          <button
            className={clsx(style.firstLetter, style.btn, "fs-6")}
          >
            tìm kiếm
          </button>
        </div>
        <div className={clsx(style.addProduct, style.btn, 'd-flex justify-content-center align-items-center px-2 py-0')}>
          <span>
            <i class="bi bi-plus fs-4"></i>
          </span>
          <span className={clsx(style.firstLetter, 'fw-bold pe-1')}>thêm mới</span>
        </div>
      </div>
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className='text-center text-capitalize'>stt</th>
              <th scope="col" className='text-center text-capitalize'>tên sản phẩm</th>
              <th scope="col" className='text-center text-capitalize'>hình ảnh</th>
              <th scope="col" className='text-center text-capitalize'>giá cũ</th>
              <th scope="col" className='text-center text-capitalize'>giá mới</th>
              <th scope="col" className='text-center text-capitalize'>dung lượng</th>
              <th scope="col" className='text-center text-capitalize'>màu sắc</th>
              <th scope="col" className='text-center text-capitalize'>tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {product.map((obj, index) => {
              return (<tr key={index}>
                <td className={clsx(style.label, "text-center fw-bold")}>{index + 1}</td>
                <td className={clsx(style.label, "text-center")}>{obj.name}</td>
                <td className={clsx(style.label, "text-center")}>
                  <img className={clsx(style.img)} src={obj.image} alt="ảnh lỗi" />
                </td>
                <td className={clsx(style.label, "text-center")}>{obj.oldprice}</td>
                <td className={clsx(style.label, "text-center")}>{obj.price}</td>
                <td className={clsx(style.label, "text-center")}>{obj.capacity}</td>
                <td className={clsx(style.label, "text-center")}>{obj.price}</td>
                <td className={clsx(style.label, "d-flex gap-2 justify-content-center")}>
                  <i
                    className={clsx(style.btnInforOrder, "bi bi-pencil-square")}
                  ></i>
                  <i class="bi bi-x"></i>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default memo(Product)
