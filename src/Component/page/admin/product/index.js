import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import clsx from "clsx"
import style from "./product.module.scss"
import Form from './form'

function Product() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const getProdcut = useCallback(() => {
    const array = JSON.parse(localStorage.getItem("data"))
    return [...array.iphone, ...array.mac, ...array.ipad, ...array.watch, ...array.airpods, ...array.accessory]
  }, [])

  const [product, setProduct] = useState(getProdcut())
  const [check, setCheck] = useState(false)
  const [key, setKey] = useState(0)
  const [type, setType] = useState("edit")
  const refInputFind = useRef()
  const cloneProduct = getProdcut()
  const cloneProduct2 = JSON.parse(localStorage.getItem("data"))
  const category = ["Danh mục", "iPhone", "mac", "iPad", "airpods", "watch", "accessory"]

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(product))
  }, [product])

  const handleFindProduct = (payload) => {
    const newArray = cloneProduct.filter(obj =>
      obj.name.toString().toLowerCase().includes(payload.toString().toLowerCase())
      || obj.oldprice.toString().toLowerCase().includes(payload.toString().toLowerCase())
      || obj.price.toString().toLowerCase().includes(payload.toString().toLowerCase())
    )
    setProduct(newArray)
    refInputFind.current.value = ""
  }

  const handleSelectProduct = (payload) => {
    if (payload === "danh mục") setProduct(cloneProduct)
    else setProduct(cloneProduct2[`${payload}`])
  }

  const handleDeleteProduct = (key) => {
    setProduct(product.filter((obj, index) => index !== key))
  }

  return (
    <div className={clsx(style.product, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>quản lý sản phẩm</h1>
      <div className={clsx("d-flex justify-content-between mb-4")}>
        <div className='d-flex gap-4'>
          <div className='d-flex gap-2'>
            <input
              type="text"
              placeholder='Search ...'
              ref={refInputFind}
              className={clsx(style.inputFind, "ps-2")}
            />
            <button
              className={clsx(style.firstLetter, style.btn, style.btnFind, "fs-6")}
              onClick={() => handleFindProduct(refInputFind.current.value.toLowerCase())}
            >
              tìm kiếm
            </button>
          </div>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={e => handleSelectProduct(e.target.value.toLowerCase())}
          >
            {category.map((obj, index) => (
              <option value={obj} key={index}>{obj}</option>
            ))}
          </select>
        </div>
        <div
          className={clsx(style.addProduct, style.btn, 'd-flex justify-content-center align-items-center px-2 py-0')}
          onClick={() => { setCheck(true); setType("add") }}
        >
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
              <th scope="col" className='text-center align-middle text-capitalize'>stt</th>
              <th scope="col" className='text-center align-middle text-capitalize'>tên sản phẩm</th>
              <th scope="col" className='text-center align-middle text-capitalize'>hình ảnh</th>
              <th scope="col" className='text-center align-middle text-capitalize'>giá cũ</th>
              <th scope="col" className='text-center align-middle text-capitalize'>giá mới</th>
              <th scope="col" className='text-center align-middle text-capitalize'>dung lượng</th>
              <th scope="col" className='text-center align-middle text-capitalize'>màu sắc</th>
              <th scope="col" className='text-center align-middle text-capitalize'>tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {product.length === 0
              ? <tr>
                <td colSpan='8' className='fs-6 fw-bold text-center mt-5'>Không tìm thấy sản phẩm</td>
              </tr>
              : product.map((obj, index) => {
                return (<tr key={index}>
                  <td className={clsx(style.label, "text-center fw-bold")}>{index + 1}</td>
                  <td className={clsx(style.label, "text-center")}>{obj.name}</td>
                  <td className={clsx(style.label, "text-center")}>
                    <img className={clsx(style.img)} src={obj.image} alt="ảnh lỗi" />
                  </td>
                  <td className={clsx(style.label, "text-center")}>{obj.oldprice}</td>
                  <td className={clsx(style.label, "text-center")}>{obj.price}</td>
                  <td className={clsx(style.label, "text-center")}>
                    {Array.isArray(obj.capacity) ? obj.capacity.join(", ") : obj.capacity}
                  </td>
                  <td className={clsx(style.label, "text-center")}>
                    {Array.isArray(obj.color) ? obj.color.join(", ") : obj.color}
                  </td>
                  <td className={clsx(style.label, "d-flex gap-2 justify-content-center align-items-center")}>
                    <i
                      className={clsx(style.btnEdit, "bi bi-pencil-square")}
                      onClick={() => {
                        setCheck(true);
                        setKey(index);
                        setType("edit")
                      }}
                    ></i>
                    <i
                      className={clsx(style.btnDelete, "bi bi-x fs-4")}
                      onClick={() => handleDeleteProduct(index)}
                    ></i>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
      <Form
        item={product[key]}
        type={type}
        check={check}
        setCheck={setCheck}
        product={product}
        setProduct={setProduct}
      />
    </div>
  )
}

export default memo(Product)
