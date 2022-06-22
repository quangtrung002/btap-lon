import React, { memo, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import style from "./product.module.scss"

function Form({ item, type, check, setCheck, product, setProduct }) {
  const [valueName, setValueName] = useState("")
  const [valuePrice, setValuePrice] = useState("")
  const [valueOldPrice, setValueOldPrice] = useState("")
  const [valueColor, setValueColor] = useState("")
  const [valueCapacity, setValueCapacity] = useState("")
  const refImg = useRef()

  useEffect(() => {
    const { name, price, oldprice, color, capacity } = item
    if (type === "edit") {
      setValueName(name)
      setValuePrice(price)
      setValueOldPrice(oldprice)
      setValueCapacity(capacity)
      setValueColor(color)
    }
    else if (type === "add") {
      console.log("add")
      setValueName("")
      setValuePrice("")
      setValueOldPrice("")
      setValueCapacity("")
      setValueColor("")
    }
  }, [item, type])

  const handleForm = () => {
    let newArray
    if (type === "edit") {
      newArray = product.map(obj => {
        if (obj.name.toLowerCase() === item.name.toLowerCase() && obj.id === item.id) {
          return {
            ...obj,
            name: valueName,
            price: valuePrice,
            oldprice: valueOldPrice,
            capacity: Array.isArray(valueCapacity) ? valueCapacity : valueCapacity.split(","),
            color: Array.isArray(valueColor) ? valueColor : valueColor.split(","),
            image: /^\s*$/.test(refImg.current.value) ? obj.image : refImg.current.value
          }
        }
        return obj
      })
    }
    else if (type === "add") {
      const newProduct = {
        id: product.length + 1,
        name: valueName,
        price: valuePrice,
        oldprice: valueOldPrice,
        capacity: valueCapacity.replace(/\s/g, '').split(","),
        color: valueColor.replace(/\s/g, '').split(","),
        image: refImg.current.value
      }
      newArray = [newProduct, ...product]
    }
    setProduct(newArray)
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
              type="text" class="form-control" id="floatingName" placeholder="Password"
              value={valueName}
              onChange={e => setValueName(e.target.value)}
            />
            <label for="floatingName">Tên sản phẩm</label>
          </div>
          {
            type === "add"
              ? <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                  {["iphone", "mac", "ipad", "airpods", "watch", "accessory"].map((obj, index) => (
                    <option value={obj.toLowerCase()} key={index}>{obj}</option>
                  ))}
                </select>
                <label for="floatingSelect">Danh mục</label>
              </div>
              : <></>
          }
          <div class="mb-3">
            <label for="formFile" class="form-label">Hình ảnh</label>
            <input
              class="form-control" type="file" id="formFile"
              ref={refImg}
            />
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingOldPrice" placeholder="Password"
              value={valueOldPrice}
              onChange={e => setValueOldPrice(e.target.value)}
            />
            <label for="floatingOldPrice">Giá cũ</label>
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingPrice" placeholder="Password"
              value={valuePrice}
              onChange={e => setValuePrice(e.target.value)}
            />
            <label for="floatingPrice">Giá mới</label>
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingCapacity" placeholder="Password"
              value={valueCapacity ? valueCapacity : ""}
              onChange={e => setValueCapacity(e.target.value)}
            />
            <label for="floatingCapacity">Dung lượng</label>
          </div>
          <div class="form-floating">
            <input
              type="text" class="form-control" id="floatingColor" placeholder="Password"
              value={valueColor ? valueColor : ""}
              onChange={e => setValueColor(e.target.value)}
            />
            <label for="floatingColor">Màu sắc</label>
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
