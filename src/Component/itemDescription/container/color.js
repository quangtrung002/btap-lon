import React, { useContext, useState } from 'react'

import clsx from 'clsx'
import style from "../itemDes.module.scss"
import { themeInforItem } from '..'

function Color({ item }) {
  const [activeColor, setActiveColor] = useState({
    index: 0,
    payload: item.color[0]
  })

  const [inforItem, setInforItem] = useContext(themeInforItem)

  const classBtn = index => clsx("btn border bg-light rounded-3", {
    [style.activeColor]: activeColor.index === index
  })
  return (
    <div className={clsx(style.color, "")}>
      <p className={clsx(style.label, style.firstLetter, "fs-6 mb-3")}>
        chọn màu:
        <span className='ms-1'>{activeColor.payload}</span>
      </p>
      <div className='d-flex gap-2'>
        {item.color?.map((color, index) => {
          const resultClass = classBtn(index)
          return (
            <button
              key={index}
              className={resultClass}
              onClick={() => {
                setActiveColor({
                  index,
                  payload: color
                })
                setInforItem(
                  inforItem.map(obj => {
                    if(obj.name.toLowerCase() === item.name.toLowerCase()){
                      return {...obj, color}
                    }
                    return obj
                  }))
              }}
            >
              {color}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Color
