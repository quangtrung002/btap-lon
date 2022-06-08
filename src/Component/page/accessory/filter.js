import React, { memo, useContext, useRef, useState, useCallback } from 'react'
import { themeAccessory } from '.'

import style from "./accessory.module.scss"
import clsx from 'clsx'

function Filter({ cloneAccessory, setCloneAccessory }) {
  const [accessory, setAccessory] = useContext(themeAccessory)
  const refRange = useRef()
  const [valueRange, setValueRange] = useState("0")

  const selectCategory = ["Sản phẩm tương thích", "IPhone", "IPad", "Watch", "Mac"]
  const selectPrice = ['Lựa chọn...', 'Giá từ thấp lên cao', 'Giá từ cao xuống thấp']
  const selectBrand = [... new Set(accessory.map(item => item.brand.charAt(0).toUpperCase() + item.brand.slice(1)))]

  const classSelect = (index, key) => clsx(style.firstLetter, style.select, "form-select fs-6 ps-3",
    { [style.active]: index === key }
  )

  const handleValueRange = useCallback((num) => {
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
  }, [])

  const handleFilter = useCallback((strSelect, typeSelect) => {
    if (strSelect === selectCategory[0].toLowerCase() || strSelect === selectPrice[0].toLowerCase()) {
      setCloneAccessory(accessory)
    } else {
      switch (typeSelect) {
        case 0:
          setCloneAccessory(accessory.filter(item => item.brand.toLowerCase() === strSelect.toLowerCase()))
          break
        case 1:
          if (strSelect === selectPrice[1].toLowerCase()) {
            const newClontAccessory = accessory.sort((a, b) => {
              if (a.price && b.price) return a.price - b.price
              else if (!a.price && !b.price) return a.oldprice - b.oldprice
              else if (!a.price || !b.price) {
                if (!a.price) return a.oldprice - b.price
                else if (!b.price) return a.price - b.oldprice
              }
            })
            setCloneAccessory(newClontAccessory)
          }
          else if (strSelect === selectPrice[2].toLowerCase()) {
            const newClontAccessory = accessory.sort((a, b) => {
              if (a.price && b.price) return b.price - a.price
              else if (!a.price && !b.price) return b.oldprice - a.oldprice
              else if (!a.price || !b.price) {
                if (!a.price) return b.oldprice - a.price
                else if (!b.price) return b.price - a.oldprice
              }
            })
            setCloneAccessory(newClontAccessory)
          }
          break
        default: alert("not value")
      }
    }
  }, [])
  const handleFilterBrand = useCallback((strSelect) => {
    setCloneAccessory(accessory.filter(item => item.brand.toLowerCase() === strSelect.toLowerCase()))
  }, [])

  return (
    <>
      <div className='row d-none d-lg-block'>
        <div className='d-flex justify-content-between mt-5 gap-2'>
          {[selectCategory, selectPrice].map((obj, index) => (
            <form>
              <select
                className={classSelect(index, 0)}
                aria-label="Default select example"
                key={index}
                onChange={e => {
                  index === 0
                    ? handleFilter(e.target.value.toLowerCase(), 0)
                    : handleFilter(e.target.value.toLowerCase(), 1)
                }}
              >
                {obj.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </form>))}
        </div>
      </div>
      <div className='d-block d-lg-none d-xl-none d-xxl-none'>
        <form>
          <input
            type="text"
            className={clsx(style.firstLetter, style.input, "form-control mx-auto fs-6 py-2 my-4")}
            aria-label="Text input with checkbox"
            placeholder='Bạn muốn mua gì?'
            onChange={e => {
              setCloneAccessory(accessory.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
            }}
          />
          <div className='row gy-4'>
            {[selectCategory, selectBrand].map((obj, index) => (
              <div className='col-12' key={index}>
                <select
                  className={classSelect(index, index)}
                  aria-label="Default select example"
                  key={index}
                  onChange={e => index === 0
                    ? handleFilter(e.target.value.toLowerCase(), 0)
                    : handleFilterBrand(e.target.value.toLowerCase()
                    )}
                >
                  {obj.map((item, index) => (
                    <option key={index}>{item}</option>
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
              id="customRange2"
              ref={refRange}
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
                  onChange={e => handleFilter(e.target.value.toLowerCase(), 1)}
                >
                  {obj.map((item, index) => (
                    <option key={index}>{item}</option>
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
