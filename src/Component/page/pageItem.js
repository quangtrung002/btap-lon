import React, { memo } from "react";

import clsx from "clsx";
import style from "./pageItem.module.scss";

function PageItem({ heading, pathImg, allitem, posts }) {
  console.log(posts);
  return (
    <div className="main">
      <h1>{heading}</h1>
      {/* anh slide */}
      <div
        id="carouselExampleIndicators"
        className="Slider"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
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
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* thanh chon loai may */}
      <div class="Chonmay">
        {allitem.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>

      <div>
        {posts.map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    </div>
  );
}

export default memo(PageItem);
