import clsx from 'clsx'
import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../../data'
import style from "./navbar.module.scss"

function Navbar() {
  const logo = navbar[0].image
  const [amount, setAmount] = useState(0)
  return (
    <header className={clsx(style.main)}>
      <div className={clsx(style.container, "container")}>
        <div className={clsx(style.row, "row")}>
          <nav className={clsx(style.navbar, "navbar navbar-expand-lg navbar-light p-0")}>
            <div className={clsx(style.containerFluid, "container-fluid ")}>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={clsx(style.iconTggle, "navbar-toggler-icon")}></span>
              </button>
              <Link to="/" class="navbar-brand" href="#">
                <img src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-8a81e75/wp-content/uploads/2021/10/Property-1White.svg" alt="" className={clsx(style.img, "d-inline-block align-text-top")} />
              </Link>
              <div className={clsx(style.collapse, "collapse navbar-collapse")} id="navbarSupportedContent">
                <ul className={clsx(style.navList, "navbar-nav d-flex")}>
                  {navbar.map(item => (
                    <li className={clsx(style.navItem, "nav-item flex-fill d-flex justify-content-center align-items-center")}>
                      <Link to={item.path} className={clsx(style.navLink, "nav-link active ")} aria-current="page" href="#">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a class="navbar-brand m-0" href="#">
                <i className={clsx(style.iconSearch, "bi bi-search")}></i>
              </a>
              <a className={clsx(style.bag, "navbar-brand m-0")} href="#">
                <i className={clsx(style.iconBag, "bi bi-bag")}></i>
                <span className={clsx(style.amount)}>{amount}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default memo(Navbar)

