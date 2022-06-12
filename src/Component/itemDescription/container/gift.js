import React, { memo } from 'react'

import clsx from 'clsx'
import style from "../itemDes.module.scss"

function Gift() {

  const inforGift = [
    "tặng Voucher 1.000.000đ thu cũ đổi mới",
    "giảm 5% tối đa 400.000đ khi thanh toán qua ví MOCA trên ứng dụng Grab khách hàng áp mã khi thanh toán: SHOPDUNK",
    "tặng 200.000đ khi mua kèm ốp chính hãng Apple",
    "trả góp 0% qua thẻ tín dụng",
    "tặng SIM MobiFone miễn phí 2GB/ngày truy cập Internet (Áp dụng khi mua trực tiếp tại các cửa hàng Hồ Chí Minh – Số lượng có hạn)",
    "miễn phí dịch vụ thẩm định iOS tại ShopDunk Care – Trung tâm dịch vụ uỷ quyền Apple"
  ]
  return (
    <div className={clsx(style.gift, "round-3 bg-light px-3 py-2 mt-4")}>
      <div className='d-flex align-items-center gap-2 border-bottom pb-2'>
        <span>
          <i class="bi bi-gift fs-3"></i>
        </span>
        <label className={clsx("fs-6")}>Thông tin khuyến mại</label>
      </div>
      <div>
        <ul className={clsx(style.listInfor)}>
          {inforGift.map((item, index) => (
            <li
              className={clsx(style.itemInfor, style.firstLetter)}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(Gift)
