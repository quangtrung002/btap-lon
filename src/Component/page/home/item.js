import React, { memo } from 'react'
import {Link} from "react-router-dom"
import clsx from 'clsx'
import style from "./home.module.scss"

function Item({ item }) {
  return (
    <div className={clsx("text-center")}>
      <h1 className={clsx(style.heading)}>iphone</h1>
      <div className='row g-lg-4 g-md-3'>
        {Array.from({ length: 4 }).map((item, index) => (
          <div className='col col-md-6 col-lg-3'>
            <div className={clsx(style.cart, "card border-0")} >
              <img src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/iPhone-13-pro-max.png" class="card-img-top" alt=".Ảnh lỗi" />
              <div class="card-body text-start ps-4">
                <p className={clsx(style.cartText, "card-text")}>
                  <h2>iphone 12</h2>
                  <div className={clsx(style.price, "d-flex gap-3")}>
                    <p className= {clsx(style.priceOld ,'d-flex position-relative')}>
                      <del>19.000.000 <ins className='position-absolute'>đ</ins></del>
                    </p>
                    <p className= {clsx(style.priceNew ,'d-flex position-relative')}>
                      <span>23.000.000</span>
                      <ins className='position-absolute'>đ</ins>
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/ipad" className={clsx(style.allItem, "d-flex justify-content-center")}>
        <button type="button" className={clsx(style.btnAllItem, "btn btn-outline-primary rounded-4 d-flex align-items-center")}>
          <p className={clsx(style.btnName)}>xem tất cả iphone</p>
          <i className={clsx(style.btnIcon, "bi bi-chevron-right")}></i>
        </button>
      </Link>
    </div>
  )
}

export default memo(Item)
