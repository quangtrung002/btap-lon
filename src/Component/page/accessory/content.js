import React, { memo, useCallback, useContext, useState } from 'react'

import style from "./accessory.module.scss"
import clsx from 'clsx'
import Category from './posts/category'
import Brand from './posts/brand'
import Price from './posts/price'
import Posts from './posts/posts'
import Pagenation from './posts/pagenation'

function Content({ accessory, cloneAccessory, setCloneAccessory }) {
  const [brand, setBrand] = useState(accessory.map(item => item.brand))
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPgae] = useState(15)
  const [checkBox, setCheckBox] = useState(false)

  const indexOfLastPage = currentPage * postsPerPage
  const indexOfFirstPage = indexOfLastPage - postsPerPage
  const currentPost = cloneAccessory.slice(indexOfFirstPage, indexOfLastPage)

  const category = [... new Set(accessory.map(item => item.category))]
  const price = ["đ0 - đ2.000.000", "đ2.000.000 - đ4.000.000", "đ4.000.000 - đ6.000.000", "đ6.000.000 - đ8.000.000", "đ8.000.000 - đ10.000.000"]

  const handleChangePage = useCallback((num) => {
    setCurrentPage(num)
  }, [])

  const handleFilterCategory = useCallback((strCategory) => {
    const newAccessory = accessory.filter(item => item.category.toLowerCase() === strCategory.toLowerCase())
    const newBrand = newAccessory.map(item => item.brand)
    setBrand(newBrand)
    setCloneAccessory(newAccessory)
  }, [])

  const handleFilterBrand = useCallback((strBrand) => {
    const newAccessory = cloneAccessory.filter(item => item.brand.toLowerCase() === strBrand.toLowerCase())
    setCloneAccessory(newAccessory)
  }, [])

  const handleFilterPrice = useCallback((strPrice) => {
    const newAccessory = cloneAccessory.filter(item => item.brand.toLowerCase() === strPrice.toLowerCase())
    setCloneAccessory(newAccessory)
  }, [])

  return (
    <div className='row my-4 '>
      <div className="col-lg-3 d-none d-lg-block">
        <div className={clsx(style.wrap)}>
          <Category
            category={category}
            handleFilterCategory={handleFilterCategory}
          />
          <Brand
            brand={brand}
            handleFilterBrand={handleFilterBrand}
          />
          <Price price={price} />
        </div>
      </div>
      <div className="col-lg-9 col-md-12">
        <Posts currentPost={currentPost} />
        <Pagenation
          postsPerPage={postsPerPage}
          totalPosts={cloneAccessory.length}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  )
}

export default memo(Content)
