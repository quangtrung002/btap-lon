import React from 'react'

import style from "../accessory.module.scss"
import clsx from 'clsx'

function Posts({ currentPost }) {
  return (
    <div className="row g-3">
      {currentPost.map((item, index) => (
        <div className={clsx("col-sm-6 col-md-6 col-xl-4")} key={index}>
          <div className={clsx(style.card, "card")}>
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
  )
}

export default Posts
