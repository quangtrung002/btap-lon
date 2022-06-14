import React, { memo } from 'react'
import clsx from 'clsx'
import style from './carts.module.scss'

function Notification({ carts }) {
  return (
    <>
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
          </>
      }
    </>
  )
}

export default memo(Notification)
