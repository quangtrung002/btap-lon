import React, { memo } from 'react'
import clsx from 'clsx'
import style from "./home.module.scss"

function Home() {

  return (
    <div className={clsx(style.home, "py-3")}>
      <h1 className={clsx(style.heading, " mb-5 fs-1 text-center fw-bold text-uppercase")}>thống kê</h1>
      <div className={clsx("mb-4")}>
        
      </div>
    </div>
  )
}

export default memo(Home)
