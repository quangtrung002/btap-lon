import React, { memo, useContext, useState } from 'react'
import { themeContextApp } from '../../../App'

import clsx from "clsx"
import style from "./checkout.module.scss"
import Form from './component/form'
import InforCart from './component/inforCart'
import ThanhToan from './component/thanhToan'

function Checkout() {
  const [,setAmountItems , carts, setCarts] = useContext(themeContextApp)
  const [activeBtn, setActiveBtn] = useState(1)

  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.container)}>
        {carts.length === 0
          ? <div className='container'>
            <div className="row mx-3">
              <div className='col'>
                <h1 className={clsx(style.firstLetter, "fs-1 text-center mt-3 mb-5")}>thanh toán</h1>
                <div className={clsx(style.notificationEmpty, "d-flex gap-2 align-items-center mb-5")}>
                  <span>
                    <i className={clsx(style.icon, "bi bi-clipboard")}></i>
                  </span>
                  <span className={clsx(style.firstLetter, style.label)}>
                    chưa có sản phẩm nào trong giỏ hàng
                  </span>
                </div>
              </div>
            </div>
          </div>
          : <div className='container'>
            <div className={clsx(style.checkout)}>
              <h1 className={clsx(style.firstLetter, style.heading, "fs-1 text-center mt-3 mb-5")}>thanh toán</h1>
              <div className='d-flex justify-content-center gap-3 mb-2'>
                <a
                  href='#'
                  className={clsx(style.btn, "text-uppercase fw-bold", {
                    [style.activeBtn]: activeBtn === 1
                  })}
                  onClick={() => setActiveBtn(1)}
                >
                  1.Đặt hàng
                </a>
                <a
                  href='#thanhtoan'
                  className={clsx(style.btn, 'text-uppercase fw-bold', {
                    [style.activeBtn]: activeBtn === 2
                  })}
                  onClick={() => setActiveBtn(2)}
                >
                  2.Thanh toán
                </a>
              </div>
              <div className='d-flex flex-column gap-3'>
                <InforCart carts={carts} />
                <Form carts={carts} />
                <ThanhToan setCarts={setCarts} setAmountItems = {setAmountItems} />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default memo(Checkout)
