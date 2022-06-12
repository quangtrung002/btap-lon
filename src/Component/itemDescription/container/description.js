import React, { memo } from 'react'

import clsx from 'clsx'
import style from "../itemDes.module.scss"

function Description({ item }) {
  return (
    <div className={clsx(style.description, "mt-4")}>
      <div className={clsx(style.price)}>
        {
          item.price && item.oldprice
            ? <>
              <del className={clsx(style.cardOldPrice, "me-3 fs-5")}>
                {item.oldprice}
                <span className={clsx(style.dong)}>đ</span>
              </del>
              <span className={clsx(style.cardNewPrice , "fs-4")}>
                {item.price}
                <span className={clsx(style.dong)}>đ</span>
              </span>
            </>
            : item.oldprice
              ? <span className={clsx(style.cardOldPrice, "fs-5")}>
                {item.oldprice}
                <span className={clsx(style.dong)}>đ</span>
              </span>
              : <span className={clsx(style.cardNewPrice, "fs-4")}>
                {item.price}
                <span className={clsx(style.dong)}>đ</span>
              </span>
        }
        <p className={clsx(style.firstLetter, style.abc)}>
          trả góp từ
          <span className="fw-bold mx-1">2.582.000</span>
          đ/tháng
        </p>
      </div>
    </div>
  )
}

export default memo(Description)
