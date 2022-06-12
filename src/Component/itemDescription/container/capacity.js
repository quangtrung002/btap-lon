import React, { useContext, useState } from 'react'

import clsx from 'clsx'
import style from "../itemDes.module.scss"
import { themeInforItem } from '..'

function Capacity({ item }) {
  const [activeCapacity, setActiveCapacity] = useState({
    index: 0,
    payload: item.capacity[0]
  })
  const [inforItem, setInforItem] = useContext(themeInforItem)

  const classBtn = index => clsx("btn border bg-light rounded-3", {
    [style.activeCapacity]: activeCapacity.index === index
  })

  return (
    <div className={clsx(style.capacity)}>
      <p className={clsx(style.label, style.firstLetter, "fs-6 my-3")}>
        chọn màu:
        <span className='ms-1'>{activeCapacity.payload}</span>
      </p>
      <div className='d-flex gap-2'>
        {item.capacity?.map((capacity, index) => {
          const resultClass = classBtn(index)
          return (
            <button
              key={index}
              className={resultClass}
              onClick={() => {
                setActiveCapacity({
                  index,
                  payload: capacity
                })
                setInforItem(
                  inforItem.map(obj => {
                    if (obj.name.toLowerCase() === item.name.toLowerCase()) {
                      return { ...obj, capacity }
                    }
                    return obj
                  }))
              }}
            >
              {capacity}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Capacity
