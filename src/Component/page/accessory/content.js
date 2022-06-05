import React, { memo, useCallback, useContext, useState } from 'react'

import style from "./accessory.module.scss"
import clsx from 'clsx'
import Category from './posts/category'
import Brand from './posts/brand'
import Price from './posts/price'
import Posts from './posts/posts'
import Pagenation from './posts/pagenation'

function Content({ accessory }) {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPgae] = useState(15)

  const indexOfLastPage = currentPage * postsPerPage
  const indexOfFirstPage = indexOfLastPage - postsPerPage
  const currentPost = accessory.slice(indexOfFirstPage, indexOfLastPage)

  const brand = [... new Set(accessory.map(item => item.brand))]
  const category = [... new Set(accessory.map(item => item.category))]
  const price = ["đ0 - đ2.000.000", "đ2.000.000 - đ4.000.000", "đ4.000.000 - đ6.000.000", "đ6.000.000 - đ8.000.000", "đ8.000.000 - đ10.000.000"]

  const handChangePage = useCallback((num) => {
    setCurrentPage(num)
  }, [])

  return (
    <div className='row my-4 '>
      <div className="col-lg-3 d-none d-lg-block">
        <div className={clsx(style.wrap)}>
          <Category category={category} />
          <Brand brand={brand} />
          <Price price={price} />
        </div>
      </div>
      <div className="col-lg-9 col-md-12">
        <Posts currentPost={currentPost} />
        <Pagenation
          postsPerPage={postsPerPage}
          totalPosts={accessory.length}
          handChangePage={handChangePage}
        />
      </div>
    </div>
  )
}

export default memo(Content)
