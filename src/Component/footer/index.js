import React, { memo, useState } from 'react'
import clsx from 'clsx'
import style from "./footer.module.scss"

function Footer() {
  const [togle, setTogle] = useState(false)
  const [idex, setIndex] = useState(null)
  const item = (heading, obj) => {
    return (
      <>
        <h1 className={clsx(style.heading)}>{heading}</h1>
        <ul className={clsx(style.list)}>
          {obj.map((item, index) => (
            <li className={clsx(style.item)} key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </>
    )
  }
  const item2 = (heading, obj, id, index) => {
    const resultActice = togle === true && idex - 1 === index ? true : false
    return (
      <div className={clsx(style.main)} onClick={() => { setTogle(!togle); setIndex(id) }}>
        <div className={clsx(style.col1)}>
          <h1 className={clsx("ps-2")}>{heading}</h1>
          <span className={clsx({ [style.active]: togle }, "ps-2")}>
            <i class="bi bi-chevron-down"></i>
          </span>
        </div>
        <div className={clsx(style.col2, { [style.active]: resultActice })}>
          {obj.map((item, index) => (
            <div className={clsx(style.item, "ps-2")} key={index}>{item}</div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <footer className={clsx(style.footer)}>
      <div className={clsx(style.footerLg, "d-none d-md-block container")}>
        <div className={clsx("row d-none d-md-block d-lg-none")}>
          <div clasName={clsx("col")}>
            <div className={clsx(style.img)}>
              <img width="131" height="34" alt="" data-attachment-id="42594" data-permalink="https://shopdunk.com/?attachment_id=42594" data-orig-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" data-orig-size="131,34" data-comments-opened="1" data-image-meta="[]" data-image-title="Property 1=White_mobile" data-image-description="" data-image-caption="" data-medium-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" data-large-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-dc1b413/wp-content/uploads/2022/04/Property-1White_mobile.svg" class="attachment-full size-full inwp-attachment-image lazyloaded" nitro-lazy-empty="" id="MTgyMDo3Mjg=-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-dc1b413/wp-content/uploads/2022/04/Property-1White_mobile.svg" />
            </div>
            <div className={clsx(style.description)}>
              <p>Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</p>
            </div>
          </div>
          <div className={clsx(style.contact)}>
            <ul className={clsx("d-flex gap-2")}>
              <li className={clsx(style.item)}>
                <a href="https://www.facebook.com/shopdunk.store">
                  <span class="elementor-icon-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                      <path d="M26.397 33.9972V25.8012H29.162L29.573 22.5922H26.397V20.5482C26.397 19.6222 26.655 18.9882 27.984 18.9882H29.668V16.1272C28.8487 16.0394 28.0251 15.997 27.201 16.0002C24.757 16.0002 23.079 17.4922 23.079 20.2312V22.5862H20.332V25.7952H23.085V33.9972H26.397Z" fill="#2B6AB4"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text"></span>
                </a>
              </li>
              <li className={clsx(style.item)}>
                <a href="https://www.youtube.com/c/ShopDunkApple">
                  <span class="elementor-icon-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                      <path d="M35.52 20.3432C35.389 19.8894 35.1323 19.4756 34.7756 19.1432C34.4188 18.8108 33.9744 18.5714 33.4869 18.449C31.6926 18 24.5 18 24.5 18C24.5 18 17.3074 18 15.5131 18.4467C15.0254 18.5687 14.5808 18.8079 14.2239 19.1404C13.8671 19.4729 13.6105 19.8868 13.48 20.3408C13 22.0127 13 25.5 13 25.5C13 25.5 13 28.9873 13.48 30.6568C13.7444 31.5788 14.5248 32.3049 15.5131 32.551C17.3074 33 24.5 33 24.5 33C24.5 33 31.6926 33 33.4869 32.551C34.4778 32.3049 35.2556 31.5788 35.52 30.6568C36 28.9873 36 25.5 36 25.5C36 25.5 36 22.0127 35.52 20.3432ZM22.2154 28.7006V22.2994L28.1708 25.4761L22.2154 28.7006Z" fill="#CE2020"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text"></span>
                </a>
              </li>
              <li className={clsx(style.item)}>
                <a href="https://zalo.me/3937868610324741136">
                  <span class="elementor-icon-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                      <path d="M26.6125 22.2536V21.6686H28.2962V29.8872H27.3338C27.1432 29.8875 26.9603 29.8093 26.8251 29.6697C26.69 29.5301 26.6135 29.3404 26.6125 29.1423V29.1436C25.9097 29.6787 25.061 29.9665 24.19 29.9652C23.1017 29.9652 22.058 29.5158 21.2882 28.7157C20.5184 27.9156 20.0857 26.8304 20.085 25.6986C20.0857 24.5668 20.5184 23.4816 21.2882 22.6815C22.058 21.8814 23.1017 21.432 24.19 21.432C25.0606 21.431 25.9088 21.7188 26.6113 22.2536H26.6125V22.2536ZM19.6488 19.027V19.2935C19.6488 19.7901 19.585 20.1957 19.2737 20.6715L19.2363 20.7157C19.1326 20.8366 19.0317 20.9602 18.9338 21.0862L13.53 28.14H19.6488V29.1384C19.6488 29.2368 19.6301 29.3343 19.5938 29.4253C19.5576 29.5162 19.5044 29.5988 19.4374 29.6683C19.3704 29.7379 19.2909 29.793 19.2034 29.8306C19.1159 29.8681 19.0222 29.8874 18.9275 29.8872H11V29.4166C11 28.8407 11.1375 28.5833 11.3125 28.3155L17.0712 20.899H11.24V19.027H19.65H19.6488ZM30.3375 29.8872C30.1784 29.8872 30.0258 29.8215 29.9132 29.7044C29.8007 29.5874 29.7375 29.4287 29.7375 29.2632V19.027H31.5387V29.8872H30.3375V29.8872ZM36.8663 21.38C37.4089 21.3798 37.9463 21.4908 38.4478 21.7067C38.9492 21.9225 39.4049 22.2389 39.7887 22.6379C40.1726 23.0368 40.4771 23.5105 40.685 24.0319C40.8928 24.5533 40.9998 25.1121 41 25.6765C41.0002 26.2409 40.8934 26.7998 40.6859 27.3213C40.4784 27.8428 40.1741 28.3167 39.7905 28.7159C39.4069 29.1151 38.9514 29.4318 38.4501 29.648C37.9488 29.8641 37.4114 29.9754 36.8687 29.9756C35.7727 29.9759 34.7215 29.5235 33.9463 28.7177C33.171 27.912 32.7353 26.8189 32.735 25.6791C32.7347 24.5393 33.1697 23.446 33.9445 22.6397C34.7193 21.8335 35.7702 21.3803 36.8663 21.38V21.38ZM24.1913 28.2089C24.5129 28.2165 24.8328 28.1572 25.1322 28.0344C25.4315 27.9117 25.7042 27.7279 25.9343 27.494C26.1644 27.2601 26.3472 26.9807 26.4721 26.6723C26.5969 26.3638 26.6612 26.0326 26.6612 25.6979C26.6612 25.3633 26.5969 25.0321 26.4721 24.7236C26.3472 24.4152 26.1644 24.1358 25.9343 23.9019C25.7042 23.668 25.4315 23.4842 25.1322 23.3615C24.8328 23.2387 24.5129 23.1794 24.1913 23.187C23.5604 23.2019 22.9603 23.473 22.5192 23.9423C22.0781 24.4116 21.8312 25.0417 21.8312 25.6979C21.8312 26.3542 22.0781 26.9843 22.5192 27.4536C22.9603 27.9229 23.5604 28.194 24.1913 28.2089V28.2089ZM36.8663 28.205C37.5111 28.205 38.1295 27.9386 38.5854 27.4644C39.0414 26.9902 39.2975 26.3471 39.2975 25.6765C39.2975 25.0059 39.0414 24.3628 38.5854 23.8886C38.1295 23.4144 37.5111 23.148 36.8663 23.148C36.2214 23.148 35.603 23.4144 35.1471 23.8886C34.6911 24.3628 34.435 25.0059 34.435 25.6765C34.435 26.3471 34.6911 26.9902 35.1471 27.4644C35.603 27.9386 36.2214 28.205 36.8663 28.205V28.205Z" fill="#2288FF"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("row mb-3 ")}>
          <div className={clsx("col-3 d-md-none d-lg-block")}>
            <div className={clsx(style.img)}>
              <img width="131" height="34" alt="" data-attachment-id="42594" data-permalink="https://shopdunk.com/?attachment_id=42594" data-orig-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" data-orig-size="131,34" data-comments-opened="1" data-image-meta="[]" data-image-title="Property 1=White_mobile" data-image-description="" data-image-caption="" data-medium-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" data-large-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-dc1b413/wp-content/uploads/2022/04/Property-1White_mobile.svg" class="attachment-full size-full inwp-attachment-image lazyloaded" nitro-lazy-empty="" id="MTgyMDo3Mjg=-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-dc1b413/wp-content/uploads/2022/04/Property-1White_mobile.svg" />
            </div>
            <div className={clsx(style.description)}>
              <p>Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</p>
            </div>
            <div className={clsx(style.contact)}>
              <ul className={clsx("d-flex gap-2")}>
                <li className={clsx(style.item)}>
                  <a href="https://www.facebook.com/shopdunk.store">
                    <span class="elementor-icon-list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                        <path d="M26.397 33.9972V25.8012H29.162L29.573 22.5922H26.397V20.5482C26.397 19.6222 26.655 18.9882 27.984 18.9882H29.668V16.1272C28.8487 16.0394 28.0251 15.997 27.201 16.0002C24.757 16.0002 23.079 17.4922 23.079 20.2312V22.5862H20.332V25.7952H23.085V33.9972H26.397Z" fill="#2B6AB4"></path>
                      </svg>
                    </span>
                    <span class="elementor-icon-list-text"></span>
                  </a>
                </li>
                <li className={clsx(style.item)}>
                  <a href="https://www.youtube.com/c/ShopDunkApple">
                    <span class="elementor-icon-list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                        <path d="M35.52 20.3432C35.389 19.8894 35.1323 19.4756 34.7756 19.1432C34.4188 18.8108 33.9744 18.5714 33.4869 18.449C31.6926 18 24.5 18 24.5 18C24.5 18 17.3074 18 15.5131 18.4467C15.0254 18.5687 14.5808 18.8079 14.2239 19.1404C13.8671 19.4729 13.6105 19.8868 13.48 20.3408C13 22.0127 13 25.5 13 25.5C13 25.5 13 28.9873 13.48 30.6568C13.7444 31.5788 14.5248 32.3049 15.5131 32.551C17.3074 33 24.5 33 24.5 33C24.5 33 31.6926 33 33.4869 32.551C34.4778 32.3049 35.2556 31.5788 35.52 30.6568C36 28.9873 36 25.5 36 25.5C36 25.5 36 22.0127 35.52 20.3432ZM22.2154 28.7006V22.2994L28.1708 25.4761L22.2154 28.7006Z" fill="#CE2020"></path>
                      </svg>
                    </span>
                    <span class="elementor-icon-list-text"></span>
                  </a>
                </li>
                <li className={clsx(style.item)}>
                  <a href="https://zalo.me/3937868610324741136">
                    <span class="elementor-icon-list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                        <path d="M26.6125 22.2536V21.6686H28.2962V29.8872H27.3338C27.1432 29.8875 26.9603 29.8093 26.8251 29.6697C26.69 29.5301 26.6135 29.3404 26.6125 29.1423V29.1436C25.9097 29.6787 25.061 29.9665 24.19 29.9652C23.1017 29.9652 22.058 29.5158 21.2882 28.7157C20.5184 27.9156 20.0857 26.8304 20.085 25.6986C20.0857 24.5668 20.5184 23.4816 21.2882 22.6815C22.058 21.8814 23.1017 21.432 24.19 21.432C25.0606 21.431 25.9088 21.7188 26.6113 22.2536H26.6125V22.2536ZM19.6488 19.027V19.2935C19.6488 19.7901 19.585 20.1957 19.2737 20.6715L19.2363 20.7157C19.1326 20.8366 19.0317 20.9602 18.9338 21.0862L13.53 28.14H19.6488V29.1384C19.6488 29.2368 19.6301 29.3343 19.5938 29.4253C19.5576 29.5162 19.5044 29.5988 19.4374 29.6683C19.3704 29.7379 19.2909 29.793 19.2034 29.8306C19.1159 29.8681 19.0222 29.8874 18.9275 29.8872H11V29.4166C11 28.8407 11.1375 28.5833 11.3125 28.3155L17.0712 20.899H11.24V19.027H19.65H19.6488ZM30.3375 29.8872C30.1784 29.8872 30.0258 29.8215 29.9132 29.7044C29.8007 29.5874 29.7375 29.4287 29.7375 29.2632V19.027H31.5387V29.8872H30.3375V29.8872ZM36.8663 21.38C37.4089 21.3798 37.9463 21.4908 38.4478 21.7067C38.9492 21.9225 39.4049 22.2389 39.7887 22.6379C40.1726 23.0368 40.4771 23.5105 40.685 24.0319C40.8928 24.5533 40.9998 25.1121 41 25.6765C41.0002 26.2409 40.8934 26.7998 40.6859 27.3213C40.4784 27.8428 40.1741 28.3167 39.7905 28.7159C39.4069 29.1151 38.9514 29.4318 38.4501 29.648C37.9488 29.8641 37.4114 29.9754 36.8687 29.9756C35.7727 29.9759 34.7215 29.5235 33.9463 28.7177C33.171 27.912 32.7353 26.8189 32.735 25.6791C32.7347 24.5393 33.1697 23.446 33.9445 22.6397C34.7193 21.8335 35.7702 21.3803 36.8663 21.38V21.38ZM24.1913 28.2089C24.5129 28.2165 24.8328 28.1572 25.1322 28.0344C25.4315 27.9117 25.7042 27.7279 25.9343 27.494C26.1644 27.2601 26.3472 26.9807 26.4721 26.6723C26.5969 26.3638 26.6612 26.0326 26.6612 25.6979C26.6612 25.3633 26.5969 25.0321 26.4721 24.7236C26.3472 24.4152 26.1644 24.1358 25.9343 23.9019C25.7042 23.668 25.4315 23.4842 25.1322 23.3615C24.8328 23.2387 24.5129 23.1794 24.1913 23.187C23.5604 23.2019 22.9603 23.473 22.5192 23.9423C22.0781 24.4116 21.8312 25.0417 21.8312 25.6979C21.8312 26.3542 22.0781 26.9843 22.5192 27.4536C22.9603 27.9229 23.5604 28.194 24.1913 28.2089V28.2089ZM36.8663 28.205C37.5111 28.205 38.1295 27.9386 38.5854 27.4644C39.0414 26.9902 39.2975 26.3471 39.2975 25.6765C39.2975 25.0059 39.0414 24.3628 38.5854 23.8886C38.1295 23.4144 37.5111 23.148 36.8663 23.148C36.2214 23.148 35.603 23.4144 35.1471 23.8886C34.6911 24.3628 34.435 25.0059 34.435 25.6765C34.435 26.3471 34.6911 26.9902 35.1471 27.4644C35.603 27.9386 36.2214 28.205 36.8663 28.205V28.205Z" fill="#2288FF"></path>
                      </svg>
                    </span>
                    <span class="elementor-icon-list-text"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={clsx("col-2")}>
            {item("sản phẩm", ["iPhone", "iPad", "mac", "watch", "airPods", "phụ kiện", "dịch vụ"])}
          </div>
          <div className={clsx("col")}>
            {item("thông tin", ["giới thiệu", "khuyến mại", "bảo hành và sửa chữa", "tuyển dụng", "tin tức", "check IMEI", "phương thức thanh toán"])}
          </div>
          <div className={clsx("col")}>
            {item("chính sách", ["trả góp", "giao hàng", "giao hàng (Zalo Pay)", "hủy giao dịch", "đổi trả", "bảo hành", "giải quyết khiếu nại", "bảo mật thông tin"])}
          </div>
          <div className={clsx("col")}>
            {item("địa chỉ", ["tìm store trên Google Map", "hệ thống cửa hàng"])}
            <h1 className={clsx(style.heading, style.contact)}>liên hệ</h1>
            <ul className={clsx(style.list)}>
              <li className={clsx(style.item)}>
                <a>
                  mua hàng:
                  <span>1900.6626</span>
                </a>
              </li>
              <li className={clsx(style.item)}>
                <a>
                  khiếu nại:
                  <span>0886.308.688</span>
                </a>
              </li>
              <li className={clsx(style.item)}>
                <a>
                  danh nghiệp & Đối tác:
                  <span>0822.688.668</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("row")}>
          <div className={clsx(style.footerBottom, "d-flex mt-4 pt-2")}>
            <div className={clsx(style.b)}>
              <p>
                <span >© 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH &amp; ĐT TP. Hà Nội cấp ngày 08/06/2016. Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam <br /> Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com
                </span>
              </p>
            </div>
            <div className={clsx(style.bc)}>
              <a href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1">
                <img width="516" height="160" alt="" sizes="(max-width: 516px) 100vw, 516px" data-attachment-id="27620" data-permalink="https://shopdunk.com/bo-cong-thuong-1170x780-2" data-orig-file="https://shopdunk.com/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" data-orig-size="516,160" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="bo-cong-thuong-1170×780 2" data-image-description="" data-image-caption="" data-medium-file="https://shopdunk.com/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2-300x93.png" data-large-file="https://shopdunk.com/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" nitro-lazy-srcset="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png 516w, https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2-300x93.png 300w" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" class="attachment-full size-full inwp-attachment-image ls-is-cached lazyloaded" nitro-lazy-empty="" id="MjE1NjoxMzY3-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" srcset="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png 516w, https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2-300x93.png 300w" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(style.footerSm, "d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none container")}>
        <div className={clsx("row px-2")}>
          <div className={clsx("col")}>
            <div className={clsx(style.img, "ps-2")}>
              <img className={clsx(style.logo)} width="131" height="34" alt="" data-attachment-id="42594" data-permalink="https://shopdunk.com/?attachment_id=42594" data-orig-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" data-orig-size="131,34" data-comments-opened="1" data-image-meta="[]" data-image-title="Property 1=White_mobile" data-image-description="" data-image-caption="" data-medium-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" data-large-file="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-dc1b413/wp-content/uploads/2022/04/Property-1White_mobile.svg" class="attachment-full size-full inwp-attachment-image lazyloaded" nitro-lazy-empty="" id="MTgyMDo3Mjg=-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-dc1b413/wp-content/uploads/2022/04/Property-1White_mobile.svg" />
            </div>
            <div className={clsx(style.description, "ps-2")}>
              <p>Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</p>
            </div>

          </div>
        </div>
        <div className={clsx("row px-2")}>
          <div className={clsx("col")}>
            {item2("sản phẩm", ["iPhone", "iPad", "mac", "watch", "airPods", "phụ kiện", "dịch vụ"], 1, 0)}
          </div>
        </div>
        <div className={clsx("row px-2")}>
          <div className={clsx("col")}>
            {item2("thông tin", ["giới thiệu", "khuyến mại", "bảo hành và sửa chữa", "tuyển dụng", "tin tức", "check IMEI", "phương thức thanh toán"], 2, 1)}
          </div>
        </div>
        <div className={clsx("row px-2")}>
          <div className={clsx("col")}>
            {item2("chính sách", ["trả góp", "giao hàng", "giao hàng (ZaloPay)", "hủy giao dịch", "đổi trả", "bảo hành", "giải quyết khiếu nại", "bảo mật thông tin"], 3, 2)}
          </div>
        </div>
        <div className={clsx("row px-2")}>
          <div className={clsx("col")}>
            {item2("địa chỉ", ["tìm store trên Google Map", "hệ thống cửa hàng"], 4, 3)}
          </div>
        </div>
        <div className={clsx("row px-2")}>
          <div className={clsx("col")}>
            {item2("liên hệ", ["mua hàng: 1900.6626", "khiếu nại: 0886.308.688", "doanh nghiệp & Đối tác: 0822.688.668"], 5, 4)}
          </div>
        </div>
        <div className={clsx(style.contact, "row align-items-center m-0 p-0")}>
          <div className={clsx("col")}>
            <a href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1"> <img width="516" height="160" alt="" sizes="(max-width: 516px) 100vw, 516px" data-attachment-id="27620" data-permalink="https://shopdunk.com/bo-cong-thuong-1170x780-2" data-orig-file="https://shopdunk.com/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" data-orig-size="516,160" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="bo-cong-thuong-1170×780 2" data-image-description="" data-image-caption="" data-medium-file="https://shopdunk.com/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2-300x93.png" data-large-file="https://shopdunk.com/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" nitro-lazy-srcset="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png 516w, https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2-300x93.png 300w" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" class="attachment-full size-full inwp-attachment-image lazyloaded" nitro-lazy-empty="" id="MjE2MzoxMzY3-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png" srcset="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png 516w, https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2-300x93.png 300w" /> </a>
          </div>
          <div className={clsx("col")}>
            <ul className={clsx("d-flex gap-2 ps-2")}>
              <li className={clsx(style.item)}>
                <a href="https://www.facebook.com/shopdunk.store">
                  <span class="elementor-icon-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                      <path d="M26.397 33.9972V25.8012H29.162L29.573 22.5922H26.397V20.5482C26.397 19.6222 26.655 18.9882 27.984 18.9882H29.668V16.1272C28.8487 16.0394 28.0251 15.997 27.201 16.0002C24.757 16.0002 23.079 17.4922 23.079 20.2312V22.5862H20.332V25.7952H23.085V33.9972H26.397Z" fill="#2B6AB4"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text"></span>
                </a>
              </li>
              <li className={clsx(style.item)}>
                <a href="https://www.youtube.com/c/ShopDunkApple">
                  <span class="elementor-icon-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                      <path d="M35.52 20.3432C35.389 19.8894 35.1323 19.4756 34.7756 19.1432C34.4188 18.8108 33.9744 18.5714 33.4869 18.449C31.6926 18 24.5 18 24.5 18C24.5 18 17.3074 18 15.5131 18.4467C15.0254 18.5687 14.5808 18.8079 14.2239 19.1404C13.8671 19.4729 13.6105 19.8868 13.48 20.3408C13 22.0127 13 25.5 13 25.5C13 25.5 13 28.9873 13.48 30.6568C13.7444 31.5788 14.5248 32.3049 15.5131 32.551C17.3074 33 24.5 33 24.5 33C24.5 33 31.6926 33 33.4869 32.551C34.4778 32.3049 35.2556 31.5788 35.52 30.6568C36 28.9873 36 25.5 36 25.5C36 25.5 36 22.0127 35.52 20.3432ZM22.2154 28.7006V22.2994L28.1708 25.4761L22.2154 28.7006Z" fill="#CE2020"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text"></span>
                </a>
              </li>
              <li className={clsx(style.item)}>
                <a href="https://zalo.me/3937868610324741136">
                  <span class="elementor-icon-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="24" stroke="#515154" stroke-width="2"></circle>
                      <path d="M26.6125 22.2536V21.6686H28.2962V29.8872H27.3338C27.1432 29.8875 26.9603 29.8093 26.8251 29.6697C26.69 29.5301 26.6135 29.3404 26.6125 29.1423V29.1436C25.9097 29.6787 25.061 29.9665 24.19 29.9652C23.1017 29.9652 22.058 29.5158 21.2882 28.7157C20.5184 27.9156 20.0857 26.8304 20.085 25.6986C20.0857 24.5668 20.5184 23.4816 21.2882 22.6815C22.058 21.8814 23.1017 21.432 24.19 21.432C25.0606 21.431 25.9088 21.7188 26.6113 22.2536H26.6125V22.2536ZM19.6488 19.027V19.2935C19.6488 19.7901 19.585 20.1957 19.2737 20.6715L19.2363 20.7157C19.1326 20.8366 19.0317 20.9602 18.9338 21.0862L13.53 28.14H19.6488V29.1384C19.6488 29.2368 19.6301 29.3343 19.5938 29.4253C19.5576 29.5162 19.5044 29.5988 19.4374 29.6683C19.3704 29.7379 19.2909 29.793 19.2034 29.8306C19.1159 29.8681 19.0222 29.8874 18.9275 29.8872H11V29.4166C11 28.8407 11.1375 28.5833 11.3125 28.3155L17.0712 20.899H11.24V19.027H19.65H19.6488ZM30.3375 29.8872C30.1784 29.8872 30.0258 29.8215 29.9132 29.7044C29.8007 29.5874 29.7375 29.4287 29.7375 29.2632V19.027H31.5387V29.8872H30.3375V29.8872ZM36.8663 21.38C37.4089 21.3798 37.9463 21.4908 38.4478 21.7067C38.9492 21.9225 39.4049 22.2389 39.7887 22.6379C40.1726 23.0368 40.4771 23.5105 40.685 24.0319C40.8928 24.5533 40.9998 25.1121 41 25.6765C41.0002 26.2409 40.8934 26.7998 40.6859 27.3213C40.4784 27.8428 40.1741 28.3167 39.7905 28.7159C39.4069 29.1151 38.9514 29.4318 38.4501 29.648C37.9488 29.8641 37.4114 29.9754 36.8687 29.9756C35.7727 29.9759 34.7215 29.5235 33.9463 28.7177C33.171 27.912 32.7353 26.8189 32.735 25.6791C32.7347 24.5393 33.1697 23.446 33.9445 22.6397C34.7193 21.8335 35.7702 21.3803 36.8663 21.38V21.38ZM24.1913 28.2089C24.5129 28.2165 24.8328 28.1572 25.1322 28.0344C25.4315 27.9117 25.7042 27.7279 25.9343 27.494C26.1644 27.2601 26.3472 26.9807 26.4721 26.6723C26.5969 26.3638 26.6612 26.0326 26.6612 25.6979C26.6612 25.3633 26.5969 25.0321 26.4721 24.7236C26.3472 24.4152 26.1644 24.1358 25.9343 23.9019C25.7042 23.668 25.4315 23.4842 25.1322 23.3615C24.8328 23.2387 24.5129 23.1794 24.1913 23.187C23.5604 23.2019 22.9603 23.473 22.5192 23.9423C22.0781 24.4116 21.8312 25.0417 21.8312 25.6979C21.8312 26.3542 22.0781 26.9843 22.5192 27.4536C22.9603 27.9229 23.5604 28.194 24.1913 28.2089V28.2089ZM36.8663 28.205C37.5111 28.205 38.1295 27.9386 38.5854 27.4644C39.0414 26.9902 39.2975 26.3471 39.2975 25.6765C39.2975 25.0059 39.0414 24.3628 38.5854 23.8886C38.1295 23.4144 37.5111 23.148 36.8663 23.148C36.2214 23.148 35.603 23.4144 35.1471 23.8886C34.6911 24.3628 34.435 25.0059 34.435 25.6765C34.435 26.3471 34.6911 26.9902 35.1471 27.4644C35.603 27.9386 36.2214 28.205 36.8663 28.205V28.205Z" fill="#2288FF"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text"></span>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className={clsx(style.footerBottom, "row")}>
          <p>
            <span >© 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH &amp; ĐT TP. Hà Nội cấp ngày 08/06/2016. Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam <br /> Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)

