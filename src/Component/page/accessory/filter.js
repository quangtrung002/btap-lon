import React, { memo, useContext, useRef, useState } from 'react'
import { themeAccessory } from '.'

import style from "./accessory.module.scss"
import clsx from 'clsx'

function Filter() {
  const [accessory, setAccessory] = useContext(themeAccessory)
  const refRange = useRef()
  const [valueRange, setValueRange] = useState("0")

  const selectCategory = ["Sản phẩm tương thích", "IPhone", "IPad", "Watch", "Mac"]
  const selectPrice = ['Lựa chọn...', 'Giá từ thấp lên cao', 'Giá từ cao xuống thấp']
  const selectBrand = [... new Set(accessory.map(item => item.brand.charAt(0).toUpperCase() + item.brand.slice(1)))]

  const classSelect = (index, key) => clsx(style.firstLetter, style.select, "form-select fs-6 ps-3",
    { [style.active]: index === key }
  )

  const handleValueRange = (num) => {
    let resultRange = ""
    if (num.length % 3 === 0) {
      for (let i = 1; i <= num.length / 3; i++) {
        resultRange = resultRange + num.slice((i - 1) * 3, i * 3).toString() + "."
      }
    }
    else {
      const surplus = num.length % 3
      resultRange += num.slice(0, surplus) + "."
      for (let i = 1; i < num.length / 3; i++) {
        resultRange = resultRange + num.slice((i - 1) * 3 + surplus, i * 3 + surplus).toString() + "."
      }
    }
    setValueRange(resultRange.substring(0, resultRange.length - 1))
  }

  return (
    <>
      <div className='row d-none d-lg-block'>
        <div className='d-flex justify-content-between mt-5'>
          {[selectCategory, selectPrice].map((obj, index) => (
            <form>
              <select
                className={classSelect(index, 0)}
                aria-label="Default select example"
                key={index}
              >
                {obj.map((item, index) => (
                  <option
                    selected={index === 0 ? true : false}
                    value={item}
                    key={index}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </form>))}
        </div>
      </div>
      <div className='d-block d-lg-none d-xl-none d-xxl-none'>
        <form>
          <input type="text" className={clsx(style.firstLetter, style.input, "form-control mx-auto fs-6 py-2 my-4")} aria-label="Text input with checkbox" placeholder='Bạn muốn mua gì?' />
          <div className='row gy-4'>
            {[selectCategory, selectBrand].map((obj, index) => (
              <div className='col-12'>
                <select
                  className={classSelect(index, index)}
                  aria-label="Default select example"
                  key={index}
                >
                  {obj.map((item, index) => (
                    <option
                      selected={index === 0 ? true : false}
                      value={item}
                      key={index}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className={clsx(style.range)}>
            <label for="customRange2" className={clsx(style.label, "form-label ps-3 fw-bold fs-6 mt-4 mb-2")}>Example range</label>
            <input
              type="range"
              class="form-range"
              min="0" max="25000000"
              id="customRange2" ref={refRange}
              onClick={() => handleValueRange(refRange.current.value.toString())}
            />
            <label for="customRange2" className={clsx(style.label, "form-label ps-3 fw-bold fs-6 my-2")}>{`${valueRange}đ - 25.000.000đ`}</label>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='d-block mt-4'>
              {[selectPrice].map((obj, index) => (
                <select
                  className={classSelect(index, 1)}
                  aria-label="Default select example"
                  key={index}
                >
                  {obj.map((item, index) => (
                    <option
                      selected={index === 0 ? true : false}
                      value={item}
                      key={index}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default memo(Filter)
