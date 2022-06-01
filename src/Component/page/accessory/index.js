import React, { memo, useState } from 'react'
import { data } from '../../../data'

import style from "./accessory.module.scss"
import clsx from 'clsx'

function Accessory() {
  const [accessory, setAccessory] = useState(data.accessory)
  console.log(accessory)
  return (
    <main className={clsx(style.main)}>

    </main>
  )
}

export default memo(Accessory)
