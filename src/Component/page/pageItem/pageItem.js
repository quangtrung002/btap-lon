import React, { memo } from "react";

import clsx from "clsx";
import style from "./pageItem.module.scss";
import { Link } from "react-router-dom";

function PageItem({ heading, pathImg, allitem, posts }) {
  console.log(posts);

  return (
    <div className={clsx(style.wrap)}>
      <div className="container">
        <div className="row">
          <div className={clsx(style.main)}>
            <h1 className={clsx(style.Header)}>{heading}</h1>
            {/* anh slide */}
            <div className={clsx(style.Slider)}>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="true"
              >
                <div className={clsx(style.dotSlide, "carousel-indicators")}>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={pathImg} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pathImg} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pathImg} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* thanh chon loai may */}
            <div className={clsx(style.Chonmay, "d-flex gap-2")}>
              {allitem.map((item) => (
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  disabled=""
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Xem chi tiet may */}
          </div>
        </div>
        <div className="row g-3">
          {posts.map((item, index) => (
            <Link
              to={`/${heading.toLowerCase() + "/" + item.id}`}
              className="col col-md-6 col-lg-3"
              key={index}
            >
              <div className={clsx(style.card, "card text-start")}>
                <img
                  src={item.image}
                  className={clsx(style.cardImg, "card-img-top py-4")}
                  alt={item.id}
                />
                <div className={clsx(style.cartBody, "card-body px-4")}>
                  <h5 className={clsx(style.cardTitle, "card-title")}>
                    {item.name}
                  </h5>
                  <p className={clsx(style.cardPrice, "card-text")}>
                    {item.price && item.oldprice ? (
                      <>
                        <del
                          className={clsx(style.cardOldPrice, "me-2")}
                        >
                          {item.oldprice}
                          <span className={clsx(style.dong)}>đ</span>
                        </del>
                        <span className={clsx(style.cardNewPrice)}>
                          {item.price}
                          <span className={clsx(style.dong)}>đ</span>
                        </span>
                      </>
                    ) : item.oldprice ? (
                      <span className={clsx(style.cardOldPrice)}>
                        {item.oldprice}
                        <span className={clsx(style.dong)}>đ</span>
                      </span>
                    ) : (
                      <span className={clsx(style.cardNewPrice)}>
                        {item.price}
                        <span className={clsx(style.dong)}>đ</span>
                      </span>
                    )}
                  </p>
                  {item.sale && (
                    <div
                      className={clsx(
                        style.cardSale,
                        style.firstLetter
                      )}
                    >{`giảm ${item.sale}`}</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default memo(PageItem);
