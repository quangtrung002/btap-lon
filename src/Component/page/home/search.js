import React, { memo } from 'react'
import clsx from 'clsx'
import style from "./home.module.scss"

function Search() {
  return (
    <div className={clsx(style.search)}>
      <div className="row">
        <div className='col'>
          <h1 className={clsx(style.heading, "h3 text-center m-0 p-0")}>đăng ký nhận tin từ ShopDunk</h1>
          <p className={clsx(style.paragragh, "text-center m-0 p-0")}>thông tin sản phẩm mới nhất và chương trình khuyến mãi</p>
          <div className={clsx(style.form, "d-flex gap-1")}>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='email của bạn' />
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Search)
