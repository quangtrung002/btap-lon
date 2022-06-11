import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Iphone() {
  const allitem = ["tat ca", '3', '4']
  
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
