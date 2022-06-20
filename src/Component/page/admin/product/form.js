import React, { memo, useRef, useState } from 'react'

import clsx from 'clsx'
import style from "./product.module.scss"

function Form({ item, type, check, setCheck, product }) {
  console.log(item)
  const { name, price, oldprice, color, capacity } = item
  const [valueName, setValueName] = useState(name)
  const [valuePrice, setValuePrice] = useState(price)
  const [valueOldPrice, setValueOldPrice] = useState(oldprice)
  const [valueColor, setValueColor] = useState(color)
  const [valueCapacity, setValueCapacity] = useState(capacity)
  const refImg = useRef()

  const handleForm = () => {
    if (type === "edit") {
      const newArray = product.map(obj => {
        if (obj.name === item.name && obj.id === item.id) {
          return {
            name: valueName,
            price: valuePrice,
            oldprice: valueOldPrice,
            color: Array.isArray(valueColor) ? valueColor : valueColor.split(","),
            capacity: Array.isArray(valueCapacity) ? valueCapacity : valueCapacity.split(","),
            ...obj
          }
        }
        else return obj
      })
      console.log(newArray)
    }
  }



  return (
    <div className={clsx(style.form, "d-none justify-content-center align-items-center", { [style.unCheck]: check })}>
      <div className={clsx(style.wrap, "pb-5 pt-3 px-5")}>
        <h1 className='fw-bold fs-4 text-center text-uppercase mb-4'>
          {type === "edit" ? "sửa thông tin sản phẩm" : "thêm sản phẩm"}
        </h1>
        <div className='d-flex gap-3 flex-column'>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingText" placeholder="Password"
              value={name}
              onChange={e => setValueName(e.target.value)}
            />
            <label for="floatingText">Tên sản phẩm</label>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Hình ảnh</label>
            <input
              class="form-control" type="file" id="formFile"
              ref={refImg}
            />
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingText" placeholder="Password"
              value={oldprice}
              onChange={e => setValueOldPrice(e.target.value)}
            />
            <label for="floatingText">Giá cũ</label>
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingText" placeholder="Password"
              value={price}
              onChange={e => setValuePrice(e.target.value)}
            />
            <label for="floatingText">Giá mới</label>
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingText" placeholder="Password"
              value={capacity ? capacity : ""}
              onChange={e => setValueCapacity(e.target.value)}
            />
            <label for="floatingText">Dung lượng</label>
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingText" placeholder="Password"
              value={color ? color : ""}
              onChange={e => setValueColor(e.target.value)}
            />
            <label for="floatingText">Màu sắc</label>
          </div>
        </div>
        <div className='d-flex gap-2 justify-content-end mt-4'>
          <button
            className={clsx(style.btn, "px-4 py-1 text-uppercase fw-bold")}
            onClick={() => { handleForm(); setCheck(false) }}
          >
            {type === "edit" ? "edit" : "add"}
          </button>
          <button
            className={clsx(style.btn, "px-4 py-1 text-uppercase fw-bold")}
            onClick={() => setCheck(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Form)
