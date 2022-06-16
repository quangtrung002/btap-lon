import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Mac() {
  const allitem = ["Tất cả", 'MacBook Pro', 'MacBook Air', 'iMac', 'Mac mini',  'Hàng sắp về']
  
  return (
    <>
      <PageItem  
        heading = "Mac"
        pathImg = "https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/Banner-ThuBaoSuong-Moca.jpg"
        allitem={allitem}
        posts = {data.mac}
      />
    </>
  )
}
