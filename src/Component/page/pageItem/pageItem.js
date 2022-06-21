import React, { memo, useEffect } from "react";
import clsx from "clsx";
import style from "./pageItem.module.scss";
import { Link } from "react-router-dom";

function PageItem({
  heading,
  pathImg,
  allitem,
  posts,
  imgCardsm,
  namecardsm,
  imgCardsm2,
  type,
}) {
  useEffect(() => {
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    backToTop();
  }, []);

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
                    className={clsx(style.dotSlidemn, "active")}
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    className={clsx(style.dotSlidemn, "active")}
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    className={clsx(style.dotSlidemn, "active")}
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
                {/* next 1 */}
                <button
                  className={clsx(style.btnnext, "carousel-control-prev")}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className={clsx(
                      style.btnnextnho,
                      "carousel-control-prev-icon"
                    )}
                    aria-hidden="true"
                  ></span>
                  <span className={clsx(style.nexticon, "visually-hidden")}>
                    Previous
                  </span>
                </button>
                {/* next 2 */}
                <button
                  className={clsx(style.btnnext, "carousel-control-next")}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className={clsx(
                      style.btnnextnho,
                      "carousel-control-next-icon"
                    )}
                    aria-hidden="true"
                  ></span>
                  <span className={clsx(style.nexticon, "visually-hidden")}>
                    Next
                  </span>
                </button>
              </div>
            </div>

            {/* thanh chon loai may */}
            <div className={clsx(style.Chonmay, "d-flex gap-2")}>
              {allitem.map((item, index) => (
                <button
                  type="button"
                  className={clsx(style.Chonkhungnho, "btn")}
                  disabled=""
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Xem chi tiet may */}
        <div className="row g-3 g-xs-3 g-sm-3 g-md-3 g-lg-4 ">
          {posts.map((item, index) => (
            <Link
              to={`/${heading.toLowerCase() + "/" + item.id}`}
              className="col-xs-12 col-sm-6 col-md-6 col-lg-3"
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
                        <del className={clsx(style.cardOldPrice, "me-2")}>
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
                      className={clsx(style.cardSale, style.firstLetter)}
                    >{`giảm ${item.sale}`}</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Card so sánh */}
        <span className={clsx(style.bottomCard, "row g-3 g-xs-3 g-sm-3 g-md-3 g-lg-4")}>
          {/* cột 1 */}

          {type !== "not" ? (
            <>
              <span className={clsx(style.cardngoai, "col-md-6")}>
                <div
                  className={clsx(
                    style.cardtrong,
                    "card mb-3 max-width: 540px;"
                  )}
                >
                  <div className={clsx(style.cardnho, "row g-0")}>
                    <div class="col-md-4">
                      <img src={imgCardsm} alt="ảnh" />
                    </div>
                    <div className={clsx(style.cardchuAll, "col-md-8")}>
                      <div className={clsx(style.cardchunho, "card-body")}>
                        <h1 class="card-title">
                          Tìm {namecardsm}
                          <br />
                          phù hợp với bạn
                        </h1>
                        <small className="d-flex align-items-center">
                          So sánh các {namecardsm}
                          <i class="bi bi-chevron-right"></i>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
              {/* Cột số 2 */}
              <span className={clsx(style.cardngoai, "col-md-6")}>
                <div
                  className={clsx(
                    style.cardtrong,
                    "card mb-3 max-width: 540px;"
                  )}
                >
                  <div className={clsx(style.cardnho, "row g-0")}>
                    <div class="col-md-4">
                      <img src={imgCardsm2} alt="ảnh" />
                    </div>
                    <div className={clsx(style.cardchuAll, "col-md-8")}>
                      <div className={clsx(style.cardchunho, "card-body")}>
                        <h1 class="card-title">
                          Phụ kiện {namecardsm}
                          <br />
                          thường mua kèm
                        </h1>
                        <small className="d-flex align-items-center">
                          Tìm các phụ kiện {namecardsm}
                          <i class="bi bi-chevron-right"></i>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </>
          ) : (
            <></>
          )}
        </span>
      </div>
      <div className={clsx(style.search)}>
        <div className="row">
          <div className="col">
            <h1 className={clsx(style.heading, "h3 text-center m-0 p-0")}>
              đăng ký nhận tin từ ShopDunk
            </h1>
            <p className={clsx(style.paragragh, "text-center m-0 p-0")}>
              thông tin sản phẩm mới nhất và chương trình khuyến mãi
            </p>
            <div className={clsx(style.form, "d-flex gap-1")}>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="email của bạn"
              />
              <button type="button" class="btn btn-primary">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(PageItem);
