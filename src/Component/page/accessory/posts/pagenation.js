import React, { memo, useCallback, useMemo, useState } from 'react'

import style from "../accessory.module.scss"
import clsx from 'clsx'

function Pagenation({ postsPerPage, totalPosts, handChangePage }) {

  const [active, setActive] = useState(1)
  const pageNumbers = useMemo(()=>{
    const newPageNumber = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      newPageNumber.push(i)
    }
    return newPageNumber
  },[totalPosts, postsPerPage])
  const scrollToTop = useCallback(()=>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  },[])

  console.log(pageNumbers)
  return (
    <div className='row'>
      <ul className={clsx(style.pagenation, 'd-flex justify-content-center gap-3 mt-5')}>
        {pageNumbers?.map(number => (
          <li key={number} className={clsx(style.pageItem)}>
            <span className={clsx('fw-bold fs-6 rounded-2', {
              [style.activePage]: active === number
            })}
              onClick={() => {
                scrollToTop()
                setActive(number)
                handChangePage(number)
              }}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Pagenation)
