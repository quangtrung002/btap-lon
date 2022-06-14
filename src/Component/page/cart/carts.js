import React, { memo, useCallback } from 'react'

import clsx from 'clsx'
import style from './carts.module.scss'

function Container({ carts }) {

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


  return (
    <>
      {carts.length === 0
        ? <></>
        : <div className='row g-4 mx-3'>
          <div className=' col-md-12 col-lg-7'>
            <div className={clsx(style.cart)}>
              <div className={clsx(style.tableItem, "border p-4")}>
                <div className='container-fluid'>
                  <div className='row'>
                    <label className={clsx(style.firstLetter, 'col-1 fw-bold fs-6')}></label>
                    <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}></label>
                    <label className={clsx(style.firstLetter, 'col-3 fw-bold fs-6')}>sản phẩm</label>
                    <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>giá</label>
                    <label className={clsx(style.firstLetter, 'col-1 fw-bold fs-6')}>số lượng</label>
                    <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>lượng tính</label>
                  </div>
                  {carts.map((obj, index) => (
                    <div
                      className='row d-flex align-items-center mt-4'
                      key={index}
                    >
                      <div className='col-1'>
                        <i className={clsx(style.btnDelete, "bi bi-x")}></i>
                      </div>
                      <div className='col'>
                        <img
                          className={clsx(style.img)}
                          src={obj.image}
                          alt="anh"
                        />
                      </div>
                      <div className='col-3'>
                        <label className={clsx(style.name, style.firstLetter, "fw-bold")}>
                          {obj.name}
                        </label>
                        <p className={clsx(style.color, style.firstLetter, "fw-bold")}>
                          {`chọn màu : ${obj.color}`}
                        </p>
                        <p className={clsx(style.capacity, style.firstLetter, "fw-bold")}>
                          {`chọn dung lượng : ${obj.capacity}`}
                        </p>
                      </div>
                      <div className='col'>
                        <span className={clsx(style.price)}>{obj.price}</span>
                      </div>
                      <div className='col-1'>
                        <div className='d-flex justify-content-around align-items-center border rounded-5'>
                          <span className={clsx(style.amount)}>1</span>
                          <div className='d-flex flex-column'>
                            <span>
                              <i className={clsx(style.btnUp, "bi bi-caret-up-fill m-0 p-0")}></i>
                            </span>
                            <span>
                              <i className={clsx(style.btnDown, "bi bi-caret-down-fill m-0 p-0")}></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='col'>
                        <span className={clsx(style.totalPrice)}>
                          {handlePrice(obj.totalPrice.toString())}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='border'>
              giỏ hàng
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default memo(Container)
