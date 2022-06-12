import React, { memo, useCallback, useContext, useEffect, useState } from 'react'
import { themeContextApp } from '../../../App'
import { themeInforItem } from '..'

import clsx from 'clsx'
import style from "../itemDes.module.scss"

function Cart({ item }) {
  const [count, setCount] = useState(1)
  const [, , carts, setCarts] = useContext(themeContextApp)
  const [inforItem, setInforItem] = useContext(themeInforItem)
  useEffect(() => {
    setInforItem(inforItem.map(obj => {
      return {
        ...obj,
        amount: count,
        totalPrice: count * Number(obj.price.split(".").join(""))
      }
    }))
  }, [count])

  const handleUpCount = () => setCount(count + 1)
  const handleDownCount = () => count > 1 ? setCount(count - 1) : ""
  const handAddCart = useCallback((id, image, name, color, capacity, price, amount, totalPrice) => {
    setCarts(carts.map(obj => {
      if (obj.name.toLowerCase() === item.name.toLowerCase()) {
        return {
          ...obj,
          amount: obj.amount + 1
        }
      }
    }))
  }, [carts])


  return (
    <div className={clsx(style.cart, "d-flex gap-3 mt-4")}>
      <div className='d-flex align-items-center bg-light gap-3 py-1 px-2 border rounded-3'>
        <span>{count}</span>
        <div className='d-flex flex-column gap-1'>
          <i
            className={clsx(style.btnUpCount, "bi bi-caret-up-fill p-0 m-0 text-center rounded-1")}
            onClick={handleUpCount}
          ></i>
          <i
            className={clsx(style.btnDownCount, "bi bi-caret-down-fill p-0 m-0 text-center rounded-1")}
            onClick={handleDownCount}
          ></i>
        </div>
      </div>
      <button
        className={clsx(style.btnAdd, "btn rounded-5 text-light text-uppercase fw-bold fs-6 px-5")}
        onClick={() => {
          handAddCart()
        }}
      >
        thêm vào giỏ hàng
      </button>
    </div>
  )
}

export default memo(Cart)
