import React, { memo, useState } from 'react'

import clsx from 'clsx'
import style from "../checkout.module.scss"

function ThanhToan({ setCarts, setAmountItems }) {
  const [checked, setChecked] = useState(0)
  return (
    <div className={clsx(style.thanhToan, "py-4 px-5 mt-3")} id="thanhtoan">
      <h1 className={clsx(style.firstLetter, style.title, " fw-bold mb-2")}>chọn hình thức thanh toán</h1>
      <>
        {
          [" Thanh toán khi nhận hàng", "Chuyển khoản ngân hàng", "ATM Nội địa/Internet Banking", "Thẻ quốc tế", "Thanh toán qua ví Moca", " ZaloPay Gateway (e-Wallet)", " Ví MoMo"].map((item, index) => (
            <div class="form-check p-0 my-1 d-flex align-items-center gap-2" key={index}>
              <input
                class="form-check-input m-0"
                type="radio" name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {item}
              </label>
            </div>
          ))
        }
      </>
      <div class="form-check p-0 my-1 d-flex align-items-center gap-2">
        <input class="form-check-input m-0" type="checkbox" value="" id="flexCheckChecked" />
        <label class="form-check-label" for="flexCheckChecked">
          Tôi đã đọc và đồng ý với <span>điều khoản và điều kiện</span> của website
        </label>
      </div>
      <button
        className={clsx(style.btnThanhToan, "text-uppercase fw-bold fs-5 py-2 my-2 text-light btn")}
        onClick={() => {
          alert("Đặt hàng thành công")
          setCarts([])
          setAmountItems(0)
        }}
      >đặt hàng
      </button>
    </div>
  )
}

export default memo(ThanhToan)
