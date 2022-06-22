import React, { memo } from 'react'
import { Link, Routes, Route } from "react-router-dom"

import clsx from 'clsx'
import style from './admin.module.scss'
import Home from './home'
import Customer from './customer'
import Product from './product'
import Order from './order'

function Content() {
  const page = [
    {
      icon: "<i class=\"bi bi-house-door-fill\"></i>",
      name: "trang chủ Admin",
      path: "/admin/"
    },
    {
      icon: "<i class=\"bi bi-person-fill\"></i>",
      name: "quản lý khách hàng",
      path: "/admin/customer"
    },
    {
      icon: "<i class=\"bi bi-list-task\"></i>",
      name: "quản lý sản phẩm",
      path: "/admin/product"
    },
    {
      icon: "<i class=\"bi bi-cart-fill\"></i>",
      name: "quản lý đơn hàng",
      path: '/admin/order'
    }
  ]
  return (
    <div className={clsx(style.admin)}>
      <div className={clsx(style.col1, "p-3")}>
        <div className='d-flex flex-column justify-content-between'>
          {page.map((obj, index) => (
            <Link to={obj.path} key={index} className="d-flex gap-2 align-items-center mb-2">
              <span className={clsx(style.icon, "fs-4 text-white-50")} dangerouslySetInnerHTML={{ __html: obj.icon }}></span>
              <span className={clsx(style.firstLetter, style.label, "fs-6 text-white-50")}>{obj.name}</span>
            </Link>
          ))}
        </div>
        <div className={clsx(style.logout)}>
          <button
            type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
            onClick={() => window.location.reload()}
          >
            <div className="d-flex gap-2 align-items-center">
              <span className={clsx(style.firstLetter, "text-white-50")}>logout</span>
              <i class="bi bi-box-arrow-right text-white-50"></i>
            </div>
          </button>
        </div>
      </div>
      <div className={clsx(style.col2, "p-3")}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  )
}

export default memo(Content)
