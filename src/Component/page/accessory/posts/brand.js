import React, { memo, useCallback, useMemo, useRef } from 'react'

import style from "../accessory.module.scss"
import clsx from 'clsx'

function Brand({ brand, handleFilterBrand }) {
  const setBrand = [... new Set(brand)]

  const refBrand = useRef()
  const countItemBrand = useCallback(((arrayBrand, nameBrand) => {
    let count = 0;
    arrayBrand.forEach(item => {
      if (item === nameBrand) count++
    })
    return count
  }), [])
  const newBrand = useMemo(() => {
    return setBrand.map(item => {
      return {
        nameBrand : item,
        lenght: countItemBrand(brand, item)
      }
    })
  }, [brand])

  return (
    <div className={clsx(style.brand, "my-4")}>
      <h1 className={clsx(style.firstLetter, style.title, "fs-6 fw-bold mb-3")}>
        thương hiệu
      </h1>
      <div className={clsx(style.content)}>
        {newBrand.map((item, index) => (
          <div className={clsx(style.item, "form-check")} key={index}>
            <input
              className={clsx(style.checkbox, "form-check-input")}
              type="checkbox"
              value="" id="flexCheckDefault"
              ref={refBrand}
              onClick={() => handleFilterBrand(item)}
            />
            <label
              className={clsx(style.label, "form-check-label text-capitalize")}
              for="flexCheckDefault"
            >
              {`${item.nameBrand} (${item.lenght})`}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Brand)
