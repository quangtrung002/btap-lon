import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Iphone() {
  const allitem = ["Tất cả", 'iPhone 13', 'iPhone 12','iPhone 11','iPhone SE']
  
  return (
    <>
      <PageItem  
        heading = "iPhone"
        pathImg = "https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg"
        allitem={allitem}
        posts = {data.iphone}
      />
    </>
  )
}
