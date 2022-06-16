import React from 'react'

import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Ipad() {
  const allitem = ["Tất cả", 'iPad Pro', 'iPad Air','iPad 9','iPad Mini']
  return (
    <>
      <PageItem  
        heading = "ipad"
        pathImg = "https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/Danh-muc-PC-3-1.jpg"
        allitem={allitem}
        posts = {data.ipad}
      />
    </>
  )
}
