import React, { memo } from 'react'

import style from "../accessory.module.scss"
import clsx from 'clsx'

function Category({ category }) {
  return (
    <div className={clsx(style.category)}>
      <h1 className={clsx(style.firstLetter, style.title, "fs-6 fw-bold mb-3")}>
        danh mục sản phẩm
      </h1>
      <div className={clsx(style.content)}>
        {category.map((item, index) => (
          <div className={clsx(style.item, "form-check")} key={index}>
            <input
              className={clsx(style.radio, "form-check-input")}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className={clsx(style.firstLetter, style.label, "form-check-label fs-6")}
              for="flexRadioDefault1">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Category)
