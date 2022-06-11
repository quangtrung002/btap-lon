import React, { memo } from 'react'

import clsx from 'clsx'
import style from "../itemDes.module.scss"

function Image({srcImg}) {
  return (
    <div className={clsx("col-md-12 col-lg-6 position-relative")}>
      <img
        className={clsx(style.img)}
        src={srcImg}
        alt="ảnh lỗi"
      />
    </div>
  )
}

export default memo(Image)