import clsx from 'clsx'
import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../../data'
import style from "./navbar.module.scss"

function Navbar() {
  const [amount, setAmount] = useState(0)
  const [active, setActive] = useState(0)
  const [toggleList, setToggleList] = useState(false)
  const dataContact = [
    {
      name: "mua hàng:",
      number: "1900.6626"
    },
    {
      name: "khiếu nại:",
      number: "0886.308.688"
    },
    {
      name: "doanh nghiệp & đối tác:",
      number: "0822.688.668"
    }
  ]
  return (
    <>
      <header className={clsx(style.mainLg, 'd-none d-lg-block')}>
        <div className={clsx(style.wrap)}>
          <div className={clsx(style.container, "container")}>
            <div className={clsx(style.row)}>
              <div className='d-lg-block d-xl-none  text-center'>
                <Link to="/" className={clsx(style.imgLogoTop, "d-flex align-items-center justify-content-start py-1")} onClick={() => setActive(0)}>
                  <img alt="ShopDunk - Đại lý uỷ quyền Apple" width="131" height="34" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/Property-1White_mobile.svg" class="jet-logo__img ls-is-cached lazyloaded" nitro-lazy-empty="" id="NDQ1OjIzNA==-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/Property-1White_mobile.svg" />
                </Link>
              </div>
              <nav className={clsx(style.nav, "d-flex align-items-center gap-2")}>
                <div className={clsx(style.home, "d-lg-none d-xl-block")}>
                  <Link to="/" className={clsx(style.imgLogo, "d-flex align-items-center")} onClick={() => setActive(0)}>
                    <img alt="ShopDunk - Đại lý uỷ quyền Apple" width="131" height="34" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/Property-1White_mobile.svg" class="jet-logo__img ls-is-cached lazyloaded" nitro-lazy-empty="" id="NDQ1OjIzNA==-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/Property-1White_mobile.svg" />
                  </Link>
                </div>
                <div className={clsx(style.page)}>
                  <ul className={clsx(style.navList, "d-flex")}>
                    {navbar.map(item => (
                      <li className={clsx(style.navItem, "flex-fill d-flex justify-content-center align-items-center", { [style.active]: active === item.id })} key={item.id} onClick={() => setActive(item.id)}>
                        <Link to={item.path} className={clsx(style.navLink, "nav-link active ")} aria-current="page" href="#">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={clsx("d-flex align-items-center")}>
                  <a class="m-0" href="#">
                    <i className={clsx(style.iconSearch, "bi bi-search")}></i>
                  </a>
                  <a className={clsx(style.bag, "m-0")} href="#">
                    <i className={clsx(style.iconBag, "bi bi-bag")}></i>
                    <span className={clsx(style.amount)}>{amount}</span>
                  </a>
                </div>
              </nav>
            </div>

          </div>
        </div>
      </header>
      <header className={clsx(style.mainMd, "d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none")}>
        <div className={clsx(style.logo)}>
          <div className={clsx("container")}>
            <div className={clsx("row")}>
              <nav className={clsx('col-12')}>
                <div className={clsx("d-flex justify-content-between align-items-center py-2")}>
                  <section className={clsx(style.iconList)} >
                    <span onClick={() => setToggleList(!toggleList)}><i class="bi bi-list text-light fs-4"></i></span>
                    <div className={clsx(style.formList, "d-none", { [style.toggleList]: toggleList })}>
                      <div className={clsx(style.list)}>
                        <span className={clsx(style.btnToggleList, "d-flex justify-content-end align-items-center pb-1")}>
                          <i class="bi bi-x-lg" onClick={() => setToggleList(!toggleList)}></i>
                        </span>
                        <div className={clsx(style.formInput, "input-group flex-nowrap")}>
                          <span class="input-group-text" id="addon-wrapping">
                            <i class="bi bi-search"></i>
                          </span>
                          <input type="text" class="form-control" placeholder="tìm kiếm sản phẩm" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className={clsx(style.service, "d-flex flex-column")}>
                          {['dịch vụ', 'khuyến mại', 'trả góp', 'hệ thống cửa hàng'].map((item, index) => (
                            <h2 key={index}>
                              <a>{item}</a>
                            </h2>
                          ))}
                        </div>
                        <div className={clsx(style.contact)}>
                          <h3>liên hệ</h3>
                          <ul>
                            {dataContact.map((item, index) => (
                              <li className='d-flex' key={index}>
                                <p>{item.name}</p>
                                <span>{item.number}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className=''>
                    <Link to="/" onClick={() => setActive(0)}>
                      <img alt="ShopDunk - Đại lý uỷ quyền Apple" width="131" height="34" nitro-lazy-src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/Property-1White_mobile.svg" class="jet-logo__img lazyloaded" nitro-lazy-empty="" id="NDI4OjIzNA==-1" src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-ed43433/wp-content/uploads/2022/04/Property-1White_mobile.svg" />
                    </Link>
                  </div>
                  <a className='position-relative'>
                    <i class="bi bi-bag text-light fs-5"></i>
                    <span className={clsx(style.amount, "text-dark")}>{amount}</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className={clsx(style.page)}>
          <div className={clsx("container")}>
            <div className={clsx("row")}>
              <nav className={clsx('col-12')}>
                <ul className={clsx(style.list, "d-flex justify-content-between")}>
                  {Array.from({ length: 6 }).map((item, index) => (
                    <li className={clsx(style.item, "d-flex align-items-center")} key={index}>
                      <Link className={clsx(style.itemLink, { [style.active]: active === navbar[index].id })} to={navbar[index].path} key={index} onClick={() => setActive(navbar[index].id)}>{navbar[index].name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default memo(Navbar)
