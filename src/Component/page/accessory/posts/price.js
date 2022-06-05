import React, { memo } from 'react'

import style from "../accessory.module.scss"
import clsx from 'clsx'

function Price({ price }) {
  return (
    <div className={clsx(style.price)}>
      <h1 className={clsx(style.firstLetter, style.title, "fs-6 fw-bold mb-3")}>
        price
      </h1>
      <div className={clsx(style.content)}>
        {price.map((item, index) => (
          <div className={clsx(style.item, "form-check")} key={index}>
            <input
              className={clsx(style.checkbox, "form-check-input")}
              type="checkbox"
              value="" id="flexCheckDefault"
            />
            <label
              className={clsx(style.label, "form-check-label")}
              for="flexCheckDefault"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Price)
