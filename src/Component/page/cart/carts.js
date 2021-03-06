import React, { memo, useCallback, useEffect } from 'react'
import { Link } from "react-router-dom"

import clsx from 'clsx'
import style from './carts.module.scss'

function Container({ amountItems, setAmountItems, carts, setCarts }) {

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
  const handleItem = (carts, id, payload) => {
    switch (payload) {
      case "up":
        return carts.map(obj => {
          if (obj.id === id) {
            return {
              ...obj,
              amount: obj.amount + 1,
              totalPrice: (obj.amount + 1) * Number(obj.price.split(".").join(""))
            }
          }
          return obj
        })
      case "down":
        return carts.map(obj => {
          if (obj.id === id) {
            if (obj.amount === 1) {
              return obj
            }
            return {
              ...obj,
              amount: obj.amount - 1,
              totalPrice: (obj.amount - 1) * Number(obj.price.split(".").join(""))
            }
          }
          return obj
        })
      case "delete":
        setAmountItems(amountItems - 1)
        return carts.filter(obj => obj.id !== id)
      default:
        throw new Error("Invalid value")
    }
  }

  const handleTotalPrice = useCallback((carts) => {
    const total = carts.reduce((initValue, obj) => initValue + obj.totalPrice, 0)
    return handlePrice(total.toString())
  }, [carts])
  const resultPriceTotal = handleTotalPrice(carts)

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
                    <label className={clsx(style.firstLetter, 'col-3 fw-bold fs-6')}>s???n ph???m</label>
                    <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>gi??</label>
                    <label className={clsx(style.firstLetter, 'col-1 fw-bold fs-6')}>s??? l?????ng</label>
                    <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>l?????ng t??nh</label>
                  </div>
                  {carts.map((obj, index) => (
                    <div
                      className='row d-flex align-items-center mt-4'
                      key={index}
                    >
                      <div className='col-1'>
                        <i
                          className={clsx(style.btnDelete, "bi bi-x")}
                          onClick={() => {
                            const newArray = handleItem(carts, obj.id, "delete")
                            setCarts(newArray)
                          }}
                        >

                        </i>
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
                          {`ch???n m??u : ${obj.color}`}
                        </p>
                        <p className={clsx(style.capacity, style.firstLetter, "fw-bold")}>
                          {`ch???n dung l?????ng : ${obj.capacity}`}
                        </p>
                      </div>
                      <div className='col'>
                        <span className={clsx(style.price)}>{obj.price}</span>
                      </div>
                      <div className='col-1'>
                        <div className='d-flex justify-content-around align-items-center border rounded-5'>
                          <span className={clsx(style.amount)}>{obj.amount}</span>
                          <div className='d-flex flex-column'>
                            <span>
                              <i
                                className={clsx(style.btnUp, "bi bi-caret-up-fill m-0 p-0")}
                                onClick={() => {
                                  const newArray = handleItem(carts, obj.id, "up")
                                  setCarts(newArray)
                                }}>
                              </i>
                            </span>
                            <span>
                              <i
                                className={clsx(style.btnDown, "bi bi-caret-down-fill m-0 p-0")}
                                onClick={() => {
                                  const newArray = handleItem(carts, obj.id, "down")
                                  setCarts(newArray)
                                  console.log(carts)
                                }}
                              >
                              </i>
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
            <div className='border p-4'>
              <h1 className={clsx(style.firstLetter, 'fs-6 fw-bold ')}>t???ng gi??? h??ng</h1>
              <div className='d-flex justify-content-between mt-4 mb-5'>
                <p className={clsx(style.firstLetter, style.labelFontSize, "fw-bold")}>t???m t??nh:</p>
                <span className={clsx(style.resultTotal, "fw-bold fs-6")}>
                  {resultPriceTotal}??
                </span>
              </div>
              <div className='border-bottom pb-2'>
                <h1 className={clsx(style.firstLetter, style.labelFontSize, "fw-bold mb-2")}>giao h??ng</h1>
                <div class="form-check">
                  <input className={clsx(style.notBoxShadow, "form-check-input")} type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                  <label className={clsx(style.firstLetter, style.labelFontSize, "form-check-label")} for="flexRadioDefault1">
                    nh???n m??y t???i c???a h??ng
                  </label>
                </div>
                <div class="form-check">
                  <input className={clsx(style.notBoxShadow, "form-check-input")} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className={clsx(style.firstLetter, style.labelFontSize, "form-check-label")} for="flexRadioDefault1">
                    nh???n m??y t???i nh??
                  </label>
                </div>
              </div>
              <div className='d-flex justify-content-between mt-3'>
                <p className={clsx(style.firstLetter, style.labelFontSize, "fw-bold")}>t???ng:</p>
                <span className={clsx(style.resultTotal, "fw-bold fs-6")}>{resultPriceTotal}??</span>
              </div>
              <Link to="/checkout">
                <button
                  className={clsx(style.firstLetter, style.notBoxShadow, style.labelFontSize, style.btnTotal, "btn border rounded-5 mt-4 text-center fw-bold text-light fs-6")}
                >
                  thanh to??n
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default memo(Container)
