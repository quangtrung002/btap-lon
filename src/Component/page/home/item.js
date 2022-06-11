import React, { memo } from 'react'
import { Link } from "react-router-dom"
import clsx from 'clsx'
import style from "./home.module.scss"

function Item({ heading, items, button, path }) {
  return (
    <div className={clsx("text-center")}>
      <h1 className={clsx(style.heading)}>{heading}</h1>
      <div className='row g-lg-4 g-md-3'>
        {items.slice(0, 4).map((item, index) => (
          <div className='col col-md-6 col-lg-3' key={index}>
            <div className={clsx(style.card, "card text-start")}>
              <img
                src={item.image}
                className={clsx(style.cardImg, "card-img-top py-4")}
                alt={item.id}
              />
              <div className={clsx(style.cartBody, "card-body px-4")}>
                <h5 className={clsx(style.cardTitle, "card-title")}>{item.name}</h5>
                <p className={clsx(style.cardPrice, "card-text")}>
                  {
                    item.price && item.oldprice
                      ? <>
                        <del className={clsx(style.cardOldPrice, "me-2")}>{item.oldprice}
                          <span className={clsx(style.dong)}>đ</span>
                        </del>
                        <span className={clsx(style.cardNewPrice)}>
                          {item.price}
                          <span className={clsx(style.dong)}>đ</span>
                        </span>
                      </>
                      : item.oldprice
                        ? <span className={clsx(style.cardOldPrice)}>
                          {item.oldprice}
                          <span className={clsx(style.dong)}>đ</span>
                        </span>
                        : <span className={clsx(style.cardNewPrice)}>
                          {item.price}
                          <span className={clsx(style.dong)}>đ</span>
                        </span>
                  }
                </p>
                {
                  item.sale && <div className={clsx(style.cardSale, style.firstLetter)}>{`giảm ${item.sale}`}</div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to={path} className={clsx(style.allItem, "d-flex justify-content-center")}>
        <button type="button" className={clsx(style.btnAllItem, "btn btn-outline-primary rounded-4 d-flex align-items-center gap-1")}>
          <p className={clsx(style.btnName)}>{button}</p>
          <i className={clsx(style.btnIcon, "bi bi-chevron-right")}></i>
        </button>
      </Link>
    </div>
  )
}

export default memo(Item)
