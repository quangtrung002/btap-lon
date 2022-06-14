import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Mac() {
  const allitem = ["Tất cả", 'MacBook Pro', 'MacBook Air', 'iMac', 'Mac mini',  'Hàng sắp về']
  
  return (
    <>
      <PageItem  
        heading = "Mac"
        pathImg = "https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg"
        allitem={allitem}
        posts = {data.mac}
      />
    </>
  )
}
