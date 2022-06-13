import React, { memo, useContext } from 'react'

import clsx from 'clsx'
import style from './carts.module.scss'
import { themeContextApp } from '../../../App'

function Carts() {
  const [, , carts, setCarts] = useContext(themeContextApp)
  console.log(carts)

  return (
    <div className='container-fluid py-5' >
      <h1 className={clsx(style.title, style.firstLetter, "text-center fs-2 mb-3")}>giỏ hàng</h1>
      {
        carts.length === 0
          ? <div className="row mx-3">
            <div className='col'>
              <div className={clsx(style.notificationEmpty, "d-flex gap-2 align-items-center")}>
                <span>
                  <i className={clsx(style.icon, "bi bi-clipboard")}></i>
                </span>
                <span className={clsx(style.firstLetter, style.label)}>
                  chưa có sản phẩm nào trong giỏ hàng
                </span>
              </div>
            </div>
          </div>
          : <>
            <div className="row mx-3 mb-4">
              <div className="col">
                <div className={clsx(style.notificationNotEmpty, "d-flex align-items-center")}>
                  <span>
                    <i className={clsx(style.icon, "bi bi-check-circle-fill")}></i>
                  </span>
                  <span className={clsx(style.firstLetter, style.label)}>
                    {`${carts[carts.length - 1].name} đã được thêm vào giỏ hàng. Cảm ơn bạn đã chọn ShopDunk!`}
                  </span>
                </div>
              </div>
            </div>
            <div className='row g-4 mx-3'>
              <div className=' col-md-12 col-lg-7'>
                <div className={clsx(style.cart)}>
                  <div className={clsx(style.tableItem, "border p-4")}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <label className={clsx(style.firstLetter, 'col-1 fw-bold fs-6')}></label>
                        <label className={clsx(style.firstLetter, 'col-1 fw-bold fs-6')}></label>
                        <label className={clsx(style.firstLetter, 'col-3 fw-bold fs-6')}>sản phẩm</label>
                        <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>giá</label>
                        <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>số lượng</label>
                        <label className={clsx(style.firstLetter, 'col fw-bold fs-6')}>lượng tính</label>
                      </div>
                      <div className='row d-flex align-items-center'>
                        <div className='col-1'><i class="bi bi-x"></i></div>
                        <div className='col-1'>
                          <img src='' alt = "anh"/>
                        </div>
                        <div className='col-3'>name</div>
                        <div className='col'>
                          price
                        </div>
                        <div className='col'>
                          <div className='d-flex justify-content-around align-items-center border'>
                            <span>1</span>
                            <div className='d-flex flex-column'>
                              <span><i class="bi bi-caret-up-fill"></i></span>
                              <span><i class="bi bi-caret-down-fill"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className='col'>
                          totalPrice
                        </div>
                      </div>
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
          </>
      }

    </div>
  )
}

export default memo(Carts)
