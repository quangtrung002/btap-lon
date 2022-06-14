import React from 'react'

import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Ipad() {
  const allitem = ["Tất cả", 'iPad Pro', 'iPad Air','iPad 9','iPad Mini']
  return (
    <>
      <PageItem  
        heading = "ipad"
        pathImg = "src"
        allitem={allitem}
        posts = {data.ipad}
      />
    </>
  )
}
