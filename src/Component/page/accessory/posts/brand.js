import React, { memo } from 'react'

import style from "../accessory.module.scss"
import clsx from 'clsx'

function Brand({ brand }) {
  return (
    <div className={clsx(style.brand, "my-4")}>
      <h1 className={clsx(style.firstLetter, style.title, "fs-6 fw-bold mb-3")}>
        thương hiệu
      </h1>
      <div className={clsx(style.content)}>
        {brand.map((item, index) => (
          <div className={clsx(style.item, "form-check")} key={index}>
            <input
              className={clsx(style.checkbox, "form-check-input")}
              type="checkbox"
              value="" id="flexCheckDefault"
            />
            <label
              className={clsx(style.label, "form-check-label text-capitalize")}
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

export default memo(Brand)
